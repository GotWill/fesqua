/** Textos da página de contato (formulário). Os `value` enviados ao servidor NÃO são traduzidos (ficam em views/Contato.astro). */

const pt = {
	title: 'Contato - FESQUA',
	description: 'Fale com a organização da FESQUA! Tire dúvidas sobre visitação, estandes, credenciamento ou imprensa pelos nossos canais oficiais de atendimento.',
	titleA: 'Contato Comercial',
	titleB: 'Fesqua',
	lead: 'Faça ótimos negócios na feira que atrai os principais compradores do setor!',
	intro:
		'Entre em contato com nossa equipe de vendas, nossos consultores estão preparados para auxiliá-lo nas melhores soluções para destacar seus produtos e alavancar grandes negócios para sua empresa:',
	note: 'Campos marcados com * são requeridos',
	name: 'Nome',
	namePh: 'Seu nome completo',
	company: 'Empresa',
	companyPh: 'Nome da sua empresa',
	phone: 'Telefone',
	phonePh: '(00) 00000-0000',
	email: 'E-mail',
	emailPh: 'seuemail@empresa.com.br',
	deptoLabel: 'Qual departamento deseja entrar em contato?',
	deptoPh: 'Selecione um departamento',
	// ordem = comercial, operacional, marketing, financeiro, outros
	deptos: ['Comercial', 'Operacional', 'Marketing', 'Financeiro', 'Outros'],
	message: 'Mensagem',
	messagePh: 'Escreva sua mensagem',
	selectPh: 'Selecione uma opção',
	// ordem = eu-concordo, eu-nao-concordo
	consentOptions: ['Eu concordo', 'Eu não concordo'],
	// TODO: revisão jurídica
	consents: [
		'Perfil avançado (finalidade 5) pelo IEG:',
		'Transferência de dados do IEG para empresas parceiras ou para terceiros titulares do IEG e/ou de suas Controladas, para suas subsequentes ações independentes de marketing direto (finalidade 8a):',
		'Ações de soft-spam (objetivo 6) por: c. Italian Exhibition Group Brasil Eventos LTDA (Sociedade Controlada no BRASIL):',
	],
	send: 'Enviar',
	privacy: 'Política de privacidade',
	msg: {
		ok: 'Mensagem enviada com sucesso! Nossa equipe retornará em breve.',
		invalid: 'Revise os campos destacados e tente novamente.',
		server: 'Não foi possível enviar sua mensagem agora. Tente novamente em instantes.',
		select: 'Selecione uma opção.',
		sending: 'Enviando…',
	},
};

type Contato = typeof pt;

const en: Contato = {
	title: 'Contact - FESQUA',
	description: 'Get in touch with the FESQUA organizers! Ask about visiting, booths, accreditation or press through our official support channels.',
	titleA: 'Sales Contact',
	titleB: 'Fesqua',
	lead: 'Do great business at the fair that attracts the sector’s leading buyers!',
	intro:
		'Get in touch with our sales team. Our consultants are ready to help you find the best solutions to showcase your products and drive major business for your company:',
	note: 'Fields marked with * are required',
	name: 'Name',
	namePh: 'Your full name',
	company: 'Company',
	companyPh: 'Your company name',
	phone: 'Phone',
	phonePh: '(00) 00000-0000',
	email: 'Email',
	emailPh: 'youremail@company.com',
	deptoLabel: 'Which department would you like to contact?',
	deptoPh: 'Select a department',
	deptos: ['Sales', 'Operations', 'Marketing', 'Finance', 'Other'],
	message: 'Message',
	messagePh: 'Write your message',
	selectPh: 'Select an option',
	consentOptions: ['I agree', 'I do not agree'],
	// TODO: revisão jurídica
	consents: [
		'Advanced profiling (purpose 5) by IEG:',
		'Transfer of data from IEG to partner companies or to third parties of IEG and/or its Subsidiaries, for their subsequent independent direct marketing activities (purpose 8a):',
		'Soft-spam activities (purpose 6) by: c. Italian Exhibition Group Brasil Eventos LTDA (Subsidiary in BRAZIL):',
	],
	send: 'Send',
	privacy: 'Privacy policy',
	msg: {
		ok: 'Message sent successfully! Our team will get back to you shortly.',
		invalid: 'Please review the highlighted fields and try again.',
		server: 'We could not send your message right now. Please try again in a moment.',
		select: 'Select an option.',
		sending: 'Sending…',
	},
};

const es: Contato = {
	title: 'Contacto - FESQUA',
	description: '¡Hable con la organización de FESQUA! Resuelva sus dudas sobre visitas, stands, acreditación o prensa a través de nuestros canales oficiales de atención.',
	titleA: 'Contacto Comercial',
	titleB: 'Fesqua',
	lead: '¡Haga grandes negocios en la feria que atrae a los principales compradores del sector!',
	intro:
		'Póngase en contacto con nuestro equipo de ventas: nuestros consultores están preparados para ayudarle con las mejores soluciones para destacar sus productos e impulsar grandes negocios para su empresa:',
	note: 'Los campos marcados con * son obligatorios',
	name: 'Nombre',
	namePh: 'Su nombre completo',
	company: 'Empresa',
	companyPh: 'Nombre de su empresa',
	phone: 'Teléfono',
	phonePh: '(00) 00000-0000',
	email: 'Correo electrónico',
	emailPh: 'sucorreo@empresa.com',
	deptoLabel: '¿Con qué departamento desea ponerse en contacto?',
	deptoPh: 'Seleccione un departamento',
	deptos: ['Comercial', 'Operaciones', 'Marketing', 'Finanzas', 'Otros'],
	message: 'Mensaje',
	messagePh: 'Escriba su mensaje',
	selectPh: 'Seleccione una opción',
	consentOptions: ['Estoy de acuerdo', 'No estoy de acuerdo'],
	// TODO: revisão jurídica
	consents: [
		'Perfilado avanzado (finalidad 5) por IEG:',
		'Transferencia de datos de IEG a empresas asociadas o a terceros titulares de IEG y/o de sus Sociedades Controladas, para sus posteriores acciones independientes de marketing directo (finalidad 8a):',
		'Acciones de soft-spam (objetivo 6) por: c. Italian Exhibition Group Brasil Eventos LTDA (Sociedad Controlada en BRASIL):',
	],
	send: 'Enviar',
	privacy: 'Política de privacidad',
	msg: {
		ok: '¡Mensaje enviado con éxito! Nuestro equipo se pondrá en contacto con usted en breve.',
		invalid: 'Revise los campos resaltados e inténtelo de nuevo.',
		server: 'No fue posible enviar su mensaje en este momento. Inténtelo de nuevo en unos instantes.',
		select: 'Seleccione una opción.',
		sending: 'Enviando…',
	},
};

const it: Contato = {
	title: 'Contatti - FESQUA',
	description: 'Contatta l’organizzazione di FESQUA! Chiedi informazioni su visite, stand, accreditamento o stampa tramite i nostri canali ufficiali di assistenza.',
	titleA: 'Contatto Commerciale',
	titleB: 'Fesqua',
	lead: 'Fai ottimi affari nella fiera che attrae i principali buyer del settore!',
	intro:
		'Contatta il nostro team vendite: i nostri consulenti sono pronti ad aiutarti con le migliori soluzioni per valorizzare i tuoi prodotti e generare grandi opportunità di business per la tua azienda:',
	note: 'I campi contrassegnati con * sono obbligatori',
	name: 'Nome',
	namePh: 'Il tuo nome completo',
	company: 'Azienda',
	companyPh: 'Nome della tua azienda',
	phone: 'Telefono',
	phonePh: '(00) 00000-0000',
	email: 'E-mail',
	emailPh: 'tuaemail@azienda.com',
	deptoLabel: 'Con quale reparto desideri metterti in contatto?',
	deptoPh: 'Seleziona un reparto',
	deptos: ['Commerciale', 'Operativo', 'Marketing', 'Amministrazione', 'Altro'],
	message: 'Messaggio',
	messagePh: 'Scrivi il tuo messaggio',
	selectPh: 'Seleziona un’opzione',
	consentOptions: ['Acconsento', 'Non acconsento'],
	// TODO: revisão jurídica
	consents: [
		'Profilazione avanzata (finalità 5) da parte di IEG:',
		'Trasferimento di dati da IEG a società partner o a terzi titolari di IEG e/o delle sue Società Controllate, per le loro successive azioni autonome di marketing diretto (finalità 8a):',
		'Azioni di soft-spam (finalità 6) da parte di: c. Italian Exhibition Group Brasil Eventos LTDA (Società Controllata in BRASILE):',
	],
	send: 'Invia',
	privacy: 'Informativa sulla privacy',
	msg: {
		ok: 'Messaggio inviato con successo! Il nostro team ti risponderà a breve.',
		invalid: 'Controlla i campi evidenziati e riprova.',
		server: 'Non è stato possibile inviare il messaggio in questo momento. Riprova tra qualche istante.',
		select: 'Seleziona un’opzione.',
		sending: 'Invio in corso…',
	},
};

export const contato = { pt, en, es, it };
