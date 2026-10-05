// "Clique aqui para ver o mapa." (pergunta 8) veio sem endereço. Este é o link do São Paulo Expo no
// Google Maps, o mesmo já usado no header. Troque se houver um link oficial.
export const MAP_URL = "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo+Expo";

export type Block =
  | { type: "p"; text: string }                                  // "\n" no texto = quebra de linha
  | { type: "labeled"; label: string; text: string }             // "Expositor:" em negrito + texto
  | { type: "warn"; text: string; label?: string }               // aviso em destaque
  | { type: "list"; items: string[] }
  | { type: "place"; text: string }
  | { type: "address"; text: string }
  | { type: "maplink"; text: string; href: string }
  | { type: "contact"; org: string; lines: { prefix: string; link: string; href: string; suffix?: string; external?: boolean }[] }
  | { type: "table"; title: string; rows: { label: string; value: string }[] };

export interface Faq { n: number; q: string; blocks: Block[] }
