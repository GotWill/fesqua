/*
 * DADOS DOS EXPOSITORES — ⚠ TODOS FICTÍCIOS (nomes, logos, textos, contatos e estandes são inventados).
 * Substitua pela lista real mantendo o formato abaixo. O componente <Expositores /> ordena por nome e cuida do resto.
 *
 * Campos:
 *   slug         identificador único na URL (…/expositores#slug abre o modal direto)
 *   name         nome do expositor (é o único campo usado pela busca)
 *   street       número da rua do pavilhão (ex.: 400 → "Rua 400")
 *   booth        número do estande (texto, pode ter letra: "312A")
 *   segments     setores de atuação (aparecem como etiquetas)
 *   description  descrição (no cartão é cortada em 3 linhas; no modal aparece completa)
 *   highlights   destaques/produtos (lista no modal)
 *   since        ano em que a empresa entrou no mercado
 *   site/email/phone   contatos exibidos no modal
 *   logo         (opcional) endereço da imagem do logo, ex.: '/expositores/logos/slug.svg'. Sem logo, o cartão mostra a sigla do nome.
 *   logoSvg      (opcional, só para demonstração) SVG pronto; tem prioridade sobre `logo`. Pode apagar quando houver logos reais.
 */
import type { Lang } from '../i18n/routes';
import { SEGMENTS, HIGHLIGHTS, DIFFERENTIALS, DESC_TEMPLATES, LIST_AND } from '../i18n/content/expositores';

export interface Expositor {
	slug: string;
	name: string;
	street: number;
	booth: string;
	segments: string[];
	description: string;
	highlights: string[];
	since: number;
	site: string;
	email: string;
	phone: string;
	logo?: string;
	logoSvg?: string;
}

/** Expositor com os textos descritivos já no idioma da página. `segmentIds` são estáveis em qualquer idioma. */
export interface ExpositorLocalized extends Expositor {
	segmentIds: string[];
}

const lowerFirst = (s: string) => (s.length > 1 && s[1] !== s[1].toLowerCase() ? s : s[0].toLowerCase() + s.slice(1));
const KNOWN_ITEMS = new Map(Object.keys(HIGHLIGHTS).map((k) => [k[0].toLowerCase() + k.slice(1), k]));

// divide "a, b e c" em itens conhecidos (alguns itens contêm " e ", ex.: "fechos e travas")
function parseItems(text: string): string[] | null {
	if (KNOWN_ITEMS.has(text)) return [text];
	for (const m of text.matchAll(/, | e /g)) {
		const left = text.slice(0, m.index);
		if (!KNOWN_ITEMS.has(left)) continue;
		const rest = parseItems(text.slice(m.index! + m[0].length));
		if (rest) return [left, ...rest];
	}
	return null;
}

function joinList(items: string[], and: string): string {
	return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${and} ${items[items.length - 1]}`;
}

function translateDescription(d: string, lang: Exclude<Lang, 'pt'>): string | null {
	let m: RegExpMatchArray | null;
	let tpl: keyof typeof DESC_TEMPLATES;
	let n = '';
	let list = '';
	let diff = '';
	if (
		(m = d.match(
			/^Há (\d+) anos no mercado, a empresa desenvolve (.+) para construtoras, revendas e projetistas\. O diferencial está em (.+) e em um time dedicado que acompanha cada projeto, do detalhamento à instalação\. Conheça as linhas e peça uma proposta no estande\.$/,
		))
	) {
		tpl = 'A';
		[, n, list, diff] = m;
	} else if ((m = d.match(/^Soluções em (.+) para obras residenciais e comerciais\.$/))) {
		tpl = 'B';
		list = m[1];
	} else if ((m = d.match(/^Fabricante de (.+) com entrega para todo o Brasil\.$/))) {
		tpl = 'C';
		list = m[1];
	} else if ((m = d.match(/^Especializada em (.+), com foco em (.+)\. Projetos sob medida e suporte técnico durante toda a obra\.$/))) {
		tpl = 'D';
		[, list, diff] = m;
	} else return null;

	const items = parseItems(list);
	if (!items) return null;
	const tItems = items.map((i) => HIGHLIGHTS[KNOWN_ITEMS.get(i)!][lang]).map(lowerFirst);
	let tDiff = '';
	if (diff) {
		if (!DIFFERENTIALS[diff]) return null;
		tDiff = DIFFERENTIALS[diff][lang];
	}
	return DESC_TEMPLATES[tpl][lang].replace('{n}', n).replace('{items}', joinList(tItems, LIST_AND[lang])).replace('{diff}', tDiff);
}

/** Versão do expositor no idioma pedido (nomes, contatos, estande e números não mudam). Falta de tradução = português. */
export function localizeExpositor(e: Expositor, lang: Lang): ExpositorLocalized {
	const segmentIds = e.segments.map((s) => SEGMENTS[s]?.id ?? s);
	if (lang === 'pt') return { ...e, segmentIds };
	return {
		...e,
		segments: e.segments.map((s) => SEGMENTS[s]?.[lang] ?? s),
		highlights: e.highlights.map((h) => HIGHLIGHTS[h]?.[lang] ?? h),
		description: translateDescription(e.description, lang) ?? e.description,
		segmentIds,
	};
}

export const expositores: Expositor[] = [
	{
		slug: 'alianca-fachadas',
		name: 'Aliança Fachadas',
		street: 400,
		booth: '972',
		segments: ['Fachadas'],
		description:
			'Há 15 anos no mercado, a empresa desenvolve sistemas stick, revestimentos em ACM e fachadas ventiladas para construtoras, revendas e projetistas. O diferencial está em estética arquitetônica e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Sistemas stick', 'Revestimentos em ACM', 'Fachadas ventiladas'],
		since: 2011,
		site: 'www.alianca-fachadas.example',
		email: 'contato@alianca-fachadas.example',
		phone: '(11) 5550-8864',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#1D3557" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#E63946" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1D3557" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">ALIANÇA</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">FACHADAS</text></svg>',
	},
	{
		slug: 'alianca-maquinas-cia',
		name: 'Aliança Máquinas & Cia',
		street: 200,
		booth: '1056A',
		segments: ['Máquinas e equipamentos', 'Fachadas'],
		description:
			'Há 27 anos no mercado, a empresa desenvolve prensas, cortadeiras de vidro e serras de corte duplo para construtoras, revendas e projetistas. O diferencial está em precisão de corte e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Prensas', 'Cortadeiras de vidro', 'Serras de corte duplo'],
		since: 1999,
		site: 'www.alianca-maquinas-cia.example',
		email: 'contato@alianca-maquinas-cia.example',
		phone: '(11) 5550-2356',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#0B525B"/><path d="M28 52l12-18 12 18z" fill="#FF9F1C"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0B525B" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">ALIANÇA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#FF9F1C" text-anchor="start">MÁQUINAS</text></svg>',
	},
	{
		slug: 'alvorada-esquadrias-pvc',
		name: 'Alvorada Esquadrias PVC',
		street: 400,
		booth: '1063',
		segments: ['Esquadrias de PVC'],
		description:
			'Há 35 anos no mercado, a empresa desenvolve sistemas de baixa condutividade térmica, persianas integradas e perfis com reforço de aço para construtoras, revendas e projetistas. O diferencial está em vedação superior e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Sistemas de baixa condutividade térmica', 'Persianas integradas', 'Perfis com reforço de aço'],
		since: 1991,
		site: 'www.alvorada-esquadrias-pvc.example',
		email: 'contato@alvorada-esquadrias-pvc.example',
		phone: '(11) 5550-8216',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#0B525B"/><path d="M28 52l12-18 12 18z" fill="#FF9F1C"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#0B525B" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">ALVORADA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#FF9F1C" text-anchor="start">ESQUADRIAS PVC</text></svg>',
	},
	{
		slug: 'alvorada-fachadas',
		name: 'Alvorada Fachadas',
		street: 600,
		booth: '499',
		segments: ['Fachadas'],
		description: 'Soluções em sistemas stick para obras residenciais e comerciais.',
		highlights: ['Sistemas stick', 'Brises', 'Revestimentos em ACM'],
		since: 2008,
		site: 'www.alvorada-fachadas.example',
		email: 'contato@alvorada-fachadas.example',
		phone: '(11) 5550-9906',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#FF9F1C"/><path d="M120 14l12 14h-24z" fill="#0B525B"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0B525B" text-anchor="middle" textLength="168.0" lengthAdjust="spacingAndGlyphs">ALVORADA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">FACHADAS</text></svg>',
	},
	{
		slug: 'araguaia-metalurgica-sistemas',
		name: 'Araguaia Metalúrgica Sistemas',
		street: 300,
		booth: '1036',
		segments: ['Serralheria'],
		description: 'Fabricante de portões automáticos com entrega para todo o Brasil.',
		highlights: ['Portões automáticos', 'Grades de proteção', 'Guarda-corpos de aço'],
		since: 2018,
		site: 'www.araguaia-metalurgica-sistemas.example',
		email: 'contato@araguaia-metalurgica-sistemas.example',
		phone: '(11) 5550-1298',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#003049"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">AM</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.5" fill="#003049" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">ARAGUAIA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#D62828" text-anchor="start">METALÚRGICA</text></svg>',
	},
	{
		slug: 'atlas-portas-cia',
		name: 'Atlas Portas & Cia',
		street: 900,
		booth: '1171',
		segments: ['Madeira'],
		description:
			'Há 27 anos no mercado, a empresa desenvolve folhas laminadas, deques e esquadrias em cumaru e freijó para construtoras, revendas e projetistas. O diferencial está em durabilidade e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Folhas laminadas', 'Deques', 'Esquadrias em cumaru e freijó'],
		since: 1999,
		site: 'www.atlas-portas-cia.example',
		email: 'contato@atlas-portas-cia.example',
		phone: '(11) 5550-1221',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#5F0F40" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#FB8B24" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#5F0F40" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">ATLAS</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PORTAS</text></svg>',
	},
	{
		slug: 'atlas-pvc',
		name: 'Atlas PVC',
		street: 900,
		booth: '965A',
		segments: ['Esquadrias de PVC'],
		description: 'Soluções em sistemas de baixa condutividade térmica para obras residenciais e comerciais.',
		highlights: ['Sistemas de baixa condutividade térmica', 'Persianas integradas', 'Portas de correr em PVC'],
		since: 2008,
		site: 'www.atlas-pvc.example',
		email: 'contato@atlas-pvc.example',
		phone: '(11) 5550-7846',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="105.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#E63946">A</tspan><tspan fill="#fff">TLAS</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">PVC</text></svg>',
	},
	{
		slug: 'aurora-equipamentos-cia',
		name: 'Aurora Equipamentos & Cia',
		street: 700,
		booth: '1243',
		segments: ['Máquinas e equipamentos'],
		description:
			'Há 8 anos no mercado, a empresa desenvolve bancadas de montagem, prensas e cortadeiras de vidro para construtoras, revendas e projetistas. O diferencial está em assistência técnica e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Bancadas de montagem', 'Prensas', 'Cortadeiras de vidro'],
		since: 2018,
		site: 'www.aurora-equipamentos-cia.example',
		email: 'contato@aurora-equipamentos-cia.example',
		phone: '(11) 5550-5113',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#14213D" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#F28C28" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#14213D" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">AURORA</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">EQUIPAMENTOS</text></svg>',
	},
	{
		slug: 'aurora-perfis-sistemas',
		name: 'Aurora Perfis Sistemas',
		street: 400,
		booth: '1175',
		segments: ['Esquadrias de alumínio'],
		description: 'Soluções em portas de giro para obras residenciais e comerciais.',
		highlights: ['Portas de giro', 'Perfis anodizados', 'Sistemas de alto desempenho'],
		since: 2011,
		site: 'www.aurora-perfis-sistemas.example',
		email: 'contato@aurora-perfis-sistemas.example',
		phone: '(11) 5550-6736',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#0B525B" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#FF9F1C" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0B525B" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">AURORA</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PERFIS</text></svg>',
	},
	{
		slug: 'bandeirante-maquinas',
		name: 'Bandeirante Máquinas',
		street: 500,
		booth: '129A',
		segments: ['Máquinas e equipamentos'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve prensas, serras de corte duplo e lapidadoras para construtoras, revendas e projetistas. O diferencial está em precisão de corte e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Prensas', 'Serras de corte duplo', 'Lapidadoras'],
		since: 2004,
		site: 'www.bandeirante-maquinas.example',
		email: 'contato@bandeirante-maquinas.example',
		phone: '(11) 5550-9483',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#D62828"/><path d="M120 14l12 14h-24z" fill="#003049"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.8" fill="#003049" text-anchor="middle" textLength="214.0" lengthAdjust="spacingAndGlyphs">BANDEIRANTE</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">MÁQUINAS</text></svg>',
	},
	{
		slug: 'bandeirante-selantes-cia',
		name: 'Bandeirante Selantes & Cia',
		street: 200,
		booth: '350A',
		segments: ['Vedação e automação'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve selantes estruturais, automação de portas e motores para portões para construtoras, revendas e projetistas. O diferencial está em durabilidade da vedação e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Selantes estruturais', 'Automação de portas', 'Motores para portões'],
		since: 2014,
		site: 'www.bandeirante-selantes-cia.example',
		email: 'contato@bandeirante-selantes-cia.example',
		phone: '(11) 5550-2782',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#212529" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#F77F00" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="19.7" fill="#212529" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">BANDEIRANTE</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">SELANTES</text></svg>',
	},
	{
		slug: 'boreal-acessorios',
		name: 'Boreal Acessórios',
		street: 800,
		booth: '987A',
		segments: ['Ferragens e acessórios'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve fechaduras, dobradiças e kits para vidro temperado para construtoras, revendas e projetistas. O diferencial está em facilidade de instalação e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Fechaduras', 'Dobradiças', 'Kits para vidro temperado'],
		since: 2014,
		site: 'www.boreal-acessorios.example',
		email: 'contato@boreal-acessorios.example',
		phone: '(11) 5550-6547',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#1D3557"/><path d="M28 52l12-18 12 18z" fill="#E63946"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1D3557" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">BOREAL</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#E63946" text-anchor="start">ACESSÓRIOS</text></svg>',
	},
	{
		slug: 'bravo-aluminio',
		name: 'Bravo Alumínio',
		street: 200,
		booth: '1283A',
		segments: ['Esquadrias de alumínio'],
		description: 'Soluções em sistemas de alto desempenho para obras residenciais e comerciais.',
		highlights: ['Sistemas de alto desempenho', 'Janelas maxim-ar', 'Portas de giro'],
		since: 1986,
		site: 'www.bravo-aluminio.example',
		email: 'contato@bravo-aluminio.example',
		phone: '(11) 5550-3806',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#212529"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">BA</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#212529" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">BRAVO</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F77F00" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'bravo-esquadrias',
		name: 'Bravo Esquadrias',
		street: 300,
		booth: '703A',
		segments: ['Esquadrias de alumínio'],
		description:
			'Há 35 anos no mercado, a empresa desenvolve janelas maxim-ar, perfis anodizados e esquadrias de correr para construtoras, revendas e projetistas. O diferencial está em estanqueidade e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Janelas maxim-ar', 'Perfis anodizados', 'Esquadrias de correr'],
		since: 1991,
		site: 'www.bravo-esquadrias.example',
		email: 'contato@bravo-esquadrias.example',
		phone: '(11) 5550-2853',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#7A1F1F"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">BE</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#7A1F1F" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">BRAVO</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#C9A227" text-anchor="start">ESQUADRIAS</text></svg>',
	},
	{
		slug: 'candeias-automacao',
		name: 'Candeias Automação',
		street: 200,
		booth: '1279',
		segments: ['Vedação e automação'],
		description:
			'Há 8 anos no mercado, a empresa desenvolve motores para portões, sensores de presença e automação de portas para construtoras, revendas e projetistas. O diferencial está em integração com sistemas de acesso e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Motores para portões', 'Sensores de presença', 'Automação de portas'],
		since: 2018,
		site: 'www.candeias-automacao.example',
		email: 'contato@candeias-automacao.example',
		phone: '(11) 5550-8906',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#0F766E"/><path d="M28 52l12-18 12 18z" fill="#F2B705"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#0F766E" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">CANDEIAS</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F2B705" text-anchor="start">AUTOMAÇÃO</text></svg>',
	},
	{
		slug: 'candeias-vidros',
		name: 'Candeias Vidros',
		street: 900,
		booth: '631',
		segments: ['Vidros'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve vidros insulados, vidros de controle solar e vidros temperados para construtoras, revendas e projetistas. O diferencial está em transparência e leveza e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Vidros insulados', 'Vidros de controle solar', 'Vidros temperados'],
		since: 2004,
		site: 'www.candeias-vidros.example',
		email: 'contato@candeias-vidros.example',
		phone: '(11) 5550-6654',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#003049" text-anchor="start" textLength="190.4" lengthAdjust="spacingAndGlyphs">CANDEIAS</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#D62828"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">VIDROS</text></svg>',
	},
	{
		slug: 'cardeal-acessorios',
		name: 'Cardeal Acessórios',
		street: 300,
		booth: '298A',
		segments: ['Ferragens e acessórios'],
		description:
			'Especializada em kits para vidro temperado e fechaduras, com foco em robustez. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Kits para vidro temperado', 'Fechaduras', 'Fechos e travas'],
		since: 1986,
		site: 'www.cardeal-acessorios.example',
		email: 'contato@cardeal-acessorios.example',
		phone: '(11) 5550-3167',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#003049" text-anchor="start" textLength="166.6" lengthAdjust="spacingAndGlyphs">CARDEAL</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#D62828"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ACESSÓRIOS</text></svg>',
	},
	{
		slug: 'cardeal-aluminio-cia',
		name: 'Cardeal Alumínio & Cia',
		street: 700,
		booth: '980A',
		segments: ['Esquadrias de alumínio'],
		description: 'Fabricante de portas de giro com entrega para todo o Brasil.',
		highlights: ['Portas de giro', 'Guarda-corpos de alumínio', 'Esquadrias de correr'],
		since: 1986,
		site: 'www.cardeal-aluminio-cia.example',
		email: 'contato@cardeal-aluminio-cia.example',
		phone: '(11) 5550-4267',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#1B4332" text-anchor="start" textLength="166.6" lengthAdjust="spacingAndGlyphs">CARDEAL</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#74C69D"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'cerrado-perfis',
		name: 'Cerrado Perfis',
		street: 500,
		booth: '1028A',
		segments: ['Esquadrias de PVC'],
		description: 'Fabricante de portas de correr em PVC com entrega para todo o Brasil.',
		highlights: ['Portas de correr em PVC', 'Perfis com reforço de aço', 'Sistemas de baixa condutividade térmica'],
		since: 2014,
		site: 'www.cerrado-perfis.example',
		email: 'contato@cerrado-perfis.example',
		phone: '(11) 5550-2177',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#1D3557" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#E63946" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1D3557" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">CERRADO</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PERFIS</text></svg>',
	},
	{
		slug: 'cerrado-selantes-sistemas',
		name: 'Cerrado Selantes Sistemas',
		street: 300,
		booth: '560',
		segments: ['Vedação e automação', 'Ferragens e acessórios'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve fitas de vedação, automação de portas e motores para portões para construtoras, revendas e projetistas. O diferencial está em integração com sistemas de acesso e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Fitas de vedação', 'Automação de portas', 'Motores para portões'],
		since: 2014,
		site: 'www.cerrado-selantes-sistemas.example',
		email: 'contato@cerrado-selantes-sistemas.example',
		phone: '(11) 5550-9650',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#3A0CA3"/><path d="M28 52l12-18 12 18z" fill="#4CC9F0"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#3A0CA3" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">CERRADO</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#4CC9F0" text-anchor="start">SELANTES</text></svg>',
	},
	{
		slug: 'cobre-pele-de-vidro-do-brasil',
		name: 'Cobre Pele de Vidro do Brasil',
		street: 600,
		booth: '856',
		segments: ['Fachadas'],
		description:
			'Especializada em fachadas ventiladas e fachadas unitizadas, com foco em estética arquitetônica. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Fachadas ventiladas', 'Fachadas unitizadas', 'Sistemas stick'],
		since: 1995,
		site: 'www.cobre-pele-de-vidro-do-brasil.example',
		email: 'contato@cobre-pele-de-vidro-do-brasil.example',
		phone: '(11) 5550-8155',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#2B2D42"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">CP</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#2B2D42" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">COBRE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#EF476F" text-anchor="start">PELE DE VIDRO</text></svg>',
	},
	{
		slug: 'cobre-vedacoes-sistemas',
		name: 'Cobre Vedações Sistemas',
		street: 600,
		booth: '168',
		segments: ['Vedação e automação'],
		description:
			'Há 18 anos no mercado, a empresa desenvolve gaxetas, fitas de vedação e automação de portas para construtoras, revendas e projetistas. O diferencial está em baixo consumo e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Gaxetas', 'Fitas de vedação', 'Automação de portas'],
		since: 2008,
		site: 'www.cobre-vedacoes-sistemas.example',
		email: 'contato@cobre-vedacoes-sistemas.example',
		phone: '(11) 5550-2663',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#3A0CA3" text-anchor="start" textLength="119.0" lengthAdjust="spacingAndGlyphs">COBRE</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#4CC9F0"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">VEDAÇÕES</text></svg>',
	},
	{
		slug: 'delta-acessorios-industria',
		name: 'Delta Acessórios Indústria',
		street: 300,
		booth: '731',
		segments: ['Ferragens e acessórios'],
		description:
			'Especializada em fechos e travas e fechaduras, com foco em facilidade de instalação. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Fechos e travas', 'Fechaduras', 'Dobradiças'],
		since: 2018,
		site: 'www.delta-acessorios-industria.example',
		email: 'contato@delta-acessorios-industria.example',
		phone: '(11) 5550-5573',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#14213D" text-anchor="start" textLength="119.0" lengthAdjust="spacingAndGlyphs">DELTA</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#F28C28"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ACESSÓRIOS</text></svg>',
	},
	{
		slug: 'estrutural-cristais-industria',
		name: 'Estrutural Cristais Indústria',
		street: 1000,
		booth: '201',
		segments: ['Vidros'],
		description:
			'Há 15 anos no mercado, a empresa desenvolve laminados acústicos, espelhos e vidros curvos para construtoras, revendas e projetistas. O diferencial está em transparência e leveza e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Laminados acústicos', 'Espelhos', 'Vidros curvos'],
		since: 2011,
		site: 'www.estrutural-cristais-industria.example',
		email: 'contato@estrutural-cristais-industria.example',
		phone: '(11) 5550-1565',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="28.0" text-anchor="middle" textLength="196.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#EF476F">E</tspan><tspan fill="#fff">STRUTURAL</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">CRISTAIS</text></svg>',
	},
	{
		slug: 'estrutural-perfis',
		name: 'Estrutural Perfis',
		street: 1000,
		booth: '232A',
		segments: ['Esquadrias de alumínio', 'Vedação e automação'],
		description:
			'Há 27 anos no mercado, a empresa desenvolve guarda-corpos de alumínio, portas de giro e janelas maxim-ar para construtoras, revendas e projetistas. O diferencial está em isolamento acústico e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Guarda-corpos de alumínio', 'Portas de giro', 'Janelas maxim-ar'],
		since: 1999,
		site: 'www.estrutural-perfis.example',
		email: 'contato@estrutural-perfis.example',
		phone: '(11) 5550-9005',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#4CC9F0"/><path d="M120 14l12 14h-24z" fill="#3A0CA3"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#3A0CA3" text-anchor="middle" textLength="210.0" lengthAdjust="spacingAndGlyphs">ESTRUTURAL</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">PERFIS</text></svg>',
	},
	{
		slug: 'farol-marcenaria',
		name: 'Farol Marcenaria',
		street: 1000,
		booth: '1223',
		segments: ['Madeira'],
		description:
			'Há 40 anos no mercado, a empresa desenvolve deques, portas maciças e folhas laminadas para construtoras, revendas e projetistas. O diferencial está em acabamento artesanal e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Deques', 'Portas maciças', 'Folhas laminadas'],
		since: 1986,
		site: 'www.farol-marcenaria.example',
		email: 'contato@farol-marcenaria.example',
		phone: '(11) 5550-9114',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#5F0F40"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">FM</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#5F0F40" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">FAROL</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#FB8B24" text-anchor="start">MARCENARIA</text></svg>',
	},
	{
		slug: 'fortaleza-aluminio-sistemas',
		name: 'Fortaleza Alumínio Sistemas',
		street: 600,
		booth: '286',
		segments: ['Esquadrias de alumínio', 'Vidros'],
		description:
			'Há 40 anos no mercado, a empresa desenvolve sistemas de alto desempenho, esquadrias de correr e portas de giro para construtoras, revendas e projetistas. O diferencial está em resistência à corrosão e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Sistemas de alto desempenho', 'Esquadrias de correr', 'Portas de giro'],
		since: 1986,
		site: 'www.fortaleza-aluminio-sistemas.example',
		email: 'contato@fortaleza-aluminio-sistemas.example',
		phone: '(11) 5550-1186',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#74C69D"/><path d="M120 14l12 14h-24z" fill="#1B4332"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1B4332" text-anchor="middle" textLength="189.0" lengthAdjust="spacingAndGlyphs">FORTALEZA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'fortaleza-cristais',
		name: 'Fortaleza Cristais',
		street: 300,
		booth: '1103A',
		segments: ['Vidros'],
		description: 'Fabricante de laminados acústicos com entrega para todo o Brasil.',
		highlights: ['Laminados acústicos', 'Espelhos', 'Vidros de controle solar'],
		since: 2018,
		site: 'www.fortaleza-cristais.example',
		email: 'contato@fortaleza-cristais.example',
		phone: '(11) 5550-7448',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#7A1F1F" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#C9A227" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="24.1" fill="#7A1F1F" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">FORTALEZA</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">CRISTAIS</text></svg>',
	},
	{
		slug: 'girassol-estruturas',
		name: 'Girassol Estruturas',
		street: 200,
		booth: '1151',
		segments: ['Serralheria'],
		description:
			'Há 40 anos no mercado, a empresa desenvolve escadas metálicas, portões automáticos e estruturas especiais para construtoras, revendas e projetistas. O diferencial está em proteção anticorrosiva e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Escadas metálicas', 'Portões automáticos', 'Estruturas especiais'],
		since: 1986,
		site: 'www.girassol-estruturas.example',
		email: 'contato@girassol-estruturas.example',
		phone: '(11) 5550-6406',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#264653" text-anchor="start" textLength="190.4" lengthAdjust="spacingAndGlyphs">GIRASSOL</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#E9C46A"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ESTRUTURAS</text></svg>',
	},
	{
		slug: 'girassol-serralheria-cia',
		name: 'Girassol Serralheria & Cia',
		street: 500,
		booth: '302',
		segments: ['Serralheria', 'Vidros'],
		description:
			'Especializada em escadas metálicas e guarda-corpos de aço, com foco em proteção anticorrosiva. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Escadas metálicas', 'Guarda-corpos de aço', 'Estruturas especiais'],
		since: 2008,
		site: 'www.girassol-serralheria-cia.example',
		email: 'contato@girassol-serralheria-cia.example',
		phone: '(11) 5550-2688',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#264653" text-anchor="start" textLength="190.4" lengthAdjust="spacingAndGlyphs">GIRASSOL</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#E9C46A"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">SERRALHERIA</text></svg>',
	},
	{
		slug: 'horizonte-esquadrias-pvc-sistemas',
		name: 'Horizonte Esquadrias PVC Sistemas',
		street: 200,
		booth: '1082',
		segments: ['Esquadrias de PVC'],
		description: 'Fabricante de persianas integradas com entrega para todo o Brasil.',
		highlights: ['Persianas integradas', 'Sistemas de baixa condutividade térmica', 'Portas de correr em PVC'],
		since: 2018,
		site: 'www.horizonte-esquadrias-pvc-sistemas.example',
		email: 'contato@horizonte-esquadrias-pvc-sistemas.example',
		phone: '(11) 5550-6351',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#1B4332"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">HE</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="24.4" fill="#1B4332" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">HORIZONTE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#74C69D" text-anchor="start">ESQUADRIAS PVC</text></svg>',
	},
	{
		slug: 'horizonte-portas-industria',
		name: 'Horizonte Portas Indústria',
		street: 800,
		booth: '1038A',
		segments: ['Madeira'],
		description: 'Soluções em folhas laminadas para obras residenciais e comerciais.',
		highlights: ['Folhas laminadas', 'Janelas em madeira certificada', 'Deques'],
		since: 2018,
		site: 'www.horizonte-portas-industria.example',
		email: 'contato@horizonte-portas-industria.example',
		phone: '(11) 5550-3407',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#2B2D42"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">HP</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="24.4" fill="#2B2D42" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">HORIZONTE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#EF476F" text-anchor="start">PORTAS</text></svg>',
	},
	{
		slug: 'iguacu-fechaduras',
		name: 'Iguaçu Fechaduras',
		street: 800,
		booth: '365',
		segments: ['Ferragens e acessórios', 'Vidros'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve dobradiças, puxadores e kits para vidro temperado para construtoras, revendas e projetistas. O diferencial está em acabamento refinado e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Dobradiças', 'Puxadores', 'Kits para vidro temperado'],
		since: 2004,
		site: 'www.iguacu-fechaduras.example',
		email: 'contato@iguacu-fechaduras.example',
		phone: '(11) 5550-6337',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="126.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#F77F00">I</tspan><tspan fill="#fff">GUAÇU</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">FECHADURAS</text></svg>',
	},
	{
		slug: 'iguacu-madeiras-industria',
		name: 'Iguaçu Madeiras Indústria',
		street: 400,
		booth: '475',
		segments: ['Madeira'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve portas maciças, folhas laminadas e janelas em madeira certificada para construtoras, revendas e projetistas. O diferencial está em projetos sob medida e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Portas maciças', 'Folhas laminadas', 'Janelas em madeira certificada'],
		since: 2014,
		site: 'www.iguacu-madeiras-industria.example',
		email: 'contato@iguacu-madeiras-industria.example',
		phone: '(11) 5550-1492',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="126.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#74C69D">I</tspan><tspan fill="#fff">GUAÇU</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">MADEIRAS</text></svg>',
	},
	{
		slug: 'ipanema-acessorios',
		name: 'Ipanema Acessórios',
		street: 300,
		booth: '152',
		segments: ['Ferragens e acessórios', 'Máquinas e equipamentos'],
		description:
			'Há 8 anos no mercado, a empresa desenvolve roldanas, puxadores e kits para vidro temperado para construtoras, revendas e projetistas. O diferencial está em ciclo de vida elevado e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Roldanas', 'Puxadores', 'Kits para vidro temperado'],
		since: 2018,
		site: 'www.ipanema-acessorios.example',
		email: 'contato@ipanema-acessorios.example',
		phone: '(11) 5550-8875',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="147.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#EF476F">I</tspan><tspan fill="#fff">PANEMA</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">ACESSÓRIOS</text></svg>',
	},
	{
		slug: 'ipanema-aluminio',
		name: 'Ipanema Alumínio',
		street: 200,
		booth: '1156A',
		segments: ['Esquadrias de alumínio'],
		description: 'Soluções em perfis anodizados para obras residenciais e comerciais.',
		highlights: ['Perfis anodizados', 'Sistemas de alto desempenho', 'Portas de giro'],
		since: 2011,
		site: 'www.ipanema-aluminio.example',
		email: 'contato@ipanema-aluminio.example',
		phone: '(11) 5550-5118',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#212529"/><path d="M28 52l12-18 12 18z" fill="#F77F00"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#212529" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">IPANEMA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F77F00" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'litoral-fechaduras-cia',
		name: 'Litoral Fechaduras & Cia',
		street: 800,
		booth: '1088',
		segments: ['Ferragens e acessórios', 'Serralheria'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve puxadores, fechaduras e kits para vidro temperado para construtoras, revendas e projetistas. O diferencial está em facilidade de instalação e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Puxadores', 'Fechaduras', 'Kits para vidro temperado'],
		since: 2004,
		site: 'www.litoral-fechaduras-cia.example',
		email: 'contato@litoral-fechaduras-cia.example',
		phone: '(11) 5550-2760',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#5F0F40" text-anchor="start" textLength="166.6" lengthAdjust="spacingAndGlyphs">LITORAL</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#FB8B24"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">FECHADURAS</text></svg>',
	},
	{
		slug: 'litoral-ferragens',
		name: 'Litoral Ferragens',
		street: 100,
		booth: '400',
		segments: ['Ferragens e acessórios'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve puxadores, kits para vidro temperado e fechaduras para construtoras, revendas e projetistas. O diferencial está em ciclo de vida elevado e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Puxadores', 'Kits para vidro temperado', 'Fechaduras'],
		since: 2004,
		site: 'www.litoral-ferragens.example',
		email: 'contato@litoral-ferragens.example',
		phone: '(11) 5550-8608',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="147.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#D62828">L</tspan><tspan fill="#fff">ITORAL</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">FERRAGENS</text></svg>',
	},
	{
		slug: 'lumina-glass-do-brasil',
		name: 'Lumina Glass do Brasil',
		street: 500,
		booth: '998',
		segments: ['Vidros'],
		description: 'Soluções em vidros temperados para obras residenciais e comerciais.',
		highlights: ['Vidros temperados', 'Vidros insulados', 'Vidros curvos'],
		since: 1986,
		site: 'www.lumina-glass-do-brasil.example',
		email: 'contato@lumina-glass-do-brasil.example',
		phone: '(11) 5550-5974',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#5F0F40"/><path d="M28 52l12-18 12 18z" fill="#FB8B24"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#5F0F40" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">LUMINA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#FB8B24" text-anchor="start">GLASS</text></svg>',
	},
	{
		slug: 'lumina-perfis',
		name: 'Lumina Perfis',
		street: 100,
		booth: '1161',
		segments: ['Esquadrias de PVC'],
		description: 'Soluções em janelas de PVC com câmaras múltiplas para obras residenciais e comerciais.',
		highlights: ['Janelas de PVC com câmaras múltiplas', 'Persianas integradas', 'Perfis com reforço de aço'],
		since: 2014,
		site: 'www.lumina-perfis.example',
		email: 'contato@lumina-perfis.example',
		phone: '(11) 5550-9411',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#264653" text-anchor="start" textLength="142.8" lengthAdjust="spacingAndGlyphs">LUMINA</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#E9C46A"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PERFIS</text></svg>',
	},
	{
		slug: 'mantiqueira-vidros-do-brasil',
		name: 'Mantiqueira Vidros do Brasil',
		street: 600,
		booth: '615',
		segments: ['Vidros'],
		description:
			'Há 18 anos no mercado, a empresa desenvolve espelhos, vidros de controle solar e laminados acústicos para construtoras, revendas e projetistas. O diferencial está em controle solar e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Espelhos', 'Vidros de controle solar', 'Laminados acústicos'],
		since: 2008,
		site: 'www.mantiqueira-vidros-do-brasil.example',
		email: 'contato@mantiqueira-vidros-do-brasil.example',
		phone: '(11) 5550-8073',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#FF9F1C"/><path d="M120 14l12 14h-24z" fill="#0B525B"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.8" fill="#0B525B" text-anchor="middle" textLength="214.0" lengthAdjust="spacingAndGlyphs">MANTIQUEIRA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">VIDROS</text></svg>',
	},
	{
		slug: 'marajo-esquadrias-pvc-do-brasil',
		name: 'Marajó Esquadrias PVC do Brasil',
		street: 200,
		booth: '569A',
		segments: ['Esquadrias de PVC'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve sistemas de baixa condutividade térmica, janelas de PVC com câmaras múltiplas e perfis com reforço de aço para construtoras, revendas e projetistas. O diferencial está em baixa manutenção e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Sistemas de baixa condutividade térmica', 'Janelas de PVC com câmaras múltiplas', 'Perfis com reforço de aço'],
		since: 2004,
		site: 'www.marajo-esquadrias-pvc-do-brasil.example',
		email: 'contato@marajo-esquadrias-pvc-do-brasil.example',
		phone: '(11) 5550-8676',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="126.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#FB8B24">M</tspan><tspan fill="#fff">ARAJÓ</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">ESQUADRIAS PVC</text></svg>',
	},
	{
		slug: 'marajo-metalurgica-sistemas',
		name: 'Marajó Metalúrgica Sistemas',
		street: 900,
		booth: '1021',
		segments: ['Serralheria'],
		description: 'Fabricante de escadas metálicas com entrega para todo o Brasil.',
		highlights: ['Escadas metálicas', 'Guarda-corpos de aço', 'Portões automáticos'],
		since: 2004,
		site: 'www.marajo-metalurgica-sistemas.example',
		email: 'contato@marajo-metalurgica-sistemas.example',
		phone: '(11) 5550-5049',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="126.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#FF9F1C">M</tspan><tspan fill="#fff">ARAJÓ</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">METALÚRGICA</text></svg>',
	},
	{
		slug: 'mecanova-glass',
		name: 'Mecanova Glass',
		street: 700,
		booth: '169',
		segments: ['Vidros'],
		description:
			'Especializada em vidros curvos e vidros insulados, com foco em segurança. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Vidros curvos', 'Vidros insulados', 'Vidros temperados'],
		since: 1999,
		site: 'www.mecanova-glass.example',
		email: 'contato@mecanova-glass.example',
		phone: '(11) 5550-5216',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#1B4332"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">MG</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.5" fill="#1B4332" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">MECANOVA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#74C69D" text-anchor="start">GLASS</text></svg>',
	},
	{
		slug: 'mecanova-vidros-do-brasil',
		name: 'Mecanova Vidros do Brasil',
		street: 600,
		booth: '630',
		segments: ['Vidros'],
		description:
			'Há 27 anos no mercado, a empresa desenvolve vidros curvos, laminados acústicos e vidros de controle solar para construtoras, revendas e projetistas. O diferencial está em controle solar e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Vidros curvos', 'Laminados acústicos', 'Vidros de controle solar'],
		since: 1999,
		site: 'www.mecanova-vidros-do-brasil.example',
		email: 'contato@mecanova-vidros-do-brasil.example',
		phone: '(11) 5550-8281',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="168.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#C9A227">M</tspan><tspan fill="#fff">ECANOVA</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">VIDROS</text></svg>',
	},
	{
		slug: 'meridian-aluminio-cia',
		name: 'Meridian Alumínio & Cia',
		street: 100,
		booth: '1039',
		segments: ['Esquadrias de alumínio', 'Vidros'],
		description:
			'Há 31 anos no mercado, a empresa desenvolve perfis anodizados, sistemas de alto desempenho e janelas maxim-ar para construtoras, revendas e projetistas. O diferencial está em acabamento premium e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Perfis anodizados', 'Sistemas de alto desempenho', 'Janelas maxim-ar'],
		since: 1995,
		site: 'www.meridian-aluminio-cia.example',
		email: 'contato@meridian-aluminio-cia.example',
		phone: '(11) 5550-1592',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#5F0F40"/><path d="M28 52l12-18 12 18z" fill="#FB8B24"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#5F0F40" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">MERIDIAN</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#FB8B24" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'meridian-esquadrias',
		name: 'Meridian Esquadrias',
		street: 700,
		booth: '1045A',
		segments: ['Esquadrias de alumínio', 'Serralheria'],
		description:
			'Especializada em sistemas de alto desempenho e portas de giro, com foco em acabamento premium. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Sistemas de alto desempenho', 'Portas de giro', 'Esquadrias de correr'],
		since: 2011,
		site: 'www.meridian-esquadrias.example',
		email: 'contato@meridian-esquadrias.example',
		phone: '(11) 5550-4920',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#212529" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#F77F00" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#212529" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">MERIDIAN</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ESQUADRIAS</text></svg>',
	},
	{
		slug: 'nobre-vidros',
		name: 'Nobre Vidros',
		street: 100,
		booth: '924',
		segments: ['Vidros', 'Ferragens e acessórios'],
		description:
			'Especializada em laminados acústicos e espelhos, com foco em controle solar. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Laminados acústicos', 'Espelhos', 'Vidros insulados'],
		since: 2014,
		site: 'www.nobre-vidros.example',
		email: 'contato@nobre-vidros.example',
		phone: '(11) 5550-2895',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#5F0F40" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#FB8B24" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#5F0F40" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">NOBRE</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">VIDROS</text></svg>',
	},
	{
		slug: 'nordeste-aluminio',
		name: 'Nordeste Alumínio',
		street: 200,
		booth: '646',
		segments: ['Esquadrias de alumínio'],
		description:
			'Há 31 anos no mercado, a empresa desenvolve janelas maxim-ar, sistemas de alto desempenho e portas de giro para construtoras, revendas e projetistas. O diferencial está em resistência à corrosão e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Janelas maxim-ar', 'Sistemas de alto desempenho', 'Portas de giro'],
		since: 1995,
		site: 'www.nordeste-aluminio.example',
		email: 'contato@nordeste-aluminio.example',
		phone: '(11) 5550-8100',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#212529" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#F77F00" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#212529" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">NORDESTE</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'nordeste-maquinas',
		name: 'Nordeste Máquinas',
		street: 300,
		booth: '1172A',
		segments: ['Máquinas e equipamentos', 'Ferragens e acessórios'],
		description:
			'Há 8 anos no mercado, a empresa desenvolve centros de usinagem CNC, cortadeiras de vidro e lapidadoras para construtoras, revendas e projetistas. O diferencial está em precisão de corte e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Centros de usinagem CNC', 'Cortadeiras de vidro', 'Lapidadoras'],
		since: 2018,
		site: 'www.nordeste-maquinas.example',
		email: 'contato@nordeste-maquinas.example',
		phone: '(11) 5550-9023',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#14213D"/><path d="M28 52l12-18 12 18z" fill="#F28C28"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#14213D" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">NORDESTE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F28C28" text-anchor="start">MÁQUINAS</text></svg>',
	},
	{
		slug: 'nucleo-usinagem-sistemas',
		name: 'Núcleo Usinagem Sistemas',
		street: 800,
		booth: '1062',
		segments: ['Máquinas e equipamentos', 'Ferragens e acessórios'],
		description:
			'Especializada em lapidadoras e centros de usinagem CNC, com foco em treinamento da equipe. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Lapidadoras', 'Centros de usinagem CNC', 'Prensas'],
		since: 2008,
		site: 'www.nucleo-usinagem-sistemas.example',
		email: 'contato@nucleo-usinagem-sistemas.example',
		phone: '(11) 5550-7554',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#5F0F40" text-anchor="start" textLength="142.8" lengthAdjust="spacingAndGlyphs">NÚCLEO</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#FB8B24"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">USINAGEM</text></svg>',
	},
	{
		slug: 'onix-automacao-cia',
		name: 'Ônix Automação & Cia',
		street: 1000,
		booth: '119A',
		segments: ['Vedação e automação', 'Serralheria'],
		description:
			'Especializada em automação de portas e sensores de presença, com foco em resistência a intempéries. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Automação de portas', 'Sensores de presença', 'Motores para portões'],
		since: 2004,
		site: 'www.onix-automacao-cia.example',
		email: 'contato@onix-automacao-cia.example',
		phone: '(11) 5550-8692',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="84.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#E63946">Ô</tspan><tspan fill="#fff">NIX</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">AUTOMAÇÃO</text></svg>',
	},
	{
		slug: 'onix-perfis-do-brasil',
		name: 'Ônix Perfis do Brasil',
		street: 600,
		booth: '151A',
		segments: ['Esquadrias de alumínio'],
		description: 'Soluções em esquadrias de correr para obras residenciais e comerciais.',
		highlights: ['Esquadrias de correr', 'Guarda-corpos de alumínio', 'Janelas maxim-ar'],
		since: 2004,
		site: 'www.onix-perfis-do-brasil.example',
		email: 'contato@onix-perfis-do-brasil.example',
		phone: '(11) 5550-1622',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#1D3557" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#E63946" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1D3557" text-anchor="start" textLength="84.0" lengthAdjust="spacingAndGlyphs">ÔNIX</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PERFIS</text></svg>',
	},
	{
		slug: 'orion-vidros',
		name: 'Orion Vidros',
		street: 600,
		booth: '838',
		segments: ['Vidros', 'Esquadrias de PVC'],
		description:
			'Especializada em vidros temperados e vidros curvos, com foco em precisão no corte. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Vidros temperados', 'Vidros curvos', 'Laminados acústicos'],
		since: 2014,
		site: 'www.orion-vidros.example',
		email: 'contato@orion-vidros.example',
		phone: '(11) 5550-7821',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#1D3557" text-anchor="start" textLength="119.0" lengthAdjust="spacingAndGlyphs">ORION</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#E63946"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">VIDROS</text></svg>',
	},
	{
		slug: 'orion-vidros-industria',
		name: 'Orion Vidros Indústria',
		street: 600,
		booth: '917',
		segments: ['Vidros'],
		description:
			'Há 40 anos no mercado, a empresa desenvolve laminados acústicos, vidros de controle solar e vidros insulados para construtoras, revendas e projetistas. O diferencial está em transparência e leveza e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Laminados acústicos', 'Vidros de controle solar', 'Vidros insulados'],
		since: 1986,
		site: 'www.orion-vidros-industria.example',
		email: 'contato@orion-vidros-industria.example',
		phone: '(11) 5550-7139',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="105.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#E9C46A">O</tspan><tspan fill="#fff">RION</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">VIDROS</text></svg>',
	},
	{
		slug: 'pampa-pele-de-vidro-cia',
		name: 'Pampa Pele de Vidro & Cia',
		street: 300,
		booth: '1081',
		segments: ['Fachadas', 'Ferragens e acessórios'],
		description:
			'Especializada em fachadas ventiladas e pele de vidro, com foco em desempenho estrutural. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Fachadas ventiladas', 'Pele de vidro', 'Brises'],
		since: 2018,
		site: 'www.pampa-pele-de-vidro-cia.example',
		email: 'contato@pampa-pele-de-vidro-cia.example',
		phone: '(11) 5550-8771',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#C9A227"/><path d="M120 14l12 14h-24z" fill="#7A1F1F"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#7A1F1F" text-anchor="middle" textLength="105.0" lengthAdjust="spacingAndGlyphs">PAMPA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">PELE DE VIDRO</text></svg>',
	},
	{
		slug: 'paraiba-aluminio-cia',
		name: 'Paraíba Alumínio & Cia',
		street: 800,
		booth: '1247A',
		segments: ['Esquadrias de alumínio'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve sistemas de alto desempenho, esquadrias de correr e portas de giro para construtoras, revendas e projetistas. O diferencial está em estanqueidade e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Sistemas de alto desempenho', 'Esquadrias de correr', 'Portas de giro'],
		since: 2014,
		site: 'www.paraiba-aluminio-cia.example',
		email: 'contato@paraiba-aluminio-cia.example',
		phone: '(11) 5550-2819',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#3A0CA3"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">PA</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#3A0CA3" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">PARAÍBA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#4CC9F0" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'perfilar-aluminio',
		name: 'Perfilar Alumínio',
		street: 500,
		booth: '859',
		segments: ['Esquadrias de alumínio'],
		description:
			'Há 27 anos no mercado, a empresa desenvolve guarda-corpos de alumínio, perfis anodizados e sistemas de alto desempenho para construtoras, revendas e projetistas. O diferencial está em isolamento acústico e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Guarda-corpos de alumínio', 'Perfis anodizados', 'Sistemas de alto desempenho'],
		since: 1999,
		site: 'www.perfilar-aluminio.example',
		email: 'contato@perfilar-aluminio.example',
		phone: '(11) 5550-4980',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#1B4332" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#74C69D" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#1B4332" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">PERFILAR</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'perfilar-marcenaria',
		name: 'Perfilar Marcenaria',
		street: 300,
		booth: '311',
		segments: ['Madeira'],
		description:
			'Há 15 anos no mercado, a empresa desenvolve portas maciças, esquadrias em cumaru e freijó e deques para construtoras, revendas e projetistas. O diferencial está em projetos sob medida e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Portas maciças', 'Esquadrias em cumaru e freijó', 'Deques'],
		since: 2011,
		site: 'www.perfilar-marcenaria.example',
		email: 'contato@perfilar-marcenaria.example',
		phone: '(11) 5550-8714',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#14213D"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">PM</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.5" fill="#14213D" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">PERFILAR</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F28C28" text-anchor="start">MARCENARIA</text></svg>',
	},
	{
		slug: 'pioneira-portas',
		name: 'Pioneira Portas',
		street: 800,
		booth: '916',
		segments: ['Madeira'],
		description: 'Fabricante de janelas em madeira certificada com entrega para todo o Brasil.',
		highlights: ['Janelas em madeira certificada', 'Deques', 'Esquadrias em cumaru e freijó'],
		since: 1999,
		site: 'www.pioneira-portas.example',
		email: 'contato@pioneira-portas.example',
		phone: '(11) 5550-5346',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#74C69D"/><path d="M120 14l12 14h-24z" fill="#1B4332"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1B4332" text-anchor="middle" textLength="168.0" lengthAdjust="spacingAndGlyphs">PIONEIRA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">PORTAS</text></svg>',
	},
	{
		slug: 'pioneira-pvc-sistemas',
		name: 'Pioneira PVC Sistemas',
		street: 1000,
		booth: '990A',
		segments: ['Esquadrias de PVC'],
		description:
			'Há 31 anos no mercado, a empresa desenvolve perfis com reforço de aço, janelas de PVC com câmaras múltiplas e sistemas de baixa condutividade térmica para construtoras, revendas e projetistas. O diferencial está em baixa manutenção e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Perfis com reforço de aço', 'Janelas de PVC com câmaras múltiplas', 'Sistemas de baixa condutividade térmica'],
		since: 1995,
		site: 'www.pioneira-pvc-sistemas.example',
		email: 'contato@pioneira-pvc-sistemas.example',
		phone: '(11) 5550-7165',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#F2B705"/><path d="M120 14l12 14h-24z" fill="#0F766E"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0F766E" text-anchor="middle" textLength="168.0" lengthAdjust="spacingAndGlyphs">PIONEIRA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">PVC</text></svg>',
	},
	{
		slug: 'planalto-acessorios-industria',
		name: 'Planalto Acessórios Indústria',
		street: 600,
		booth: '845',
		segments: ['Ferragens e acessórios'],
		description:
			'Há 8 anos no mercado, a empresa desenvolve fechaduras, roldanas e puxadores para construtoras, revendas e projetistas. O diferencial está em ciclo de vida elevado e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Fechaduras', 'Roldanas', 'Puxadores'],
		since: 2018,
		site: 'www.planalto-acessorios-industria.example',
		email: 'contato@planalto-acessorios-industria.example',
		phone: '(11) 5550-1919',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#F2B705"/><path d="M120 14l12 14h-24z" fill="#0F766E"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0F766E" text-anchor="middle" textLength="168.0" lengthAdjust="spacingAndGlyphs">PLANALTO</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">ACESSÓRIOS</text></svg>',
	},
	{
		slug: 'planalto-perfis-industria',
		name: 'Planalto Perfis Indústria',
		street: 800,
		booth: '407',
		segments: ['Esquadrias de alumínio'],
		description:
			'Especializada em janelas maxim-ar e sistemas de alto desempenho, com foco em acabamento premium. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Janelas maxim-ar', 'Sistemas de alto desempenho', 'Portas de giro'],
		since: 2004,
		site: 'www.planalto-perfis-industria.example',
		email: 'contato@planalto-perfis-industria.example',
		phone: '(11) 5550-3877',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#2B2D42"/><path d="M28 52l12-18 12 18z" fill="#EF476F"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="27.1" fill="#2B2D42" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">PLANALTO</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#EF476F" text-anchor="start">PERFIS</text></svg>',
	},
	{
		slug: 'prisma-aluminio-sistemas',
		name: 'Prisma Alumínio Sistemas',
		street: 1000,
		booth: '515',
		segments: ['Esquadrias de alumínio', 'Ferragens e acessórios'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve janelas maxim-ar, esquadrias de correr e perfis anodizados para construtoras, revendas e projetistas. O diferencial está em estanqueidade e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Janelas maxim-ar', 'Esquadrias de correr', 'Perfis anodizados'],
		since: 2004,
		site: 'www.prisma-aluminio-sistemas.example',
		email: 'contato@prisma-aluminio-sistemas.example',
		phone: '(11) 5550-6027',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#FB8B24"/><path d="M120 14l12 14h-24z" fill="#5F0F40"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#5F0F40" text-anchor="middle" textLength="126.0" lengthAdjust="spacingAndGlyphs">PRISMA</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'quartzo-marcenaria-do-brasil',
		name: 'Quartzo Marcenaria do Brasil',
		street: 800,
		booth: '1128',
		segments: ['Madeira'],
		description:
			'Há 31 anos no mercado, a empresa desenvolve janelas em madeira certificada, portas maciças e esquadrias em cumaru e freijó para construtoras, revendas e projetistas. O diferencial está em projetos sob medida e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Janelas em madeira certificada', 'Portas maciças', 'Esquadrias em cumaru e freijó'],
		since: 1995,
		site: 'www.quartzo-marcenaria-do-brasil.example',
		email: 'contato@quartzo-marcenaria-do-brasil.example',
		phone: '(11) 5550-3811',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#7A1F1F" text-anchor="start" textLength="166.6" lengthAdjust="spacingAndGlyphs">QUARTZO</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#C9A227"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">MARCENARIA</text></svg>',
	},
	{
		slug: 'recife-vivo-marcenaria-cia',
		name: 'Recife Vivo Marcenaria & Cia',
		street: 300,
		booth: '1256',
		segments: ['Madeira'],
		description: 'Soluções em folhas laminadas para obras residenciais e comerciais.',
		highlights: ['Folhas laminadas', 'Janelas em madeira certificada', 'Esquadrias em cumaru e freijó'],
		since: 1999,
		site: 'www.recife-vivo-marcenaria-cia.example',
		email: 'contato@recife-vivo-marcenaria-cia.example',
		phone: '(11) 5550-5375',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#003049"/><path d="M28 52l12-18 12 18z" fill="#D62828"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="19.7" fill="#003049" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">RECIFE VIVO</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#D62828" text-anchor="start">MARCENARIA</text></svg>',
	},
	{
		slug: 'recife-vivo-usinagem-industria',
		name: 'Recife Vivo Usinagem Indústria',
		street: 900,
		booth: '749A',
		segments: ['Máquinas e equipamentos'],
		description:
			'Há 31 anos no mercado, a empresa desenvolve centros de usinagem CNC, cortadeiras de vidro e serras de corte duplo para construtoras, revendas e projetistas. O diferencial está em assistência técnica e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Centros de usinagem CNC', 'Cortadeiras de vidro', 'Serras de corte duplo'],
		since: 1995,
		site: 'www.recife-vivo-usinagem-industria.example',
		email: 'contato@recife-vivo-usinagem-industria.example',
		phone: '(11) 5550-4115',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#3A0CA3"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">RU</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="20.0" fill="#3A0CA3" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">RECIFE VIVO</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#4CC9F0" text-anchor="start">USINAGEM</text></svg>',
	},
	{
		slug: 'safira-ferragens-industria',
		name: 'Safira Ferragens Indústria',
		street: 100,
		booth: '1121',
		segments: ['Ferragens e acessórios', 'Fachadas'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve roldanas, fechos e travas e kits para vidro temperado para construtoras, revendas e projetistas. O diferencial está em acabamento refinado e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Roldanas', 'Fechos e travas', 'Kits para vidro temperado'],
		since: 2014,
		site: 'www.safira-ferragens-industria.example',
		email: 'contato@safira-ferragens-industria.example',
		phone: '(11) 5550-6025',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#14213D"/><path d="M28 52l12-18 12 18z" fill="#F28C28"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#14213D" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">SAFIRA</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F28C28" text-anchor="start">FERRAGENS</text></svg>',
	},
	{
		slug: 'safira-perfis',
		name: 'Safira Perfis',
		street: 700,
		booth: '633',
		segments: ['Esquadrias de alumínio', 'Máquinas e equipamentos'],
		description: 'Soluções em esquadrias de correr para obras residenciais e comerciais.',
		highlights: ['Esquadrias de correr', 'Sistemas de alto desempenho', 'Perfis anodizados'],
		since: 2014,
		site: 'www.safira-perfis.example',
		email: 'contato@safira-perfis.example',
		phone: '(11) 5550-8238',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#14213D" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#F28C28" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#14213D" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">SAFIRA</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PERFIS</text></svg>',
	},
	{
		slug: 'serra-azul-esquadrias-pvc-cia',
		name: 'Serra Azul Esquadrias PVC & Cia',
		street: 100,
		booth: '1148',
		segments: ['Esquadrias de PVC'],
		description:
			'Especializada em sistemas de baixa condutividade térmica e perfis com reforço de aço, com foco em conforto acústico. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Sistemas de baixa condutividade térmica', 'Perfis com reforço de aço', 'Janelas de PVC com câmaras múltiplas'],
		since: 1986,
		site: 'www.serra-azul-esquadrias-pvc-cia.example',
		email: 'contato@serra-azul-esquadrias-pvc-cia.example',
		phone: '(11) 5550-9639',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect x="14" y="21" width="48" height="48" rx="6" fill="none" stroke="#2B2D42" stroke-width="4"/><path d="M38 21v48M14 45h48" stroke="#EF476F" stroke-width="4"/><text x="76" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="21.7" fill="#2B2D42" text-anchor="start" textLength="152.0" lengthAdjust="spacingAndGlyphs">SERRA AZUL</text><text x="77" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">ESQUADRIAS PVC</text></svg>',
	},
	{
		slug: 'serra-azul-estruturas',
		name: 'Serra Azul Estruturas',
		street: 900,
		booth: '1138',
		segments: ['Serralheria'],
		description: 'Fabricante de portões automáticos com entrega para todo o Brasil.',
		highlights: ['Portões automáticos', 'Grades de proteção', 'Guarda-corpos de aço'],
		since: 2011,
		site: 'www.serra-azul-estruturas.example',
		email: 'contato@serra-azul-estruturas.example',
		phone: '(11) 5550-7136',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#1D3557"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">SE</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22.0" fill="#1D3557" text-anchor="start" textLength="154.0" lengthAdjust="spacingAndGlyphs">SERRA AZUL</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#E63946" text-anchor="start">ESTRUTURAS</text></svg>',
	},
	{
		slug: 'solaris-pvc',
		name: 'Solaris PVC',
		street: 400,
		booth: '695',
		segments: ['Esquadrias de PVC', 'Serralheria'],
		description: 'Soluções em sistemas de baixa condutividade térmica para obras residenciais e comerciais.',
		highlights: ['Sistemas de baixa condutividade térmica', 'Persianas integradas', 'Janelas de PVC com câmaras múltiplas'],
		since: 2004,
		site: 'www.solaris-pvc.example',
		email: 'contato@solaris-pvc.example',
		phone: '(11) 5550-2094',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#0F766E"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">SP</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0F766E" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">SOLARIS</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F2B705" text-anchor="start">PVC</text></svg>',
	},
	{
		slug: 'solaris-revestimentos',
		name: 'Solaris Revestimentos',
		street: 700,
		booth: '961',
		segments: ['Fachadas', 'Madeira'],
		description:
			'Há 35 anos no mercado, a empresa desenvolve revestimentos em ACM, fachadas unitizadas e sistemas stick para construtoras, revendas e projetistas. O diferencial está em estética arquitetônica e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Revestimentos em ACM', 'Fachadas unitizadas', 'Sistemas stick'],
		since: 1991,
		site: 'www.solaris-revestimentos.example',
		email: 'contato@solaris-revestimentos.example',
		phone: '(11) 5550-6393',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#4CC9F0"/><path d="M120 14l12 14h-24z" fill="#3A0CA3"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#3A0CA3" text-anchor="middle" textLength="147.0" lengthAdjust="spacingAndGlyphs">SOLARIS</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">REVESTIMENTOS</text></svg>',
	},
	{
		slug: 'sudeste-pele-de-vidro-do-brasil',
		name: 'Sudeste Pele de Vidro do Brasil',
		street: 300,
		booth: '943',
		segments: ['Fachadas', 'Serralheria'],
		description:
			'Há 18 anos no mercado, a empresa desenvolve fachadas ventiladas, pele de vidro e sistemas stick para construtoras, revendas e projetistas. O diferencial está em desempenho estrutural e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Fachadas ventiladas', 'Pele de vidro', 'Sistemas stick'],
		since: 2008,
		site: 'www.sudeste-pele-de-vidro-do-brasil.example',
		email: 'contato@sudeste-pele-de-vidro-do-brasil.example',
		phone: '(11) 5550-8536',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><text x="14" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="34.0" fill="#1B4332" text-anchor="start" textLength="166.6" lengthAdjust="spacingAndGlyphs">SUDESTE</text><rect x="14" y="56" width="64" height="6" rx="3" fill="#74C69D"/><text x="14" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="start">PELE DE VIDRO</text></svg>',
	},
	{
		slug: 'sudeste-vidros-industria',
		name: 'Sudeste Vidros Indústria',
		street: 400,
		booth: '392A',
		segments: ['Vidros', 'Esquadrias de PVC'],
		description: 'Soluções em vidros insulados para obras residenciais e comerciais.',
		highlights: ['Vidros insulados', 'Espelhos', 'Laminados acústicos'],
		since: 2011,
		site: 'www.sudeste-vidros-industria.example',
		email: 'contato@sudeste-vidros-industria.example',
		phone: '(11) 5550-1499',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#7A1F1F"/><path d="M28 52l12-18 12 18z" fill="#C9A227"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#7A1F1F" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">SUDESTE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#C9A227" text-anchor="start">VIDROS</text></svg>',
	},
	{
		slug: 'titan-aluminio',
		name: 'Titan Alumínio',
		street: 100,
		booth: '651A',
		segments: ['Esquadrias de alumínio', 'Ferragens e acessórios'],
		description:
			'Há 31 anos no mercado, a empresa desenvolve esquadrias de correr, perfis anodizados e portas de giro para construtoras, revendas e projetistas. O diferencial está em estanqueidade e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Esquadrias de correr', 'Perfis anodizados', 'Portas de giro'],
		since: 1995,
		site: 'www.titan-aluminio.example',
		email: 'contato@titan-aluminio.example',
		phone: '(11) 5550-2990',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#1B4332"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">TA</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1B4332" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">TITAN</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#74C69D" text-anchor="start">ALUMÍNIO</text></svg>',
	},
	{
		slug: 'titan-perfis-industria',
		name: 'Titan Perfis Indústria',
		street: 600,
		booth: '733',
		segments: ['Esquadrias de alumínio'],
		description:
			'Especializada em guarda-corpos de alumínio e esquadrias de correr, com foco em resistência à corrosão. Projetos sob medida e suporte técnico durante toda a obra.',
		highlights: ['Guarda-corpos de alumínio', 'Esquadrias de correr', 'Portas de giro'],
		since: 2014,
		site: 'www.titan-perfis-industria.example',
		email: 'contato@titan-perfis-industria.example',
		phone: '(11) 5550-5273',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="105.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#F2B705">T</tspan><tspan fill="#fff">ITAN</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">PERFIS</text></svg>',
	},
	{
		slug: 'tupa-automacao-do-brasil',
		name: 'Tupã Automação do Brasil',
		street: 1000,
		booth: '1218A',
		segments: ['Vedação e automação', 'Vidros'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve motores para portões, gaxetas e sensores de presença para construtoras, revendas e projetistas. O diferencial está em integração com sistemas de acesso e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Motores para portões', 'Gaxetas', 'Sensores de presença'],
		since: 2014,
		site: 'www.tupa-automacao-do-brasil.example',
		email: 'contato@tupa-automacao-do-brasil.example',
		phone: '(11) 5550-8910',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#14213D"/><path d="M28 52l12-18 12 18z" fill="#F28C28"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#14213D" text-anchor="start" textLength="84.0" lengthAdjust="spacingAndGlyphs">TUPÃ</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#F28C28" text-anchor="start">AUTOMAÇÃO</text></svg>',
	},
	{
		slug: 'vertice-equipamentos-sistemas',
		name: 'Vértice Equipamentos Sistemas',
		street: 600,
		booth: '339',
		segments: ['Máquinas e equipamentos'],
		description:
			'Há 15 anos no mercado, a empresa desenvolve bancadas de montagem, centros de usinagem CNC e serras de corte duplo para construtoras, revendas e projetistas. O diferencial está em produtividade e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Bancadas de montagem', 'Centros de usinagem CNC', 'Serras de corte duplo'],
		since: 2011,
		site: 'www.vertice-equipamentos-sistemas.example',
		email: 'contato@vertice-equipamentos-sistemas.example',
		phone: '(11) 5550-6085',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#003049"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">VE</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#003049" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">VÉRTICE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#D62828" text-anchor="start">EQUIPAMENTOS</text></svg>',
	},
	{
		slug: 'vertice-glass-industria',
		name: 'Vértice Glass Indústria',
		street: 900,
		booth: '1095',
		segments: ['Vidros', 'Esquadrias de alumínio'],
		description:
			'Há 22 anos no mercado, a empresa desenvolve vidros de controle solar, laminados acústicos e vidros curvos para construtoras, revendas e projetistas. O diferencial está em segurança e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Vidros de controle solar', 'Laminados acústicos', 'Vidros curvos'],
		since: 2004,
		site: 'www.vertice-glass-industria.example',
		email: 'contato@vertice-glass-industria.example',
		phone: '(11) 5550-7956',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#1D3557"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">VG</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#1D3557" text-anchor="start" textLength="147.0" lengthAdjust="spacingAndGlyphs">VÉRTICE</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#E63946" text-anchor="start">GLASS</text></svg>',
	},
	{
		slug: 'vitrum-fechaduras-cia',
		name: 'Vitrum Fechaduras & Cia',
		street: 300,
		booth: '1236A',
		segments: ['Ferragens e acessórios'],
		description:
			'Há 15 anos no mercado, a empresa desenvolve kits para vidro temperado, fechos e travas e roldanas para construtoras, revendas e projetistas. O diferencial está em acabamento refinado e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Kits para vidro temperado', 'Fechos e travas', 'Roldanas'],
		since: 2011,
		site: 'www.vitrum-fechaduras-cia.example',
		email: 'contato@vitrum-fechaduras-cia.example',
		phone: '(11) 5550-1087',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><rect width="240" height="90" rx="6" fill="#0B0E17"/><text x="120" y="52" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" text-anchor="middle" textLength="126.0" lengthAdjust="spacingAndGlyphs"><tspan fill="#FB8B24">V</tspan><tspan fill="#fff">ITRUM</tspan></text><text x="120" y="72" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#9aa3b2" text-anchor="middle">FECHADURAS</text></svg>',
	},
	{
		slug: 'vitrum-madeiras',
		name: 'Vitrum Madeiras',
		street: 400,
		booth: '510A',
		segments: ['Madeira'],
		description:
			'Há 12 anos no mercado, a empresa desenvolve deques, janelas em madeira certificada e esquadrias em cumaru e freijó para construtoras, revendas e projetistas. O diferencial está em projetos sob medida e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Deques', 'Janelas em madeira certificada', 'Esquadrias em cumaru e freijó'],
		since: 2014,
		site: 'www.vitrum-madeiras.example',
		email: 'contato@vitrum-madeiras.example',
		phone: '(11) 5550-6585',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><polygon points="40,16 64,30 64,60 40,74 16,60 16,30" fill="#7A1F1F"/><path d="M28 52l12-18 12 18z" fill="#C9A227"/><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#7A1F1F" text-anchor="start" textLength="126.0" lengthAdjust="spacingAndGlyphs">VITRUM</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#C9A227" text-anchor="start">MADEIRAS</text></svg>',
	},
	{
		slug: 'zenit-glass',
		name: 'Zenit Glass',
		street: 500,
		booth: '1119',
		segments: ['Vidros'],
		description:
			'Há 27 anos no mercado, a empresa desenvolve vidros curvos, espelhos e vidros de controle solar para construtoras, revendas e projetistas. O diferencial está em transparência e leveza e em um time dedicado que acompanha cada projeto, do detalhamento à instalação. Conheça as linhas e peça uma proposta no estande.',
		highlights: ['Vidros curvos', 'Espelhos', 'Vidros de controle solar'],
		since: 1999,
		site: 'www.zenit-glass.example',
		email: 'contato@zenit-glass.example',
		phone: '(11) 5550-6100',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><circle cx="40" cy="45" r="27" fill="#0B525B"/><text x="40" y="53" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="22" fill="#fff" text-anchor="middle">ZG</text><text x="78" y="46" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0B525B" text-anchor="start" textLength="105.0" lengthAdjust="spacingAndGlyphs">ZENIT</text><text x="79" y="64" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#FF9F1C" text-anchor="start">GLASS</text></svg>',
	},
	{
		slug: 'zenit-marcenaria',
		name: 'Zenit Marcenaria',
		street: 700,
		booth: '1106',
		segments: ['Madeira'],
		description: 'Fabricante de janelas em madeira certificada com entrega para todo o Brasil.',
		highlights: ['Janelas em madeira certificada', 'Folhas laminadas', 'Portas maciças'],
		since: 1991,
		site: 'www.zenit-marcenaria.example',
		email: 'contato@zenit-marcenaria.example',
		phone: '(11) 5550-5939',
		logoSvg:
			'<svg viewBox="0 0 240 90" aria-hidden="true" focusable="false"><path d="M120 6l22 26h-44z" fill="#F2B705"/><path d="M120 14l12 14h-24z" fill="#0F766E"/><text x="120" y="62" font-family="Montserrat,Arial,sans-serif" font-weight="800" font-size="30.0" fill="#0F766E" text-anchor="middle" textLength="105.0" lengthAdjust="spacingAndGlyphs">ZENIT</text><text x="120" y="80" font-family="Montserrat,Arial,sans-serif" font-weight="600" font-size="10.5" letter-spacing="1.6" fill="#555" text-anchor="middle">MARCENARIA</text></svg>',
	},
];