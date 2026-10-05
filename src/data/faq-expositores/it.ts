import { MAP_URL, type Faq } from "./shared";

export const faqIt: Faq[] = [
  {
    n: 1,
    q: "Dove trovo tutte le norme e i regolamenti per la mia partecipazione all'evento?",
    blocks: [
      {"type": "p", "text": "Tutte le norme specifiche, così come le indicazioni sul versamento delle tariffe obbligatorie, saranno disponibili sul Portale Elettronico dell'Espositore. Riceverai login e password di accesso al sito dopo l'invio del contratto formalizzato."},
    ],
  },
  {
    n: 2,
    q: "Da quale data le norme saranno disponibili nel Manuale dell'Espositore?",
    blocks: [
      {"type": "p", "text": "Le norme dell'evento vengono rese disponibili sul portale elettronico dell'espositore sempre 90 giorni prima della data di inizio dell'allestimento."},
    ],
  },
  {
    n: 3,
    q: "Quali sono le date e gli orari di allestimento e smontaggio?",
    blocks: [
      {"type": "table", "title": "CALENDARIO DELLA FIERA – FESQUA", "rows": [{"label": "ALLESTIMENTO", "value": "Dal 5, 6, 7 e 8 settembre / SAB – DOM – LUN 8:00 – 20:00"}, {"label": "SVOLGIMENTO", "value": "9, 10, 11 / MER – GIO – VEN 13:00 – 20:00 e 12 settembre / SAB dalle 11:00 alle 18:00"}, {"label": "SMONTAGGIO", "value": "Dal 12 / SAB alle 21:30 fino al 13 settembre / DOM alle 11:00"}, {"label": "DECORAZIONE DELLO STAND", "value": "8 settembre, dalle 17:00 alle 22:00"}]},
      {"type": "p", "text": "È espressamente vietato l'ingresso a persone in bermuda, canottiera o ciabatte e ai minori di 16 (sedici) anni, anche se accompagnati dai genitori o tutori. Fanno eccezione i lattanti fino a un massimo di 1 anno di età."},
    ],
  },
  {
    n: 4,
    q: "Esiste un sindacato degli allestitori?",
    blocks: [
      {"type": "p", "text": "Sì, consigliamo di incaricare allestitori affiliati al SINDIPROM:"},
      {"type": "contact", "org": "SINDIPROM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3120-7099", "href": "tel:+551131207099", "suffix": "."}, {"prefix": "E-mail: ", "link": "sindiprom@sindiprom.org.br", "href": "mailto:sindiprom@sindiprom.org.br"}, {"prefix": "Sito: ", "link": "www.sindiprom.org.br", "href": "https://www.sindiprom.org.br", "external": true}]},
    ],
  },
  {
    n: 5,
    q: "I camion possono entrare nel Padiglione durante tutto il periodo di allestimento?",
    blocks: [
      {"type": "p", "text": "L'accesso deve avvenire dal cancello di servizio (Rua Miguel Estéfano, all'altezza del n. 3000, di fronte all'ingresso principale del Giardino Botanico)."},
      {"type": "p", "text": "L'ingresso dei camion nel padiglione è consentito il 1° giorno di allestimento solo per lo scarico."},
    ],
  },
  {
    n: 6,
    q: "Quali documenti servono all'allestitore per accedere al Padiglione e iniziare l'allestimento del mio stand?",
    blocks: [
      {"type": "p", "text": "Per entrare nel padiglione, l'allestitore / espositore dovrà consegnare le copie originali dei documenti seguenti:"},
      {"type": "list", "items": ["Dichiarazione di responsabilità (timbrata e firmata) sia dall'espositore sia dall'allestitore;", "ART o RRT (registro di responsabilità tecnica) per l'esecuzione del progetto e dell'impianto elettrico dello stand, con il pagamento della relativa tassa (la data indicata nella ART / RRT deve coprire dal primo giorno di allestimento all'ultimo giorno di smontaggio dell'evento);", "Copia del progetto;", "Assegno cauzionale per i non affiliati al SINDIPROM, oppure la prova di affiliazione per gli affiliati al SINDIPROM."]},
    ],
  },
  {
    n: 7,
    q: "Qual è l'età minima consentita nel Padiglione durante l'allestimento e lo smontaggio?",
    blocks: [
      {"type": "p", "text": "Durante i periodi di allestimento e smontaggio non è consentito l'ingresso ai minori di 18 anni."},
    ],
  },
  {
    n: 8,
    q: "Qual è l'indirizzo del Padiglione in cui si svolgerà l'evento?",
    blocks: [
      {"type": "place", "text": "São Paulo Expo Exhibition & Convention Center"},
      {"type": "p", "text": "Ingresso di Servizio: Rodovia dos Imigrantes, km 1,5 – São Paulo – SP"},
      {"type": "maplink", "text": "Clicca qui per vedere la mappa.", "href": MAP_URL},
    ],
  },
  {
    n: 9,
    q: "Quali documenti devo presentare all'ingresso dell'evento?",
    blocks: [
      {"type": "p", "text": "Per accedere all'evento dovrai effettuare l'accreditamento tuo e dei tuoi fornitori di servizi tramite il portale dell'espositore e ti verrà richiesto un documento d'identità (RG) per il ritiro dei badge."},
    ],
  },
  {
    n: 10,
    q: "Come emetto la fattura di spedizione per l'esposizione?",
    blocks: [
      {"type": "p", "text": "La fattura per la spedizione della merce da esporre deve essere emessa a nome dell'espositore stesso, con il suo CNPJ e l'Iscrizione Statale (Inscrição Estadual), e riportare i seguenti dati complementari:\n– Merce destinata all'esposizione alla fiera Fesqua che si terrà il ______/______/_________, presso il São Paulo Expo – Rodovia dos Imigrantes Km 1,5 – Vila Água Funda / São Paulo – CAP: 04329-900."},
      {"type": "p", "text": "Solo l'indirizzo riportato in fattura deve essere quello del padiglione in cui si svolgerà l'evento."},
    ],
  },
  {
    n: 11,
    q: "Esiste un orario specifico per i rifornimenti e la manutenzione durante l'evento?",
    blocks: [
      {"type": "p", "text": "Sì. La manutenzione dello stand è autorizzata solo fino a un'ora prima dell'apertura dell'evento."},
    ],
  },
  {
    n: 12,
    q: "Durante l'allestimento e lo smontaggio dell'evento è obbligatorio l'uso dei DPI – Dispositivi di Protezione Individuale?",
    blocks: [
      {"type": "p", "text": "Sì, l'uso dei DPI è obbligatorio per chiunque acceda al Padiglione durante il periodo di allestimento e smontaggio."},
    ],
  },
  {
    n: 13,
    q: "Posso entrare in bermuda e/o ciabatte durante l'allestimento e lo smontaggio?",
    blocks: [
      {"type": "p", "text": "Non è consentito l'ingresso con bermuda, gonna, pantaloncini o calzature aperte durante i periodi di allestimento, decorazione e smontaggio dell'evento."},
    ],
  },
  {
    n: 14,
    q: "Come accedo al Portale dell'Espositore?",
    blocks: [
      {"type": "p", "text": "Tramite il link contenente login e operatore inviato all'indirizzo e-mail indicato nel contratto."},
      {"type": "p", "text": "Il tuo nome utente e la tua password verranno forniti automaticamente dopo la convalida del contratto."},
    ],
  },
  {
    n: 15,
    q: "Ho acquistato uno stand con allestimento base. Qual è l'allestitore ufficiale dell'evento?",
    blocks: [
      {"type": "p", "text": "DMR Karam"},
    ],
  },
  {
    n: 16,
    q: "Come registro l'allestitore?",
    blocks: [
      {"type": "p", "text": "Il contatto dell'allestitore ufficiale è disponibile sul portale dell'espositore, nella sezione servizi ufficiali."},
    ],
  },
  {
    n: 17,
    q: "Devo inviare il progetto del mio stand per l'analisi?",
    blocks: [
      {"type": "p", "text": "Sì, il progetto deve essere inviato all'e-mail del responsabile tecnico."},
      {"type": "p", "text": "45 giorni prima dell'inizio dell'allestimento, per la dovuta analisi di altezze e arretramenti."},
      {"type": "p", "text": "L'invio di tutta la documentazione è OBBLIGATORIO, secondo le indicazioni del manuale dell'espositore."},
    ],
  },
  {
    n: 18,
    q: "Voglio richiedere servizi extra. Come devo procedere?",
    blocks: [
      {"type": "labeled", "label": "Espositore:", "text": "Sono disponibili diversi servizi aggiuntivi acquistabili tramite il portale elettronico dell'Espositore."},
      {"type": "labeled", "label": "Allestitore:", "text": "In caso di eccedenza di energia, punto idraulico o punto di aria compressa, l'allestitore deve informare l'espositore affinché la richiesta venga effettuata sul portale elettronico, nell'opzione moduli."},
    ],
  },
  {
    n: 19,
    q: "Come devo procedere se ho perso la scadenza per richiedere servizi extra?",
    blocks: [
      {"type": "p", "text": "Dopo la scadenza, le richieste devono essere effettuate via e-mail."},
    ],
  },
  {
    n: 20,
    q: "Qual è la quota di badge gratuiti?",
    blocks: [
      {"type": "labeled", "label": "Espositore:", "text": "Il numero di badge gratuiti varia in base alla metratura del tuo stand. Questa informazione è disponibile sul portale elettronico dell'espositore. Dopo aver inserito i badge nel sistema, l'Espositore stesso, debitamente identificato, o un incaricato identificato e autorizzato con lettera, dovrà ritirarli presso il CAEX (Centro di Assistenza agli Espositori) a partire dal 1° giorno di allestimento."},
      {"type": "warn", "text": "È TASSATIVAMENTE VIETATO REGISTRARE FORNITORI DI SERVIZI E/O ALLESTITORI COME ESPOSITORI. L'ESPOSITORE POTRÀ ESSERE SANZIONATO DAI CONTROLLI DEL MINISTERO DEL LAVORO."},
      {"type": "labeled", "label": "Fornitore di Servizi / Allestitore:", "text": "I badge dell'allestitore non sono gratuiti e tutti devono essere richiesti e pagati tramite il portale elettronico del fornitore. Gli allestitori affiliati al SINDIPROM sono esenti dal pagamento, purché richiedano i badge tramite il Manuale Elettronico e, al momento del ritiro, consegnino copia delle tessere al CAEX – Centro di Assistenza agli Espositori – e la ricevuta di pagamento della quota associativa del mese in corso."},
      {"type": "labeled", "label": "Nota generale:", "text": "Scaduto il termine del sito, tutte le richieste di inserimento o modifica dovranno essere effettuate via e-mail."},
    ],
  },
  {
    n: 21,
    q: "Come compilo i Dati di Promozione?",
    blocks: [
      {"type": "p", "text": "Accedi al portale elettronico dell'espositore, all'icona moduli."},
      {"type": "warn", "label": "ATTENZIONE:", "text": "Questo modulo ha un termine di compilazione ridotto per via dei tempi necessari alla realizzazione del Catalogo Ufficiale dell'Evento. Il termine è indicato sul portale elettronico dell'espositore, accanto al numero di ciascun modulo."},
    ],
  },
  {
    n: 22,
    q: "Qual è la procedura in caso di smarrimento o dimenticanza del badge?",
    blocks: [
      {"type": "p", "text": "Il richiedente dovrà recarsi al CAEX. Il duplicato avrà un costo per ogni badge extra emesso, secondo il tariffario in vigore."},
    ],
  },
  {
    n: 23,
    q: "Qual è la procedura per richiedere una linea telefonica o internet?",
    blocks: [
      {"type": "p", "text": "L'espositore dovrà contattare l'operatore del padiglione (São Paulo Expo) in cui si svolgerà l'evento:"},
      {"type": "contact", "org": "HIPERNET TELECOM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3077-5500", "href": "tel:+551130775500"}, {"prefix": "E-mail: ", "link": "feirasspo@hthnet.net", "href": "mailto:feirasspo@hthnet.net"}]},
    ],
  },
  {
    n: 24,
    q: "C'è servizio di sicurezza durante l'evento o devo richiederlo per il mio stand?",
    blocks: [
      {"type": "p", "text": "La sicurezza dell'evento è responsabile delle aree comuni e dei controlli di accesso. Pertanto, la società di sicurezza ufficiale della fiera non è responsabile della custodia dei prodotti esposti negli stand."},
      {"type": "p", "text": "La sicurezza per lo stand può essere richiesta direttamente tramite il portale elettronico dell'espositore alla nostra società di sicurezza ufficiale, oppure a un'altra società scelta liberamente dall'espositore, tenendo presente che l'incarico a una società diversa da quella ufficiale dell'evento richiede l'acquisto di un badge di sicurezza, che verrà consegnato al CAEX previa presentazione della seguente documentazione del professionista indicato:"},
      {"type": "list", "items": ["Lettera di designazione della società di sicurezza;", "Prova della designazione da parte dell'espositore, se non effettuata tramite il portale elettronico;", "Copia semplice del documento d'identità (RG) e del CPF;", "Certificato dei carichi penali;", "Copia semplice dell'attestato di completamento del corso di sicurezza in corso di validità;", "Copia del corso di aggiornamento, se del caso."]},
    ],
  },
  {
    n: 25,
    q: "Sarà disponibile un servizio di facchinaggio nei Padiglioni?",
    blocks: [
      {"type": "p", "text": "Fiera Milano Brasil non offre questo tipo di servizio."},
    ],
  },
  {
    n: 26,
    q: "Che tipo di tensione elettrica viene utilizzata nei padiglioni?",
    blocks: [
      {"type": "p", "text": "La tensione disponibile nel padiglione è 380V trifase, trasformabile in 220V monofase dall'elettricista/tecnico dell'allestitore, con un costo per KVA. Qualsiasi variazione di tensione deve essere fornita dall'allestitore."},
    ],
  },
  {
    n: 27,
    q: "Sono consentite dimostrazioni audio e video durante l'evento?",
    blocks: [
      {"type": "p", "text": "È tassativamente vietato l'uso di apparecchiature sonore per tutta la durata dell'evento. Ciò include la riproduzione di musica, audio, colonne sonore o qualsiasi altro espediente sonoro, dal vivo o registrato."},
    ],
  },
  {
    n: 28,
    q: "Qual è la procedura per l'invio dei prodotti all'evento?",
    blocks: [
      {"type": "p", "text": "È responsabilità esclusiva dell'Espositore rispettare i requisiti di legge relativi alle procedure di spedizione di merci, attrezzature, prodotti, utensili ecc."},
      {"type": "p", "text": "I prodotti devono essere accompagnati da una fattura di semplice spedizione per l'esposizione in fiera, con i dati complementari relativi alla sede del centro espositivo:"},
      {"type": "address", "text": "SPE GL – Rodovia dos Imigrantes, KM 1,5 – Vila Água Funda – CAP: 04329-900 – São Paulo."},
    ],
  },
  {
    n: 29,
    q: "Ci sarà un deposito bagagli sul posto?",
    blocks: [
      {"type": "p", "text": "Orario di apertura del Malex: 9, 10, 11 / MER – GIO – VEN 13:00 – 20:00 e 12 SETTEMBRE / SAB DALLE 11:00 ALLE 18:00"},
    ],
  },
];
