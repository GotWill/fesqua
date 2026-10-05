import type { RouteKey } from '../routes';

// Estrutura do menu (igual em todos os idiomas): rótulos vêm de `labels` por `id`;
// links internos por chave de rota (route(lang, key)); externos ficam como URL.
export interface NavNode {
	id: string;
	route: RouteKey;
	children?: ({ id: string; route: RouteKey } | { id: string; href: string })[];
	/** CTA destacado no rodapé */
	cta?: boolean;
}

export const navTree: NavNode[] = [
	{
		id: 'fesqua',
		route: 'fesqua',
		children: [
			{ id: 'sobreEvento', route: 'sobreEvento' },
			{ id: 'contramarco', href: 'https://www.contramarco.com/' },
		],
	},
	{
		id: 'expositor',
		route: 'expositor',
		children: [
			{ id: 'plantaFeira', route: 'plantaFeira' },
			{ id: 'listaExpositores', route: 'listaExpositores' },
			{ id: 'queroExpor', route: 'queroExpor' },
			{ id: 'manualExpositor', route: 'manualExpositor' },
			{ id: 'primeiraParticipacao', route: 'primeiraParticipacao' },
			{ id: 'viagemHospedagem', route: 'viagemHospedagem' },
			{ id: 'faqExpositores', route: 'faqExpositores' },
		],
	},
	{
		id: 'visitante',
		route: 'visitante',
		children: [
			{ id: 'plantaFeira', route: 'plantaFeira' },
			{ id: 'queroVisitar', route: 'queroVisitar' },
			{ id: 'viagemHospedagem', route: 'viagemHospedagem' },
			{ id: 'faqVisitantes', route: 'faqVisitantes' },
		],
	},
	{
		id: 'programacao',
		route: 'programacao',
		children: [
			{ id: 'enepe', route: 'enepe' },
			{ id: 'encontroAfeal', route: 'encontroAfeal' },
			{ id: 'summitArq', route: 'summitArq' },
			{ id: 'vidrosom', route: 'vidrosom' },
			{ id: 'pvcEmFoco', route: 'pvcEmFoco' },
		],
	},
	{ id: 'embaixadores', route: 'embaixadores' },
	{
		id: 'eventosSimultaneos',
		route: 'eventosSimultaneos',
		children: [
			{ id: 'feipat', href: 'https://feipat.com.br/' },
			{ id: 'fesquaVetro', href: 'https://fesquavetro.com.br/' },
		],
	},
	{
		id: 'imprensa',
		route: 'imprensa',
		children: [
			{ id: 'canalFesqua', route: 'canalFesqua' },
			{ id: 'pressReleases', route: 'pressReleases' },
			{ id: 'saiuNaMidia', route: 'saiuNaMidia' },
		],
	},
	{ id: 'contato', route: 'contato' },
	{ id: 'queroVisitar', route: 'queroVisitar', cta: true },
	{ id: 'queroExpor', route: 'queroExpor', cta: true },
];

interface Labels {
	fesqua: string;
	sobreEvento: string;
	contramarco: string;
	expositor: string;
	plantaFeira: string;
	listaExpositores: string;
	queroExpor: string;
	manualExpositor: string;
	primeiraParticipacao: string;
	viagemHospedagem: string;
	faqExpositores: string;
	visitante: string;
	queroVisitar: string;
	faqVisitantes: string;
	programacao: string;
	enepe: string;
	encontroAfeal: string;
	summitArq: string;
	vidrosom: string;
	pvcEmFoco: string;
	embaixadores: string;
	eventosSimultaneos: string;
	feipat: string;
	fesquaVetro: string;
	imprensa: string;
	canalFesqua: string;
	pressReleases: string;
	saiuNaMidia: string;
	contato: string;
}

export interface ChromeContent {
	labels: Labels;
	// contagem regressiva
	cdLabel: string;
	cdDays: string;
	cdHours: string;
	cdMin: string;
	cdSec: string;
	/** leitor de tela; {d} = dias */
	cdSrBefore: string;
	/** selo compacto; {d} = dias */
	cdChipDays: string;
	cdLive: string;
	cdAfter: string;
	cdChipLive: string;
	cdChipAfter: string;
	// barra superior
	dateFull: string;
	duration: string;
	venueTitle: string;
	addrFull: string;
	addrMid: string;
	addrShort: string;
	simultaneous: string;
	socialLabel: string;
	// barra principal
	brandHome: string;
	shortcutsLabel: string;
	ctaExhibit: string;
	ctaVisit: string;
	menuOpen: string;
	menuLabel: string;
	menuClose: string;
	sidebarLabel: string;
	// sidebar
	when: string;
	where: string;
	dayRange: string;
	monthYear: string;
	durationDays: string;
	hoursWeek: string;
	hoursSat: string;
	address: string;
	// variante descartada (HeaderTopUtilityBar)
	utilDateSub: string;
	utilAddrShort: string;
	// rodapé
	footerNavLabel: string;
	footerNavLabel2: string;
	contactTitle: string;
	copyright: string;
	terms: string;
	privacy: string;
	toTop: string;
}

export const chrome: Record<'pt' | 'en' | 'es' | 'it', ChromeContent> = {
	pt: {
		labels: {
			fesqua: 'Fesqua',
			sobreEvento: 'Sobre o Evento',
			contramarco: 'Sobre o Grupo Contramarco',
			expositor: 'Expositor',
			plantaFeira: 'Planta da Feira',
			listaExpositores: 'Lista de Expositores',
			queroExpor: 'Quero Expor',
			manualExpositor: 'Manual do Expositor',
			primeiraParticipacao: 'Primeira Participação',
			viagemHospedagem: 'Viagem e Hospedagem',
			faqExpositores: 'Dúvidas Frequentes – Expositores',
			visitante: 'Visitante',
			queroVisitar: 'Quero Visitar',
			faqVisitantes: 'Dúvidas Frequentes – Visitantes',
			programacao: 'Programação',
			enepe: 'ENEPE',
			encontroAfeal: 'Encontro AFEAL',
			summitArq: 'Summit Arq',
			vidrosom: 'VIDROSOM',
			pvcEmFoco: 'Esquadrias de PVC em Foco',
			embaixadores: 'Embaixadores',
			eventosSimultaneos: 'Eventos Simultâneos',
			feipat: 'Feipat',
			fesquaVetro: 'Fesqua Vetro',
			imprensa: 'Imprensa',
			canalFesqua: 'Canal Fesqua',
			pressReleases: 'Press Releases',
			saiuNaMidia: 'Saiu na Mídia',
			contato: 'Contato',
		},
		cdLabel: 'Faltam',
		cdDays: 'dias',
		cdHours: 'h',
		cdMin: 'min',
		cdSec: 's',
		cdSrBefore: 'Faltam {d} dias para a abertura da FESQUA',
		cdChipDays: '{d} dias',
		cdLive: 'Ao vivo · A FESQUA está acontecendo agora no São Paulo Expo',
		cdAfter: 'Edição 2028 encerrada · Obrigado a todos — até a próxima!',
		cdChipLive: 'Ao vivo',
		cdChipAfter: 'Encerrado',
		dateFull: '12–15 Set 2028',
		duration: '· 4 dias · Terça a sexta-feira',
		venueTitle: 'Ver no mapa',
		addrFull: '· Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		addrMid: '· Rod. dos Imigrantes, km 1,5 – São Paulo/SP',
		addrShort: '· Rod. dos Imigrantes, km 1,5',
		simultaneous: 'Eventos simultâneos',
		socialLabel: 'Redes sociais',
		brandHome: 'Fesqua',
		shortcutsLabel: 'Atalhos',
		ctaExhibit: 'Quero Expor',
		ctaVisit: 'Quero Visitar',
		menuOpen: 'Abrir menu',
		menuLabel: 'Menu',
		menuClose: 'Fechar menu',
		sidebarLabel: 'Menu principal',
		when: 'Quando',
		where: 'Onde',
		dayRange: '12–15',
		monthYear: 'Set 2028',
		durationDays: '4 dias',
		hoursWeek: 'Qua a sex 13h–20h',
		hoursSat: 'Sáb 11h–18h',
		address: 'Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		utilDateSub: '4 dias · Qua–Sex 13h–20h, Sáb 11h–18h',
		utilAddrShort: 'Rod. dos Imigrantes, SP',
		footerNavLabel: 'Mapa do site',
		footerNavLabel2: 'Mapa do site, continuação',
		contactTitle: 'Fale Conosco',
		copyright: '© 2026 Grupo Contramarco. Todos os direitos reservados.',
		terms: 'Termos de Uso',
		privacy: 'Política de Privacidade',
		toTop: 'Voltar ao topo',
	},
	en: {
		labels: {
			fesqua: 'Fesqua',
			sobreEvento: 'About the Event',
			contramarco: 'About Grupo Contramarco',
			expositor: 'Exhibitor',
			plantaFeira: 'Floor Plan',
			listaExpositores: 'Exhibitor List',
			queroExpor: 'Exhibit',
			manualExpositor: 'Exhibitor Manual',
			primeiraParticipacao: 'First-Time Exhibiting',
			viagemHospedagem: 'Travel and Accommodation',
			faqExpositores: 'FAQ – Exhibitors',
			visitante: 'Visitor',
			queroVisitar: 'Visit',
			faqVisitantes: 'FAQ – Visitors',
			programacao: 'Program',
			enepe: 'ENEPE',
			encontroAfeal: 'AFEAL Meeting',
			summitArq: 'Summit Arq',
			vidrosom: 'VIDROSOM',
			pvcEmFoco: 'PVC Windows in Focus',
			embaixadores: 'Ambassadors',
			eventosSimultaneos: 'Co-located Events',
			feipat: 'Feipat',
			fesquaVetro: 'Fesqua Vetro',
			imprensa: 'Press',
			canalFesqua: 'Fesqua Channel',
			pressReleases: 'Press Releases',
			saiuNaMidia: 'In the Media',
			contato: 'Contact',
		},
		cdLabel: 'Starts in',
		cdDays: 'days',
		cdHours: 'h',
		cdMin: 'min',
		cdSec: 's',
		cdSrBefore: '{d} days until the opening of FESQUA',
		cdChipDays: '{d} days',
		cdLive: 'Live · FESQUA is happening now at São Paulo Expo',
		cdAfter: '2028 edition has ended · Thank you all — see you next time!',
		cdChipLive: 'Live',
		cdChipAfter: 'Ended',
		dateFull: 'Sep 12–15, 2028',
		duration: '· 4 days · Tuesday to Friday',
		venueTitle: 'View on map',
		addrFull: '· Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		addrMid: '· Rod. dos Imigrantes, km 1.5 – São Paulo/SP',
		addrShort: '· Rod. dos Imigrantes, km 1.5',
		simultaneous: 'Co-located events',
		socialLabel: 'Social media',
		brandHome: 'Fesqua',
		shortcutsLabel: 'Shortcuts',
		ctaExhibit: 'Exhibit',
		ctaVisit: 'Visit',
		menuOpen: 'Open menu',
		menuLabel: 'Menu',
		menuClose: 'Close menu',
		sidebarLabel: 'Main menu',
		when: 'When',
		where: 'Where',
		dayRange: '12–15',
		monthYear: 'Sep 2028',
		durationDays: '4 days',
		hoursWeek: 'Wed to Fri 1–8 pm',
		hoursSat: 'Sat 11 am–6 pm',
		address: 'Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		utilDateSub: '4 days · Wed–Fri 1–8 pm, Sat 11 am–6 pm',
		utilAddrShort: 'Rod. dos Imigrantes, SP',
		footerNavLabel: 'Site map',
		footerNavLabel2: 'Site map, continued',
		contactTitle: 'Contact Us',
		copyright: '© 2026 Grupo Contramarco. All rights reserved.',
		terms: 'Terms of Use',
		privacy: 'Privacy Policy',
		toTop: 'Back to top',
	},
	es: {
		labels: {
			fesqua: 'Fesqua',
			sobreEvento: 'Sobre el Evento',
			contramarco: 'Sobre Grupo Contramarco',
			expositor: 'Expositor',
			plantaFeira: 'Plano de la Feria',
			listaExpositores: 'Lista de Expositores',
			queroExpor: 'Quiero Exponer',
			manualExpositor: 'Manual del Expositor',
			primeiraParticipacao: 'Primera Participación',
			viagemHospedagem: 'Viaje y Alojamiento',
			faqExpositores: 'Preguntas Frecuentes – Expositores',
			visitante: 'Visitante',
			queroVisitar: 'Quiero Visitar',
			faqVisitantes: 'Preguntas Frecuentes – Visitantes',
			programacao: 'Programa',
			enepe: 'ENEPE',
			encontroAfeal: 'Encuentro AFEAL',
			summitArq: 'Summit Arq',
			vidrosom: 'VIDROSOM',
			pvcEmFoco: 'Ventanas de PVC en Foco',
			embaixadores: 'Embajadores',
			eventosSimultaneos: 'Eventos Simultáneos',
			feipat: 'Feipat',
			fesquaVetro: 'Fesqua Vetro',
			imprensa: 'Prensa',
			canalFesqua: 'Canal Fesqua',
			pressReleases: 'Notas de Prensa',
			saiuNaMidia: 'En los Medios',
			contato: 'Contacto',
		},
		cdLabel: 'Faltan',
		cdDays: 'días',
		cdHours: 'h',
		cdMin: 'min',
		cdSec: 's',
		cdSrBefore: 'Faltan {d} días para la apertura de FESQUA',
		cdChipDays: '{d} días',
		cdLive: 'En vivo · FESQUA está sucediendo ahora en São Paulo Expo',
		cdAfter: 'Edición 2028 finalizada · Gracias a todos — ¡hasta la próxima!',
		cdChipLive: 'En vivo',
		cdChipAfter: 'Finalizado',
		dateFull: '12–15 sep 2028',
		duration: '· 4 días · De martes a viernes',
		venueTitle: 'Ver en el mapa',
		addrFull: '· Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		addrMid: '· Rod. dos Imigrantes, km 1,5 – São Paulo/SP',
		addrShort: '· Rod. dos Imigrantes, km 1,5',
		simultaneous: 'Eventos simultáneos',
		socialLabel: 'Redes sociales',
		brandHome: 'Fesqua',
		shortcutsLabel: 'Accesos directos',
		ctaExhibit: 'Quiero Exponer',
		ctaVisit: 'Quiero Visitar',
		menuOpen: 'Abrir menú',
		menuLabel: 'Menú',
		menuClose: 'Cerrar menú',
		sidebarLabel: 'Menú principal',
		when: 'Cuándo',
		where: 'Dónde',
		dayRange: '12–15',
		monthYear: 'Sep 2028',
		durationDays: '4 días',
		hoursWeek: 'Mié a vie 13:00–20:00',
		hoursSat: 'Sáb 11:00–18:00',
		address: 'Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		utilDateSub: '4 días · Mié–Vie 13:00–20:00, Sáb 11:00–18:00',
		utilAddrShort: 'Rod. dos Imigrantes, SP',
		footerNavLabel: 'Mapa del sitio',
		footerNavLabel2: 'Mapa del sitio, continuación',
		contactTitle: 'Contáctenos',
		copyright: '© 2026 Grupo Contramarco. Todos los derechos reservados.',
		terms: 'Términos de Uso',
		privacy: 'Política de Privacidad',
		toTop: 'Volver arriba',
	},
	it: {
		labels: {
			fesqua: 'Fesqua',
			sobreEvento: "Sull'Evento",
			contramarco: 'Sul Grupo Contramarco',
			expositor: 'Espositore',
			plantaFeira: 'Pianta della Fiera',
			listaExpositores: 'Elenco Espositori',
			queroExpor: 'Voglio Esporre',
			manualExpositor: "Manuale dell'Espositore",
			primeiraParticipacao: 'Prima Partecipazione',
			viagemHospedagem: 'Viaggio e Alloggio',
			faqExpositores: 'Domande Frequenti – Espositori',
			visitante: 'Visitatore',
			queroVisitar: 'Voglio Visitare',
			faqVisitantes: 'Domande Frequenti – Visitatori',
			programacao: 'Programma',
			enepe: 'ENEPE',
			encontroAfeal: 'Incontro AFEAL',
			summitArq: 'Summit Arq',
			vidrosom: 'VIDROSOM',
			pvcEmFoco: 'Serramenti in PVC in Primo Piano',
			embaixadores: 'Ambasciatori',
			eventosSimultaneos: 'Eventi Simultanei',
			feipat: 'Feipat',
			fesquaVetro: 'Fesqua Vetro',
			imprensa: 'Stampa',
			canalFesqua: 'Canale Fesqua',
			pressReleases: 'Comunicati Stampa',
			saiuNaMidia: 'Sui Media',
			contato: 'Contatti',
		},
		cdLabel: 'Mancano',
		cdDays: 'giorni',
		cdHours: 'h',
		cdMin: 'min',
		cdSec: 's',
		cdSrBefore: 'Mancano {d} giorni all’apertura di FESQUA',
		cdChipDays: '{d} giorni',
		cdLive: 'In diretta · FESQUA si svolge ora al São Paulo Expo',
		cdAfter: 'Edizione 2028 conclusa · Grazie a tutti — alla prossima!',
		cdChipLive: 'In diretta',
		cdChipAfter: 'Concluso',
		dateFull: '12–15 set 2028',
		duration: '· 4 giorni · Da martedì a venerdì',
		venueTitle: 'Vedi sulla mappa',
		addrFull: '· Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		addrMid: '· Rod. dos Imigrantes, km 1,5 – São Paulo/SP',
		addrShort: '· Rod. dos Imigrantes, km 1,5',
		simultaneous: 'Eventi simultanei',
		socialLabel: 'Social network',
		brandHome: 'Fesqua',
		shortcutsLabel: 'Collegamenti rapidi',
		ctaExhibit: 'Voglio Esporre',
		ctaVisit: 'Voglio Visitare',
		menuOpen: 'Apri menu',
		menuLabel: 'Menu',
		menuClose: 'Chiudi menu',
		sidebarLabel: 'Menu principale',
		when: 'Quando',
		where: 'Dove',
		dayRange: '12–15',
		monthYear: 'Set 2028',
		durationDays: '4 giorni',
		hoursWeek: 'Mer–ven 13:00–20:00',
		hoursSat: 'Sab 11:00–18:00',
		address: 'Rod. dos Imigrantes, São Paulo - SP, 04329-900',
		utilDateSub: '4 giorni · Mer–Ven 13:00–20:00, Sab 11:00–18:00',
		utilAddrShort: 'Rod. dos Imigrantes, SP',
		footerNavLabel: 'Mappa del sito',
		footerNavLabel2: 'Mappa del sito, continua',
		contactTitle: 'Contattaci',
		copyright: '© 2026 Grupo Contramarco. Tutti i diritti riservati.',
		terms: 'Termini di Utilizzo',
		privacy: 'Informativa sulla Privacy',
		toTop: 'Torna su',
	},
};
