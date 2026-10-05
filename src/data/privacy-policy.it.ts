// TODO: revisão jurídica (tradução em rascunho)
import type { Section } from './privacy-policy';

export const TITLE = 'Informativa sulla Privacy';
export const SUMMARY = 'Sommario';
export const HERO = ['Informativa sulla', 'Privacy'];

export const sections: Section[] = [
	{
		id: 'introducao',
		title: 'Introduzione',
		blocks: [
			{
				t: 'p',
				x: 'La presente Informativa sulla Privacy (di seguito l’“Informativa”) è resa in conformità alla normativa applicabile in materia di protezione dei dati personali, in relazione ai dati personali trattati dalla società ITALIAN EXHIBITION GROUP S.p.A. (“IEG“) e/o dalle altre società da essa controllate elencate nella tabella seguente (le “Società Controllate“), che:',
			},
			{
				t: 'ul',
				x: [
					'organizzano, ospitano, anche congiuntamente a partner terzi, anche a favore di terzi, eventi, fiere, conferenze/congressi, workshop, webinar e/o incontri d’affari, fisici e/o virtuali (gli “Eventi“), oppure',
					'forniscono servizi e prodotti (a titolo esemplificativo e non esaustivo: catering, allestimenti, pulizia e custodia bagagli, formazione, editoria, servizi per eventi, ecc.) (i “Servizi“).',
				],
			},
			{
				t: 'p',
				x: 'I dati personali (i “dati“) sono i dati costituiti da qualsiasi informazione collegata o collegabile a i) soggetti qualificati come “interessati” ai sensi del Regolamento UE 679/2016 (“GDPR”) (ossia persone fisiche, ditte individuali e/o società di persone o altre organizzazioni con una base soggettiva ristretta cui i dati personali si riferiscono) e/o ii) altri soggetti sostanzialmente equiparati agli interessati dalla normativa sulla protezione dei dati dell’UE o estera applicabile al relativo trattamento.',
			},
			{
				t: 'p',
				x: 'Il trattamento dei dati comprende, ove opportuno, le operazioni di registrazione, organizzazione, conservazione ed elaborazione su supporti cartacei, magnetici, automatizzati o telematici, l’elaborazione, la modifica, la selezione, l’estrazione, il raffronto, l’utilizzo, l’interconnessione tra dati sulla base di criteri qualitativi, quantitativi e temporali, ricorrenti o definibili periodicamente, l’elaborazione temporanea finalizzata a una rapida aggregazione o trasformazione dei dati stessi, la comunicazione, la cancellazione e la distruzione dei dati, ovvero la combinazione di due o più delle operazioni sopra indicate, in funzione di quanto necessario per le finalità di seguito indicate.',
			},
		],
	},
	{
		id: 'categorias',
		title: 'Categorie di interessati e raccolta dei dati',
		blocks: [
			{
				t: 'p',
				x: 'I dati trattati riguardano le seguenti categorie di interessati, che forniscono i dati per sé o per le organizzazioni cui appartengono:',
			},
			{
				t: 'ul',
				x: [
					'clienti (ossia espositori, visitatori/consumatori, buyer, partecipanti a conferenze, partecipanti a congressi, relatori degli Eventi, partecipanti a workshop, webinar e incontri d’affari, acquirenti di servizi e prodotti),',
					'potenziali clienti (ossia soggetti che hanno manifestato interesse per gli Eventi, i Servizi e/o i Prodotti mediante richieste di contatto, di informazioni o di preventivi o in qualsiasi altro modo, compresa l’iscrizione alle newsletter del Gruppo IEG),',
					'altre categorie di interessati (destinatari di inviti a partecipare agli Eventi, ad esempio ospiti, giornalisti e rappresentanti degli organi di comunicazione, minori di 14 anni, utenti dei siti web e/o delle app forniti da IEG e/o dalle Società Controllate).',
				],
			},
			{ t: 'p', x: 'La raccolta dei dati avviene:' },
			{
				t: 'ul',
				x: [
					'tramite l’interessato e/o,',
					'da banche dati pubbliche e/o private, limitatamente ai dati di identificazione, di contatto, societari, fiscali, economico-patrimoniali e finanziari, di solvibilità e di affidabilità commerciale dell’interessato,',
					'tramite le Società Controllate, limitatamente ai dati di identificazione, di contatto, societari, fiscali, economico-patrimoniali e finanziari, e',
					'da piattaforme di social network (ad esempio LinkedIn, Facebook), limitatamente ai dati di identificazione (nome e cognome o ragione sociale/denominazione), ai dati di contatto (città e regione di residenza e/o sede, indirizzo e-mail, numero di telefono fisso/mobile), al settore economico e merceologico di appartenenza e/o di interesse commerciale.',
				],
			},
		],
	},
	{
		id: 'principios',
		title: 'Principi generali del trattamento',
		blocks: [
			{
				t: 'p',
				x: 'I dati sono trattati nel rispetto dei principi di liceità, correttezza, trasparenza, proporzionalità, necessità, esattezza, integrità e sicurezza e degli altri obblighi normativi previsti dalle disposizioni di volta in volta applicabili in materia di trattamento dei dati personali.',
			},
		],
	},
	{
		id: 'finalidade',
		title: 'Finalità del trattamento',
		blocks: [
			{ t: 'p', x: 'Il trattamento persegue le seguenti finalità:' },

			{ t: 'h', x: '1. Tutela del patrimonio e sicurezza informatica' },
			{
				t: 'p',
				x: 'Tutela del patrimonio informativo immateriale di IEG e/o delle sue Società Controllate, continuità operativa e sicurezza informatica.',
			},

			{ t: 'h', x: '2. Newsletter ed esigenze precontrattuali e contrattuali' },
			{ t: 'p', x: '2.a) Iscrizione al servizio di newsletter.' },
			{
				t: 'p',
				x: '2.b) Soddisfacimento di esigenze precontrattuali (ad esempio verifiche di solvibilità e controllo dei rischi e delle frodi, evasione delle richieste dell’interessato di preventivi o di altre informazioni) e/o adempimento di obblighi contrattuali (inclusi, tra l’altro, la pianificazione e la gestione tecnico-organizzativa degli Eventi e/o dei Servizi e Prodotti e/o gli obblighi previsti da una legge, da un regolamento o da una normativa comunitaria o estera relativi agli Eventi e/o ai Servizi e Prodotti di IEG (compresa, ad esempio, la redazione del bilancio consolidato del Gruppo IEG da parte della Capogruppo IEG) e/o della Società Controllata (ad esempio obblighi contabili, fiscali o amministrativi).',
			},

			{ t: 'h', x: '3. Ricerche di mercato' },
			{
				t: 'p',
				x: 'Ricerche di mercato, effettuate mediante indagini nominative (fornite esclusivamente da IEG), finalizzate a rilevare i livelli di performance percepita e/o i gradi di soddisfazione relativi a Eventi, Servizi e Prodotti e le conseguenti aspettative di clienti e prospect di IEG e/o delle sue Società Controllate.',
			},

			{ t: 'h', x: '4. Profilazione di base' },
			{ t: 'p', x: 'Profilazione di base effettuata da IEG e/o dalle sue Società Controllate.' },
			{
				t: 'p',
				x: 'Per profilazione si intende il trattamento automatizzato di dati personali consistente nell’utilizzo di tali dati per valutare determinati aspetti personali relativi a una persona fisica, in particolare per analizzare o prevedere aspetti riguardanti (…) la situazione economica, (…) le preferenze individuali, gli interessi, l’affidabilità, il comportamento, l’ubicazione (…) di tale soggetto.',
			},
			{
				t: 'p',
				x: 'La profilazione è rilevante, ai fini della privacy, solo se riguarda persone fisiche, ossia ditte individuali o società di persone e relativi soci/amministratori, ovvero rappresentanti interni di società di capitali, enti od organizzazioni.',
			},
			{
				t: 'p',
				x: 'La profilazione di base utilizza insiemi di dati limitati, forniti dall’interessato e raccolti dalle fonti terze sopra indicate e/o comunicati a IEG dalle Società Controllate.',
			},
			{ t: 'p', x: 'Sono trattati principalmente i seguenti dati:' },
			{
				t: 'ul',
				x: [
					'espositori: nome e cognome, ragione sociale dell’organizzazione di appartenenza, dati di contatto, residenza o sede, paese di provenienza, sito web, settore di attività, marchio, tipologie di servizio o prodotto offerto dall’espositore, budget annuale promozionale/pubblicitario, tipologia di distribuzione (negozio, grande magazzino, concept store), mercati di interesse (ad esempio paesi, tipo di clientela B2B o B2C);',
					'altri acquirenti di Servizi e Prodotti: nome e cognome, ragione sociale dell’organizzazione di appartenenza, dati di contatto, residenza o sede, paese di provenienza, sito web, settore di attività, tipologia di Servizio o Prodotto acquistato,',
					'buyer/visitatori: nome e cognome, ragione sociale dell’organizzazione di appartenenza, dati di contatto, ruolo e livello di responsabilità della persona di riferimento, residenza o sede, paese di provenienza, sito web, anno di fondazione dell’azienda, fatturato, numero di dipendenti, settore di attività, percentuale di affari legati all’Italia e all’estero, regioni italiane ed estere di interesse, principali categorie di Eventi, Servizi o Prodotti di interesse del buyer, principali categorie di servizi e/o prodotti da esso commercializzati (anche in termini di percentuale di vendite per area geografica), categorie di clienti dell’organizzazione, finalità della visita all’Evento;',
					'giornalisti: nome e cognome, dati di contatto, settore e testata di appartenenza, paese di provenienza, lingua;',
					'relatori degli Eventi, partecipanti a conferenze/incontri: nome e cognome, dati di contatto, settore di appartenenza, professionalità/temi trattati, lingua;',
					'altre categorie di clienti: nome e cognome, dati di contatto, paese di provenienza, prodotto o settore economico di attività, fatturato, numero di dipendenti, principali categorie di servizi o prodotti di interesse e/o commercializzati dal cliente.',
				],
			},

			{ t: 'h', x: '5. Profilazione avanzata' },
			{ t: 'p', x: 'Profilazione avanzata effettuata esclusivamente da IEG.' },
			{
				t: 'note',
				x: 'NB: Questa finalità è limitata ai clienti e potenziali clienti di IEG e/o delle sue Società Controllate che siano persone fisiche, ditte individuali o società di persone e relativi soci/amministratori e/o rappresentanti interni di società di capitali, enti od organizzazioni. Resta ferma la stessa analisi se, tuttavia, in relazione a dati di soggetti diversi dalle categorie sopra indicate, la normativa sulla protezione dei dati personali non dovesse applicarsi.',
			},
			{ t: 'p', x: 'Questa finalità presuppone uno specifico consenso dell’interessato.' },
			{
				t: 'p',
				x: 'La profilazione avanzata mira ad analizzare le interazioni complessive dell’interessato con le varie entità del Gruppo IEG (la cosiddetta “customer centricity”), utilizzando e integrando tra loro, raffrontando e rielaborando secondo logiche pertinenti a tale obiettivo, le categorie di dati e/o i principali criteri descritti di seguito:',
			},
			{
				t: 'ul',
				x: [
					'prodotto o settore economico di attività del buyer/visitatore/espositore/congressista o di altro cliente di IEG e/o delle sue Società Controllate;',
					'categorie di Eventi, Servizi e/o Prodotti richiesti dagli interessati e/o a loro offerti;',
					'storico delle transazioni con IEG e/o le sue Società Controllate. Ad esempio: categorie di Eventi, Servizi e/o Prodotti acquistati o di interesse, andamento dei prezzi di acquisto relativi entro periodi di tempo predefiniti, andamento del budget annuale promozionale/pubblicitario dichiarato dall’interessato per gli Eventi;',
					'livelli di performance percepita e grado di soddisfazione dell’interessato in relazione agli Eventi frequentati e ai Servizi e/o Prodotti acquistati, desunti da: indagini nominative fornite da IEG agli interessati e riferite solo a IEG e/o da altri report di dati statistici, anch’essi nominativi, elaborati da IEG a partire dai dati relativi alla partecipazione a Eventi o all’acquisto di Servizi e/o Prodotti, riferiti a interessati riconducibili alla Società Controllata e condivisi da IEG con le Società Controllate, elaborati per individuare strategie comuni di marketing operativo, funzionali a: aumentare nel tempo il livello di soddisfazione degli interessati in relazione agli Eventi, ai Servizi e ai Prodotti, nonché lo sviluppo del conseguente fatturato del Gruppo IEG, sia a livello delle singole Società Controllate sia a livello consolidato;',
					'marginalità commerciale, riferita all’interessato e/o a gruppi di interessati, valutata a livello di Gruppo (per singoli Eventi, Servizi e/o Prodotti e/o per loro aggregazioni, ad esempio in base a categorie di prodotto, periodi di tempo rilevanti, fasce di prezzo applicate, ecc.) sulla base dei margini commerciali applicati all’interessato da IEG e/o dalle Società Controllate;',
					'(se l’interessato è un cliente o un prospect) dati sul comportamento di navigazione sui siti web di IEG e/o delle sue Società Controllate o durante l’utilizzo dei Servizi e/o Prodotti forniti tramite tali siti (ad esempio mediante cookie relativi alle pagine dei siti visitate dall’interessato o al paese da cui l’interessato si connette), interazioni con altri canali di comunicazione (ad esempio mediante cookie relativi a pagine e profili sui social network) e/o con servizi di invio di messaggi di posta elettronica commerciale (ad esempio cookie relativi al buon fine dei messaggi inviati, alle reazioni dell’utente alle e-mail mediante azioni quali l’apertura di un allegato o l’accettazione di una richiesta di link a landing page o ad allegati del messaggio);',
				],
			},
			{
				t: 'p',
				x: 'La profilazione avanzata consente, a seconda dei casi, di inviare all’interessato solo comunicazioni promozionali pertinenti alle sue aspettative ed esigenze più probabili desunte dalla suddetta analisi, di limitare la frequenza di tali messaggi entro periodi di tempo predefiniti evitando la saturazione, di limitare l’invio di messaggi attraverso canali inefficaci, di garantire la migliore esperienza di acquisto di Eventi, Servizi e/o Prodotti, di individuare le azioni più efficaci per determinati target.',
			},

			{ t: 'h', x: '6. Comunicazioni commerciali (soft spam)' },
			{
				t: 'p',
				x: 'Invio da parte di IEG e/o delle sue Società Controllate (tramite e-mail, SMS, notifiche push di app, funzioni di messaggistica istantanea come WhatsApp e Telegram, telefonate con operatore, social network e altri strumenti automatizzati, posta ordinaria) di comunicazioni commerciali e pubblicitarie – comprese le newsletter – e di offerte di vendita di Eventi e/o Servizi e/o Prodotti analoghi a quelli precedentemente acquistati dall’interessato (cliente) o che siano stati oggetto di richieste precontrattuali o di altra manifestazione di interesse da parte dell’interessato (prospect), anche implicita (ad esempio espressa mediante la consegna spontanea di un biglietto da visita a IEG e/o a una Società Controllata) (complessivamente denominate “soft spam“).',
			},
			{
				t: 'p',
				x: 'In caso di trattamento da parte di Società Controllate con sede in BRASILE, CINA e SINGAPORE, il Titolare del trattamento può trattare per le finalità di cui al punto 6 i dati dell’interessato (esclusivamente visitatore di Eventi di natura B2C) solo sulla base del previo specifico consenso dell’interessato.',
			},

			{ t: 'h', x: '7. Marketing diretto da parte di IEG' },
			{
				t: 'p',
				x: 'Di norma, ma non solo, a seguito delle indagini nominative di cui al punto 3 e/o dei report statistici di cui al punto 5: azioni di marketing diretto (ossia comunicazioni commerciali e pubblicitarie – comprese le newsletter – e/o offerte di vendita di Eventi e/o Servizi e/o Prodotti) effettuate esclusivamente da IEG (non anche dalle Società Controllate) nei confronti di (ossia interessati che non hanno mai acquistato Eventi, Servizi o Prodotti) di IEG e/o delle Società Controllate, clienti e prospect di IEG e/o delle Società Controllate, qualora il marketing diretto riguardi Eventi, Servizi e Prodotti di natura non analoga a quelli già acquistati o per i quali sia stato manifestato interesse, ovvero, in ogni caso, iii) nei confronti di clienti e prospect delle Società Controllate i cui dati siano da queste trasferiti a IEG.',
			},
			{ t: 'p', x: 'Questa finalità presuppone uno specifico consenso dell’interessato.' },

			{ t: 'h', x: '8. Trasferimento dei dati' },
			{
				t: 'p',
				x: '8.a) Da IEG a società partner o a soggetti terzi di IEG e/o delle sue Società Controllate (ad esempio organizzatori di Eventi, espositori, altri operatori attivi negli Eventi o nei Servizi/Prodotti), per le loro autonome azioni di marketing diretto relative ai rispettivi servizi/prodotti. Questa finalità presuppone lo specifico consenso dell’interessato.',
			},
			{
				t: 'p',
				x: '8.b) Da IEG a piattaforme di social network allo scopo di individuare – a partire dall’analisi del/dei profilo/i social dell’interessato – nuovi gruppi di lead (ossia altri potenziali clienti) con un profilo simile a quelli comunicati da IEG, e successive azioni di marketing diretto rivolte a tali nuovi gruppi di lead (i cosiddetti servizi “lookalike”) da parte delle piattaforme di social network. Questa finalità presuppone lo specifico consenso dell’interessato, a favore di IEG.',
			},

			{ t: 'h', x: '9. Sicurezza online e fisica' },
			{
				t: 'p',
				x: 'Gestione della sicurezza online e fisica, in particolare per tutelare IEG e le Società Controllate, i partecipanti agli Eventi e ai Servizi, i siti web e le app del Gruppo IEG da frodi, furti, appropriazioni indebite, danneggiamenti o altre violazioni di legge, accertare le relative responsabilità e tutelare i connessi diritti di IEG e/o delle sue Società Controllate.',
			},

			{ t: 'h', x: '10. Altre attività organizzative e produttive' },
			{ t: 'p', x: 'Gestione di altre attività organizzative e produttive di IEG e/o delle sue Società Controllate:' },
			{
				t: 'ul',
				x: [
					'gestione del sistema qualità adottato da IEG e/o dalle sue Società Controllate, miglioramento della qualità degli Eventi, dei Servizi e dei Prodotti,',
					'controllo di gestione,',
					'gestione degli accessi (ad esempio mediante registrazione spontanea da parte dell’utente) ai siti web di IEG e/o delle sue Società Controllate e ai contenuti e/o servizi da essi accessibili (qualora tali attività non siano già dovute in forza di contratto),',
					'gestione dei dati dei VIP (ad esempio per l’applicazione di condizioni di accesso agevolato agli Eventi),',
					'produzione, stampa e diffusione di materiali editoriali cartacei e/o web-based,',
					'gestione dell’accreditamento e della partecipazione agli Eventi e/o ai Servizi di organi di comunicazione, mezzi di informazione e rappresentanti dei servizi giornalistici e di comunicazione,',
					'gestione extracontrattuale della partecipazione degli interessati a iniziative tematiche di carattere straordinario e/o temporaneo, collaterali agli Eventi,',
					'gestione della videosorveglianza nei recinti degli Eventi.',
				],
			},
			{
				t: 'p',
				x: 'Ulteriori finalità specifiche connesse ai singoli trattamenti possono essere individuate nel dettaglio mediante informative integrative da parte dei Titolari del trattamento.',
			},

			{ t: 'h', x: '11. Gestione dei dati creditizi' },
			{
				t: 'p',
				x: 'Gestione dei dati creditizi da parte della Società Controllata IEG Events Arabia LLC: il trattamento riguarda dati relativi alla situazione economico-finanziaria di una persona, dati sulla capacità di pagamento, dati relativi a transazioni passate e al comportamento in materia di pagamenti e debiti. Questa finalità presuppone lo specifico consenso dell’interessato.',
			},
		],
	},
	{
		id: 'base-legal',
		title: 'Base giuridica del trattamento. Conferimento obbligatorio o facoltativo dei dati e conseguenze del mancato conferimento',
		blocks: [
			{ t: 'p', x: 'Le basi giuridiche del trattamento sono le seguenti:' },
			{
				t: 'ul',
				x: [
					'In relazione alle finalità di cui al punto 1 (tutela del patrimonio informativo immateriale e continuità operativa e sicurezza informatica): il legittimo interesse di IEG e/o delle Società Controllate a un’adeguata tutela, gestita centralmente in IEG e/o in modo decentrato anche presso le Società Controllate, del patrimonio informativo immateriale di IEG e delle Società Controllate e della connessa continuità operativa e sicurezza informatica.',
					'In relazione alle finalità di cui al punto 2a (servizio di newsletter): il legittimo interesse di IEG e/o delle Società Controllate a mantenere un contatto commerciale con coloro che hanno già manifestato interesse per gli Eventi, i Servizi o i Prodotti del Gruppo IEG iscrivendosi al servizio di newsletter (pertanto senza necessità del consenso dell’interessato);',
					'In relazione alle finalità di cui al punto 2b (soddisfacimento di esigenze precontrattuali e/o adempimento di obblighi contrattuali e/o di obblighi previsti da una legge, un regolamento o una normativa UE o estera): la necessità per IEG e/o le Società Controllate di adempiere a esigenze precontrattuali e/o obblighi contrattuali (inclusi la diligente pianificazione e organizzazione degli Eventi e/o dei Servizi/Prodotti e la verifica dell’affidabilità dell’impresa che richiede un titolo di ingresso agli Eventi) e/o obblighi previsti da leggi, regolamenti o altra normativa (applicabile solo a livello locale o transnazionale, ad esempio disposizioni della legge italiana che obbligano le Società Controllate a cooperare con IEG nella redazione del bilancio consolidato del Gruppo).',
				],
			},
			{
				t: 'p',
				x: 'L’interessato è libero di non conferire i propri dati, ma in tal caso non potranno essere evase le sue richieste precontrattuali e/o non potrà essere concluso il contratto richiesto e/o non potranno essere adempiuti i sopra citati obblighi di legge o regolamentari.',
			},
			{
				t: 'p',
				x: 'Nel caso di un Evento o di un Servizio/Prodotto erogato online, l’interessato è libero di non attivare la webcam e/o il microfono del PC, ma in tal caso, qualora la sua immagine o la sua voce siano necessarie per fruire dell’Evento o del Servizio/Prodotto, non potremo erogare lo stesso.',
			},
			{
				t: 'ul',
				x: [
					'In relazione alle finalità di cui al punto 3 (ricerche di mercato nominative): il legittimo interesse di IEG ad analizzare e tutelare la reputazione di IEG, delle sue Società Controllate, degli Eventi, dei Servizi e/o dei Prodotti presso gli interessati, e la qualità da essi percepita, poiché massimizzare la loro soddisfazione costituisce un beneficio anche per gli interessati. L’interessato è libero di non conferire i propri dati, ma in tal caso le indagini indicate non potranno essere effettuate.',
					'In relazione alla finalità di cui al punto 4 (profilazione di base): il legittimo interesse di IEG e/o delle sue Società Controllate a disporre di un profilo commerciale minimo dell’interessato, utile a orientare le azioni volte a mantenere nel tempo il rapporto commerciale con lo stesso e, in particolare, a verificare e ottimizzare l’efficacia delle comunicazioni promozionali e/o delle offerte di vendita di Eventi, Servizi e/o Prodotti, evitando contenuti non pertinenti per l’interessato.',
					'In relazione alle finalità di cui al punto 5 (profilazione avanzata): previo specifico consenso. L’interessato è libero di non conferire i propri dati e di non prestare il proprio consenso. In tal caso tale profilazione avanzata non potrà essere effettuata, ma non vi saranno altre conseguenze giuridiche (in particolare resterà impregiudicata la possibilità per l’interessato di partecipare agli Eventi e/o di usufruire dei Servizi e/o dei Prodotti).',
					'In relazione alle finalità di cui al punto 6 (soft spam, anche negli USA e a DUBAI): il legittimo interesse di IEG e/o delle sue Società Controllate a mantenere attivo, con ragionevole frequenza nel tempo, il contatto commerciale con clienti e prospect, fatto salvo il diritto dell’interessato di opporsi in qualsiasi momento al trattamento per tale finalità.',
				],
			},
			{
				t: 'p',
				x: 'In caso di trattamento da parte di Società Controllate con sede in BRASILE, CINA e SINGAPORE, il Titolare del trattamento potrà trattare per le finalità di cui al punto 6 i dati dell’interessato (esclusivamente visitatore di Eventi di natura B2C) solo sulla base del previo specifico consenso dell’interessato.',
			},
			{
				t: 'ul',
				x: [
					'In relazione alla finalità di cui al punto 7 (marketing diretto da parte di IEG diverso dal soft spam): previo specifico consenso. L’interessato è libero di non conferire i propri dati e di non prestare il proprio consenso, ma in tal caso non sarà possibile svolgere tali attività di marketing diretto ulteriori rispetto al soft spam.',
					'In relazione alle finalità di cui al punto 8 a-b (trasferimento dei dati a società partner o a terzi diversi dalle Società Controllate; trasferimento dei dati a piattaforme di social network per servizi “lookalike”): previo specifico consenso. L’interessato è libero di non prestare il proprio consenso e, in tal caso, il trasferimento a terzi non potrà essere effettuato.',
					'In relazione alle finalità di cui al punto 9 (sicurezza): il legittimo interesse di IEG e/o delle sue Società Controllate a garantire la sicurezza degli Eventi e dei Servizi.',
					'In relazione alle finalità di cui al punto 10 (finalità varie): il legittimo interesse di IEG e/o delle sue Società Controllate a svolgere con diligenza le relative attività, rispettivamente.',
					'In relazione alle finalità di cui al punto 11 (gestione dei dati creditizi da parte della Società Controllata IEG EVENTS ARABIA LLC): previo specifico consenso. L’interessato è libero di non prestare il consenso, nel qual caso la gestione dei dati creditizi non potrà avere luogo.',
				],
			},
		],
	},
	{
		id: 'titularidade',
		title: 'Titolarità del trattamento',
		blocks: [
			{
				t: 'p',
				x: 'Sulla base della normativa di volta in volta applicabile in materia, i titolari del trattamento sono:',
			},
			{
				t: 'ul',
				x: [
					'per tutte le finalità indicate nella presente Informativa: IEG, in relazione ai dati personali degli interessati (ad esempio dati di clienti o di utenti dei siti web) trattati da: IEG e/o dalle sue Società Controllate con sede nello SEE; Società Controllate con sede al di fuori dello SEE, qualora il ruolo di Titolare di IEG sopra indicato derivi dalle norme di applicazione extraterritoriale contenute nella normativa locale di volta in volta applicabile nel paese di sede delle rispettive Società Controllate al di fuori dello SEE;',
					'per le sole finalità di cui ai punti 1, 2, 4, 6: ciascuna Società Controllata (con sede nello SEE o al di fuori dello SEE), in relazione ai dati da essa trattati ai sensi delle rispettive normative locali applicabili; e',
					'per la sola finalità di cui al punto 11: la Società Controllata IEG Events Arabia LLC.',
				],
			},
		],
	},
	{
		id: 'dpo',
		title: 'Responsabile della protezione dei dati',
		blocks: [
			{
				t: 'ul',
				x: [
					'Il DPO – Data Protection Officer di ITALIAN EXHIBITION GROUP SPA è Luca De Muri, domiciliato presso la stessa.',
					'Il DPO – Data Protection Officer della Società Controllata IEG ASIA PTE LDT. – 1, Maritime Square # 09-56, Harbourfront Centre – Singapore 099253, è Ilaria Cicero, domiciliata presso la stessa.',
				],
			},
		],
	},
	{
		id: 'representante-ue',
		title: 'Rappresentante legale nell’UE di società extra-UE',
		blocks: [
			{
				t: 'p',
				x: 'Le società IEG CHINA Co. Ltd (Società Controllata in CINA), IEG Events Arabia LLC (Società Controllata in Arabia Saudita), IEG ASIA PTE. LIMITED (Società Controllata a SINGAPORE), IEG EVENTS MIDDLE EAST LLC (Società Controllata a DUBAI), ITALIAN EXHIBITION GROUP USA INC. (Società Controllata negli USA) e ITALIAN EXHIBITION GROUP BRASIL EVENTOS LTDA (Società Controllata in BRASILE), in qualità di titolari del trattamento non occasionale di dati personali per le finalità di cui ai punti 1, 2, 4, 6 e 11 (quest’ultima svolta solo da IEG Events Arabia LLC) nell’ambito dell’offerta di Servizi (compresi gli Eventi da esse organizzati) e/o Prodotti a interessati con sede o residenza nell’UE, hanno designato ITALIAN EXHIBITION GROUP SPA quale proprio rappresentante nell’UE, ai sensi e per gli effetti dell’art. 27 del GDPR. In tale qualità, ITALIAN EXHIBITION GROUP SPA, in sostituzione o in aggiunta ai suddetti designanti, ma fatta salva la responsabilità di questi ultimi, funge da interlocutore per le Autorità di controllo nazionali e per gli interessati su qualsiasi questione relativa a tali attività di trattamento, al fine di garantire il rispetto del GDPR e agevolare l’esercizio dei diritti degli interessati ai sensi del GDPR.',
			},
		],
	},
	{
		id: 'representante-extra-ue',
		title: 'Rappresentante legale extra-UE di società UE',
		blocks: [
			{
				t: 'p',
				x: 'ITALIAN EXHIBITION GROUP SPA, in qualità di titolare del trattamento di dati personali nell’ambito dell’offerta di Servizi (compresi gli Eventi da essa organizzati) e/o Prodotti a interessati con sede o residenza in Cina, ha designato IEG CHINA Co. Ltd (Società Controllata in CINA) quale proprio rappresentante in Cina, ai sensi e per gli effetti dell’art. 53 della Legge cinese sulla protezione delle informazioni personali (PIPL). In tale qualità, IEG CHINA Co. Ltd funge da interlocutore per le autorità di controllo nazionali cinesi e per gli interessati su qualsiasi questione relativa alle suddette attività di trattamento.',
			},
		],
	},
	{
		id: 'comunicacao',
		title: 'Comunicazione e diffusione dei dati',
		blocks: [
			{
				t: 'p',
				x: 'I dati sono condivisi con il personale di IEG e/o delle sue Società Controllate autorizzato al trattamento dei dati (ad esempio i team Finanza, Comunicazione, Viaggi, Vendite, Marketing, Legale, ecc.).',
			},
			{
				t: 'p',
				x: 'I dati sono comunicati per le finalità di cui ai punti 1, 2, 3 da IEG e per le finalità di cui ai punti 1, 2 e 7 dalle Società Controllate e per le finalità di cui al punto 11 dalla Società Controllata IEG Events Arabia LLC. A:',
			},
			{
				t: 'ul',
				x: [
					'fornitori di servizi di hosting, sviluppo, gestione, manutenzione, disaster recovery e cybersecurity in relazione ai sistemi informatici (servizi, siti web e banche dati) di IEG e/o delle sue Società Controllate; fornitori di servizi di ricerca;',
					'altri fornitori incaricati dell’organizzazione e gestione degli Eventi e/o dei Servizi e/o dei Prodotti (ad esempio fornitori di materiali e prodotti; fornitori di servizi: progettazione, pianificazione tecnica e allestimento, biglietteria, segreteria organizzativa, imbustamento e spedizione della corrispondenza, progettazione, stampa e manutenzione di materiali editoriali, pubblicitari o promozionali, logistica, sicurezza, primo soccorso, pagamenti elettronici, servizi bancari, assicurativi e finanziari, informazioni commerciali e sulla reputazione aziendale, alberghiero, ristorazione, trasporto passeggeri, traduzioni linguistiche, piattaforme di business, emissione di titoli, accrediti, biglietti e pass di ingresso agli Eventi e ai Servizi e/o Prodotti, help desk degli eventi, servizi di corriere, vettore e spedizione, pubblicità, relazioni con i media e comunicazione, marketing diretto, web marketing, analisi di marketing, CRM – Customer Relationship Management, gestione della compliance, comunicazione elettronica, ad esempio telefonica o telematica),',
					'partner terzi che svolgono attività funzionali o complementari alla promozione degli Eventi e/o all’acquisto di Servizi e Prodotti, ad esempio enti privati e pubblici, altri enti fieristici e/o organizzatori di eventi, associazioni di categoria, con i quali IEG e/o le Società Controllate attivano azioni di co-marketing per gli Eventi,',
					'giornalisti, testate giornalistiche e rappresentanti di altri organi di comunicazione,',
					'agenti, consulenti regionali,',
					'studi legali e notai,',
					'organi di controllo e vigilanza, in particolare, ad esempio, società di revisione e revisori, revisori legali dei conti, esperti contabili, DPO – Data Protection Officer, componenti degli organismi di vigilanza sui modelli organizzativi di IEG e/o delle società del Gruppo volti a prevenire la commissione di determinate categorie di reati, auditor e componenti dei collegi sindacali,',
					'società di recupero crediti,',
					'società e professionisti di computer forensics in caso di indagini tecniche e legali connesse a sospetti di reati o altri illeciti commessi a danno di IEG, delle altre Società Controllate e/o di terzi,',
					'altri consulenti e professionisti,',
					'autorità pubbliche cui la comunicazione sia necessaria in forza di legge, regolamento o altra normativa (ad esempio rappresentanze diplomatiche e consolari, Questure, Comuni, Polizia, altre Autorità di Pubblica Sicurezza, Agenzia delle Entrate, Guardia di Finanza e simili),',
					'IEG (in tal caso i dati sono comunicati solo dalle Società Controllate),',
					'Società Controllate (in tal caso i dati sono comunicati solo da IEG e a discrezione di IEG).',
				],
			},
			{
				t: 'p',
				x: 'I dati identificativi e di contatto e i dati sui prodotti dei visitatori e dei buyer possono essere comunicati agli espositori (ad esempio tramite funzioni di ricerca e/o di richiesta di incontri e/o di contatto disponibili sulle piattaforme digitali o tramite QR Code o Codice a barre), nonché gli eventuali messaggi spontanei degli stessi interessati.',
			},
			{
				t: 'p',
				x: 'I dati identificativi, i dati di contatto e sui prodotti degli espositori e gli eventuali messaggi spontanei degli stessi possono essere comunicati ai visitatori/buyer (ad esempio tramite funzioni di ricerca e/o di richiesta di incontro e/o di contatto disponibili sulle piattaforme digitali, tramite QR Code o Codici a barre, o tramite i cataloghi degli eventi).',
			},
			{
				t: 'p',
				x: 'I dati sono comunicati, a seconda dei casi, da IEG per le finalità di cui ai punti da 4 a 7 e/o dalle Società Controllate per le sole finalità di cui ai punti 4 e 6 a:',
			},
			{
				t: 'ul',
				x: [
					'fornitori di servizi di analisi di marketing, agenzie di comunicazione e/o di relazioni pubbliche,',
					'fornitori di servizi di acquisto di spazi pubblicitari su Internet;',
					'fornitori di materiali pubblicitari o promozionali (ad esempio agenzie grafiche e creative in generale),',
					'società di produzione e gestione di siti web o blog, società di web marketing,',
					'fornitori di servizi di gestione di landing page,',
					'fornitori di servizi di modelli linguistici di grandi dimensioni (large language model) a supporto dell’analisi dei dati ai fini di profilazione e marketing, senza condivisione pubblica dei dati trattati.',
				],
			},
			{
				t: 'p',
				x: 'Qualora il terzo sopra indicato tratti i dati per conto e sulla base di istruzioni scritte di IEG e/o delle Società Controllate mittenti, esso sarà designato Responsabile esterno del trattamento ai sensi e per gli effetti dell’articolo 28 del GDPR.',
			},
			{
				t: 'p',
				x: 'Le Società Controllate, per le finalità di cui ai punti 4 e 6, comunicano i dati anche alla Capogruppo IEG (si veda anche il capitolo successivo “Trasferimento dei dati all’estero”).',
			},
			{ t: 'p', x: 'IEG e le altre Società Controllate si astengono da qualsiasi diffusione dei dati.' },
			{
				t: 'p',
				x: 'I dati degli espositori saranno diffusi, solo su richiesta, tramite il catalogo espositori relativo agli Eventi, sia cartaceo sia online.',
			},
		],
	},
	{
		id: 'transferencia',
		title: 'Trasferimento dei dati all’estero',
		blocks: [
			{
				t: 'p',
				x: 'I dati sono trasferiti da IEG e/o dalle sue Società Controllate con sede nell’UE alle seguenti categorie di destinatari terzi con sede al di fuori dell’UE (di seguito gli “importatori“):',
			},
			{
				t: 'ul',
				x: [
					'Società Controllate e/o loro fornitori, con sede al di fuori dell’UE (Cina, Singapore, USA, Emirati Arabi Uniti, Brasile), nella misura necessaria all’esecuzione del contratto e/o all’adempimento di obblighi di legge o regolamentari, ad esempio quando IEG o le altre Società Controllate con sede nell’UE trasferiscono i dati in qualità di agenti nell’interesse della Società Controllata estera;',
					'fornitori di servizi online per: raccolta di dati mediante moduli di testo compilabili dall’interessato e contenuti nelle landing page messe a disposizione dal Titolare del trattamento; piattaforme social (USA) su cui sono attive le pagine social e/o i profili di IEG e/o delle società del Gruppo (per maggiori informazioni sul regime di contitolarità applicabile in questo specifico caso alle parti coinvolte, si veda la sezione “contitolarità” della Cookie Policy), e/o cui IEG comunica dati in relazione ai servizi “lookalike” sottoscritti con essi; gestione del login tramite l’account social LinkedIn dell’utente; analisi del traffico generato dagli utenti dei siti web di IEG e/o di altre società del Gruppo (USA); servizi di pagamento elettronico; CRM – Customer Relationship Management.',
				],
			},
			{
				t: 'p',
				x: 'Le Informative sulla Privacy dei fornitori di servizi online con sede al di fuori dell’UE sono reperibili al link indicato dal rispettivo fornitore.',
			},
			{ t: 'p', x: 'Tale trasferimento di dati avverrà in presenza di garanzie adeguate, quali:' },
			{
				t: 'ul',
				x: [
					'In caso di trasferimento verso gli USA: la Decisione di adeguatezza della Commissione UE del 10 luglio 2023 relativa alla normativa statunitense sulla protezione dei dati personali, come modificata dall’accordo bilaterale UE-USA denominato “Quadro transatlantico per la protezione dei dati”.',
					'In caso di trasferimento verso il Canada (attivo solo per i fornitori di servizi di gestione di landing page): la Decisione di adeguatezza della Commissione UE del 15 gennaio 2024 relativa alla normativa canadese sulla protezione dei dati personali, in particolare la Legge sulla protezione delle informazioni personali e i documenti elettronici (PIPEDA);',
					'In caso di trasferimento verso paesi extra-UE diversi da USA e Canada: la previa stipula da parte di IEG e/o delle sue Società Controllate con sede nell’UE, con il terzo importatore, di clausole contrattuali tipo – le cosiddette “SCC” – conformi almeno al testo approvato dalla Commissione UE (fatte salve eventuali integrazioni e/o modifiche più favorevoli all’interessato), mediante le quali, per il trattamento di propria competenza, l’importatore dei dati si impegna a rispettare obblighi in materia di privacy sostanzialmente equivalenti a quelli previsti dalla pertinente normativa UE.',
				],
			},
			{
				t: 'p',
				x: 'I dati sono altresì trasferiti dalle Società Controllate con sede al di fuori dell’UE, nei limiti necessari per le finalità di cui ai punti 1, 2, 4, 6, 7 e 11, a IEG, nonché ai seguenti destinatari terzi con sede al di fuori del paese delle medesime Società Controllate (di seguito gli “importatori“):',
			},
			{
				t: 'ul',
				x: [
					'agenti;',
					'fornitori di Prodotti e/o Servizi funzionali alle attività e/o agli Eventi delle Società Controllate estere;',
					'fornitori di piattaforme di social network (USA) su cui sono attive le pagine social e/o i profili delle società del Gruppo con sede al di fuori dell’UE (per maggiori informazioni sul regime di contitolarità applicabile in questo specifico caso alle parti coinvolte, si veda la sezione “contitolarità” della nostra Cookie Policy).',
				],
			},
			{
				t: 'p',
				x: 'Tale trasferimento di dati, qualora effettuato da Società Controllate extra-UE verso IEG o verso il soggetto extra-UE, avverrà sulla base di garanzie adeguate, consistenti nella stipula, tra le parti coinvolte nel trasferimento, di contratti tipo o clausole contrattuali tipo conformi, quantomeno, ai testi approvati dalle competenti Autorità amministrative del paese in cui ha sede il soggetto controllato all’estero (fatte salve eventuali integrazioni e/o modifiche più favorevoli all’interessato).',
			},
			{
				t: 'p',
				x: 'Mediante tali contratti e/o clausole, IEG e/o i diversi importatori dei dati si impegnano a rispettare obblighi di protezione e trattamento dei dati personali trasferiti sostanzialmente equivalenti a quelli previsti dalla normativa comunitaria applicabile.',
			},
			{
				t: 'p',
				x: 'I dati sono altresì trasferiti dalle Società Controllate con sede nell’UE, per le finalità di cui ai punti 1, 2, 4, 6 e 7, a IEG senza necessità di particolari garanzie adeguate, poiché l’intero ambito del trattamento risulta adeguatamente coperto dal GDPR.',
			},
		],
	},
	{
		id: 'duracao',
		title: 'Durata del trattamento',
		blocks: [
			{
				t: 'p',
				x: 'I dati sono conservati per periodi massimi di tempo (conservazione) che dipendono dalla finalità del trattamento, decorsi i quali i dati sono cancellati o resi anonimi, come segue:',
			},
			{
				t: 'ul',
				x: [
					'Finalità di cui al punto 1 (tutela del patrimonio informativo): per un periodo indefinito, salvo quanto altrimenti previsto nel presente documento. I dati trattati per i log di continuità operativa e sicurezza informatica (ad esempio dati di login, log di errori e logout, log di anomalie sospette, ecc.) sono conservati per 1 anno dalla data di raccolta, salvo l’eventuale termine inferiore previsto dalle procedure interne del Titolare del trattamento.',
					'Finalità di cui al punto 2 – esigenze precontrattuali (se l’interessato è un lead, ossia un potenziale cliente che non ha effettuato alcun acquisto e non ha manifestato interesse per gli Eventi, i Servizi e/o i Prodotti): 2 anni dalla data di raccolta dei dati (a meno che l’ulteriore trattamento non determini una manifestazione di interesse per gli Eventi, i Servizi e/o i Prodotti, nel qual caso il trattamento avrà la durata prevista nel paragrafo seguente);',
					'Finalità di cui al punto 2 – esigenze precontrattuali (se l’interessato è un prospect, ossia un potenziale cliente che non ha effettuato alcun acquisto ma ha manifestato interesse per Eventi, Servizi e/o Prodotti): 10 anni dalla raccolta dei dati dell’interessato (a meno che tale attività non comporti la stipula di un contratto, nel qual caso il trattamento avrà la durata descritta nel paragrafo seguente);',
					'Finalità di cui al punto 2 – esecuzione del contratto (se l’interessato è un cliente): per l’intera durata del rapporto commerciale e per 10 anni dalla data di cessazione del contratto; fatti salvi i termini più brevi di seguito indicati in relazione a specifiche categorie di dati:',
				],
			},
			{
				t: 'ul',
				x: [
					'dati relativi alla redazione di lettere di invito per la richiesta di visti consolari (ad esempio copia del passaporto, ecc.): 6 mesi dalla fine dell’Evento cui si riferiscono.',
					'dati di richieste di assistenza comunicati presso i punti di raccolta (tra cui banco assicurativo, punto informazioni e sala emergenze) da visitatori ed espositori durante gli Eventi: 60 giorni dopo la fine di ciascun Evento; in caso di reclami presentati dall’interessato in relazione agli Eventi (ad esempio richieste di risarcimento), i dati potranno essere trattati ulteriormente, come meglio previsto nel paragrafo “In caso di contenzioso”.',
					'dati contenuti nel catalogo promozionale degli Eventi: per 2 edizioni del catalogo.',
					'dati relativi al servizio di “Business Matching” fornito durante gli Eventi: 3 mesi dalla fine del singolo Evento.',
					'prodotti editoriali: 5 anni dalla pubblicazione (NB: dopo la vendita del Prodotto contenente i dati, il Titolare del trattamento non controlla la successiva circolazione dello stesso).',
				],
			},
			{
				t: 'ul',
				x: [
					'Finalità di cui al punto 2 – adempimento di obblighi legali e regolamentari: 10 anni dalla data di stipula del contratto (nel caso di clienti) o dalla raccolta dei dati dell’interessato (nel caso di prospect); restano fermi i seguenti termini più brevi in relazione a specifiche categorie di dati: dati di certificazione degli eventi: fino al termine della certificazione e, pertanto, fino al completamento della certificazione;',
					'Finalità di cui al punto 3 (indagini nominative): 2 anni dalla raccolta dei dati dell’interessato (nel caso di clienti e prospect);',
					'Finalità di cui al punto 4 (profilazione di base): 2 anni dalla raccolta dei dati dell’interessato (nel caso di clienti e prospect);',
					'Finalità di cui al punto 5 (profilazione avanzata): 2 anni dalla raccolta dei dati dell’interessato (nel caso di clienti e prospect);',
					'Finalità di cui al punto 6 (soft spam): fino all’eventuale opposizione dell’interessato.',
					'Finalità di cui al punto 7 (marketing diretto) per lead, clienti e prospect: 10 anni dalla data di raccolta dei dati o fino alla data di revoca del consenso da parte dell’interessato, qualora tale revoca avvenga prima della scadenza del termine;',
					'Finalità di cui al punto 11 (gestione dei dati creditizi effettuata da IEG Events Arabia LLC): 2 anni dalla data di raccolta dei dati.',
				],
			},
			{
				t: 'p',
				x: 'In caso di contenzioso stragiudiziale o giudiziale, nei confronti dell’interessato e/o di terzi (ad esempio persone che abbiano subito danni durante gli Eventi a causa delle attività del Titolare del trattamento, dell’interessato e/o di terzi), i dati sono trattati per il tempo necessario a esercitare la tutela dei diritti del Titolare del trattamento (di norma, fino al 6° anno solare successivo all’anno di piena esecuzione di un provvedimento passato in giudicato o di una composizione amichevole tra le parti in lite).',
			},
		],
	},
	{
		id: 'meios',
		title: 'Modalità del trattamento',
		blocks: [
			{
				t: 'p',
				x: 'IEG, anche tramite le sue Società Controllate e/o fornitori terzi da queste delegati, raccoglie i dati mediante:',
			},
			{
				t: 'ul',
				x: [
					'siti web del Gruppo IEG le cui pagine elettroniche sono consultate dall’interessato;',
					'moduli online o cartacei o app di pre-registrazione o partecipazione compilati dall’interessato durante o in relazione agli Eventi e/o ai Servizi e/o ai Prodotti,',
					'QR Code o Codice a barre visualizzato e scansionato agli ingressi degli Eventi o durante la partecipazione agli stessi,',
					'biglietti da visita consegnati spontaneamente dall’interessato,',
					'domande (cartacee o online) dell’interessato per partecipare agli Eventi, ai Servizi e/o ai Prodotti,',
					'contratti stipulati con l’interessato,',
					'richieste di preventivo e/o di informazioni inviate dall’interessato (ad esempio moduli online),',
					'piattaforme online per la gestione delle richieste di contatto/incontri d’affari e per lo scambio di informazioni tra espositori, visitatori e/o buyer (ad esempio testi, video, presentazioni, sessioni live; approfondimenti e itinerari su tendenze e innovazione, visite turistiche, condivisione e comunicazione di eventi e/o altri contenuti digitali; condivisione di commenti pubblici relativi ai contenuti sopra condivisi, scambio di messaggi).',
				],
			},
			{ t: 'p', x: 'IEG raccoglie inoltre dati dalle Società Controllate nell’ambito di scambi di informazioni infragruppo.' },
			{
				t: 'p',
				x: 'I dati sono trattati da personale autorizzato e formato da IEG e/o dalle sue Società Controllate, nei limiti strettamente necessari allo svolgimento dei rispettivi compiti (ad esempio legali, commerciali, di marketing, amministrativi, logistici, informatici, di controllo di gestione, ecc.), con strumenti elettronici e cartacei e con logiche strettamente connesse alle singole finalità, come rispettivamente indicato sopra.',
			},
		],
	},
	{
		id: 'seguranca',
		title: 'Misure di sicurezza',
		blocks: [
			{
				t: 'p',
				x: 'Al trattamento dei dati personali dell’interessato si applicano misure di sicurezza tecniche e organizzative volte a garantirne l’integrità, la sicurezza e la disponibilità. Per ragioni di sicurezza, non tutte le informazioni pertinenti sono rese disponibili in questa sede. Le misure possono variare a seconda della società del Gruppo. Le principali tipologie di misure applicate sono le seguenti:',
			},
			{ t: 'h', x: 'Procedure di gestione degli asset informatici' },
			{
				t: 'ul',
				x: ['Firewall', 'Antivirus', 'Antispam', 'DMZ – Zona demilitarizzata', 'Storage ridondante'],
			},
			{ t: 'h', x: 'Procedure di gestione delle identità e degli accessi' },
			{
				t: 'ul',
				x: [
					'Credenziali di autenticazione univoche per l’accesso ai dati; 2FA e VPN per l’accesso da remoto',
					'Limitazione dell’accesso ai dati al solo personale interno, previamente designato per iscritto, autorizzato e formato dal Titolare del trattamento',
					'Profili di autorizzazione gestiti tramite Active Directory e/o Azure Directory (Entra ID) limitati secondo il principio “need to use, need to know”.',
					'Obblighi di riservatezza scritti',
					'Formazione del personale',
					'Nomina di responsabili esterni che effettuano trattamenti in outsourcing per conto dei Titolari del trattamento',
				],
			},
			{ t: 'h', x: 'Altre misure' },
			{
				t: 'ul',
				x: [
					'VLAN – Rete locale virtuale',
					'Backup giornaliero',
					'Disaster recovery',
					'Procedure di gestione delle patch',
					'Procedura di gestione degli incidenti e procedura di gestione delle violazioni dei dati (data breach)',
					'Sistemi IDS (Intrusion Detection System), IPS (Intrusion Prevention System), EDR (Endpoint Detection and Response), DLP (Data Loss Prevention)',
					'SIEM – Security Information and Event Management',
					'SOC – Security Operations Center',
					'Connessioni tramite protocollo sicuro HTTP (HTTPS) con crittografia a 2048 bit e protocollo TLS v1.x (conformità PCI DSS)',
					'Valutazione periodica delle vulnerabilità e penetration test',
					'Audit periodici.',
				],
			},
			{
				t: 'p',
				x: 'L’utilizzo di programmi software ‘bot’ (ossia automatizzati) viola le Condizioni d’Uso dei nostri siti web. IEG e le sue Società Controllate si riservano pertanto ogni diritto al risarcimento dei danni derivanti da tale comportamento e il diritto di sospendere l’accesso ai servizi a chiunque violi tale divieto.',
			},
			{
				t: 'p',
				x: 'Ci riserviamo il diritto di effettuare controlli di sicurezza (ad esempio analisi dei log) in qualsiasi momento per convalidare la tua identità, i dati di registrazione da te forniti e verificare il corretto utilizzo dei nostri servizi online, nonché per accertare eventuali violazioni delle Condizioni d’Uso dei nostri siti web e/o della legge ad essi applicabile.',
			},
		],
	},
	{
		id: 'direitos',
		title: 'Diritti dell’interessato',
		blocks: [
			{
				t: 'p',
				x: 'Gli interessati, utilizzando i dati di contatto del Titolare del trattamento (visibili nella Tabella delle società del Gruppo IEG), possono esercitare i seguenti diritti, previsti dal GDPR e/o dalla diversa normativa locale di volta in volta applicabile nel relativo paese extra-UE in materia di trattamento dei dati:',
			},
			{
				t: 'ul',
				x: [
					'Accesso ai propri dati personali trattati dal Titolare del trattamento,',
					'Rettifica o integrazione dei dati inesatti o incompleti,',
					'Cancellazione dei dati obsoleti, qualora il Titolare del trattamento non vi abbia provveduto autonomamente, nei casi in cui (i) essi non siano più necessari per le finalità del trattamento, (ii) l’interessato abbia revocato il proprio consenso al trattamento qualora tale consenso sia richiesto dalla legge, (iii) l’interessato si sia opposto al trattamento dei dati, (iv) il trattamento dei dati personali sia illecito, (v) i dati personali debbano essere cancellati per adempiere a un obbligo legale cui è soggetto il Titolare. Ciascun Titolare del trattamento si impegna ad adottare tutte le misure ragionevoli per informare le altre società del Gruppo IEG della cancellazione.',
					'Limitazione del trattamento dei dati personali, qualora (i) l’esattezza dei dati personali dell’interessato sia contestata, per consentire al Titolare del trattamento di effettuare le verifiche necessarie, (ii) l’interessato intenda limitare i propri dati personali anziché cancellarli, benché il trattamento sia illecito, (iii) l’interessato desideri che il Titolare del trattamento conservi i dati personali in quanto ritenuti necessari per difendersi in azioni legali, (iv) l’interessato si sia opposto al trattamento, ma il Titolare del trattamento debba effettuare verifiche per accertare l’esistenza di motivi legittimi per il trattamento che prevalgano sui diritti dell’interessato.',
					'Portabilità dei dati (ossia ottenere una copia in formato leggibile da dispositivo automatico dei dati forniti dall’interessato al Titolare del trattamento, ovvero che tale copia sia comunicata a un altro titolare del trattamento indicato dall’interessato, quando i dati si riferiscono a un contratto esistente tra l’interessato e il primo Titolare del trattamento e siano trattati con strumenti informatici) nei limiti stabiliti dalla normativa applicabile.',
					'Opposizione al trattamento effettuato sulla base di un legittimo interesse del Titolare del trattamento.',
					'Diritto di non essere sottoposto a un processo decisionale automatizzato che produca effetti giuridici che riguardano o incidono significativamente sull’interessato e di opporsi all’esito di qualsiasi decisione automatizzata del Titolare del trattamento relativa al trattamento dei dati personali dell’interessato. Il processo decisionale automatizzato ha luogo quando le decisioni sono assunte con mezzi tecnologici senza intervento umano. Tale diritto non sussiste quando la decisione automatizzata i) sia necessaria per la conclusione o l’esecuzione di un contratto tra l’interessato e un titolare del trattamento, o ii) sia autorizzata dal diritto dell’UE o dello Stato membro dell’UE cui è soggetto il Titolare del trattamento, che in tal caso precisa anche misure adeguate a tutela dei diritti, delle libertà e dei legittimi interessi dell’interessato, o iii) si basi sul consenso esplicito dell’interessato.',
					'Revoca del consenso quando il consenso per legge costituisca la base giuridica del trattamento (fatta salva la liceità del trattamento effettuato fino al momento della revoca).',
					'(quando si applica il GDPR) Diritto di proporre reclamo all’Autorità di controllo competente; in Italia, è il Garante per la protezione dei dati personali – Piazza Venezia 11 – IT-00187 – Roma), tel. (+39) 06.69677.1, e-mail: rpd@gpdp.it.',
					'(quando si applica una normativa sulla protezione dei dati personali diversa dal GDPR) Diritto di proporre reclamo, di agire in giudizio e/o di ricorrere a metodi alternativi di risoluzione delle controversie, previsti di volta in volta dalla normativa estera applicabile (ad esempio, nello Stato del New Jersey, diritto di impugnare qualsiasi rifiuto di una richiesta di esercizio dei diritti previsti dal New Jersey Data Privacy Act, entro un termine ragionevole dalla comunicazione del rifiuto e con modalità analoghe a quelle del procedimento di comunicazione della prima richiesta; la risposta del Titolare deve essere comunicata entro 60 giorni; qualora il Titolare respinga il ricorso, il consumatore può presentare un reclamo alla Division of Consumer Affairs del New Jersey presso il Department of Law and Public Safety (si veda https://njconsumeraffairs.gov/).',
					'Diritto di richiedere: a IEG e/o alle Società Controllate con sede nello spazio UE, nonché alle Società Controllate con sede a DUBAI, in ARABIA SAUDITA, a SINGAPORE e/o negli USA, un elenco nominativo dei terzi destinatari dei dati designati quali responsabili esterni del trattamento (si veda anche il capitolo “Comunicazione e diffusione dei dati” della presente Informativa), e, per le Società Controllate con sede in CINA e in BRASILE, un elenco nominativo di tutti i terzi destinatari dei dati (Responsabili esterni e Titolari del trattamento).',
				],
			},
			{ t: 'h', x: 'Come ottenere maggiori informazioni sui propri diritti' },
			{
				t: 'ul',
				x: [
					'se l’interessato risiede o ha sede nello SEE, o è comunque soggetto a un trattamento di dati personali disciplinato dal GDPR, per maggiori dettagli deve consultare gli articoli da 15 a 22 e 77 del Regolamento UE sulla privacy n. 679/2016 (“GDPR”), disponibile su: https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679#d1e2800-1-1;',
					'se l’interessato risiede o ha sede in Cina, o è comunque soggetto a un trattamento disciplinato dalla normativa cinese per la protezione dei dati personali, per maggiori dettagli deve consultare gli articoli da 44 a 50 del capitolo IV della Legge sulla protezione delle informazioni personali della Repubblica Popolare Cinese (PIPL), disponibile su: http://en.npc.gov.cn.cdurl.cn/2021-12/29/c_694559.htm;',
					'se l’interessato risiede o ha sede a Dubai, o è comunque soggetto a un trattamento disciplinato dalla normativa araba per la protezione dei dati personali, per maggiori dettagli deve consultare – per gli Emirati Arabi Uniti – ‘La guida per l’accesso alle informazioni governative’ e la Legge n. 26 del 2015 sull’organizzazione della pubblicazione e condivisione dei dati di Dubai, nota anche come Legge n. 26 del 2015 che regola la diffusione e lo scambio di dati; e la Legge sulla protezione dei dati personali, Decreto-legge federale n. 45 del 2021 sulla protezione dei dati personali) su: https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws;',
					'se l’interessato risiede o ha sede in Brasile, o è comunque soggetto a un trattamento disciplinato dalla normativa brasiliana per la protezione dei dati personali, deve consultare gli articoli da 17 a 22 del capitolo III della Legge generale sulla protezione dei dati personali (LGPD), su: https://lgpd-brazil.info;',
					'se l’interessato risiede o ha sede a Singapore, o è comunque soggetto a un trattamento disciplinato dalla normativa di Singapore per la protezione dei dati personali, deve consultare gli articoli da 5.1 a 5.2 del capitolo V del “Personal Data Protection Act 2012 (“PDPA”)” disponibile su: https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act;',
					'se l’interessato risiede o ha sede negli USA, o è comunque soggetto a un trattamento disciplinato dalla normativa statunitense per la protezione dei dati personali, può consultare le informazioni disponibili su: https://www.whitecase.com/insight-our-thinking/us-data-privacy-guide e, in relazione al trattamento di dati personali relativi a soggetti qualificati come consumatori (ossia che agiscono in un contesto individuale o familiare) effettuato dalla nostra Società Controllata con sede nello Stato del New Jersey (USA), il New Jersey Data Privacy Act consultabile su: https://pub.njleg.state.nj.us/Bills/2022/S0500/332_R6.PDF;',
					'se l’interessato risiede o ha sede in Arabia Saudita, o è soggetto a un trattamento disciplinato dalla normativa saudita sulla protezione dei dati, deve consultare: https://sdaia.gov.sa/en/Research/Pages/DataProtection.aspx',
				],
			},
		],
	},
	{
		id: 'alteracoes',
		title: 'Modifiche all’Informativa sulla Privacy',
		blocks: [
			{
				t: 'p',
				x: 'L’Informativa può essere modificata nel tempo per riflettere i cambiamenti apportati al trattamento dei dati personali e/o per adeguarsi a eventuali requisiti normativi sopravvenuti.',
			},
			{
				t: 'p',
				x: 'L’Informativa aggiornata sarà comunicata all’interessato nei modi previsti dalla legge e con modalità adeguate (ad esempio mediante pubblicazione sul/sui sito/i web di IEG e/o delle sue Società Controllate, oppure con un messaggio di posta elettronica o un inserimento nelle aree online riservate agli utenti).',
			},
		],
	},
];
