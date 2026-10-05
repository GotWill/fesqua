/*
 * Motor do visualizador da planta (usado só pela página /planta-da-feira).
 *
 * Desenha o PDF com o pdf.js em DUAS camadas:
 *   - base:  a página inteira, em baixa resolução, uma única vez;
 *   - nítida: só a região visível, na escala atual, refeita quando o movimento para.
 * Assim a planta continua vetorial (nítida em qualquer zoom) sem pesar no navegador.
 *
 * IMPORTANTE: o pdf.js tem que ficar na versão exata 4.10.38 e usar a build "legacy".
 * As versões 5 e 6 usam um recurso de JavaScript (Map.getOrInsertComputed) que a maioria dos navegadores ainda não tem.
 */
import workerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const norm = (s) =>
	s
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();

/** Abre o PDF e devolve a página 1. A biblioteca só é baixada quando esta função roda (import dinâmico). */
export async function loadPdf(url) {
	const pdfjs = await import('pdfjs-dist/legacy/build/pdf.min.mjs');
	pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
	const doc = await pdfjs.getDocument({ url, isEvalSupported: false }).promise;
	return doc.getPage(1);
}

export function createViewer(root, page, o = {}) {
	const inset = Object.assign({ l: 0, t: 0, r: 0, b: 0 }, o.inset);
	const pad = o.pad ?? 32,
		maxS = o.maxScale ?? 6;
	const coop = !!o.coop,
		RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
	const [vx0, vy0, vx1, vy1] = page.view,
		PW = vx1 - vx0,
		PH = vy1 - vy0;
	const BS = 0.5; // pontos -> pixels da camada de base

	root.classList.add('pv');
	root.tabIndex = 0;
	if (coop) root.dataset.coop = '';
	const stage = document.createElement('div');
	stage.className = 'pv-stage';
	const base = document.createElement('canvas');
	base.className = 'pv-base';
	base.width = Math.round(PW * BS);
	base.height = Math.round(PH * BS);
	stage.style.width = base.width + 'px';
	stage.style.height = base.height + 'px';
	stage.appendChild(base);
	const sharp = document.createElement('canvas');
	sharp.className = 'pv-sharp';
	root.prepend(sharp);
	root.prepend(stage);
	const kx = base.width / PW;

	const st = { s: 1, tx: 0, ty: 0 };
	const api = { st, PW, PH, root, base, inset, ready: false, sharpDone: false, touched: false, norm };
	const subs = [];
	api.onChange = (f) => subs.push(f);
	const hintSubs = [];
	api.onHint = (f) => hintSubs.push(f);
	const hint = (k) => hintSubs.forEach((f) => f(k));
	// modo cooperativo: a planta só captura a roda/o toque quando ativada (ou em tela cheia); senão a página rola normalmente
	const active = () => !coop || root.classList.contains('is-active') || document.fullscreenElement === root;
	let sharpInfo = null,
		rtoken = 0,
		rtask = null,
		rtimer = 0,
		anim = 0;

	const vw = () => root.clientWidth - inset.l - inset.r,
		vh = () => root.clientHeight - inset.t - inset.b;
	const fitScale = () => Math.min((vw() - 2 * pad) / PW, (vh() - 2 * pad) / PH);
	const minS = () => fitScale() * 0.85;
	api.fitScale = fitScale;

	function clampState() {
		st.s = clamp(st.s, minS(), maxS);
		const pw = PW * st.s,
			ph = PH * st.s,
			m = 60;
		st.tx = pw + 2 * m <= vw() ? inset.l + (vw() - pw) / 2 : clamp(st.tx, inset.l + vw() - m - pw, inset.l + m);
		st.ty = ph + 2 * m <= vh() ? inset.t + (vh() - ph) / 2 : clamp(st.ty, inset.t + vh() - m - ph, inset.t + m);
	}
	function transforms() {
		stage.style.transform = `translate(${st.tx}px,${st.ty}px) scale(${st.s / kx})`;
		if (sharpInfo) {
			const k = st.s / sharpInfo.s;
			sharp.style.transform = `translate(${st.tx - k * sharpInfo.tx}px,${st.ty - k * sharpInfo.ty}px) scale(${k})`;
		}
	}
	function apply() {
		clampState();
		transforms();
		subs.forEach((f) => f(api));
		clearTimeout(rtimer);
		rtimer = setTimeout(renderSharp, 150);
	}

	/* ---------- camada nítida: só a região visível, na escala atual ---------- */
	async function renderSharp() {
		if (!api.ready) return;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		if (st.s * dpr <= kx * 1.02) {
			sharp.style.display = 'none';
			sharpInfo = null;
			return;
		}
		const p = { s: st.s, tx: st.tx, ty: st.ty },
			token = ++rtoken;
		if (rtask) rtask.cancel();
		const cw = root.clientWidth,
			ch = root.clientHeight;
		const off = document.createElement('canvas');
		off.width = Math.round(cw * dpr);
		off.height = Math.round(ch * dpr);
		const ctx = off.getContext('2d');
		// a folha é branca e opaca; fora dela fica transparente (a mesa aparece)
		ctx.fillStyle = '#fff';
		ctx.fillRect(p.tx * dpr, p.ty * dpr, PW * p.s * dpr, PH * p.s * dpr);
		ctx.beginPath();
		ctx.rect(p.tx * dpr, p.ty * dpr, PW * p.s * dpr, PH * p.s * dpr);
		ctx.clip();
		rtask = page.render({ canvasContext: ctx, viewport: page.getViewport({ scale: p.s * dpr, offsetX: p.tx * dpr, offsetY: p.ty * dpr }) });
		try {
			await rtask.promise;
		} catch (e) {
			if (e && e.name === 'RenderingCancelledException') return;
			console.error(e);
			return;
		}
		if (token !== rtoken) return;
		sharp.width = off.width;
		sharp.height = off.height;
		sharp.style.width = cw + 'px';
		sharp.style.height = ch + 'px';
		sharp.getContext('2d').drawImage(off, 0, 0);
		sharpInfo = p;
		sharp.style.display = 'block';
		api.sharpDone = true;
		api.sharpScale = p.s;
		transforms();
	}

	/* ---------- camada de base: página inteira, uma vez ---------- */
	async function renderBase() {
		const c = document.createElement('canvas');
		c.width = base.width;
		c.height = base.height;
		const x = c.getContext('2d');
		x.fillStyle = '#fff';
		x.fillRect(0, 0, c.width, c.height);
		await page.render({ canvasContext: x, viewport: page.getViewport({ scale: kx }) }).promise;
		base.getContext('2d').drawImage(c, 0, 0);
		api.ready = true;
		root.classList.add('is-ready');
		subs.forEach((f) => f(api));
		renderSharp();
	}

	/* ---------- movimentos ---------- */
	const stopAnim = () => {
		cancelAnimationFrame(anim);
		anim = 0;
	};
	const center = () => ({ x: (inset.l + vw() / 2 - st.tx) / st.s, y: (inset.t + vh() / 2 - st.ty) / st.s });
	api.center = center;
	api.zoomAt = (f, cx, cy) => {
		const ns = clamp(st.s * f, minS(), maxS),
			r = ns / st.s;
		st.tx = cx - (cx - st.tx) * r;
		st.ty = cy - (cy - st.ty) * r;
		st.s = ns;
		apply();
	};
	api.zoomBy = (f) => {
		api.touched = true;
		stopAnim();
		api.zoomAt(f, inset.l + vw() / 2, inset.t + vh() / 2);
	};
	api.panBy = (dx, dy) => {
		api.touched = true;
		stopAnim();
		st.tx += dx;
		st.ty += dy;
		apply();
	};
	api.flyTo = (t, ms = 900) => {
		api.touched = true;
		stopAnim();
		if (RM) ms = 0;
		const s0 = st.s,
			c0 = center(),
			s1 = clamp(t.s ?? st.s, minS(), maxS),
			t0 = performance.now();
		if (!ms) {
			st.s = s1;
			st.tx = inset.l + vw() / 2 - t.x * s1;
			st.ty = inset.t + vh() / 2 - t.y * s1;
			apply();
			return;
		}
		const step = (now) => {
			const p = Math.min(1, (now - t0) / ms),
				e = ease(p),
				s = s0 * Math.pow(s1 / s0, e);
			const cx = c0.x + (t.x - c0.x) * e,
				cy = c0.y + (t.y - c0.y) * e;
			st.s = s;
			st.tx = inset.l + vw() / 2 - cx * s;
			st.ty = inset.t + vh() / 2 - cy * s;
			apply();
			anim = p < 1 ? requestAnimationFrame(step) : 0;
		};
		anim = requestAnimationFrame(step);
	};
	api.fit = (ms = 500) => {
		api.flyTo({ x: PW / 2, y: PH / 2, s: fitScale() }, ms);
		api.touched = false;
	};
	api.toScreen = (x, y) => ({ x: st.tx + x * st.s, y: st.ty + y * st.s });
	api.toPage = (x, y) => ({ x: (x - st.tx) / st.s, y: (y - st.ty) / st.s });
	api.setCenter = (x, y) => {
		api.touched = true;
		stopAnim();
		st.tx = inset.l + vw() / 2 - x * st.s;
		st.ty = inset.t + vh() / 2 - y * st.s;
		apply();
	};

	/* ---------- gestos: arrastar, pinçar, roda, duplo clique, teclado ---------- */
	let tap = null;
	const ptrs = new Map();
	let pinch = null,
		vel = { x: 0, y: 0 },
		lastMove = 0,
		inertia = 0,
		lastTap = { t: 0, x: 0, y: 0 };
	const local = (e) => {
		const r = root.getBoundingClientRect();
		return { x: e.clientX - r.left, y: e.clientY - r.top };
	};
	root.addEventListener('pointerdown', (e) => {
		if (e.target.closest('[data-pv-ui]') || (e.pointerType === 'mouse' && e.button !== 0)) return;
		if (e.pointerType === 'touch' && !active()) {
			tap = { x: e.clientX, y: e.clientY, t: performance.now() };
			return;
		}
		root.setPointerCapture(e.pointerId);
		ptrs.set(e.pointerId, local(e));
		api.touched = true;
		stopAnim();
		cancelAnimationFrame(inertia);
		root.classList.add('is-grabbing');
		vel = { x: 0, y: 0 };
		if (ptrs.size === 2) {
			const [a, b] = [...ptrs.values()];
			pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
		}
	});
	root.addEventListener('pointermove', (e) => {
		if (!ptrs.has(e.pointerId)) return;
		const p = local(e),
			prev = ptrs.get(e.pointerId);
		ptrs.set(e.pointerId, p);
		if (ptrs.size === 1) {
			const dx = p.x - prev.x,
				dy = p.y - prev.y,
				now = performance.now(),
				dt = Math.max(1, now - lastMove);
			lastMove = now;
			vel = { x: dx / dt, y: dy / dt };
			st.tx += dx;
			st.ty += dy;
			apply();
		} else if (ptrs.size === 2 && pinch) {
			const [a, b] = [...ptrs.values()],
				d = Math.hypot(a.x - b.x, a.y - b.y),
				mx = (a.x + b.x) / 2,
				my = (a.y + b.y) / 2;
			api.zoomAt(clamp(d / pinch.d, 0.5, 2), mx, my); // aproxima/afasta em torno do ponto entre os dedos
			st.tx += mx - pinch.mx;
			st.ty += my - pinch.my;
			apply(); // e acompanha o deslocamento dos dedos
			pinch = { d, mx, my };
		}
	});
	const end = (e) => {
		if (!ptrs.has(e.pointerId)) return;
		const p = ptrs.get(e.pointerId);
		ptrs.delete(e.pointerId);
		if (ptrs.size < 2) pinch = null;
		if (ptrs.size === 0) {
			root.classList.remove('is-grabbing');
			const now = performance.now();
			if (e.pointerType === 'touch' && Math.hypot(vel.x, vel.y) < 0.05) {
				// toque duplo
				if (now - lastTap.t < 320 && Math.hypot(p.x - lastTap.x, p.y - lastTap.y) < 30) {
					api.zoomAt(st.s < fitScale() * 3 ? 2.2 : 0.4, p.x, p.y);
					lastTap.t = 0;
				} else lastTap = { t: now, x: p.x, y: p.y };
			}
			if (!RM && now - lastMove < 60 && Math.hypot(vel.x, vel.y) > 0.15) {
				// inércia
				const run = () => {
					vel.x *= 0.93;
					vel.y *= 0.93;
					if (Math.hypot(vel.x, vel.y) < 0.02) return;
					st.tx += vel.x * 16;
					st.ty += vel.y * 16;
					apply();
					inertia = requestAnimationFrame(run);
				};
				inertia = requestAnimationFrame(run);
			}
		}
	};
	root.addEventListener('pointerup', (e) => {
		if (tap && e.pointerType === 'touch' && !ptrs.has(e.pointerId)) {
			if (Math.hypot(e.clientX - tap.x, e.clientY - tap.y) < 12 && performance.now() - tap.t < 450) {
				root.classList.add('is-active');
				hint('active');
			}
			tap = null;
		}
	});
	root.addEventListener('pointercancel', () => {
		tap = null;
	});
	document.addEventListener('pointerdown', (e) => {
		if (coop && root.classList.contains('is-active') && !root.contains(e.target)) {
			root.classList.remove('is-active');
			hint('inactive');
		}
	});
	root.addEventListener('pointerup', end);
	root.addEventListener('pointercancel', end);
	root.addEventListener('dblclick', (e) => {
		if (e.target.closest('[data-pv-ui]')) return;
		const p = local(e);
		api.touched = true;
		stopAnim();
		api.zoomAt(st.s < fitScale() * 3 ? 2.2 : 0.4, p.x, p.y);
	});
	root.addEventListener(
		'wheel',
		(e) => {
			if (e.target.closest('[data-pv-ui]')) return;
			if (!active() && !(e.ctrlKey || e.metaKey)) {
				hint('ctrl');
				return;
			} // deixa a página rolar
			e.preventDefault();
			api.touched = true;
			stopAnim();
			cancelAnimationFrame(inertia);
			const p = local(e);
			let dx = e.deltaX,
				dy = e.deltaY;
			if (e.deltaMode === 1) {
				dx *= 16;
				dy *= 16;
			} else if (e.deltaMode === 2) {
				dx *= 400;
				dy *= 400;
			}
			// roda de mouse (passos inteiros, sem deslocamento lateral) amplia; trackpad (valores contínuos) move; pinça (ctrl) amplia
			const mouseLike = e.deltaMode !== 0 || (dx === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 50);
			// pinça de trackpad (ctrl + valores pequenos) usa fator maior; roda de mouse (valores de 100+), com ou sem Ctrl, usa fator menor
			if (e.ctrlKey || e.metaKey || mouseLike) api.zoomAt(Math.exp(-dy * (mouseLike ? 0.0015 : 0.01)), p.x, p.y);
			else {
				st.tx -= dx;
				st.ty -= dy;
				apply();
			}
		},
		{ passive: false },
	);
	root.addEventListener('keydown', (e) => {
		if (e.target !== root) return;
		const k = e.key,
			step = e.shiftKey ? 240 : 80;
		let h = true;
		if (k === 'ArrowLeft') api.panBy(step, 0);
		else if (k === 'ArrowRight') api.panBy(-step, 0);
		else if (k === 'ArrowUp') api.panBy(0, step);
		else if (k === 'ArrowDown') api.panBy(0, -step);
		else if (k === '+' || k === '=') api.zoomBy(1.4);
		else if (k === '-' || k === '_') api.zoomBy(1 / 1.4);
		else if (k === '0') api.fit();
		else h = false;
		if (h) e.preventDefault();
	});
	new ResizeObserver(() => {
		if (!api.touched) {
			const f = fitScale();
			st.s = f;
			st.tx = 0;
			st.ty = 0;
		}
		apply();
	}).observe(root);

	/* ---------- texto do PDF (para busca) ---------- */
	api.text = async () => {
		if (api._text) return api._text;
		const tc = await page.getTextContent();
		api._text = tc.items
			.filter((i) => i.str && i.str.trim())
			.map((i) => {
				const t = i.transform,
					ux = Math.hypot(t[0], t[1]) || 1,
					w = i.width || 0;
				// cantos do texto no espaço do PDF (y para cima): origem, fim da linha de base e a altura (vetor c,d)
				const P = [
					[t[4], t[5]],
					[t[4] + (t[0] / ux) * w, t[5] + (t[1] / ux) * w],
					[t[4] + t[2], t[5] + t[3]],
					[t[4] + (t[0] / ux) * w + t[2], t[5] + (t[1] / ux) * w + t[3]],
				].map(([x, y]) => [x - vx0, vy1 - y]); // para coordenadas da página (y para baixo)
				const xs = P.map((p) => p[0]),
					ys = P.map((p) => p[1]);
				const x0 = Math.min(...xs),
					x1 = Math.max(...xs),
					y0 = Math.min(...ys),
					y1 = Math.max(...ys);
				return {
					str: i.str.replace(/\s+/g, ' ').trim(),
					x0,
					y0,
					x1,
					y1,
					cx: (x0 + x1) / 2,
					cy: (y0 + y1) / 2,
					fs: Math.hypot(t[2], t[3]) || 10,
				};
			});
		return api._text;
	};

	// posição inicial: a folha inteira
	st.s = fitScale();
	st.tx = 0;
	st.ty = 0;
	apply();
	renderBase();
	return api;
}