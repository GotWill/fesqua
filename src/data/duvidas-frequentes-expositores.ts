// Conteúdo de "EXPOSITORES – DÚVIDAS FREQUENTES".
// Texto copiado literalmente do documento enviado — NÃO corrigir ortografia, datas nem números aqui.
// (Os erros de português e as datas de 2026 são do texto original e ficam como estão.)

// Estrutura por idioma: ver `content` no fim do arquivo. O bloco pt é o texto original;
// en/es/it são traduções (se faltar tradução, a view cai em pt via pick()).

import { MAP_URL, type Block, type Faq } from "./faq-expositores/shared";
import { faqEn } from "./faq-expositores/en";
import { faqEs } from "./faq-expositores/es";
import { faqIt } from "./faq-expositores/it";
import type { Lang } from "../i18n/utils";

export { MAP_URL };
export type { Block, Faq };

const faqPt: Faq[] = [
  {
    n: 1,
    q: "Onde eu encontro todas as normas e regulamentos para minha participação no evento?",
    blocks: [
      {"type": "p", "text": "Todas as normas específicas, bem como, as orientações quanto ao recolhimento de taxas obrigatórias estarão disponíveis no Portal Eletrônico do Expositor. Você receberá seu login e senha de acesso ao site após o envio do contrato formalizado."},
    ],
  },
  {
    n: 2,
    q: "A partir de qual data as normas especificadas estarão disponíveis no Manual do Expositor?",
    blocks: [
      {"type": "p", "text": "As normas do evento são disponibilizadas no portal eletrônico do expositor sempre 90 dias antes do início da data de montagem."},
    ],
  },
  {
    n: 3,
    q: "Quais são as datas/horários de montagem e desmontagem?",
    blocks: [
      {"type": "table", "title": "AGENDA DA FEIRA – FESQUA", "rows": [{"label": "MONTAGEM", "value": "A partir 5,6,7 e 8 de setembro / SÁB – DOM – SEG 8H – 20H"}, {"label": "REALIZAÇÃO", "value": "09, 10, 11 / QUA – QUI – SEX 13H – 20H & 12 de Setembro / SÁB das 11H 18H"}, {"label": "DESMONTAGEM", "value": "A partir de 12 / SÁB ás 21:30 até 13 de Setembro / DOM ÀS 11H"}, {"label": "DECORAÇÃO DO ESTANDE", "value": "8 de Setembro à partir das 17H – 22H"}]},
      {"type": "p", "text": "Será expressamente proibida a entrada de pessoas trajando bermuda, regata ou chinelo, de menores de 16 (dezesseis) anos, mesmo acompanhados de seus responsáveis. Exceto lactantes até no máximo 01 ano de idade."},
    ],
  },
  {
    n: 4,
    q: "Existe algum sindicato das montadoras?",
    blocks: [
      {"type": "p", "text": "Sim, sugerimos contratar montadoras filiadas ao SINDIPROM:"},
      {"type": "contact", "org": "SINDIPROM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3120-7099", "href": "tel:+551131207099", "suffix": "."}, {"prefix": "E-mail: ", "link": "sindiprom@sindiprom.org.br", "href": "mailto:sindiprom@sindiprom.org.br"}, {"prefix": "Site: ", "link": "www.sindiprom.org.br", "href": "https://www.sindiprom.org.br", "external": true}]},
    ],
  },
  {
    n: 5,
    q: "Os caminhões podem entrar no Pavilhão durante todo o período de montagem?",
    blocks: [
      {"type": "p", "text": "O acesso deverá ser feito pelo portão de serviços (Rua Miguel Estéfano, altura do nº 3000, em frente ao portão principal do Jardim Botânico)."},
      {"type": "p", "text": "É permitido a entrada dos caminhões 1º dia de montagem no pavilhão somente para descarregar."},
    ],
  },
  {
    n: 6,
    q: "Quais os documentos necessários para a montadora poder acessar o Pavilhão para iniciar a montagem do meu estande?",
    blocks: [
      {"type": "p", "text": "Para entrar no pavilhão, a montadora / expositor deverá entregar as vias originais dos documentos abaixo:"},
      {"type": "list", "items": ["Termo de responsabilidade (carimbado e assinado) tanto pelo expositor quanto pela montadora;", "ART ou RRT execução do projeto e elétrica do estande com o pagamento do recolhimento (a data que deve constar na ART / RRT vai desde o primeiro dia de montagem até o último dia da desmontagem do evento);", "Cópia do projeto;", "Cheque caução para não filiados ao SINDIPROM, ou o comprovante de filiação para os filiados ao SINDIPROM."]},
    ],
  },
  {
    n: 7,
    q: "Qual a idade mínima permitida no Pavilhão durante a montagem e desmontagem?",
    blocks: [
      {"type": "p", "text": "Nos períodos de montagem e desmontagem não é permitida a entrada de menores de 18 anos de idade."},
    ],
  },
  {
    n: 8,
    q: "Qual o endereço do Pavilhão onde acontecerá o evento?",
    blocks: [
      {"type": "place", "text": "São Paulo Expo Exhibition & Convention Center"},
      {"type": "p", "text": "Entrada de Serviços: Rodovia dos Imigrantes, km 1,5 – São Paulo – SP"},
      {"type": "maplink", "text": "Clique aqui para ver o mapa.", "href": MAP_URL},
    ],
  },
  {
    n: 9,
    q: "Quais documentos eu devo apresentar na entrada do evento?",
    blocks: [
      {"type": "p", "text": "Para acessar o evento, você deverá fazer o seu credenciamento e de seus prestadores de serviços pelo portal do expositor e será solicitada a apresentação de RG para a retirada das credenciais."},
    ],
  },
  {
    n: 10,
    q: "Como proceder para emitir a nota fiscal de remessa para exposição?",
    blocks: [
      {"type": "p", "text": "A nota fiscal para envio das mercadorias a serem expostas deverá ser emitida em nome do próprio expositor com seu CNPJ e Inscrição Estadual e contendo dados complementares:\n– Mercadoria destinada a exposição na feira Fesqua que acontecerá ______/______/_________, no São Paulo Expo – Rodovia dos Imigrantes Km 1,5 – Vila Água Funda / São Paulo – CEP: 04329-900."},
      {"type": "p", "text": "Apenas o endereço informado na nota deverá ser do pavilhão onde acontecerá o evento."},
    ],
  },
  {
    n: 11,
    q: "Existe um horário específico para abastecimento e manutenção durante a realização do evento?",
    blocks: [
      {"type": "p", "text": "Sim. É autorizada a manutenção do estande apenas até uma hora antes do horário de abertura do evento."},
    ],
  },
  {
    n: 12,
    q: "Durante a montagem e desmontagem do evento é obrigatório o uso de EPI – Equipamento de Proteção Individual?",
    blocks: [
      {"type": "p", "text": "Sim, o uso de EPI é obrigatório para todos que acessarem o Pavilhão durante o período de montagem e desmontagem."},
    ],
  },
  {
    n: 13,
    q: "Posso entrar de bermuda e/ou chinelo durante a montagem e desmontagem?",
    blocks: [
      {"type": "p", "text": "Não é permitida a entrada vestindo bermuda, saia, shorts ou calçado aberto durante os períodos de montagem, decoração e desmontagem do evento."},
    ],
  },
  {
    n: 14,
    q: "Como acesso o Portal do Expositor?",
    blocks: [
      {"type": "p", "text": "Através do link contendo o login e operador enviado para o E-mail disponível em contrato."},
      {"type": "p", "text": "Seu usuário e senha serão fornecidos automaticamente após a validação do contrato."},
    ],
  },
  {
    n: 15,
    q: "Comprei estande com montagem básica. Qual é a montadora oficial do evento?",
    blocks: [
      {"type": "p", "text": "DMR Karam"},
    ],
  },
  {
    n: 16,
    q: "Como cadastro a montadora?",
    blocks: [
      {"type": "p", "text": "O contato da montadora oficial está disponível no portal do expositor em serviços oficiais."},
    ],
  },
  {
    n: 17,
    q: "Devo encaminhar o projeto do meu estande para análise?",
    blocks: [
      {"type": "p", "text": "Sim, o projeto deve ser encaminhado ao E-mail do responsável técnico."},
      {"type": "p", "text": "45 dias antes do início da montagem para a devida análise de alturas e recuos."},
      {"type": "p", "text": "O envio de toda documentação é OBRIGATÓRIA conforme orientação contida no manual do expositor."},
    ],
  },
  {
    n: 18,
    q: "Quero contratar serviços extras. Como devo proceder?",
    blocks: [
      {"type": "labeled", "label": "Expositor:", "text": "Existem vários serviços adicionais disponíveis para contratação por meio do portal eletrônico do Expositor."},
      {"type": "labeled", "label": "Montadora:", "text": "Em caso de excedente de energia, ponto de hidráulica e ponto de ar comprimido é necessário que a montadora informe o expositor, para que a solicitação seja realizada no portal eletrônico na opção formulários."},
    ],
  },
  {
    n: 19,
    q: "Como devo proceder se perdi o prazo para contratar serviços extras?",
    blocks: [
      {"type": "p", "text": "Após o prazo, as solicitações devem ser feitas pelo e-mail."},
    ],
  },
  {
    n: 20,
    q: "Qual a cota de credenciais gratuitas?",
    blocks: [
      {"type": "labeled", "label": "Expositor:", "text": "A quantidade de credenciais gratuitas varia de acordo com a metragem do seu estande. Esta informação está disponível no portal eletrônico do expositor. Após incluir as credenciais no sistema, o próprio Expositor devidamente identificado, ou um portador identificado e autorizado por carta, deverá retirar as credenciais no CAEX a partir do 1º dia de montagem."},
      {"type": "warn", "text": "É TERMINANTEMENTE PROÍBIDO CADASTRAR PRESTADOR DE SERVIÇOS E/OU MONTADORES COMO EXPOSITOR, O EXPOSITOR PODERÁ SER MULTADO PELA FISCALIZAÇÃO DO MINISTÉRIO DO TRABALHO."},
      {"type": "labeled", "label": "Prestadora de Serviços / Montadora:", "text": "As credenciais da montadora não são gratuitas e todas deverão serem solicitadas e pagas pelo portal eletrônico do prestador. montadoras filiadas ao SINDIPROM são isentas do pagamento, desde que faça a solicitação das credenciais pelo Manual Eletrônico e, no momento da retirada, entregue cópia das carteirinhas no CAEX – Centro de Atendimento ao Expositor e comprovante de pagamento da mensalidade do mês vigente."},
      {"type": "labeled", "label": "Obs. Geral:", "text": "Expirado o prazo do site, todas as solicitações de inclusão ou alteração deverão ser feitas pelo E-mail."},
    ],
  },
  {
    n: 21,
    q: "Como preencho os Dados de Divulgação?",
    blocks: [
      {"type": "p", "text": "Acesse o portal eletrônico do expositor no ícone formulários."},
      {"type": "warn", "label": "ATENÇÃO:", "text": "Esse formulário tem prazo de preenchimento reduzido por conta da demanda de tempo para a configuração do Catálogo Oficial do Evento. O prazo para preenchimento está indicado no portal eletrônico do expositor em frente a numeração de cada formulário."},
    ],
  },
  {
    n: 22,
    q: "Qual o procedimento quando perder ou esquecer a credencial?",
    blocks: [
      {"type": "p", "text": "O solicitante deverá comparecer ao CAEX. A 2ª via terá um custo por credencial extra emitida conforme tabela vigente."},
    ],
  },
  {
    n: 23,
    q: "Qual o procedimento para contratar linha telefônica ou internet?",
    blocks: [
      {"type": "p", "text": "O expositor deverá entrar em contato com a operadora do pavilhão (São Paulo Expo) onde acontecerá o evento:"},
      {"type": "contact", "org": "HIPERNET TELECOM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3077-5500", "href": "tel:+551130775500"}, {"prefix": "E-mail: ", "link": "feirasspo@hthnet.net", "href": "mailto:feirasspo@hthnet.net"}]},
    ],
  },
  {
    n: 24,
    q: "Há Segurança no evento ou devo contratar o serviço para o meu estande?",
    blocks: [
      {"type": "p", "text": "A segurança do evento é responsável pelas áreas comuns e controles de acesso. Assim, não é responsabilidade da empresa oficial de segurança da feira zelar pelos produtos expostos nos estandes."},
      {"type": "p", "text": "A segurança para o estande pode ser contratada diretamente pelo portal eletrônico do expositor com nossa empresa de segurança oficial, ou por outra empresa à livre escolha do expositor, estando ciente que, para a contratação de outra empresa que não seja a oficial do evento, requer a compra de uma credencial de segurança que será entregue no CAEX mediante a apresentação da seguinte documentação do profissional indicado:"},
      {"type": "list", "items": ["Carta de indicação da empresa de segurança;", "Comprovante de indicação do expositor, caso não tenha feito pelo portal eletrônico;", "Cópia simples de RG e CPF;", "Atestado de antecedentes criminais;", "Cópia simples do certificado de conclusão do curso de segurança com prazo de validade vigente;", "Cópia do curso de reciclagem, se for o caso."]},
    ],
  },
  {
    n: 25,
    q: "Será disponibilizado algum serviço de carregador nos Pavilhões?",
    blocks: [
      {"type": "p", "text": "A Fiera Milano Brasil não disponibiliza esse tipo de serviço."},
    ],
  },
  {
    n: 26,
    q: "Qual é o tipo de voltagem elétrica utilizada nos pavilhões?",
    blocks: [
      {"type": "p", "text": "A tensão disponível no pavilhão é 380V trifásico, podendo ser transformado em 220v monofásico pelo eletricista/técnico da montadora e o custo é por KVA. Qualquer alteração de voltagem deve ser provida pela montadora."},
    ],
  },
  {
    n: 27,
    q: "É permitido demonstração de áudio e vídeo durante a realização do evento?",
    blocks: [
      {"type": "p", "text": "É terminantemente proibida a utilização de equipamentos sonoros durante toda a realização do   evento, isto inclui reprodução de músicas, áudios, trilhas sonoras ou quaisquer outros artifícios sonoros, sendo ao vivo ou gravado."},
    ],
  },
  {
    n: 28,
    q: "Qual é o procedimento para envio de produtos para o evento?",
    blocks: [
      {"type": "p", "text": "É de responsabilidade exclusiva do Expositor, cumprir as exigências legais relativas aos procedimentos para remessa de mercadorias, equipamentos, produtos, utensílios etc."},
      {"type": "p", "text": "Os produtos devem acompanhar nota fiscal de simples remessa para exposição na feira contendo dados complementares com os dados locais do centro de exposições:"},
      {"type": "address", "text": "SPE GL – Rodovia dos Imigrantes, KM 1,5 – Vila Água Funda – CEP: 04329-900 – São Paulo."},
    ],
  },
  {
    n: 29,
    q: "Haverá guarda-volumes no local?",
    blocks: [
      {"type": "p", "text": "Horário de funcionamento do Malex: 9, 10, 11 / QUA – QUI – SEX 13H – 20H & 12 DE SETEMBRO /SÁB DAS 11H – 18H"},
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
    title: ["EXPOSITORES", "DÚVIDAS FREQUENTES"],
    metaTitle: "Expositores – Dúvidas Frequentes — FESQUA",
    metaDesc: "Tire suas dúvidas sobre como expor na FESQUA. Acesse informações essenciais sobre montagem de estandes, prazos, regras técnicas e serviços para expositores.",
    jump: "Ir para uma pergunta",
    navLabel: "Perguntas",
    faq: faqPt,
  },
  en: {
    title: ["EXHIBITORS", "FREQUENTLY ASKED QUESTIONS"],
    metaTitle: "Exhibitors – Frequently Asked Questions — FESQUA",
    metaDesc: "Get answers about exhibiting at FESQUA. Find essential information on booth setup, deadlines, technical rules and services for exhibitors.",
    jump: "Jump to a question",
    navLabel: "Questions",
    faq: faqEn,
  },
  es: {
    title: ["EXPOSITORES", "PREGUNTAS FRECUENTES"],
    metaTitle: "Expositores – Preguntas Frecuentes — FESQUA",
    metaDesc: "Resuelva sus dudas sobre cómo exponer en FESQUA. Acceda a información esencial sobre montaje de stands, plazos, normas técnicas y servicios para expositores.",
    jump: "Ir a una pregunta",
    navLabel: "Preguntas",
    faq: faqEs,
  },
  it: {
    title: ["ESPOSITORI", "DOMANDE FREQUENTI"],
    metaTitle: "Espositori – Domande Frequenti — FESQUA",
    metaDesc: "Trova le risposte su come esporre a FESQUA. Informazioni essenziali su allestimento degli stand, scadenze, regole tecniche e servizi per gli espositori.",
    jump: "Vai a una domanda",
    navLabel: "Domande",
    faq: faqIt,
  },
};
