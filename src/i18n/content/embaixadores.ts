/*
 * Conteúdo da página de Embaixadores. Nomes de pessoas, fotos e perfis ficam no componente.
 * `people` é indexado pelo id do embaixador (nome sem acentos, em minúsculas, separado por hífen).
 * "\n" na descrição vira quebra de linha.
 */
import type { Lang } from '../routes';

interface Content {
	metaTitle: string;
	metaDescription: string;
	titleA: string;
	titleB: string;
	intro: string[];
	section: string;
	navLabel: string;
	instagramLabel: string; // {name}
	closing: { lead: string; body: string[]; final: string };
	people: Record<string, string>;
}

export const content: Record<Lang, Content> = {
	pt: {
		metaTitle: 'Embaixadores - FESQUA',
		metaDescription:
			'Conheça os Embaixadores FESQUA: líderes e especialistas que impulsionam o setor de esquadrias e vidro com inovação, conhecimento técnico e tendências de mercado.',
		titleA: 'Embaixadores',
		titleB: 'Fesqua',
		intro: [
			'Nesta página, você terá a oportunidade de conhecer e se inspirar com os embaixadores da Fesqua – especialistas influentes que desempenham papéis importantes na indústria.',
			'Nossos embaixadores são líderes visionários, apaixonados pelo setor de esquadrias e Vidros, e dedicados a promover a excelência e a inovação.',
			'Eles representam diferentes áreas de expertise e possuem vasta experiência, trazendo consigo uma riqueza de conhecimento e ideias.',
		],
		section: 'Conheça nossos Embaixadores:',
		navLabel: 'Embaixadores',
		instagramLabel: 'Instagram de {name}',
		closing: {
			lead: 'Esses são os nossos embaixadores da Fesqua, que representam a diversidade e o talento presentes na indústria de esquadrias e vidros. Suas contribuições e conhecimentos são fundamentais para impulsionar a evolução e o progresso do setor.',
			body: [
				'Na Fesqua, acreditamos na importância de compartilhar ideias, promover o aprendizado e conectar pessoas. Nossos embaixadores são peças-chave nesse processo, trazendo suas perspectivas únicas e inspirando outros profissionais a alcançarem novos patamares.',
				'Fique atento às atualizações e eventos da Fesqua, onde você terá a oportunidade de interagir com os  embaixadores e aprender com suas experiências. Eles estarão presentes em palestras, painéis de discussão e workshops, compartilhando seu conhecimento e insights valiosos.',
				'Aproveite essa página para conhecer mais sobre cada embaixador, explorando seus perfis, projetos e conquistas.',
			],
			final: 'Eles são verdadeiros líderes no setor e certamente serão uma fonte de inspiração para você!',
		},
		people: {
			'alessandra-ribeiro': 'Especialista em absorção e isolamento acústico. Há mais de 12 anos no mercado da construção civil, entregando soluções personalizadas em vidro.',
			'prof-alexandre-araujo-me': 'Uma figura de autoridade incontestável no campo da serralheria, é CEO e fundador do Canal do Serralheiro e autor de cinco livros renomados na área. Com um mestrado pela Universidade Federal Fluminense e uma carreira de 38 anos.',
			'audrey-dias': 'Diretora Técnica da Aluparts, Consultora de Esquadrias. Atuante há mais de 20 anos no mercado de esquadrias de alumínio e vidros.',
			'cirilo-paes': 'Experiente Consultor brasileiro com mais de 30 anos de atuação na área de Vidros e Esquadrias de Alumínio. Possui certificações em PNL e Coaching Empresarial.',
			'daniel-estrela': 'Maior Influencer Digital do setor com o Vidro Na Obra; Idealizador (Co-fundador) Arch Glass Brasil, Barato com Qualidade e Mentoria Glass; Jurado do Prêmio Melhores Vidreiros do Brasil; Palestrante; Consultor de empresas do setor.',
			'felipe-leite': 'Profissional com 20 anos de vasta experiência na área comercial de esquadrias. Como CEO das empresas Sonora Acústica e Sonora Prime, ele se destaca no mercado pela prioridade que dá à excelência.',
			'fernanda-lisot': 'Consultoria na área administrativa, comercial e de marketing para fábricas de esquadrias de alumínio. Há 7 anos como sócia proprietária de fábrica de esquadrias de alumínio.',
			'gabriel-batista': 'Sócio fundador do Grupo Setor Vidreiro. Seus diversos cursos online e presenciais impactam milhares de vidraceiros, arquitetos e designers por todo o Brasil.',
			'marcelo-de-lima': 'Instalador especializado em esquadrias de alumínio •\nTransformando desafios do dia a dia em soluções reais\nCompartilho experiências do campo diretamente com você.\nMeu compromisso: inovação, qualidade e proximidade com o mercado.',
			'nicole-fischer': 'Possui mais de 20 anos experiência na indústria de esquadrias acústicas, é vice-presidente de economia e estatística da AFEAL e diretora da Atenua Som.',
			'michele-gleice': 'Mais de 27 anos de experiência na avaliação tecnológica de sistemas e materiais para a construção civil, participante dos Comitês Brasileiro (ABNT/CB).',
			'ricardo-camara': 'Especialista em esquadrias de alumínio e vidro há mais de 30 anos, Projetista de Sistemas de Esquadrias de Alto Padrão, fundador e instrutor da renomada Escola Central do Vidraceiro e Serralheiro.',
			'vagner-bispo': 'Conhecido carinhosamente pelo mercado de O Mestre dos Guarda Corpos. Com 15 anos no mercado vidreiro. Idealizador do primeiro congresso brasileiro de guarda corpo. Idealizador do Mundo do Guarda corpo.',
		},
	},
	en: {
		metaTitle: 'Ambassadors - FESQUA',
		metaDescription:
			'Meet the FESQUA Ambassadors: leaders and specialists driving the window-frame and glass industry with innovation, technical knowledge and market trends.',
		titleA: 'Fesqua',
		titleB: 'Ambassadors',
		intro: [
			'On this page, you will have the opportunity to meet and be inspired by the Fesqua ambassadors – influential specialists who play important roles in the industry.',
			'Our ambassadors are visionary leaders, passionate about the window-frame and glass sector, and dedicated to promoting excellence and innovation.',
			'They represent different areas of expertise and have vast experience, bringing a wealth of knowledge and ideas with them.',
		],
		section: 'Meet our Ambassadors:',
		navLabel: 'Ambassadors',
		instagramLabel: "{name}'s Instagram",
		closing: {
			lead: 'These are our Fesqua ambassadors, who represent the diversity and talent found in the window-frame and glass industry. Their contributions and knowledge are essential to driving the evolution and progress of the sector.',
			body: [
				'At Fesqua, we believe in the importance of sharing ideas, promoting learning and connecting people. Our ambassadors are key players in this process, bringing their unique perspectives and inspiring other professionals to reach new heights.',
				'Stay tuned for Fesqua updates and events, where you will have the opportunity to interact with the ambassadors and learn from their experiences. They will be present at talks, panel discussions and workshops, sharing their knowledge and valuable insights.',
				'Use this page to learn more about each ambassador, exploring their profiles, projects and achievements.',
			],
			final: 'They are true leaders in the sector and will certainly be a source of inspiration for you!',
		},
		people: {
			'alessandra-ribeiro': 'Specialist in acoustic absorption and insulation. Over 12 years in the construction market, delivering customized glass solutions.',
			'prof-alexandre-araujo-me': 'An undisputed authority in the field of metalwork, he is CEO and founder of Canal do Serralheiro and author of five renowned books in the field. With a master\'s degree from Universidade Federal Fluminense and a 38-year career.',
			'audrey-dias': 'Technical Director at Aluparts, Window-Frame Consultant. Active for over 20 years in the aluminum window-frame and glass market.',
			'cirilo-paes': 'Experienced Brazilian consultant with over 30 years working in the Glass and Aluminum Window-Frame field. Holds certifications in NLP and Business Coaching.',
			'daniel-estrela': 'The sector\'s biggest digital influencer through Vidro Na Obra; creator (co-founder) of Arch Glass Brasil, Barato com Qualidade and Mentoria Glass; judge of the Best Glaziers in Brazil Award; speaker; consultant to companies in the sector.',
			'felipe-leite': 'Professional with 20 years of extensive experience in the commercial side of window frames. As CEO of Sonora Acústica and Sonora Prime, he stands out in the market for the priority he gives to excellence.',
			'fernanda-lisot': 'Consulting in administration, sales and marketing for aluminum window-frame manufacturers. For 7 years, owner-partner of an aluminum window-frame factory.',
			'gabriel-batista': 'Founding partner of Grupo Setor Vidreiro. His many online and in-person courses impact thousands of glaziers, architects and designers across Brazil.',
			'marcelo-de-lima': 'Installer specialized in aluminum window frames •\nTurning everyday challenges into real solutions\nI share field experience directly with you.\nMy commitment: innovation, quality and closeness to the market.',
			'nicole-fischer': 'Has over 20 years of experience in the acoustic window-frame industry, is vice president of economics and statistics at AFEAL and director of Atenua Som.',
			'michele-gleice': 'Over 27 years of experience in the technological assessment of systems and materials for construction, a member of the Brazilian Committees (ABNT/CB).',
			'ricardo-camara': 'Aluminum and glass window-frame specialist for over 30 years, designer of high-end window-frame systems, founder and instructor of the renowned Escola Central do Vidraceiro e Serralheiro.',
			'vagner-bispo': 'Affectionately known in the market as "The Master of Glass Railings". With 15 years in the glass industry. Creator of the first Brazilian glass railing congress. Creator of Mundo do Guarda Corpo.',
		},
	},
	es: {
		metaTitle: 'Embajadores - FESQUA',
		metaDescription:
			'Conozca a los Embajadores FESQUA: líderes y especialistas que impulsan el sector de carpintería y vidrio con innovación, conocimiento técnico y tendencias de mercado.',
		titleA: 'Embajadores',
		titleB: 'Fesqua',
		intro: [
			'En esta página tendrá la oportunidad de conocer e inspirarse con los embajadores de Fesqua: especialistas influyentes que desempeñan papeles importantes en la industria.',
			'Nuestros embajadores son líderes visionarios, apasionados por el sector de la carpintería y el vidrio, y dedicados a promover la excelencia y la innovación.',
			'Representan diferentes áreas de especialización y cuentan con una amplia experiencia, aportando una gran riqueza de conocimientos e ideas.',
		],
		section: 'Conozca a nuestros Embajadores:',
		navLabel: 'Embajadores',
		instagramLabel: 'Instagram de {name}',
		closing: {
			lead: 'Estos son nuestros embajadores de Fesqua, que representan la diversidad y el talento presentes en la industria de la carpintería y el vidrio. Sus contribuciones y conocimientos son fundamentales para impulsar la evolución y el progreso del sector.',
			body: [
				'En Fesqua creemos en la importancia de compartir ideas, promover el aprendizaje y conectar personas. Nuestros embajadores son piezas clave en este proceso, aportando sus perspectivas únicas e inspirando a otros profesionales a alcanzar nuevos niveles.',
				'Esté atento a las novedades y los eventos de Fesqua, donde tendrá la oportunidad de interactuar con los embajadores y aprender de sus experiencias. Estarán presentes en charlas, paneles de discusión y talleres, compartiendo su conocimiento y valiosas perspectivas.',
				'Aproveche esta página para conocer más sobre cada embajador, explorando sus perfiles, proyectos y logros.',
			],
			final: '¡Son verdaderos líderes del sector y sin duda serán una fuente de inspiración para usted!',
		},
		people: {
			'alessandra-ribeiro': 'Especialista en absorción y aislamiento acústico. Más de 12 años en el mercado de la construcción, entregando soluciones personalizadas en vidrio.',
			'prof-alexandre-araujo-me': 'Una figura de autoridad indiscutible en el campo de la cerrajería, es CEO y fundador de Canal do Serralheiro y autor de cinco libros reconocidos en el área. Con una maestría por la Universidade Federal Fluminense y una carrera de 38 años.',
			'audrey-dias': 'Directora Técnica de Aluparts, Consultora de Carpintería. Con más de 20 años de actuación en el mercado de carpintería de aluminio y vidrios.',
			'cirilo-paes': 'Experimentado consultor brasileño con más de 30 años de actuación en el área de Vidrios y Carpintería de Aluminio. Cuenta con certificaciones en PNL y Coaching Empresarial.',
			'daniel-estrela': 'El mayor influencer digital del sector con Vidro Na Obra; creador (cofundador) de Arch Glass Brasil, Barato com Qualidade y Mentoria Glass; jurado del Premio Mejores Vidrieros de Brasil; conferencista; consultor de empresas del sector.',
			'felipe-leite': 'Profesional con 20 años de amplia experiencia en el área comercial de carpintería. Como CEO de las empresas Sonora Acústica y Sonora Prime, se destaca en el mercado por la prioridad que da a la excelencia.',
			'fernanda-lisot': 'Consultoría en las áreas administrativa, comercial y de marketing para fábricas de carpintería de aluminio. Desde hace 7 años, socia propietaria de una fábrica de carpintería de aluminio.',
			'gabriel-batista': 'Socio fundador del Grupo Setor Vidreiro. Sus numerosos cursos en línea y presenciales impactan a miles de vidrieros, arquitectos y diseñadores en todo Brasil.',
			'marcelo-de-lima': 'Instalador especializado en carpintería de aluminio •\nTransformando los desafíos del día a día en soluciones reales\nComparto experiencias de campo directamente con usted.\nMi compromiso: innovación, calidad y cercanía con el mercado.',
			'nicole-fischer': 'Cuenta con más de 20 años de experiencia en la industria de carpintería acústica, es vicepresidenta de economía y estadística de AFEAL y directora de Atenua Som.',
			'michele-gleice': 'Más de 27 años de experiencia en la evaluación tecnológica de sistemas y materiales para la construcción, participante de los Comités Brasileños (ABNT/CB).',
			'ricardo-camara': 'Especialista en carpintería de aluminio y vidrio desde hace más de 30 años, proyectista de sistemas de carpintería de alto estándar, fundador e instructor de la renombrada Escola Central do Vidraceiro e Serralheiro.',
			'vagner-bispo': 'Conocido cariñosamente en el mercado como "El Maestro de las Barandillas". Con 15 años en el mercado del vidrio. Creador del primer congreso brasileño de barandillas. Creador de Mundo do Guarda Corpo.',
		},
	},
	it: {
		metaTitle: 'Ambasciatori - FESQUA',
		metaDescription:
			"Scopri gli Ambasciatori FESQUA: leader e specialisti che guidano il settore dei serramenti e del vetro con innovazione, competenza tecnica e tendenze di mercato.",
		titleA: 'Ambasciatori',
		titleB: 'Fesqua',
		intro: [
			"In questa pagina avrai l'opportunità di conoscere e lasciarti ispirare dagli ambasciatori di Fesqua – specialisti influenti che ricoprono ruoli importanti nel settore.",
			"I nostri ambasciatori sono leader visionari, appassionati del settore dei serramenti e del vetro e impegnati a promuovere l'eccellenza e l'innovazione.",
			'Rappresentano diverse aree di competenza e vantano una vasta esperienza, portando con sé un patrimonio di conoscenze e idee.',
		],
		section: 'Conosci i nostri Ambasciatori:',
		navLabel: 'Ambasciatori',
		instagramLabel: 'Instagram di {name}',
		closing: {
			lead: "Questi sono i nostri ambasciatori di Fesqua, che rappresentano la diversità e il talento presenti nel settore dei serramenti e del vetro. Il loro contributo e le loro competenze sono fondamentali per promuovere l'evoluzione e il progresso del settore.",
			body: [
				"In Fesqua crediamo nell'importanza di condividere idee, promuovere l'apprendimento e mettere in contatto le persone. I nostri ambasciatori sono figure chiave in questo processo: portano le loro prospettive uniche e ispirano altri professionisti a raggiungere nuovi traguardi.",
				"Resta aggiornato su novità ed eventi di Fesqua, dove avrai l'opportunità di interagire con gli ambasciatori e imparare dalle loro esperienze. Saranno presenti a interventi, tavole rotonde e workshop, condividendo le loro conoscenze e preziosi spunti.",
				'Approfitta di questa pagina per scoprire di più su ciascun ambasciatore, esplorandone profili, progetti e risultati.',
			],
			final: 'Sono veri leader del settore e saranno sicuramente una fonte di ispirazione per te!',
		},
		people: {
			'alessandra-ribeiro': "Specialista in assorbimento e isolamento acustico. Da oltre 12 anni nel mercato dell'edilizia, realizza soluzioni personalizzate in vetro.",
			'prof-alexandre-araujo-me': "Figura di indiscussa autorevolezza nel campo della carpenteria metallica, è CEO e fondatore di Canal do Serralheiro e autore di cinque libri di riferimento nel settore. Con un master presso la Universidade Federal Fluminense e una carriera di 38 anni.",
			'audrey-dias': 'Direttrice Tecnica di Aluparts, Consulente di Serramenti. Attiva da oltre 20 anni nel mercato dei serramenti in alluminio e del vetro.',
			'cirilo-paes': "Consulente brasiliano esperto, con oltre 30 anni di attività nel settore del Vetro e dei Serramenti in Alluminio. Possiede certificazioni in PNL e Business Coaching.",
			'daniel-estrela': "Il più grande influencer digitale del settore con Vidro Na Obra; ideatore (co-fondatore) di Arch Glass Brasil, Barato com Qualidade e Mentoria Glass; giurato del Premio Migliori Vetrai del Brasile; relatore; consulente di aziende del settore.",
			'felipe-leite': "Professionista con 20 anni di ampia esperienza nell'area commerciale dei serramenti. Come CEO di Sonora Acústica e Sonora Prime, si distingue sul mercato per la priorità che dà all'eccellenza.",
			'fernanda-lisot': "Consulenza nelle aree amministrativa, commerciale e marketing per produttori di serramenti in alluminio. Da 7 anni è socia proprietaria di un'azienda di serramenti in alluminio.",
			'gabriel-batista': 'Socio fondatore del Grupo Setor Vidreiro. I suoi numerosi corsi online e in presenza raggiungono migliaia di vetrai, architetti e designer in tutto il Brasile.',
			'marcelo-de-lima': "Installatore specializzato in serramenti in alluminio •\nTrasformo le sfide di ogni giorno in soluzioni concrete\nCondivido l'esperienza sul campo direttamente con te.\nIl mio impegno: innovazione, qualità e vicinanza al mercato.",
			'nicole-fischer': "Ha oltre 20 anni di esperienza nel settore dei serramenti acustici, è vicepresidente per economia e statistica di AFEAL e direttrice di Atenua Som.",
			'michele-gleice': 'Oltre 27 anni di esperienza nella valutazione tecnologica di sistemi e materiali per l\'edilizia, membro dei Comitati Brasiliani (ABNT/CB).',
			'ricardo-camara': "Specialista in serramenti in alluminio e vetro da oltre 30 anni, progettista di sistemi di serramenti di alta gamma, fondatore e istruttore della rinomata Escola Central do Vidraceiro e Serralheiro.",
			'vagner-bispo': 'Affettuosamente conosciuto sul mercato come "Il Maestro dei Parapetti". Con 15 anni nel settore del vetro. Ideatore del primo congresso brasiliano sui parapetti. Ideatore di Mundo do Guarda Corpo.',
		},
	},
};
