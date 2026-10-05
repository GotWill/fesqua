import { routes, LANGS, DEFAULT_LANG, type Lang, type RouteKey } from './routes';
import { ui, type UiKey } from './ui';

export { LANGS, DEFAULT_LANG, routes };
export type { Lang, RouteKey };

export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es', it: 'it' };
export const OG_LOCALE: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES', it: 'it_IT' };
export const LANG_NAME: Record<Lang, string> = { pt: 'Português', en: 'English', es: 'Español', it: 'Italiano' };

export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);
/** Idioma da página atual (Astro.currentLocale); cai em português. */
export const getLang = (current: string | undefined): Lang => (isLang(current) ? current : DEFAULT_LANG);

/** Texto de um bloco `{pt, en, es, it}`; se faltar a tradução, usa o português. */
export function pick<T>(dict: Partial<Record<Lang, T>> & { pt: T }, lang: Lang): T {
	return dict[lang] ?? dict.pt;
}

/** Tradução de chave dos dicionários comuns (ui/*.ts), com reserva em português. */
export function t(lang: Lang, key: UiKey): string {
	return ui[lang][key] ?? ui.pt[key];
}

/** URL (sem barra final, exceto a home) da rota no idioma. `hash` opcional. */
export function route(lang: Lang, key: RouteKey, hash = ''): string {
	const slug = routes[key].slugs[lang];
	const base = lang === DEFAULT_LANG ? '' : `/${lang}`;
	const path = slug ? `${base}/${slug}` : base ? `${base}/` : '/';
	return path + hash;
}

const norm = (p: string) => p.replace(/\/+$/, '') || '/';

/** Qual rota (e idioma) corresponde a este pathname. */
export function matchRoute(pathname: string): { key: RouteKey; lang: Lang } | undefined {
	const p = norm(pathname);
	for (const key of Object.keys(routes) as RouteKey[]) {
		for (const lang of LANGS) {
			if (norm(route(lang, key)) === p) return { key, lang };
		}
	}
	return undefined;
}

/** Mesma página em outro idioma; sem equivalente (ex.: 404), vai para a home daquele idioma. */
export function alternateUrl(pathname: string, to: Lang): string {
	const m = matchRoute(pathname);
	return m && routes[m.key].page ? route(to, m.key) : route(to, 'home');
}

/** Se a rota existe como página (para decidir hreflang). */
export function pageExists(pathname: string): boolean {
	const m = matchRoute(pathname);
	return !!m && routes[m.key].page;
}
