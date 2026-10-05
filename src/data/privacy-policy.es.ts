// TODO: revisão jurídica (tradução em rascunho)
import type { Section } from './privacy-policy';

export const TITLE = 'Política de Privacidad';
export const SUMMARY = 'Resumen';
export const HERO = ['Política de', 'Privacidad'];

export const sections: Section[] = [
	{
		id: 'introducao',
		title: 'Introducción',
		blocks: [
			{
				t: 'p',
				x: 'La presente Política de Privacidad (en adelante, la “Política”) se facilita de conformidad con la legislación aplicable en materia de protección de datos personales, en relación con los datos personales tratados por la sociedad ITALIAN EXHIBITION GROUP S.p.A. (“IEG“) y/o por las demás sociedades controladas por esta y enumeradas en la tabla siguiente (las “Sociedades Controladas“), que:',
			},
			{
				t: 'ul',
				x: [
					'organizan o acogen, también conjuntamente con socios terceros y también en favor de terceros, eventos, ferias, conferencias/congresos, talleres, seminarios web y/o reuniones de negocios, presenciales y/o virtuales (los “Eventos“), o',
					'prestan servicios y suministran productos (a título meramente enunciativo y no limitativo: catering, montajes, limpieza y consigna, formación, edición, servicios para eventos, etc.) (los “Servicios“).',
				],
			},
			{
				t: 'p',
				x: 'Los datos personales (los “datos“) son los datos que consisten en cualquier información vinculada o vinculable a i) sujetos calificados como “interesados” con arreglo al Reglamento (UE) 2016/679 (“RGPD”) (es decir, personas físicas, empresarios individuales y/o sociedades de personas u otras organizaciones con una base subjetiva restringida a las que se refieren los datos personales) y/o ii) otros sujetos sustancialmente equiparados a los interesados por la legislación de protección de datos de la UE o extranjera aplicable al tratamiento de que se trate.',
			},
			{
				t: 'p',
				x: 'El tratamiento de datos incluye, cuando proceda, las operaciones de registro, organización, conservación y tratamiento en soporte papel, magnético, automatizado o telemático, la elaboración, la modificación, la selección, la extracción, la comparación, la utilización, la interconexión de datos con arreglo a criterios cualitativos, cuantitativos y temporales, recurrentes o definibles periódicamente, el tratamiento temporal destinado a una rápida agregación o transformación de los propios datos, la comunicación, la supresión y la destrucción de los datos, o combinaciones de dos o más de las operaciones citadas, según resulte necesario para las finalidades indicadas a continuación.',
			},
		],
	},
	{
		id: 'categorias',
		title: 'Categorías de interesados y recogida de datos',
		blocks: [
			{
				t: 'p',
				x: 'Los datos tratados se refieren a las siguientes categorías de interesados, que facilitan los datos a título personal o en nombre de las organizaciones a las que pertenecen:',
			},
			{
				t: 'ul',
				x: [
					'clientes (es decir, expositores, visitantes/consumidores, compradores, asistentes a conferencias, asistentes a congresos, ponentes de eventos, participantes en talleres, seminarios web y reuniones de negocios, compradores de servicios y productos),',
					'clientes potenciales (es decir, sujetos que han manifestado interés por los Eventos, Servicios y/o Productos mediante solicitudes de contacto, información o presupuesto o de cualquier otra forma, incluida la suscripción a los boletines informativos del Grupo IEG),',
					'otras categorías de interesados (destinatarios de invitaciones para participar en los Eventos, por ejemplo, invitados, periodistas y representantes de medios de comunicación, menores de 14 años, usuarios de los sitios web y/o aplicaciones proporcionados por IEG y/o por las Sociedades Controladas).',
				],
			},
			{ t: 'p', x: 'La recogida de datos se realiza:' },
			{
				t: 'ul',
				x: [
					'a través del propio interesado y/o,',
					'en bases de datos públicas y/o privadas, limitada a datos de identificación, contacto, societarios, fiscales, económico-patrimoniales y financieros, solvencia e idoneidad empresarial del interesado,',
					'a través de las Sociedades Controladas, limitada a datos de identificación, contacto, societarios, fiscales, económico-patrimoniales y financieros, y',
					'en plataformas de redes sociales (por ejemplo, LinkedIn, Facebook), limitada a datos de identificación (nombre y apellidos o denominación de la empresa), datos de contacto (ciudad y región de residencia y/o sede, dirección de correo electrónico, número de teléfono fijo o móvil), sector económico y de mercancías al que pertenece y/o de interés comercial.',
				],
			},
		],
	},
	{
		id: 'principios',
		title: 'Principios generales del tratamiento',
		blocks: [
			{
				t: 'p',
				x: 'Los datos se tratan de conformidad con los principios de licitud, lealtad, corrección, transparencia, proporcionalidad, necesidad, exactitud, integridad y seguridad, y con las demás obligaciones normativas establecidas en la normativa aplicable en cada momento en materia de tratamiento de datos personales.',
			},
		],
	},
	{
		id: 'finalidade',
		title: 'Finalidad del tratamiento',
		blocks: [
			{ t: 'p', x: 'El tratamiento tiene las siguientes finalidades:' },

			{ t: 'h', x: '1. Protección de activos y seguridad informática' },
			{
				t: 'p',
				x: 'Protección de los activos de información intangibles de IEG y/o de sus Sociedades Controladas, continuidad de la actividad y seguridad informática.',
			},

			{ t: 'h', x: '2. Newsletter y necesidades precontractuales y contractuales' },
			{ t: 'p', x: '2.a) Suscripción al servicio de newsletter.' },
			{
				t: 'p',
				x: '2.b) Satisfacción de necesidades precontractuales (por ejemplo, comprobaciones de solvencia y control de riesgos y fraudes, tramitación de las solicitudes del interesado de presupuestos u otra información) y/o cumplimiento de obligaciones contractuales (incluidas, entre otras, la planificación y gestión técnico-organizativa de los Eventos y/o Servicios y Productos) y/o de obligaciones establecidas por una ley, un reglamento o una normativa comunitaria o extranjera relacionadas con los Eventos y/o Servicios y Productos de IEG (incluida, por ejemplo, la elaboración de los estados financieros consolidados del Grupo IEG por parte de la sociedad matriz IEG) y/o de la Sociedad Controlada (por ejemplo, obligaciones contables, fiscales o administrativas).',
			},

			{ t: 'h', x: '3. Estudios de mercado' },
			{
				t: 'p',
				x: 'Estudios de mercado, realizados mediante encuestas nominativas (efectuadas exclusivamente por IEG), con el fin de detectar los niveles de rendimiento percibidos y/o los grados de satisfacción relativos a los Eventos, Servicios y Productos y las consiguientes expectativas de los clientes y clientes potenciales de IEG y/o de sus Sociedades Controladas.',
			},

			{ t: 'h', x: '4. Elaboración de perfiles básica' },
			{ t: 'p', x: 'Elaboración de perfiles básica realizada por IEG y/o por sus Sociedades Controladas.' },
			{
				t: 'p',
				x: 'Por elaboración de perfiles se entiende el tratamiento automatizado de datos personales consistente en utilizar dichos datos para evaluar determinados aspectos personales relativos a una persona física, en particular para analizar o predecir aspectos relativos (…) a la situación económica, (…) las preferencias individuales, los intereses, la fiabilidad, el comportamiento, la ubicación (…) de dicho sujeto.',
			},
			{
				t: 'p',
				x: 'La elaboración de perfiles es relevante, a efectos de privacidad, únicamente si se refiere a personas físicas, es decir, empresarios individuales o sociedades de personas y sus socios/administradores, o representantes internos de sociedades anónimas, entidades u organizaciones.',
			},
			{
				t: 'p',
				x: 'La elaboración de perfiles básica utiliza conjuntos de datos limitados, facilitados por el interesado y recogidos de las fuentes de terceros indicadas anteriormente y/o comunicados a IEG por las Sociedades Controladas.',
			},
			{ t: 'p', x: 'Se tratan principalmente los siguientes datos:' },
			{
				t: 'ul',
				x: [
					'expositores: nombre y apellidos, denominación de la empresa de la organización a la que pertenecen, datos de contacto, residencia o sede, país de origen, sitio web, sector de actividad, marca, tipos de servicio o producto ofrecido por el expositor, presupuesto anual promocional/publicitario, tipo de distribución (tienda, grandes almacenes, concept store), mercados de interés (por ejemplo, países, tipo de clientes B2B o B2C);',
					'otros compradores de Servicios y Productos: nombre y apellidos, denominación de la empresa de la organización a la que pertenecen, datos de contacto, residencia o sede, país de origen, sitio web, sector de actividad, tipo de Servicio o Producto adquirido,',
					'compradores/visitantes: nombre y apellidos, denominación de la empresa de la organización a la que pertenecen, datos de contacto, cargo y nivel de responsabilidad de la persona de contacto, residencia o sede, país de origen, sitio web, año de fundación de la empresa, volumen de negocios, número de empleados, sector de actividad, porcentaje de negocio vinculado a Italia y al extranjero, regiones italianas y extranjeras de interés, principales categorías de Eventos, Servicios o Productos de interés del comprador, principales categorías de servicios y/o productos comercializados por este (también en términos porcentuales de ventas por área geográfica), categorías de clientes de la organización, finalidad de la visita al Evento;',
					'periodistas: nombre y apellidos, datos de contacto, sector y medio al que pertenecen, país de origen, idioma;',
					'ponentes de eventos, asistentes a conferencias/reuniones: nombre y apellidos, datos de contacto, sector al que pertenecen, profesionalidad/temas tratados, idioma;',
					'otras categorías de clientes: nombre y apellidos, datos de contacto, país de origen, producto o sector económico de actividad, volumen de negocios, número de trabajadores, principales categorías de servicios o productos de interés y/o comercializados por el cliente.',
				],
			},

			{ t: 'h', x: '5. Elaboración de perfiles avanzada' },
			{ t: 'p', x: 'Elaboración de perfiles avanzada realizada exclusivamente por IEG.' },
			{
				t: 'note',
				x: 'NB: Esta finalidad se limita a los clientes y clientes potenciales de IEG y/o de sus Sociedades Controladas que sean personas físicas, empresarios individuales o sociedades de personas y los socios/administradores correspondientes y/o representantes internos de sociedades anónimas, entidades u organizaciones. Lo mismo se aplica si, en cambio, se refiere a datos de sujetos distintos de las categorías antes mencionadas, a los que no resulta aplicable la legislación sobre protección de datos personales.',
			},
			{ t: 'p', x: 'Esta finalidad presupone el consentimiento específico del interesado.' },
			{
				t: 'p',
				x: 'La elaboración de perfiles avanzada tiene por objeto analizar las interacciones generales del interesado con las distintas entidades del Grupo IEG (la llamada “customer centricity”) utilizando e integrando entre sí, comparando y reelaborando con lógicas pertinentes para este objetivo, las categorías de datos y/o los criterios principales descritos a continuación:',
			},
			{
				t: 'ul',
				x: [
					'producto o sector económico de actividad del comprador/visitante/expositor/congresista u otro cliente de IEG y/o de sus Sociedades Controladas;',
					'categorías de Eventos, Servicios y/o Productos solicitados por los interesados y/o que se les ofrecen;',
					'historial de transacciones con IEG y/o con sus Sociedades Controladas. Por ejemplo: categorías de Eventos y Servicios y/o Productos adquiridos o de interés, evolución de los precios de compra relativos dentro de períodos de tiempo predefinidos, evolución del presupuesto anual promocional/publicitario de los Eventos declarado por el interesado;',
					'niveles de rendimiento percibido y grado de satisfacción del interesado con respecto a los Eventos en los que ha participado y a los Servicios y/o Productos adquiridos, deducidos de: encuestas nominativas efectuadas por IEG a los interesados y referidas únicamente a IEG y/o de otros informes de datos estadísticos, también nominativos, elaborados por IEG a partir de datos relativos a la participación en Eventos o a la compra de Servicios y/o Productos, referidos a interesados atribuibles a la Sociedad Controlada y compartidos por IEG con las Sociedades Controladas, elaborados para identificar estrategias comunes de marketing operativo, funcionales para: aumentar, a lo largo del tiempo, el nivel de satisfacción de los interesados con respecto a los Eventos, Servicios y Productos, así como el desarrollo del consiguiente volumen de negocios del Grupo IEG, tanto a nivel de cada Sociedad Controlada como consolidado;',
					'margen comercial, referido al interesado y/o a grupos de interesados, evaluado a nivel de Grupo (para Eventos, Servicios y/o Productos individuales y/o para agregaciones de los mismos, por ejemplo, por categorías de productos, períodos de tiempo relevantes, franjas de precios aplicadas, etc.) en función de los márgenes comerciales aplicados al interesado por IEG y/o por las Sociedades Controladas;',
					'(si el interesado es un cliente o un cliente potencial) datos sobre el comportamiento de navegación en los sitios web de IEG y/o de sus Sociedades Controladas o durante el uso de los Servicios y/o Productos prestados a través de dichos sitios (por ejemplo, mediante cookies relativas a las páginas de los sitios web que visita el interesado o al país desde el que se conecta), interacciones con otros canales de comunicación (por ejemplo, mediante cookies relativas a páginas y perfiles en redes sociales) y/o con servicios de envío de mensajes de correo electrónico comerciales (por ejemplo, cookies relativas a la correcta entrega de los mensajes enviados, a las reacciones del usuario ante los correos electrónicos mediante acciones como abrir un adjunto o aceptar una solicitud de enlace a páginas de destino o a adjuntos del mensaje);',
				],
			},
			{
				t: 'p',
				x: 'La elaboración de perfiles avanzada permite, según el caso, enviar al interesado únicamente comunicaciones promocionales pertinentes para sus expectativas y necesidades más probables deducidas del análisis antes mencionado, limitar la frecuencia de dichos mensajes dentro de períodos de tiempo predefinidos evitando la saturación, limitar el envío de mensajes por canales ineficaces, garantizar la mejor experiencia de compra de Eventos, Servicios y/o Productos e identificar las acciones más eficaces para determinados públicos objetivo.',
			},

			{ t: 'h', x: '6. Comunicaciones comerciales (soft spam)' },
			{
				t: 'p',
				x: 'Envío por parte de IEG y/o de sus Sociedades Controladas (por correo electrónico, mensaje de texto, notificaciones push de aplicaciones, funciones de mensajería instantánea como WhatsApp y Telegram, llamadas telefónicas con operador, redes sociales y otras herramientas automatizadas, correo postal ordinario) de comunicaciones comerciales y publicitarias –incluidos boletines informativos– y ofertas de venta de Eventos y/o Servicios y/o Productos de naturaleza similar a los previamente adquiridos por el interesado (cliente) o que hayan sido objeto de solicitudes precontractuales u otra manifestación de interés por parte del interesado (cliente potencial), incluso implícita (por ejemplo, expresada mediante la entrega espontánea de una tarjeta de visita a IEG y/o a una Sociedad Controlada) (denominadas conjuntamente “soft spam“).',
			},
			{
				t: 'p',
				x: 'En caso de tratamiento por parte de Sociedades Controladas con sede en BRASIL, CHINA y SINGAPUR, el responsable del tratamiento solo podrá tratar, para las finalidades del apartado 6, los datos del interesado (exclusivamente visitante de Eventos de carácter B2C) sobre la base del consentimiento previo y específico del interesado.',
			},

			{ t: 'h', x: '7. Marketing directo por parte de IEG' },
			{
				t: 'p',
				x: 'Tras, por regla general, aunque no exclusivamente, las encuestas nominativas a que se refiere el punto 3 y/o los informes estadísticos a que se refiere el punto 5: acciones de marketing directo (es decir, comunicaciones comerciales y publicitarias –incluidos boletines informativos– y/o ofertas de venta de Eventos y/o Servicios y/o Productos) realizadas exclusivamente por IEG (no también por las Sociedades Controladas) dirigidas a clientes y clientes potenciales de IEG y/o de las Sociedades Controladas (es decir, interesados que nunca han adquirido Eventos, Servicios o Productos) si el marketing directo se refiere a Eventos, Servicios y Productos de naturaleza no similar a los ya adquiridos o respecto de los que se haya manifestado interés, o, en todo caso, iii) dirigidas a clientes y clientes potenciales de las Sociedades Controladas cuyos datos les sean transferidos a IEG por estas.',
			},
			{ t: 'p', x: 'Esta finalidad presupone el consentimiento específico del interesado.' },

			{ t: 'h', x: '8. Cesión de datos' },
			{
				t: 'p',
				x: '8.a) De IEG a empresas socias o a sujetos terceros de IEG y/o de sus Sociedades Controladas (por ejemplo, organizadores de Eventos, expositores, otros operadores activos en los Eventos o Servicios/Productos), para sus acciones autónomas de marketing directo relativas a sus respectivos servicios/productos. Esta finalidad presupone el consentimiento específico del interesado.',
			},
			{
				t: 'p',
				x: '8.b) De IEG a plataformas de redes sociales con el fin de determinar –a partir del análisis del/de los perfil(es) social(es) del interesado– nuevos grupos de leads (es decir, otros clientes potenciales) con un perfil similar a los comunicados por IEG, y posteriores acciones de marketing directo dirigidas a estos nuevos grupos de leads (los llamados servicios “lookalike”) por parte de las plataformas de redes sociales. Esta finalidad presupone el consentimiento específico del interesado en favor de IEG.',
			},

			{ t: 'h', x: '9. Seguridad en línea y física' },
			{
				t: 'p',
				x: 'Gestión de la seguridad en línea y física, en particular para proteger a IEG y a las Sociedades Controladas, a los participantes en los Eventos y Servicios, y los sitios web y aplicaciones del Grupo IEG frente a fraudes, robos, apropiaciones indebidas, daños u otras infracciones de la ley, determinar las responsabilidades correspondientes y proteger los derechos conexos de IEG y/o de sus Sociedades Controladas.',
			},

			{ t: 'h', x: '10. Otras actividades organizativas y productivas' },
			{ t: 'p', x: 'Gestión de otras actividades organizativas y productivas de IEG y/o de sus Sociedades Controladas:' },
			{
				t: 'ul',
				x: [
					'gestión del sistema de calidad adoptado por IEG y/o por sus Sociedades Controladas, mejora de la calidad de los Eventos, servicios y Productos,',
					'control de gestión,',
					'gestión del acceso (por ejemplo, mediante registro espontáneo del usuario) a los sitios web de IEG y/o de sus Sociedades Controladas y a los contenidos y/o servicios accesibles desde ellos (si dichas actividades no son ya debidas por contrato),',
					'gestión de datos de VIP (por ejemplo, para la aplicación de condiciones de acceso facilitado a los Eventos),',
					'producción, impresión y difusión de material editorial impreso y/o basado en la web,',
					'gestión de la acreditación y participación en los Eventos y/o Servicios de los medios de comunicación, órganos de prensa y representantes de los servicios periodísticos y de comunicación,',
					'gestión extracontractual de la participación de los interesados en iniciativas temáticas de carácter extraordinario y/o temporal, colaterales a los Eventos,',
					'gestión de la videovigilancia en los recintos del Evento.',
				],
			},
			{
				t: 'p',
				x: 'Las finalidades adicionales específicas relacionadas con cada tratamiento podrán identificarse en detalle mediante informaciones complementarias de los responsables del tratamiento.',
			},

			{ t: 'h', x: '11. Gestión de datos de crédito' },
			{
				t: 'p',
				x: 'Gestión de datos de crédito por parte de la Sociedad Controlada IEG Events Arabia LLC: el tratamiento se refiere a datos relativos a la situación económico-financiera de una persona, datos sobre la capacidad de pago, datos relativos a transacciones pasadas y al comportamiento en materia de pagos y deudas. Esta finalidad presupone el consentimiento específico del interesado.',
			},
		],
	},
	{
		id: 'base-legal',
		title: 'Base jurídica del tratamiento. Carácter obligatorio o facultativo de la facilitación de los datos y consecuencias de no facilitarlos',
		blocks: [
			{ t: 'p', x: 'Las bases jurídicas del tratamiento son las siguientes:' },
			{
				t: 'ul',
				x: [
					'En relación con las finalidades del apartado 1 (protección de activos de información intangibles y continuidad de la actividad y seguridad informática): el interés legítimo de IEG y/o de las Sociedades Controladas en la protección adecuada, gestionada de forma centralizada en IEG y/o descentralizada también en las Sociedades Controladas, de los activos de información intangibles de IEG y de las Sociedades Controladas y de la continuidad de la actividad y la seguridad informática correspondientes.',
					'En relación con las finalidades del apartado 2.a (servicio de newsletter): el interés legítimo de IEG y/o de las Sociedades Controladas en mantener el contacto comercial con quienes ya han demostrado interés por los Eventos, Servicios o Productos del Grupo IEG al suscribirse al servicio de newsletter (por lo tanto, sin necesidad de consentimiento del interesado);',
					'En relación con las finalidades del apartado 2.b (satisfacción de necesidades precontractuales y/o cumplimiento de obligaciones contractuales y/o de obligaciones derivadas de una ley, reglamento o normativa de la UE o extranjera): la necesidad de que IEG y/o las Sociedades Controladas cumplan requisitos precontractuales y/o obligaciones contractuales (incluida la planificación y organización diligentes de los Eventos y/o Servicios/Productos y la verificación de la fiabilidad de la empresa que solicita un visado de entrada a los Eventos) y/o requisitos de una ley, reglamento u otra normativa (aplicable únicamente a nivel local o transnacional, por ejemplo, disposiciones de la ley italiana que obligan a las Sociedades Controladas a cooperar con IEG en la elaboración de los estados financieros consolidados del Grupo).',
				],
			},
			{
				t: 'p',
				x: 'El interesado es libre de no facilitar sus datos, pero, en tal caso, no podrán atenderse sus solicitudes precontractuales y/o la celebración del contrato solicitado y/o las obligaciones legales o reglamentarias antes mencionadas.',
			},
			{
				t: 'p',
				x: 'En el caso de un Evento o Servicio/Producto prestado en línea, el interesado es libre de no activar la cámara y/o el micrófono de su ordenador, pero, en ese caso, si su imagen o su voz son necesarias para disfrutar del Evento o Servicio/Producto, no podremos prestarlo.',
			},
			{
				t: 'ul',
				x: [
					'En relación con las finalidades del apartado 3 (estudios de mercado nominativos): el interés legítimo de IEG en analizar y proteger la reputación de IEG, de sus Sociedades Controladas, Eventos, Servicios y/o Productos entre los interesados, y la calidad percibida por estos, dado que maximizar su satisfacción constituye también un beneficio para los interesados. El interesado es libre de no facilitar sus datos, pero, en tal caso, no podrán realizarse las encuestas indicadas.',
					'En relación con la finalidad del apartado 4 (elaboración de perfiles básica): el interés legítimo de IEG y/o de sus Sociedades Controladas en disponer de un perfil comercial mínimo del interesado, útil para orientar las acciones destinadas a mantener la relación comercial con él a lo largo del tiempo y, en particular, para verificar y optimizar la eficacia de las comunicaciones promocionales y/o de las ofertas de venta de Eventos, Servicios y/o Productos, evitando contenidos que no resulten pertinentes para el mismo.',
					'En relación con las finalidades del apartado 5 (elaboración de perfiles avanzada): consentimiento específico previo. El interesado es libre de no facilitar sus datos y de no prestar su consentimiento. En tal caso, no podrá realizarse dicha elaboración de perfiles avanzada, pero no se producirán otros efectos jurídicos (en particular, se mantendrá intacta la posibilidad de que el interesado participe en los Eventos y/o utilice los Servicios y/o Productos).',
					'En relación con las finalidades del apartado 6 (soft spam, también en EE. UU. y DUBÁI): el interés legítimo de IEG y/o de sus Sociedades Controladas en mantener activo, con una frecuencia razonable a lo largo del tiempo, el contacto comercial con clientes y clientes potenciales, sin perjuicio del derecho del interesado a oponerse en cualquier momento al tratamiento con esta finalidad.',
				],
			},
			{
				t: 'p',
				x: 'En caso de tratamiento por parte de Sociedades Controladas con sede en BRASIL, CHINA y SINGAPUR, el responsable del tratamiento solo podrá tratar, para las finalidades del apartado 6, los datos del interesado (exclusivamente visitante de Eventos de carácter B2C) sobre la base del consentimiento previo y específico del interesado.',
			},
			{
				t: 'ul',
				x: [
					'En relación con la finalidad del apartado 7 (marketing directo por parte de IEG distinto del soft spam): consentimiento previo y específico. El interesado es libre de no facilitar sus datos y de no prestar su consentimiento, pero, en tal caso, no será posible realizar dichas actividades de marketing directo distintas del soft spam.',
					'En relación con las finalidades del apartado 8 a-b (cesión de datos a empresas socias o a terceros distintos de las Sociedades Controladas; cesión de datos a plataformas de redes sociales para servicios “lookalike”): consentimiento previo y específico. El interesado es libre de no prestar su consentimiento y, en tal caso, no podrá efectuarse la cesión a terceros.',
					'En relación con las finalidades del apartado 9 (seguridad): el interés legítimo de IEG y/o de sus Sociedades Controladas en garantizar la seguridad de los Eventos y Servicios.',
					'En relación con las finalidades del apartado 10 (finalidades diversas): el interés legítimo de IEG y/o de sus Sociedades Controladas en llevar a cabo diligentemente las actividades correspondientes a cada una de ellas.',
					'En relación con las finalidades del apartado 11 (gestión de datos de crédito por parte de la Sociedad Controlada IEG EVENTS ARABIA LLC): consentimiento previo y específico. El interesado es libre de no prestar su consentimiento, en cuyo caso no podrá llevarse a cabo la gestión de los datos de crédito.',
				],
			},
		],
	},
	{
		id: 'titularidade',
		title: 'Responsabilidad del tratamiento',
		blocks: [
			{
				t: 'p',
				x: 'Con arreglo a la normativa aplicable en cada momento en la materia, los responsables del tratamiento son:',
			},
			{
				t: 'ul',
				x: [
					'para todas las finalidades establecidas en esta Política: IEG, en relación con los datos personales de interesados (por ejemplo, datos de clientes o de usuarios de sitios web) tratados por: IEG y/o sus Sociedades Controladas con sede en el EEE; Sociedades Controladas con sede fuera del EEE, cuando la condición de responsable de IEG antes mencionada se derive de las normas de aplicación extraterritorial contenidas en la legislación local aplicable en cada momento en el país de la sede de las respectivas Sociedades Controladas situadas fuera del EEE;',
					'para las finalidades exclusivas de los apartados 1, 2, 4, 6: cada Sociedad Controlada (con sede en el EEE o fuera del EEE), en relación con los datos tratados por ella con arreglo a la respectiva normativa local aplicable; y',
					'para la finalidad exclusiva del apartado 11: la Sociedad Controlada IEG Events Arabia LLC.',
				],
			},
		],
	},
	{
		id: 'dpo',
		title: 'Delegado de protección de datos',
		blocks: [
			{
				t: 'ul',
				x: [
					'El DPO – Delegado de Protección de Datos de ITALIAN EXHIBITION GROUP SPA es Luca De Muri, con domicilio en la propia sociedad.',
					'El DPO – Delegado de Protección de Datos de la sociedad controlada IEG ASIA PTE LDT. – 1, Maritime Square # 09-56, Harbourfront Centre – Singapur 099253, es Ilaria Cicero, con domicilio en la propia sociedad.',
				],
			},
		],
	},
	{
		id: 'representante-ue',
		title: 'Representante legal en la UE de las empresas de fuera de la UE',
		blocks: [
			{
				t: 'p',
				x: 'Las sociedades IEG CHINA Co. Ltd (sociedad controlada en CHINA), IEG Events Arabia LLC (sociedad controlada en Arabia Saudí), IEG ASIA PTE. LIMITED (Sociedad Controlada en SINGAPUR), IEG EVENTS MIDDLE EAST LLC (Sociedad Controlada en DUBÁI), ITALIAN EXHIBITION GROUP USA INC. (sociedad controlada en EE. UU.) e ITALIAN EXHIBITION GROUP BRASIL EVENTOS LTDA (sociedad controlada en BRASIL), en su condición de responsables del tratamiento no ocasional de datos personales para las finalidades de los apartados 1, 2, 4, 6 y 11 (esta última realizada únicamente por IEG Events Arabia LLC) en el contexto de la oferta de Servicios (incluidos los Eventos organizados por ellas) y/o Productos a interesados con sede o residencia en la UE, han designado a ITALIAN EXHIBITION GROUP SPA como su respectivo representante en la UE, con arreglo y a los efectos del art. 27 del RGPD. Como tal, ITALIAN EXHIBITION GROUP SPA, en sustitución o además de las sociedades designantes antes mencionadas, pero sin perjuicio de la responsabilidad de estas, actúa como interlocutor ante las Autoridades de Control nacionales y ante los interesados para cualquier cuestión relacionada con dichas actividades de tratamiento, a fin de garantizar el cumplimiento del RGPD y facilitar el ejercicio de sus derechos en virtud del RGPD.',
			},
		],
	},
	{
		id: 'representante-extra-ue',
		title: 'Representante legal fuera de la UE de las empresas de la UE',
		blocks: [
			{
				t: 'p',
				x: 'ITALIAN EXHIBITION GROUP SPA, en su condición de responsable del tratamiento de datos personales en el contexto de la oferta de Servicios (incluidos los Eventos organizados por ella) y/o Productos a interesados con sede o residencia en China, ha designado a IEG CHINA Co. Ltd (Sociedad Controlada en CHINA) como su representante en China, con arreglo y a los efectos del art. 53 de la Ley de Protección de la Información Personal de China (PIPL). En tal condición, IEG CHINA Co. Ltd actúa como interlocutora ante las autoridades de control nacionales chinas y ante los interesados para cualquier cuestión relacionada con las actividades de tratamiento antes mencionadas.',
			},
		],
	},
	{
		id: 'comunicacao',
		title: 'Comunicación y difusión de datos',
		blocks: [
			{
				t: 'p',
				x: 'Los datos se comparten con el personal de IEG y/o de sus Sociedades Controladas autorizado a tratarlos (por ejemplo, equipos de Finanzas, Comunicación, Viajes, Ventas, Marketing, Jurídico, etc.).',
			},
			{
				t: 'p',
				x: 'Los datos son comunicados para las finalidades de los apartados 1, 2, 3 por IEG, para las finalidades de los apartados 1, 2 y 7 por las Sociedades Controladas, y para las finalidades del apartado 11 por la Sociedad Controlada IEG Events Arabia LLC. A:',
			},
			{
				t: 'ul',
				x: [
					'proveedores de servicios de alojamiento, desarrollo, gestión, mantenimiento, recuperación ante desastres y ciberseguridad en relación con los sistemas informáticos (servicios, sitios web y bases de datos) de IEG y/o de sus Sociedades Controladas; proveedores de servicios de investigación;',
					'otros proveedores habilitados para la organización y gestión de los Eventos y/o Servicios y/o Productos (por ejemplo, proveedores de materiales y productos; proveedores de servicios: diseño, planificación técnica y montaje, emisión de entradas, secretaría organizativa, ensobrado y envío de correspondencia, diseño, impresión y mantenimiento de materiales editoriales, publicitarios o promocionales, logística, seguridad, primeros auxilios, pago electrónico, banca, seguros y material financiero, información sobre solvencia y reputación empresarial, hostelería, restauración, transporte de pasajeros, traducciones, plataformas de negocios, alojamiento, emisión de títulos, acreditaciones, entradas y pases de acceso a Eventos y Servicios y/o Productos, servicio de asistencia (help desk) de eventos, servicios de mensajería, transporte y expedición, publicidad, relaciones con los medios y comunicación, marketing directo, marketing web, análisis de marketing, CRM – Customer Relationship Management, gestión del cumplimiento normativo, comunicación electrónica, por ejemplo, telefónica o telemática),',
					'socios terceros que realicen actividades funcionales o complementarias a la promoción de los Eventos y/o a la compra de Servicios y Productos, por ejemplo, entidades privadas y públicas, otras entidades feriales y/u organizadores de eventos, asociaciones comerciales, con los que IEG y/o las Sociedades Controladas pongan en marcha acciones de comarketing para Eventos,',
					'periodistas, periódicos y representantes de otros medios de comunicación,',
					'agentes, consejeros regionales,',
					'despachos de abogados y notarios,',
					'órganos de control y supervisión, en particular, por ejemplo, sociedades de auditoría y auditores, auditores de cuentas, expertos contables, DPO – Delegados de Protección de Datos, miembros de órganos de vigilancia sobre los modelos organizativos de IEG y/o de las sociedades del Grupo destinados a prevenir la comisión de determinadas categorías de delitos, auditores y miembros de consejos de auditoría,',
					'sociedades y empresas de cobro de deudas,',
					'empresas y profesionales de informática forense en caso de investigaciones técnicas y jurídicas relacionadas con sospechas de delitos u otros ilícitos cometidos en perjuicio de IEG, de las demás Sociedades Controladas y/o de terceros,',
					'otros consultores y profesionales,',
					'autoridades públicas a las que la comunicación sea necesaria en virtud de una ley, reglamento u otra normativa (por ejemplo, representaciones diplomáticas y consulares, Jefaturas de Policía, Ayuntamiento, Policía, otras Autoridades de Seguridad Pública, Agencia Tributaria, Policía Financiera y similares),',
					'IEG (en este caso, los datos son comunicados únicamente por las Sociedades Controladas),',
					'Sociedades Controladas (en este caso, los datos son comunicados únicamente por IEG y a discreción de IEG).',
				],
			},
			{
				t: 'p',
				x: 'Los datos de identificación y contacto y los datos de producto de los visitantes y compradores podrán comunicarse a los expositores (por ejemplo, mediante búsqueda y/o solicitud de reuniones y/o funciones de contacto disponibles en plataformas digitales o mediante código QR o código de barras), así como los eventuales mensajes espontáneos de los propios interesados.',
			},
			{
				t: 'p',
				x: 'Los datos de identificación, de contacto y de producto de los expositores y los eventuales mensajes espontáneos de los mismos podrán comunicarse a los visitantes/compradores (por ejemplo, mediante búsqueda y/o solicitud de reunión y/o funciones de contacto disponibles en plataformas digitales, mediante códigos QR o códigos de barras, o a través de catálogos de eventos).',
			},
			{
				t: 'p',
				x: 'Los datos son comunicados, según proceda, por IEG para las finalidades de los apartados 4 a 7 y/o por las Sociedades Controladas para las finalidades exclusivas de los apartados 4 y 6 a:',
			},
			{
				t: 'ul',
				x: [
					'proveedores de servicios de análisis de marketing, agencias de comunicación y/o relaciones públicas,',
					'proveedores de servicios de compra de espacios publicitarios en Internet;',
					'proveedores de material publicitario o promocional (por ejemplo, agencias gráficas y creativas en general),',
					'empresas de producción y gestión de sitios web o blogs, empresas de marketing web,',
					'proveedores de servicios de gestión de páginas de destino (landing pages),',
					'proveedores de servicios de modelos de lenguaje de gran tamaño que apoyan el análisis de datos con fines de elaboración de perfiles y marketing, sin compartición pública de los datos tratados.',
				],
			},
			{
				t: 'p',
				x: 'Si el tercero antes mencionado trata los datos por cuenta y siguiendo instrucciones escritas de IEG y/o de las Sociedades Controladas remitentes, será designado encargado externo del tratamiento con arreglo y a los efectos del artículo 28 del RGPD.',
			},
			{
				t: 'p',
				x: 'Las Sociedades Controladas, para las finalidades de los apartados 4 y 6, comunican también los datos a la sociedad matriz IEG (véase también el capítulo siguiente “Transferencia de datos al extranjero”).',
			},
			{ t: 'p', x: 'IEG y las demás Sociedades Controladas se abstienen de toda difusión de datos.' },
			{
				t: 'p',
				x: 'Los datos de los expositores se difundirán, únicamente previa solicitud, a través del catálogo de la feria relativo a los Eventos, tanto en papel como en línea.',
			},
		],
	},
	{
		id: 'transferencia',
		title: 'Transferencia de datos al extranjero',
		blocks: [
			{
				t: 'p',
				x: 'Los datos son transferidos por IEG y/o por sus Sociedades Controladas con sede en la UE a las siguientes categorías de destinatarios terceros con sede fuera de la UE (en adelante, los “importadores“):',
			},
			{
				t: 'ul',
				x: [
					'Sociedades Controladas y/o sus proveedores, con sede fuera de la UE (China, Singapur, EE. UU., Emiratos Árabes Unidos, Brasil), en la medida necesaria para la ejecución del contrato y/o el cumplimiento de obligaciones legales o reglamentarias, por ejemplo, cuando IEG o las demás Sociedades Controladas con sede en la UE transfieren los datos como agentes en interés de la Sociedad Controlada extranjera;',
					'proveedores de servicios en línea para: recogida de datos mediante formularios de texto que puede cumplimentar el interesado y que figuran en las páginas de destino proporcionadas por el responsable del tratamiento; plataformas sociales (EE. UU.) en las que están activas las páginas sociales y/o los perfiles de IEG y/o de las sociedades del Grupo (para más información sobre el régimen de corresponsabilidad aplicable en este caso concreto a las partes implicadas, véase la sección “corresponsabilidad” de la Política de Cookies), y/o a las que IEG comunica datos en relación con los servicios “lookalike” contratados con ellas; gestión del inicio de sesión mediante la cuenta social de LinkedIn del usuario; análisis del tráfico generado por los usuarios de los sitios web de IEG y/o de otras sociedades del Grupo (EE. UU.); servicios de pago electrónico; CRM – Customer Relationship Management.',
				],
			},
			{
				t: 'p',
				x: 'Las Políticas de Privacidad de los proveedores de servicios en línea con sede fuera de la UE pueden consultarse en el enlace indicado por el respectivo proveedor.',
			},
			{ t: 'p', x: 'Esta transferencia de datos se realizará con garantías adecuadas, tales como:' },
			{
				t: 'ul',
				x: [
					'En caso de transferencia a EE. UU.: la Decisión de Adecuación de la Comisión de la UE de 10 de julio de 2023 relativa a la legislación estadounidense sobre protección de datos personales, en su versión modificada por el convenio bilateral UE-EE. UU. “Marco de Privacidad de Datos UE-EE. UU.” (Data Privacy Framework).',
					'En caso de transferencia a Canadá (activa únicamente para los proveedores de servicios de gestión de páginas de destino): la Decisión de Adecuación de la Comisión de la UE de 15 de enero de 2024 relativa a la legislación canadiense sobre protección de datos personales, en particular la Ley de Protección de la Información Personal y los Documentos Electrónicos (PIPEDA);',
					'En caso de transferencia a países no pertenecientes a la UE distintos de EE. UU. y Canadá: la suscripción previa por parte de IEG y/o de sus Sociedades Controladas con sede en la UE, con el tercero importador, de cláusulas contractuales tipo –las llamadas “CCT”– conformes como mínimo con el texto aprobado por la Comisión de la UE (salvo cualesquiera adiciones y/o modificaciones más favorables para el interesado) mediante las cuales, para el tratamiento de su competencia, el importador de los datos se compromete a cumplir obligaciones de privacidad sustancialmente equivalentes a las previstas en la legislación pertinente de la UE.',
				],
			},
			{
				t: 'p',
				x: 'Los datos son transferidos también por las Sociedades Controladas con sede fuera de la UE, dentro de los límites necesarios para las finalidades de los apartados 1, 2, 4, 6, 7 y 11, a IEG, así como a los siguientes destinatarios terceros con sede fuera del país de las propias Sociedades Controladas (en adelante, los “importadores“):',
			},
			{
				t: 'ul',
				x: [
					'agentes;',
					'proveedores de Productos y/o Servicios funcionales a las actividades y/o Eventos relativos a las Sociedades Controladas extranjeras;',
					'proveedores de plataformas de redes sociales (EE. UU.) en las que están activas las páginas sociales y/o los perfiles de sociedades del Grupo con sede fuera de la UE (para más información sobre el régimen de corresponsabilidad aplicable en este caso concreto a las partes implicadas, véase la sección “corresponsabilidad” de nuestra Política de Cookies).',
				],
			},
			{
				t: 'p',
				x: 'Esta transferencia de datos, cuando sea efectuada por Sociedades Controladas no pertenecientes a la UE a IEG o a un sujeto no perteneciente a la UE, se realizará sobre la base de garantías adecuadas, consistentes en la suscripción, entre las partes implicadas en la transferencia, de contratos tipo o cláusulas contractuales tipo conformes, como mínimo, con los textos aprobados por las Autoridades Administrativas competentes del país en el que tenga su sede la persona jurídica controlada en el extranjero (salvo cualesquiera adiciones y/o modificaciones más favorables para el interesado).',
			},
			{
				t: 'p',
				x: 'Mediante dichos contratos y/o cláusulas, IEG y/o los distintos importadores de los datos se comprometen a cumplir obligaciones de protección y tratamiento de los datos personales transferidos sustancialmente equivalentes a las previstas en la legislación comunitaria aplicable.',
			},
			{
				t: 'p',
				x: 'Los datos son transferidos también por las Sociedades Controladas con sede en la UE, para las finalidades de los apartados 1, 2, 4, 6 y 7, a IEG sin necesidad de garantías particulares y adecuadas, ya que todo el ámbito del tratamiento queda adecuadamente cubierto por el RGPD.',
			},
		],
	},
	{
		id: 'duracao',
		title: 'Duración del tratamiento',
		blocks: [
			{
				t: 'p',
				x: 'Los datos se conservan durante períodos máximos de tiempo (conservación) que dependen de la finalidad del tratamiento, transcurridos los cuales los datos se suprimen o se anonimizan, del siguiente modo:',
			},
			{
				t: 'ul',
				x: [
					'Finalidad del apartado 1 (protección de activos de información): por un período indefinido, salvo lo dispuesto en el presente documento. Datos tratados para registros (logs) de continuidad de la actividad y seguridad informática (por ejemplo, datos de inicio de sesión, registros de fallos y cierres de sesión, registros de anomalías sospechosas, etc.): se conservan durante 1 año desde la fecha de recogida, salvo cualquier plazo inferior previsto por los procedimientos internos del responsable del tratamiento.',
					'Finalidad del apartado 2 – necesidades precontractuales (si el interesado es un lead, es decir, un cliente potencial que no ha efectuado ninguna compra ni ha manifestado interés por los Eventos, Servicios y/o Productos): 2 años desde la fecha de recogida de los datos (salvo que el tratamiento posterior determine una manifestación de interés por los Eventos, Servicios y/o Productos, en cuyo caso el tratamiento tendrá la duración prevista en el párrafo siguiente);',
					'Finalidad del apartado 2 – necesidades precontractuales (si el interesado es un cliente potencial (prospect), es decir, un cliente potencial que no ha efectuado ninguna compra pero ha manifestado interés por Eventos, Servicios y/o Productos): 10 años desde la recogida de los datos del interesado (salvo que esta actividad no implique la celebración de un contrato, en cuyo caso el tratamiento tendrá la duración descrita en el párrafo siguiente);',
					'Finalidad del apartado 2 – ejecución del contrato (si el interesado es un cliente): durante toda la duración de la relación comercial y durante 10 años desde la fecha de resolución del contrato; sin perjuicio de los plazos más breves indicados a continuación para categorías específicas de datos:',
				],
			},
			{
				t: 'ul',
				x: [
					'datos relativos a la elaboración de cartas de invitación para la solicitud de visados consulares (por ejemplo, copia del pasaporte, etc.): 6 meses desde la finalización del Evento al que se refieren.',
					'datos de solicitudes de asistencia comunicados en los puntos de recepción (incluidos el mostrador de seguros, el punto de información y la sala de emergencias) por visitantes y expositores durante los Eventos: 60 días desde la finalización de cada Evento; en caso de reclamaciones presentadas por el interesado en relación con los Eventos (por ejemplo, solicitudes de indemnización), los datos podrán tratarse posteriormente, según se detalla en el párrafo “En caso de litigio”.',
					'datos contenidos en el catálogo promocional de los Eventos: durante 2 ediciones del catálogo.',
					'datos relativos al servicio “Business Matching” prestado durante los Eventos: 3 meses desde la finalización de cada Evento.',
					'productos editoriales: 5 años desde la publicación (NB: una vez vendido el Producto que contiene los datos, el responsable del tratamiento no controla su posterior circulación).',
				],
			},
			{
				t: 'ul',
				x: [
					'Finalidad del apartado 2 – cumplimiento de obligaciones legales y reglamentarias: 10 años desde la fecha de celebración del contrato (en el caso de clientes) o de la recogida de los datos del interesado (en el caso de clientes potenciales); se reservan los siguientes plazos más breves respecto de categorías específicas de datos: datos de certificación del evento: hasta la finalización de la certificación y, por tanto, hasta que esta se haya obtenido;',
					'Finalidad del apartado 3 (encuestas nominativas): 2 años desde la recogida de los datos del interesado (en el caso de clientes y clientes potenciales);',
					'Finalidad del apartado 4 (elaboración de perfiles básica): 2 años desde la recogida de los datos del interesado (en el caso de clientes y clientes potenciales);',
					'Finalidad del apartado 5 (elaboración de perfiles avanzada): 2 años desde la recogida de los datos del interesado (en el caso de clientes y clientes potenciales);',
					'Finalidad del apartado 6 (soft spam): hasta la eventual oposición del interesado.',
					'Finalidad del apartado 7 (marketing directo) para leads, clientes y clientes potenciales: 10 años desde la fecha de recogida de los datos o hasta la fecha de revocación del consentimiento por parte del interesado, si dicha revocación se produce antes del plazo;',
					'Finalidad del apartado 11 (gestión de datos de crédito realizada por IEG Events Arabia LLC): 2 años desde la fecha de recogida de los datos.',
				],
			},
			{
				t: 'p',
				x: 'En caso de litigio extrajudicial o judicial, en relación con el interesado y/o con terceros (por ejemplo, personas perjudicadas durante los Eventos por las actividades del responsable del tratamiento, del interesado y/o de terceros), los datos se tratan durante el tiempo necesario para ejercer la defensa de los derechos del responsable del tratamiento (por regla general, hasta el 6.º año natural siguiente al año de plena ejecución de una resolución firme o de una solución amistosa entre las partes en litigio).',
			},
		],
	},
	{
		id: 'meios',
		title: 'Medios de tratamiento',
		blocks: [
			{
				t: 'p',
				x: 'IEG, también a través de sus Sociedades Controladas y/o de proveedores terceros delegados por estas, recoge datos mediante:',
			},
			{
				t: 'ul',
				x: [
					'sitios web del Grupo IEG cuyas páginas electrónicas navega el interesado;',
					'formularios en línea o en papel o solicitudes de preinscripción o de participación cumplimentados por el interesado durante o en relación con los Eventos y/o Servicios y/o Productos,',
					'código QR o código de barras mostrado y escaneado en las entradas de los Eventos o durante la participación en los mismos,',
					'tarjetas de visita entregadas espontáneamente por el interesado,',
					'solicitudes (en papel o en línea) del interesado para participar en los Eventos, Servicios y/o Productos,',
					'contratos celebrados con el interesado,',
					'solicitudes de presupuesto y/o de información enviadas por el interesado (por ejemplo, formularios en línea),',
					'plataformas en línea para la gestión de solicitudes de contacto/reuniones de negocios y para el intercambio de información entre expositores, visitantes y/o compradores (por ejemplo, textos, vídeos, presentaciones, sesiones en directo; análisis e itinerarios sobre tendencias e innovación, visitas turísticas, compartición y comunicación de eventos y/u otros contenidos digitales; compartición de comentarios públicos relativos a los contenidos antes compartidos, intercambio de mensajes).',
				],
			},
			{ t: 'p', x: 'IEG recoge también datos de las Sociedades Controladas en el marco de intercambios de información intragrupo.' },
			{
				t: 'p',
				x: 'Los datos son tratados por personal autorizado y formado por IEG y/o por sus Sociedades Controladas, dentro de los límites estrictamente necesarios para el desempeño de sus respectivas funciones (por ejemplo, jurídicas, comerciales, de marketing, administrativas, logísticas, informáticas, de control de gestión, etc.), mediante herramientas electrónicas y en papel y con lógicas estrictamente vinculadas a cada una de las finalidades, según lo previsto respectivamente más arriba.',
			},
		],
	},
	{
		id: 'seguranca',
		title: 'Medidas de seguridad',
		blocks: [
			{
				t: 'p',
				x: 'Al tratamiento de los datos personales del interesado se aplican medidas de seguridad técnicas y organizativas para garantizar su integridad, seguridad y disponibilidad. Por razones de seguridad, no toda la información pertinente se pone a disposición aquí. Las medidas pueden variar según la sociedad del Grupo. Los principales tipos de medidas aplicadas son los siguientes:',
			},
			{ t: 'h', x: 'Procedimientos de gestión de activos informáticos' },
			{
				t: 'ul',
				x: ['Cortafuegos (firewall)', 'Antivirus', 'Antispam', 'DMZ – Zona Desmilitarizada', 'Almacenamiento redundante'],
			},
			{ t: 'h', x: 'Procedimientos de gestión de identidades y accesos' },
			{
				t: 'ul',
				x: [
					'Credenciales de autenticación únicas para el acceso a los datos; 2FA y VPN para el acceso remoto',
					'Limitación del acceso a los datos exclusivamente al personal interno, previamente designado por escrito, autorizado y formado por el responsable del tratamiento',
					'Perfiles de autorización gestionados mediante Active Directory y/o Azure Directory (Entra ID) limitados con arreglo al principio “need to use, need to know” (necesidad de uso, necesidad de conocer).',
					'Obligaciones de confidencialidad por escrito',
					'Formación del personal',
					'Designación de encargados externos que realizan el tratamiento subcontratado por cuenta de los responsables del tratamiento',
				],
			},
			{ t: 'h', x: 'Otras medidas' },
			{
				t: 'ul',
				x: [
					'VLAN – Red de Área Local Virtual',
					'Copia de seguridad (backup) diaria',
					'Recuperación ante desastres',
					'Procedimientos de gestión de parches',
					'Procedimiento de gestión de incidentes y procedimiento de violación de datos',
					'Sistemas IDS (Sistema de Detección de Intrusiones), IPS (Sistema de Prevención de Intrusiones), EDR (Detección y Respuesta en Endpoints), DLP (Prevención de Pérdida de Datos)',
					'SIEM – Gestión de Información y Eventos de Seguridad',
					'SOC – Centro de Operaciones de Seguridad',
					'Conexiones mediante protocolo HTTP seguro (HTTPS) con cifrado de 2048 bits y protocolo TLS v1.x (conformidad con PCI DSS)',
					'Evaluación periódica de vulnerabilidades y pruebas de penetración',
					'Auditorías periódicas.',
				],
			},
			{
				t: 'p',
				x: 'El uso de programas informáticos ‘bot’ (es decir, automatizados) infringe las Condiciones de Uso de nuestros sitios web. Por ello, IEG y sus Sociedades Controladas se reservan todos los derechos de indemnización por los daños derivados de dicho comportamiento y el derecho a suspender el acceso a los servicios de cualquier persona que infrinja esta prohibición.',
			},
			{
				t: 'p',
				x: 'Nos reservamos el derecho de realizar comprobaciones de seguridad (por ejemplo, análisis de registros) en cualquier momento para validar su identidad y los datos de registro facilitados por usted, y verificar el uso correcto de nuestros servicios en línea, así como para comprobar posibles infracciones de las Condiciones de Uso de nuestros sitios web y/o de la legislación que les sea aplicable.',
			},
		],
	},
	{
		id: 'direitos',
		title: 'Derechos del interesado',
		blocks: [
			{
				t: 'p',
				x: 'Los interesados, utilizando los datos de contacto del responsable del tratamiento (visibles en la Tabla de Sociedades del Grupo IEG), pueden ejercer los siguientes derechos, previstos por el RGPD y/o por la legislación local distinta aplicable en cada momento en el país no perteneciente a la UE de que se trate en relación con el tratamiento de datos:',
			},
			{
				t: 'ul',
				x: [
					'Acceso a sus datos personales tratados por el responsable del tratamiento,',
					'Rectificación o completado de datos inexactos o incompletos,',
					'Supresión de datos obsoletos, cuando el responsable del tratamiento no lo haya hecho de forma independiente, en los casos en que (i) ya no sean necesarios para los fines del tratamiento, (ii) el interesado haya revocado su consentimiento al tratamiento cuando dicho consentimiento sea exigido por ley, (iii) el interesado se haya opuesto al tratamiento de los datos, (iv) el tratamiento de los datos personales sea ilícito, (v) los datos personales deban suprimirse para cumplir una obligación legal que incumba al responsable. Cada responsable del tratamiento se compromete a adoptar todas las medidas razonables para informar de la supresión a las demás sociedades del Grupo IEG.',
					'Limitación del tratamiento de los datos personales, si (i) se impugna la exactitud de los datos personales del interesado, para permitir al responsable del tratamiento efectuar las comprobaciones necesarias, (ii) el interesado desea limitar sus datos personales en lugar de suprimirlos, aunque el tratamiento sea ilícito, (iii) el interesado desea que el responsable del tratamiento conserve los datos personales por considerarlos necesarios para defenderse en acciones judiciales, (iv) el interesado se ha opuesto al tratamiento, pero el responsable del tratamiento debe efectuar comprobaciones para verificar la existencia de motivos legítimos para el tratamiento que prevalezcan sobre los derechos del interesado.',
					'Portabilidad de los datos (es decir, obtener una copia en formato legible por máquina de los datos facilitados por el interesado al responsable del tratamiento, o que dicha copia sea comunicada a otro responsable del tratamiento indicado por el interesado, cuando los datos se refieran a un contrato existente entre el interesado y el primer responsable del tratamiento y se traten mediante software) dentro de los límites establecidos por la legislación aplicable.',
					'Oposición al tratamiento realizado sobre la base de un interés legítimo del responsable del tratamiento.',
					'Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado que produzca efectos jurídicos en el interesado o le afecte significativamente de modo similar, y a oponerse al resultado de cualquier decisión automatizada del responsable del tratamiento relacionada con el tratamiento de los datos personales del interesado. La toma de decisiones automatizada se produce cuando las decisiones se adoptan por medios tecnológicos sin intervención humana. Este derecho no existe cuando la decisión automatizada i) es necesaria para la celebración o ejecución de un contrato entre el interesado y un responsable del tratamiento, o ii) está autorizada por el Derecho de la UE o del Estado miembro de la UE al que esté sujeto el responsable del tratamiento, que en tal caso especifica también medidas adecuadas para proteger los derechos, libertades e intereses legítimos del interesado, o iii) se basa en el consentimiento explícito del interesado.',
					'Revocación del consentimiento cuando el consentimiento sea, por ley, la base jurídica del tratamiento (sin perjuicio de la licitud del tratamiento efectuado hasta el momento de la revocación).',
					'(cuando sea aplicable el RGPD) Derecho a presentar una reclamación ante la Autoridad de Control competente; en Italia, es la Autoridad Italiana de Protección de Datos (Garante per la protezione dei dati personali) – Piazza Venezia 11 – IT-00187 – Roma), tel. (+39) 06.69677.1, correo electrónico: rpd@gpdp.it.',
					'(cuando sea aplicable una legislación sobre protección de datos personales distinta del RGPD) Derecho a reclamar, a emprender acciones legales y/o a la resolución alternativa de litigios, previstos en cada momento por la legislación extranjera aplicable (por ejemplo, en el Estado de Nueva Jersey, derecho a recurrir contra cualquier denegación de una solicitud de ejercicio de los derechos previstos por la Ley de Privacidad de Datos de Nueva Jersey, en un plazo razonable tras la comunicación de la denegación y de forma similar a la del procedimiento de comunicación de la primera solicitud; la respuesta del responsable debe comunicarse en el plazo de 60 días; si el responsable desestima el recurso, el consumidor puede presentar una reclamación ante la División de Asuntos del Consumidor de Nueva Jersey del Departamento de Derecho y Seguridad Pública (véase https://njconsumeraffairs.gov/).',
					'Derecho a solicitar: a IEG y/o a las Sociedades Controladas con sede en el espacio de la UE, así como a las Sociedades Controladas con sede en DUBÁI, ARABIA SAUDÍ, SINGAPUR y/o EE. UU., una lista nominativa de los terceros destinatarios de los datos designados como encargados externos del tratamiento (véase también el capítulo “Comunicación y difusión de datos” de esta Política), y a las Sociedades Controladas con sede en CHINA y BRASIL, una lista nominativa de todos los terceros destinatarios de los datos (encargados externos y responsables del tratamiento).',
				],
			},
			{ t: 'h', x: 'Cómo obtener más información sobre sus derechos' },
			{
				t: 'ul',
				x: [
					'si el interesado reside o tiene su sede en el área del EEE, o en cualquier caso está sujeto a un tratamiento de datos personales regulado por el RGPD, debe consultar para más detalles los artículos 15 a 22 y 77 del Reglamento (UE) n.º 679/2016 (“RGPD”), disponible en: https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679#d1e2800-1-1;',
					'si el interesado reside o tiene su sede en China, o en cualquier caso está sujeto a un tratamiento regulado por la legislación china de protección de datos personales, debe consultar para más detalles los artículos 44 a 50 del capítulo IV de la Ley de Protección de la Información Personal de la República Popular China (PIPL), disponible en: http://en.npc.gov.cn.cdurl.cn/2021-12/29/c_694559.htm;',
					'si el interesado reside o tiene su sede en Dubái, o en cualquier caso está sujeto a un tratamiento regulado por la legislación árabe de protección de datos personales, debe consultar para más detalles –los Emiratos Árabes Unidos– ‘La Guía para Acceder a la Información Gubernamental’ y la Ley n.º 26 de 2015 sobre la Organización de la Publicación e Intercambio de Datos de Dubái, también conocida como Ley n.º 26 de 2015 que regula la difusión e intercambio de datos; y la Ley de Protección de Datos Personales, Decreto-Ley Federal n.º 45 de 2021 sobre la Protección de Datos Personales) en: https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws;',
					'si el interesado reside o tiene su sede en Brasil, o en cualquier caso está sujeto a un tratamiento regulado por la legislación brasileña de protección de datos personales, debe consultar los artículos 17 a 22 del capítulo III de la Ley General de Protección de Datos Personales (LGPD), en: https://lgpd-brazil.info;',
					'si el interesado reside o tiene su sede en Singapur, o en cualquier caso está sujeto a un tratamiento regulado por la legislación de Singapur de protección de datos personales, debe consultar los artículos 5.1 a 5.2 del capítulo V de la “Ley de Protección de Datos Personales de 2012 (“PDPA”)”, disponible en: https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act;',
					'si el interesado reside o tiene su sede en EE. UU., o en cualquier caso está sujeto a un tratamiento regulado por la legislación estadounidense de protección de datos personales, puede consultar la información disponible en: https://www.whitecase.com/insight-our-thinking/us-data-privacy-guide y, en relación con el tratamiento de datos personales relativos a sujetos calificados como consumidores (es decir, que actúan en un contexto individual o doméstico) realizado por nuestra Sociedad Controlada con sede en el Estado de Nueva Jersey (EE. UU.), la Ley de Privacidad de Datos de Nueva Jersey, visible en: https://pub.njleg.state.nj.us/Bills/2022/S0500/332_R6.PDF;',
					'si el interesado reside o tiene su sede en Arabia Saudí, o está sujeto a un tratamiento regido por la legislación de protección de datos de Arabia Saudí, debe consultar: https://sdaia.gov.sa/en/Research/Pages/DataProtection.aspx',
				],
			},
		],
	},
	{
		id: 'alteracoes',
		title: 'Modificaciones de la Política de Privacidad',
		blocks: [
			{
				t: 'p',
				x: 'La Política podrá modificarse con el tiempo para reflejar los cambios introducidos en el tratamiento de datos personales y/o para adaptarse a los requisitos normativos que puedan surgir.',
			},
			{
				t: 'p',
				x: 'La información actualizada se comunicará al interesado según lo exigido por la ley y por medios adecuados (por ejemplo, mediante publicación en el/los sitio(s) web de IEG y/o de sus Sociedades Controladas, o mediante un mensaje de correo electrónico o su inclusión en las áreas en línea reservadas a los usuarios).',
			},
		],
	},
];
