// Única fonte dos endereços do site. Menu, rodapé, seletor de idioma e hreflang leem daqui.
// `page: false` = link que o menu já tem mas a página ainda não existe (continua 404, como hoje).
export const LANGS = ['pt', 'en', 'es', 'it'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'pt';

type Slugs = Record<Lang, string>;
interface Route {
	slugs: Slugs;
	page: boolean;
}
const r = (pt: string, en: string, es: string, it: string, page = true): Route => ({ slugs: { pt, en, es, it }, page });

export const routes = {
	home: r('', '', '', ''),
	fesqua: r('fesqua', 'fesqua', 'fesqua', 'fesqua', false),
	sobreEvento: r('sobre-o-evento', 'about-the-event', 'sobre-el-evento', 'sul-evento'),
	expositor: r('expositor', 'exhibitor', 'expositor', 'espositore', false),
	plantaFeira: r('planta-da-feira', 'floor-plan', 'plano-de-la-feria', 'pianta-della-fiera'),
	listaExpositores: r('lista-de-expositores', 'exhibitor-list', 'lista-de-expositores', 'elenco-espositori'),
	queroExpor: r('quero-expor', 'exhibit', 'quiero-exponer', 'voglio-esporre'),
	manualExpositor: r('manual-do-expositor', 'exhibitor-manual', 'manual-del-expositor', 'manuale-espositore', false),
	primeiraParticipacao: r('primeira-participacao', 'first-time-exhibiting', 'primera-participacion', 'prima-partecipazione'),
	viagemHospedagem: r('viagem-e-hospedagem', 'travel-and-accommodation', 'viaje-y-alojamiento', 'viaggio-e-alloggio'),
	faqExpositores: r('duvidas-frequentes-expositores', 'exhibitor-faq', 'preguntas-frecuentes-expositores', 'domande-frequenti-espositori'),
	visitante: r('visitante', 'visitor', 'visitante', 'visitatore', false),
	queroVisitar: r('quero-visitar', 'visit', 'quiero-visitar', 'voglio-visitare', false),
	faqVisitantes: r('duvidas-frequentes-visitantes', 'visitor-faq', 'preguntas-frecuentes-visitantes', 'domande-frequenti-visitatori'),
	programacao: r('programacao', 'program', 'programa', 'programma', false),
	enepe: r('enepe', 'enepe', 'enepe', 'enepe', false),
	encontroAfeal: r('encontro-afeal', 'afeal-meeting', 'encuentro-afeal', 'incontro-afeal', false),
	summitArq: r('summit-arq', 'summit-arq', 'summit-arq', 'summit-arq', false),
	vidrosom: r('vidrosom', 'vidrosom', 'vidrosom', 'vidrosom', false),
	pvcEmFoco: r('esquadrias-de-pvc-em-foco', 'pvc-windows-in-focus', 'ventanas-de-pvc-en-foco', 'serramenti-in-pvc-in-primo-piano', false),
	embaixadores: r('embaixadores', 'ambassadors', 'embajadores', 'ambasciatori'),
	eventosSimultaneos: r('eventos-simultaneos', 'co-located-events', 'eventos-simultaneos', 'eventi-simultanei', false),
	imprensa: r('imprensa', 'press', 'prensa', 'stampa', false),
	canalFesqua: r('canal-fesqua', 'fesqua-channel', 'canal-fesqua', 'canale-fesqua', false),
	pressReleases: r('press-releases', 'press-releases', 'notas-de-prensa', 'comunicati-stampa', false),
	saiuNaMidia: r('saiu-na-midia', 'in-the-media', 'en-los-medios', 'sui-media', false),
	contato: r('contato', 'contact', 'contacto', 'contatti'),
	privacidade: r('privacy-policy', 'privacy-policy', 'politica-de-privacidad', 'informativa-sulla-privacy'),
} as const satisfies Record<string, Route>;

export type RouteKey = keyof typeof routes;
