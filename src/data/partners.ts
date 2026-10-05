// Fonte única dos parceiros — consumida por PartnersSection (abas) e
// PartnersHome (grupos empilhados). A ORDEM daqui é a ordem exibida nos dois.
// `logo` é o nome do arquivo (sem extensão) em public/images/logos.

export interface Partner {
	name: string;
	logo?: string;
	url: string;
	featured?: boolean;
}

export interface PartnerGroup {
	id: string;
	label: string;
	countLabel: string;
	partners: Partner[];
}

import { type Lang } from '../i18n/routes';

export const partnerGroups: PartnerGroup[] = [
	{
		id: 'realizacao',
		label: 'Realização & Local',
		countLabel: 'itens',
		partners: [
			{ name: 'IEG Expo', logo: 'ieg-expo', url: 'https://iegbrasil.com.br/', featured: true },
			{
				name: 'Grupo Contramarco',
				logo: 'contramarco-novo-logo',
				url: 'https://www.contramarco.com/',
				featured: true,
			},
			{ name: 'São Paulo Expo', logo: 'sao-paulo-expo', url: 'https://www.saopauloexpo.com.br/pt/' },
		],
	},
	{
		id: 'eventos',
		label: 'Eventos Simultâneos',
		countLabel: 'eventos',
		partners: [
			{ name: 'Fesqua Vetro', logo: 'fesqua-vetro', url: 'https://fesquavetro.com.br/' },
			{ name: 'Sebraser', logo: 'sebraser', url: 'https://fesqua.com.br/sebraser/' },
			{ name: 'Afeal', logo: 'afeal', url: 'https://afeal.com.br/' },
			{ name: 'VidroSom', logo: 'vidrosom', url: 'https://www.instagram.com/vidrosom_oficial/' },
			{ name: 'Aspec PVC', logo: 'aspec-pvc', url: 'https://aspecpvc.org.br/' },
			{ name: 'Feipat', logo: 'feipat', url: 'https://feipat.com.br/' },
			{ name: 'Fevent', logo: 'fevent', url: 'https://fevent.cl/' },
		],
	},
	{
		id: 'apoio',
		label: 'Apoio Institucional',
		countLabel: 'instituições',
		partners: [
			{ name: 'ABAL', logo: 'abal', url: 'http://abal.org.br/' },
			{ name: 'ABIVIDRO', logo: 'abividro', url: 'https://abividro.org.br/' },
			{ name: 'ABNT', logo: 'abnt', url: 'https://abnt.org.br/' },
			{ name: 'ABRAPE', logo: 'abrape', url: 'https://abrape.com.br/' },
			{ name: 'Achival', logo: 'achival', url: 'https://achival.cl/' },
			{ name: 'Adivipar', logo: 'adivipar', url: 'https://adivipar.com.br/' },
			{ name: 'Afeal', logo: 'afeal', url: 'https://afeal.com.br/' },
			{ name: 'Portal do Alumínio', logo: 'portal-do-aluminio', url: 'http://www.portaldoaluminio.com.br/' },
			{ name: 'Anfaje', logo: 'anfaje', url: 'https://www.anfaje.pt/' },
			{ name: 'Amevec', logo: 'amevec', url: 'https://amevec.mx/' },
			{ name: 'Asbea', logo: 'asbea', url: 'https://www.asbea.org.br/' },
			{ name: 'Ascevi', logo: 'ascevi', url: 'http://www.ascevi.com.br/' },
			{ name: 'Asefave', logo: 'asefave', url: 'https://www.asefave.org/' },
			{ name: 'Aspec PVC', logo: 'aspec-pvc', url: 'https://aspecpvc.org.br/' },
			{ name: 'Venice Travel', logo: 'venice-travel', url: 'https://www.venicetravel.com.br/' },
			{ name: 'Balteus', logo: 'balteus', url: 'https://www.balteus.com.br/' },
			{ name: 'Pro Acústica', logo: 'pro-acustica', url: 'https://www.proacustica.org.br/' },
			{ name: 'CAU/SP', logo: 'cau-sp', url: 'https://causp.gov.br/' },
			{ name: 'Guia do Vidro', logo: 'guia-do-vidro', url: 'https://guiadovidro.com.br/' },
			{ name: 'Guia Fornecedores IC', logo: 'guia-fornecedores', url: 'https://guiafornecedoresic.com.br/' },
			{ name: 'Instituto IDEA', logo: 'instituto-idea', url: 'http://institutoidea.org.br/' },
			{ name: 'INP', logo: 'inp', url: 'http://www.inp.org.br/pt/' },
			{ name: 'Instituto do PVC', logo: 'instituto-do-pvc', url: 'https://pvc.org.br/' },
			{ name: 'SENAI-SP', logo: 'senai-sp', url: 'https://www.sp.senai.br/' },
			{ name: 'Siescomet', logo: 'siescomet', url: 'http://www.siescomet.com.br/' },
			{ name: 'Simvidro', logo: 'simvidro', url: 'https://www.simvidro.com.br/' },
			{ name: 'Sinbevidros', logo: 'sinbevidros', url: 'https://www.sinbevidros.com.br/' },
			{ name: 'Sindividros-RS', logo: 'sindividros-rs', url: 'https://sindividrosrs.com.br/' },
			{ name: 'SindusCon-SP', logo: 'sinduscon-sp', url: 'https://sindusconsp.com.br/' },
			{ name: 'Visite São Paulo', logo: 'visite-sao-paulo', url: 'https://visitesaopaulo.com/' },
		],
	},
	{
		id: 'midia',
		label: 'Parceiros de Mídia',
		countLabel: 'veículos',
		partners: [
			{ name: 'Obras Online', logo: 'obras-online', url: 'https://obrasonline.com.br/' },
			{ name: 'Canal do Serralheiro', logo: 'canal-do-serralheiro', url: 'http://www.canaldoserralheiro.com.br' },
			{ name: 'Fastener World', logo: 'fastener-world', url: 'https://fastener-world.com/' },
			{
				name: 'Fastener World — Global Sourcing',
				logo: 'fastener-world-global',
				url: 'https://fastener-world.com/',
			},
			{ name: 'Feiras & Negócios', logo: 'feiras-e-negocios', url: 'https://www.facebook.com/FeirasNegocios/' },
			{ name: 'Gestão & Negócios', logo: 'gestao-e-negocios', url: 'https://www.facebook.com/FeirasNegocios/' },
			{ name: 'Guia Fornecedores', logo: 'guia-fornecedores', url: 'https://guiafornecedoresic.com.br/' },
			{ name: 'Guia das Persianas', logo: 'guia-das-persianas', url: 'https://guiadaspersianas.com.br/' },
			{ name: 'ArcoWeb / Projeto Design', logo: 'projeto', url: 'https://www.arcoweb.com.br/projetodesign' },
			{ name: 'Tecnologia & Vidro', logo: 'tecnologia-e-vidro', url: 'https://vidros.inf.br/' },
			{ name: 'Ventana', logo: 'ventana', url: 'http://linktr.ee/revistaventana' },
			{ name: 'Vidro Impresso', logo: 'vidro-impresso', url: 'https://vidroimpresso.com.br/' },
			// { name: 'Vano Arq', logo: 'vano-arq', url: 'https://vanoarq.com/' },
			{ name: 'Ventanas y Puertas', logo: 'ventanas-y-puertas', url: 'https://ventanasypuertas.cl/' },
			{
				name: 'Vidrio y Perfil',
				logo: 'vidrio-y-perfil',
				url: 'https://www.vidrioperfil.com/es/edicion-america-latina',
			},
			{ name: 'Cerramientos', logo: 'cerramientos', url: 'https://cerramientos.cl/' },
			{ name: 'Vanotech', logo: 'vanotech', url: 'https://vanoarq.com/vanotech-2/' },
		],
	},
];

// Rótulos dos grupos por idioma (nomes dos parceiros ficam como estão). Sem tradução, cai em pt.
const groupText: Record<string, Partial<Record<Lang, { label: string; countLabel: string }>>> = {
	realizacao: {
		en: { label: 'Organization & Venue', countLabel: 'items' },
		es: { label: 'Realización y sede', countLabel: 'elementos' },
		it: { label: 'Organizzazione e sede', countLabel: 'elementi' },
	},
	eventos: {
		en: { label: 'Concurrent Events', countLabel: 'events' },
		es: { label: 'Eventos simultáneos', countLabel: 'eventos' },
		it: { label: 'Eventi in contemporanea', countLabel: 'eventi' },
	},
	apoio: {
		en: { label: 'Institutional Support', countLabel: 'institutions' },
		es: { label: 'Apoyo institucional', countLabel: 'instituciones' },
		it: { label: 'Supporto istituzionale', countLabel: 'istituzioni' },
	},
	midia: {
		en: { label: 'Media Partners', countLabel: 'outlets' },
		es: { label: 'Socios de medios', countLabel: 'medios' },
		it: { label: 'Media partner', countLabel: 'testate' },
	},
};

export function getPartnerGroups(lang: Lang): PartnerGroup[] {
	return partnerGroups.map((g) => ({ ...g, ...(groupText[g.id]?.[lang] ?? {}) }));
}
