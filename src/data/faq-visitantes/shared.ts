// "Para mais informações, clique aqui" (pergunta 7) veio SEM endereço. Este é o site do São Paulo Expo,
// o único endereço que aparece no próprio texto (pergunta 8). Troque pelo link correto do "como chegar".
export const MORE_INFO_URL = "https://www.saopauloexpo.com.br";

export type Block =
  | { type: "p"; text: string; link?: { text: string; href: string } }   // "link.text" é um trecho de "text"
  | { type: "labeled"; label: string; text: string }                       // "Valor:" em negrito + texto
  | { type: "hours"; title: string; items: string[] };                     // título + linhas de horário (com emoji)

export interface Faq { n: number; q: string; blocks: Block[] }
