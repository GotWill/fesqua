import type { Faq } from "./shared";

export const faqIt: Faq[] = [
  {
    n: 1,
    q: "Ho ricevuto il mio badge anticipato. Devo registrarmi sul posto?",
    blocks: [
      {"type": "p", "text": "No. Il badge anticipato permette di entrare all'evento senza dover effettuare una nuova registrazione al banco accrediti."},
    ],
  },
  {
    n: 2,
    q: "Non ho ricevuto il badge per posta. Come devo procedere?",
    blocks: [
      {"type": "p", "text": "Se non ricevi il badge entro il giorno dell'evento, puoi effettuare la preregistrazione gratuita sul sito dell'evento e stampare il badge presso i totem self-service disponibili all'ingresso della fiera."},
    ],
  },
  {
    n: 3,
    q: "Posso registrarmi presso la sede dell'evento?",
    blocks: [
      {"type": "p", "text": "Sì, ma per facilitare il tuo ingresso ti consigliamo di effettuare la preregistrazione sul sito. In questo modo potrai stampare il badge presso i totem self-service situati all'ingresso della fiera."},
    ],
  },
  {
    n: 4,
    q: "È consentito l'ingresso ai minorenni?",
    blocks: [
      {"type": "p", "text": "Per motivi di sicurezza non è consentito l'ingresso ai minori di 16 anni, ad eccezione dei lattanti fino a 1 anno."},
    ],
  },
  {
    n: 5,
    q: "Posso entrare all'evento in canottiera, ciabatte o bermuda?",
    blocks: [
      {"type": "p", "text": "No. Consigliamo di indossare abiti e calzature chiuse per visitare la fiera."},
    ],
  },
  {
    n: 6,
    q: "È consentito l'ingresso agli studenti?",
    blocks: [
      {"type": "p", "text": "Sì, l'ingresso agli studenti è consentito, nel rispetto dell'età minima di 16 anni."},
    ],
  },
  {
    n: 7,
    q: "Come arrivo all'evento?",
    blocks: [
      {"type": "labeled", "label": "Metropolitana:", "text": "Il São Paulo Expo si trova a 850 m dalla stazione Jabaquara. Per la tua comodità metteremo a disposizione un servizio navetta gratuito nei giorni dell'evento, dalla stazione Santos Imigrantes fino alla sede dell'evento."},
      {"type": "hours", "title": "Orario del Servizio Navetta Gratuito", "items": ["🕐 Da mercoledì a venerdì: dalle 12:00 alle 21:00", "🕐 Sabato: dalle 10:00 alle 19:00"]},
      {"type": "labeled", "label": "Taxi:", "text": "Durante i giorni di fiera saranno disponibili punti taxi. Dalla stazione della metropolitana si può prendere un taxi fino al São Paulo Expo."},
    ],
  },
  {
    n: 8,
    q: "L'evento dispone di parcheggio sul posto?",
    blocks: [
      {"type": "p", "text": "Sì, l'evento dispone di parcheggio per oltre 4.500 veicoli. La tabella con le tariffe ufficiali è disponibile sul sito www.saopauloexpo.com.br.", "link": {"text": "www.saopauloexpo.com.br", "href": "https://www.saopauloexpo.com.br"}},
    ],
  },
  {
    n: 9,
    q: "Ricevo un Attestato di Partecipazione?",
    blocks: [
      {"type": "p", "text": "Non verranno rilasciati Attestati di Partecipazione ai visitatori dell'evento."},
    ],
  },
  {
    n: 10,
    q: "Ci sarà un deposito bagagli sul posto?",
    blocks: [
      {"type": "p", "text": "Sì. L'evento metterà a disposizione un deposito bagagli situato all'ingresso della fiera."},
      {"type": "p", "text": "Tutti gli espositori e i visitatori possono utilizzare i servizi di Malex per lasciare i propri effetti personali e girare per la fiera con la massima praticità e comodità."},
      {"type": "labeled", "label": "Costo:", "text": "R$ 25,00 (venticinque reais) per collo."},
      {"type": "labeled", "label": "Modalità di pagamento:", "text": "Contanti, carta di debito o di credito."},
      {"type": "labeled", "label": "Accettati:", "text": "Borse, zaini e valigie."},
      {"type": "labeled", "label": "Non ammessi:", "text": "Portafogli e borse a mano sfusi, per motivi di sicurezza."},
      {"type": "labeled", "label": "Orario di apertura del Malex:", "text": "dal 14 al 16/9 dalle 12:00 alle 20:30 e il 17/9 dalle 10:00 alle 18:30, solo nei giorni di svolgimento dell'evento."},
    ],
  },
  {
    n: 11,
    q: "Ci sono sportelli bancomat sul posto?",
    blocks: [
      {"type": "p", "text": "No, questo servizio non è disponibile sul posto."},
    ],
  },
  {
    n: 12,
    q: "La sede dispone di accesso a internet e prese di corrente?",
    blocks: [
      {"type": "p", "text": "No, questi servizi non sono disponibili sul posto."},
    ],
  },
];
