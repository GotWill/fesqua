// Conteúdo de "VISITANTES – DÚVIDAS FREQUENTES".
// Texto copiado literalmente do documento enviado — NÃO corrigir ortografia, datas nem números aqui.
// (A gramática de "Não serão emitidos Certificado…" e as datas da pergunta 10 são do texto original.)

// Estrutura por idioma: ver `content` no fim do arquivo (pt = texto original; en/es/it = traduções).
// O título não veio no documento: foi montado seguindo o padrão da página de expositores.

import type { Block, Faq } from "./faq-visitantes/shared";
import { MORE_INFO_URL } from "./faq-visitantes/shared";
import { faqEn } from "./faq-visitantes/en";
import { faqEs } from "./faq-visitantes/es";
import { faqIt } from "./faq-visitantes/it";
import type { Lang } from "../i18n/utils";

export { MORE_INFO_URL };
export type { Block, Faq };


const faqPt: Faq[] = [
  {
    n: 1,
    q: "Recebi minha credencial antecipada. Preciso fazer o credenciamento no local?",
    blocks: [
      {"type": "p", "text": "Não. A credencial antecipada permite entrar no evento sem a necessidade de fazer novo cadastro no balcão de credenciamento."},
    ],
  },
  {
    n: 2,
    q: "Não recebi minha credencial pelos correios, como devo proceder?",
    blocks: [
      {"type": "p", "text": "Caso não receba a sua credencial até o dia do evento, você poderá efetuar o seu pré-credenciamento gratuito no site do evento e imprimir a sua credencial nos totens de autoatendimento disponibilizados na entrada da feira."},
    ],
  },
  {
    n: 3,
    q: "Posso fazer o credenciamento no local do evento?",
    blocks: [
      {"type": "p", "text": "Sim, porém, para facilitar a sua entrada, recomendamos que efetue o seu pré-credenciamento pelo site. Assim, poderá emitir a sua credencial por meio dos totens de autoatendimento localizados na entrada da feira."},
    ],
  },
  {
    n: 4,
    q: "É permitida a entrada de menores de idade?",
    blocks: [
      {"type": "p", "text": "Por questões de segurança não é permitida a entrada de menores de 16 anos, com exceção de bebês lactantes com até 1 ano."},
    ],
  },
  {
    n: 5,
    q: "Posso entrar no evento trajando regata, chinelo ou bermuda?",
    blocks: [
      {"type": "p", "text": "Não. Recomendamos a utilização de roupas e calçados fechados para visitar a feira."},
    ],
  },
  {
    n: 6,
    q: "É permitida a entrada de estudantes?",
    blocks: [
      {"type": "p", "text": "Sim, é permitida a entrada de estudante, respeitando a restrição de idade mínima de 16 anos."},
    ],
  },
  {
    n: 7,
    q: "Como faço para chegar ao evento?",
    blocks: [
      {"type": "labeled", "label": "Metrô:", "text": "O São Paulo Expo está a 850m da estação Jabaquara. Para a sua comodidade disponibilizaremos transfer gratuito durante os dias de evento. Saindo da estação Santos Imigrantes até o local do evento."},
      {"type": "hours", "title": "Horário de Atendimento do Transfer Gratuito", "items": ["🕐 Quarta a sexta: 12h às 21h", "🕐 Sábado: 10h às 19h"]},
      {"type": "labeled", "label": "Taxi:", "text": "Centrais de taxi serão disponibilizadas nos períodos de feira. A partir da estação do metrô, pode-se tomar um taxi até o São Paulo Expo."},
    ],
  },
  {
    n: 8,
    q: "O evento possui estacionamento no local?",
    blocks: [
      {"type": "p", "text": "Sim, o evento possui estacionamento para mais de 4.500 veículos. A tabela com os preços oficiais está disponível no site www.saopauloexpo.com.br.", "link": {"text": "www.saopauloexpo.com.br", "href": "https://www.saopauloexpo.com.br"}},
    ],
  },
  {
    n: 9,
    q: "Eu recebo um Certificado de Participação?",
    blocks: [
      {"type": "p", "text": "Não serão emitidos Certificado de Participação para os visitantes do evento."},
    ],
  },
  {
    n: 10,
    q: "Haverá guarda-volumes no local?",
    blocks: [
      {"type": "p", "text": "Sim. O evento disponibilizará guarda-volumes localizado na entrada da feira."},
      {"type": "p", "text": "Todos os expositores e visitantes podem utilizar os serviços do Malex para guardar seus pertences e circular pela feira com toda praticidade e conforto."},
      {"type": "labeled", "label": "Valor:", "text": "R$ 25,00 (vinte e cinco reais) por volume."},
      {"type": "labeled", "label": "Forma de Pagamento:", "text": "Dinheiro, Cartão de Débito ou Crédito."},
      {"type": "labeled", "label": "Serão aceitas:", "text": "Bolsas, mochilas e malas."},
      {"type": "labeled", "label": "Não serão permitidas:", "text": "Carteiras e bolsas de mão soltas por medida de segurança."},
      {"type": "labeled", "label": "Horário de funcionamento do Malex:", "text": "14 a 16/9 das 12h às 20h30 e 17/9 das 10h às 18h30 somente nos dias de realização do evento."},
    ],
  },
  {
    n: 11,
    q: "Existem caixas eletrônicos no local?",
    blocks: [
      {"type": "p", "text": "Não, este serviço não está disponível no local."},
    ],
  },
  {
    n: 12,
    q: "O local possui acesso à internet e tomadas?",
    blocks: [
      {"type": "p", "text": "Não, estes serviços não estão disponíveis no local."},
    ],
  },
];

export interface FaqContent {
  title: [string, string];   // [linha A (sem o " –"), linha B]
  metaTitle: string;
  metaDesc: string;
  jump: string;              // texto do botão "ir para uma pergunta"
  navLabel: string;          // aria-label da lista de perguntas
  faq: Faq[];
}

export const content: Record<Lang, FaqContent> = {
  pt: {
    title: ["VISITANTES", "DÚVIDAS FREQUENTES"],
    metaTitle: "Visitantes – Dúvidas Frequentes — FESQUA",
    metaDesc: "Planeje sua visita à FESQUA! Encontre respostas rápidas sobre emissão de credenciais, gratuidade para profissionais, endereço, estacionamento e serviços.",
    jump: "Ir para uma pergunta",
    navLabel: "Perguntas",
    faq: faqPt,
  },
  en: {
    title: ["VISITORS", "FREQUENTLY ASKED QUESTIONS"],
    metaTitle: "Visitors – Frequently Asked Questions — FESQUA",
    metaDesc: "Plan your visit to FESQUA! Find quick answers about badge issuance, free entry for professionals, address, parking and services.",
    jump: "Jump to a question",
    navLabel: "Questions",
    faq: faqEn,
  },
  es: {
    title: ["VISITANTES", "PREGUNTAS FRECUENTES"],
    metaTitle: "Visitantes – Preguntas Frecuentes — FESQUA",
    metaDesc: "¡Planifique su visita a FESQUA! Encuentre respuestas rápidas sobre la emisión de credenciales, entrada gratuita para profesionales, dirección, estacionamiento y servicios.",
    jump: "Ir a una pregunta",
    navLabel: "Preguntas",
    faq: faqEs,
  },
  it: {
    title: ["VISITATORI", "DOMANDE FREQUENTI"],
    metaTitle: "Visitatori – Domande Frequenti — FESQUA",
    metaDesc: "Pianifica la tua visita a FESQUA! Trova risposte rapide su rilascio dei badge, ingresso gratuito per i professionisti, indirizzo, parcheggio e servizi.",
    jump: "Vai a una domanda",
    navLabel: "Domande",
    faq: faqIt,
  },
};
