/*
 * Conteúdo traduzido da lista de expositores (interface + vocabulário dos dados).
 * Nomes de empresas, contatos, estande, rua e ano ficam como estão em src/data/expositores.ts.
 * Segmentos, destaques, diferenciais e modelos de descrição ganham versão por idioma (reserva: português).
 */
import type { Lang } from '../routes';

type L4<T> = { pt: T; en: T; es: T; it: T };

/** Textos da interface (página + modal + mensagens do JS). Chaves iguais nos 4 idiomas. */
export const content: L4<{
	title: string;
	metaTitle: string;
	metaDescription: string;
	searchLabel: string;
	searchPlaceholder: string;
	one: string;
	many: string;
	resultOne: string;
	resultMany: string;
	forQuery: string;
	none: string;
	noneLive: string;
	showing: string;
	moreAbout: string;
	seeMore: string;
	booth: string;
	street: string;
	highlights: string;
	site: string;
	mail: string;
	phone: string;
	since: string;
	close: string;
	emptyTitle: string;
	emptyHint: string;
	clear: string;
	endPrefix: string;
	loadMore: string;
	noscript: string;
	backToTop: string;
}> = {
	pt: {
		title: 'Expositores',
		metaTitle: 'Lista de Expositores - FESQUA',
		metaDescription:
			'Confira a lista completa de expositores da FESQUA! Encontre fabricantes, fornecedores de ferragens, vidros e maquinários confirmados para a edição.',
		searchLabel: 'Buscar expositor pelo nome',
		searchPlaceholder: 'Buscar expositor',
		one: 'expositor',
		many: 'expositores',
		resultOne: 'resultado',
		resultMany: 'resultados',
		forQuery: ' para “{q}”',
		none: 'Nenhum resultado',
		noneLive: 'Nenhum expositor encontrado',
		showing: 'Mostrando {a} de {b}',
		moreAbout: 'Ver mais sobre {name}',
		seeMore: 'Ver mais',
		booth: 'Estande',
		street: 'Rua',
		highlights: 'Destaques',
		site: 'Site',
		mail: 'E-mail',
		phone: 'Telefone',
		since: 'No mercado desde',
		close: 'Fechar',
		emptyTitle: 'Nenhum expositor encontrado',
		emptyHint: 'Confira o nome digitado ou limpe a busca.',
		clear: 'Limpar busca',
		endPrefix: 'Você chegou ao fim da lista · ',
		loadMore: 'Carregar mais',
		noscript: 'Ative o JavaScript para ver todos os expositores e usar a busca.',
		backToTop: 'Voltar ao topo',
	},
	en: {
		title: 'Exhibitors',
		metaTitle: 'Exhibitor List - FESQUA',
		metaDescription:
			'Browse the full list of FESQUA exhibitors! Find confirmed manufacturers and suppliers of hardware, glass and machinery for this edition.',
		searchLabel: 'Search exhibitor by name',
		searchPlaceholder: 'Search exhibitor',
		one: 'exhibitor',
		many: 'exhibitors',
		resultOne: 'result',
		resultMany: 'results',
		forQuery: ' for “{q}”',
		none: 'No results',
		noneLive: 'No exhibitors found',
		showing: 'Showing {a} of {b}',
		moreAbout: 'Learn more about {name}',
		seeMore: 'Learn more',
		booth: 'Booth',
		street: 'Street',
		highlights: 'Highlights',
		site: 'Website',
		mail: 'Email',
		phone: 'Phone',
		since: 'In the market since',
		close: 'Close',
		emptyTitle: 'No exhibitors found',
		emptyHint: 'Check the name you typed or clear the search.',
		clear: 'Clear search',
		endPrefix: 'You have reached the end of the list · ',
		loadMore: 'Load more',
		noscript: 'Enable JavaScript to see all exhibitors and use the search.',
		backToTop: 'Back to top',
	},
	es: {
		title: 'Expositores',
		metaTitle: 'Lista de Expositores - FESQUA',
		metaDescription:
			'Consulte la lista completa de expositores de FESQUA. Encuentre fabricantes y proveedores de herrajes, vidrios y maquinaria confirmados para esta edición.',
		searchLabel: 'Buscar expositor por nombre',
		searchPlaceholder: 'Buscar expositor',
		one: 'expositor',
		many: 'expositores',
		resultOne: 'resultado',
		resultMany: 'resultados',
		forQuery: ' para “{q}”',
		none: 'Ningún resultado',
		noneLive: 'Ningún expositor encontrado',
		showing: 'Mostrando {a} de {b}',
		moreAbout: 'Ver más sobre {name}',
		seeMore: 'Ver más',
		booth: 'Stand',
		street: 'Calle',
		highlights: 'Destacados',
		site: 'Sitio web',
		mail: 'Correo electrónico',
		phone: 'Teléfono',
		since: 'En el mercado desde',
		close: 'Cerrar',
		emptyTitle: 'Ningún expositor encontrado',
		emptyHint: 'Revise el nombre escrito o borre la búsqueda.',
		clear: 'Borrar búsqueda',
		endPrefix: 'Llegó al final de la lista · ',
		loadMore: 'Cargar más',
		noscript: 'Active JavaScript para ver todos los expositores y usar la búsqueda.',
		backToTop: 'Volver arriba',
	},
	it: {
		title: 'Espositori',
		metaTitle: 'Elenco degli Espositori - FESQUA',
		metaDescription:
			"Consulta l'elenco completo degli espositori di FESQUA! Trova produttori e fornitori confermati di ferramenta, vetro e macchinari per questa edizione.",
		searchLabel: 'Cerca espositore per nome',
		searchPlaceholder: 'Cerca espositore',
		one: 'espositore',
		many: 'espositori',
		resultOne: 'risultato',
		resultMany: 'risultati',
		forQuery: ' per “{q}”',
		none: 'Nessun risultato',
		noneLive: 'Nessun espositore trovato',
		showing: 'Visualizzati {a} di {b}',
		moreAbout: 'Scopri di più su {name}',
		seeMore: 'Scopri di più',
		booth: 'Stand',
		street: 'Via',
		highlights: 'In evidenza',
		site: 'Sito web',
		mail: 'E-mail',
		phone: 'Telefono',
		since: 'Sul mercato dal',
		close: 'Chiudi',
		emptyTitle: 'Nessun espositore trovato',
		emptyHint: 'Controlla il nome digitato o cancella la ricerca.',
		clear: 'Cancella ricerca',
		endPrefix: "Sei arrivato alla fine dell'elenco · ",
		loadMore: 'Carica altri',
		noscript: 'Attiva JavaScript per vedere tutti gli espositori e usare la ricerca.',
		backToTop: 'Torna su',
	},
};

/* ------------------------------------------------------------------ */
/* Vocabulário dos dados. A chave é o texto em português (como está em src/data/expositores.ts). */

/** Segmentos: id estável (independente do idioma) + rótulos. */
export const SEGMENTS: Record<string, { id: string } & Record<Exclude<Lang, 'pt'>, string>> = {
	Fachadas: { id: 'fachadas', en: 'Facades', es: 'Fachadas', it: 'Facciate' },
	'Máquinas e equipamentos': { id: 'maquinas', en: 'Machinery and equipment', es: 'Máquinas y equipos', it: 'Macchinari e attrezzature' },
	'Esquadrias de PVC': { id: 'pvc', en: 'PVC window and door frames', es: 'Carpintería de PVC', it: 'Serramenti in PVC' },
	Serralheria: { id: 'serralheria', en: 'Metalwork', es: 'Cerrajería', it: 'Carpenteria metallica' },
	Madeira: { id: 'madeira', en: 'Wood', es: 'Madera', it: 'Legno' },
	'Esquadrias de alumínio': { id: 'aluminio', en: 'Aluminum window and door frames', es: 'Carpintería de aluminio', it: 'Serramenti in alluminio' },
	'Vedação e automação': { id: 'vedacao', en: 'Sealing and automation', es: 'Sellado y automatización', it: 'Tenuta e automazione' },
	'Ferragens e acessórios': { id: 'ferragens', en: 'Hardware and accessories', es: 'Herrajes y accesorios', it: 'Ferramenta e accessori' },
	Vidros: { id: 'vidros', en: 'Glass', es: 'Vidrios', it: 'Vetri' },
};

/** Destaques/produtos (também usados, em minúscula, dentro das descrições). */
export const HIGHLIGHTS: Record<string, Record<Exclude<Lang, 'pt'>, string>> = {
	'Sistemas stick': { en: 'Stick systems', es: 'Sistemas stick', it: 'Sistemi stick' },
	'Revestimentos em ACM': { en: 'ACM cladding', es: 'Revestimientos en ACM', it: 'Rivestimenti in ACM' },
	'Fachadas ventiladas': { en: 'Ventilated facades', es: 'Fachadas ventiladas', it: 'Facciate ventilate' },
	Prensas: { en: 'Presses', es: 'Prensas', it: 'Presse' },
	'Cortadeiras de vidro': { en: 'Glass cutters', es: 'Cortadoras de vidrio', it: 'Taglierine per vetro' },
	'Serras de corte duplo': { en: 'Double-cut saws', es: 'Sierras de corte doble', it: 'Seghe a doppio taglio' },
	'Sistemas de baixa condutividade térmica': {
		en: 'Low thermal conductivity systems',
		es: 'Sistemas de baja conductividad térmica',
		it: 'Sistemi a bassa conducibilità termica',
	},
	'Persianas integradas': { en: 'Integrated blinds', es: 'Persianas integradas', it: 'Persiane integrate' },
	'Perfis com reforço de aço': { en: 'Steel-reinforced profiles', es: 'Perfiles con refuerzo de acero', it: 'Profili con rinforzo in acciaio' },
	Brises: { en: 'Brise-soleil', es: 'Brise-soleil', it: 'Brise-soleil' },
	'Portões automáticos': { en: 'Automatic gates', es: 'Portones automáticos', it: 'Cancelli automatici' },
	'Grades de proteção': { en: 'Protective grilles', es: 'Rejas de protección', it: 'Inferriate di protezione' },
	'Guarda-corpos de aço': { en: 'Steel railings', es: 'Barandillas de acero', it: 'Parapetti in acciaio' },
	'Folhas laminadas': { en: 'Laminated door leaves', es: 'Hojas laminadas', it: 'Ante laminate' },
	Deques: { en: 'Decks', es: 'Decks', it: 'Deck' },
	'Esquadrias em cumaru e freijó': {
		en: 'Cumaru and freijó frames',
		es: 'Carpintería en cumarú y freijó',
		it: 'Serramenti in cumaru e freijó',
	},
	'Portas de correr em PVC': { en: 'PVC sliding doors', es: 'Puertas correderas de PVC', it: 'Porte scorrevoli in PVC' },
	'Bancadas de montagem': { en: 'Assembly benches', es: 'Bancadas de montaje', it: 'Banchi di montaggio' },
	'Portas de giro': { en: 'Hinged doors', es: 'Puertas batientes', it: 'Porte a battente' },
	'Perfis anodizados': { en: 'Anodized profiles', es: 'Perfiles anodizados', it: 'Profili anodizzati' },
	'Sistemas de alto desempenho': { en: 'High-performance systems', es: 'Sistemas de alto rendimiento', it: 'Sistemi ad alte prestazioni' },
	Lapidadoras: { en: 'Glass edging machines', es: 'Biseladoras de vidrio', it: 'Molatrici per vetro' },
	'Selantes estruturais': { en: 'Structural sealants', es: 'Selladores estructurales', it: 'Sigillanti strutturali' },
	'Automação de portas': { en: 'Door automation', es: 'Automatización de puertas', it: 'Automazione per porte' },
	'Motores para portões': { en: 'Gate motors', es: 'Motores para portones', it: 'Motori per cancelli' },
	Fechaduras: { en: 'Locks', es: 'Cerraduras', it: 'Serrature' },
	Dobradiças: { en: 'Hinges', es: 'Bisagras', it: 'Cerniere' },
	'Kits para vidro temperado': { en: 'Tempered glass kits', es: 'Kits para vidrio templado', it: 'Kit per vetro temperato' },
	'Janelas maxim-ar': { en: 'Awning windows', es: 'Ventanas proyectantes', it: 'Finestre a vasistas' },
	'Esquadrias de correr': { en: 'Sliding frames', es: 'Carpintería corredera', it: 'Serramenti scorrevoli' },
	'Sensores de presença': { en: 'Presence sensors', es: 'Sensores de presencia', it: 'Sensori di presenza' },
	'Vidros insulados': { en: 'Insulated glass', es: 'Vidrios aislantes', it: 'Vetri isolanti' },
	'Vidros de controle solar': { en: 'Solar control glass', es: 'Vidrios de control solar', it: 'Vetri a controllo solare' },
	'Vidros temperados': { en: 'Tempered glass', es: 'Vidrios templados', it: 'Vetri temperati' },
	'Fechos e travas': { en: 'Latches and catches', es: 'Cierres y trabas', it: 'Chiusure e blocchi' },
	'Guarda-corpos de alumínio': { en: 'Aluminum railings', es: 'Barandillas de aluminio', it: 'Parapetti in alluminio' },
	'Fitas de vedação': { en: 'Sealing tapes', es: 'Cintas de sellado', it: 'Nastri di tenuta' },
	'Fachadas unitizadas': { en: 'Unitized facades', es: 'Fachadas unitizadas', it: 'Facciate unitizzate' },
	Gaxetas: { en: 'Gaskets', es: 'Juntas', it: 'Guarnizioni' },
	'Laminados acústicos': { en: 'Acoustic laminated glass', es: 'Laminados acústicos', it: 'Laminati acustici' },
	Espelhos: { en: 'Mirrors', es: 'Espejos', it: 'Specchi' },
	'Vidros curvos': { en: 'Curved glass', es: 'Vidrios curvos', it: 'Vetri curvi' },
	'Portas maciças': { en: 'Solid doors', es: 'Puertas macizas', it: 'Porte massicce' },
	'Escadas metálicas': { en: 'Metal staircases', es: 'Escaleras metálicas', it: 'Scale metalliche' },
	'Estruturas especiais': { en: 'Special structures', es: 'Estructuras especiales', it: 'Strutture speciali' },
	'Janelas em madeira certificada': { en: 'Certified wood windows', es: 'Ventanas de madera certificada', it: 'Finestre in legno certificato' },
	Puxadores: { en: 'Handles', es: 'Tiradores', it: 'Maniglie' },
	Roldanas: { en: 'Rollers', es: 'Roldanas', it: 'Rotelle' },
	'Janelas de PVC com câmaras múltiplas': {
		en: 'Multi-chamber PVC windows',
		es: 'Ventanas de PVC con cámaras múltiples',
		it: 'Finestre in PVC a più camere',
	},
	'Centros de usinagem CNC': { en: 'CNC machining centers', es: 'Centros de mecanizado CNC', it: 'Centri di lavoro CNC' },
	'Pele de vidro': { en: 'Glass curtain wall', es: 'Muro cortina', it: 'Facciata continua' },
};

/** Diferenciais citados nas descrições ("O diferencial está em ..." / "com foco em ..."). */
export const DIFFERENTIALS: Record<string, Record<Exclude<Lang, 'pt'>, string>> = {
	'estética arquitetônica': { en: 'architectural aesthetics', es: 'estética arquitectónica', it: 'estetica architettonica' },
	'precisão de corte': { en: 'cutting precision', es: 'precisión de corte', it: 'precisione di taglio' },
	'vedação superior': { en: 'superior sealing', es: 'sellado superior', it: 'tenuta superiore' },
	durabilidade: { en: 'durability', es: 'durabilidad', it: 'durabilità' },
	'assistência técnica': { en: 'technical service', es: 'asistencia técnica', it: 'assistenza tecnica' },
	'durabilidade da vedação': { en: 'seal durability', es: 'durabilidad del sellado', it: 'durata della tenuta' },
	'facilidade de instalação': { en: 'ease of installation', es: 'facilidad de instalación', it: 'facilità di installazione' },
	estanqueidade: { en: 'watertightness', es: 'estanqueidad', it: 'tenuta stagna' },
	'integração com sistemas de acesso': {
		en: 'integration with access systems',
		es: 'integración con sistemas de acceso',
		it: 'integrazione con i sistemi di accesso',
	},
	'transparência e leveza': { en: 'transparency and lightness', es: 'transparencia y ligereza', it: 'trasparenza e leggerezza' },
	robustez: { en: 'robustness', es: 'robustez', it: 'robustezza' },
	'baixo consumo': { en: 'low consumption', es: 'bajo consumo', it: 'basso consumo' },
	'isolamento acústico': { en: 'acoustic insulation', es: 'aislamiento acústico', it: 'isolamento acustico' },
	'acabamento artesanal': { en: 'handcrafted finish', es: 'acabado artesanal', it: 'finitura artigianale' },
	'resistência à corrosão': { en: 'corrosion resistance', es: 'resistencia a la corrosión', it: 'resistenza alla corrosione' },
	'proteção anticorrosiva': { en: 'anti-corrosion protection', es: 'protección anticorrosiva', it: 'protezione anticorrosione' },
	'acabamento refinado': { en: 'refined finish', es: 'acabado refinado', it: 'finitura raffinata' },
	'projetos sob medida': { en: 'custom projects', es: 'proyectos a medida', it: 'progetti su misura' },
	'ciclo de vida elevado': { en: 'long service life', es: 'ciclo de vida prolongado', it: 'ciclo di vita elevato' },
	'controle solar': { en: 'solar control', es: 'control solar', it: 'controllo solare' },
	'baixa manutenção': { en: 'low maintenance', es: 'bajo mantenimiento', it: 'bassa manutenzione' },
	segurança: { en: 'safety', es: 'seguridad', it: 'sicurezza' },
	'acabamento premium': { en: 'premium finish', es: 'acabado premium', it: 'finitura premium' },
	'treinamento da equipe': { en: 'team training', es: 'capacitación del equipo', it: 'formazione del team' },
	'resistência a intempéries': { en: 'weather resistance', es: 'resistencia a la intemperie', it: 'resistenza agli agenti atmosferici' },
	'precisão no corte': { en: 'cutting accuracy', es: 'precisión en el corte', it: 'accuratezza di taglio' },
	'desempenho estrutural': { en: 'structural performance', es: 'desempeño estructural', it: 'prestazioni strutturali' },
	'conforto acústico': { en: 'acoustic comfort', es: 'confort acústico', it: 'comfort acustico' },
	produtividade: { en: 'productivity', es: 'productividad', it: 'produttività' },
};

/** Modelos de descrição. {n}=anos, {items}=lista, {diff}=diferencial. */
export const DESC_TEMPLATES: Record<'A' | 'B' | 'C' | 'D', Record<Exclude<Lang, 'pt'>, string>> = {
	A: {
		en: 'With {n} years in the market, the company develops {items} for construction companies, resellers and designers. Its differentiator is {diff}, together with a dedicated team that follows each project from detailing to installation. Explore the product lines and request a quote at the booth.',
		es: 'Con {n} años en el mercado, la empresa desarrolla {items} para constructoras, distribuidores y proyectistas. Su diferencial está en {diff} y en un equipo dedicado que acompaña cada proyecto, desde el detalle hasta la instalación. Conozca las líneas y solicite una propuesta en el stand.',
		it: "Da {n} anni sul mercato, l'azienda sviluppa {items} per imprese edili, rivenditori e progettisti. Si distingue per {diff}, oltre che per un team dedicato che segue ogni progetto, dal dettaglio esecutivo all'installazione. Scopri le linee e richiedi un preventivo allo stand.",
	},
	B: {
		en: 'Solutions in {items} for residential and commercial projects.',
		es: 'Soluciones en {items} para obras residenciales y comerciales.',
		it: 'Soluzioni in {items} per progetti residenziali e commerciali.',
	},
	C: {
		en: 'Manufacturer of {items} with delivery throughout Brazil.',
		es: 'Fabricante de {items} con entrega a todo Brasil.',
		it: 'Produttore di {items} con consegna in tutto il Brasile.',
	},
	D: {
		en: 'Specialized in {items}, with a focus on {diff}. Custom projects and technical support throughout the job.',
		es: 'Especializada en {items}, con foco en {diff}. Proyectos a medida y soporte técnico durante toda la obra.',
		it: 'Specializzata in {items}, con particolare attenzione a {diff}. Progetti su misura e supporto tecnico durante tutto il cantiere.',
	},
};

/** Conjunção da lista de itens por idioma ("A, B and C"). */
export const LIST_AND: Record<Exclude<Lang, 'pt'>, string> = { en: 'and', es: 'y', it: 'e' };
