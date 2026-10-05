import { MAP_URL, type Faq } from "./shared";

export const faqEs: Faq[] = [
  {
    n: 1,
    q: "¿Dónde encuentro todas las normas y reglamentos para mi participación en el evento?",
    blocks: [
      {"type": "p", "text": "Todas las normas específicas, así como las orientaciones sobre el pago de las tasas obligatorias, estarán disponibles en el Portal Electrónico del Expositor. Recibirá su usuario y contraseña de acceso al sitio tras el envío del contrato formalizado."},
    ],
  },
  {
    n: 2,
    q: "¿A partir de qué fecha estarán disponibles las normas en el Manual del Expositor?",
    blocks: [
      {"type": "p", "text": "Las normas del evento se publican en el portal electrónico del expositor siempre 90 días antes del inicio de la fecha de montaje."},
    ],
  },
  {
    n: 3,
    q: "¿Cuáles son las fechas y horarios de montaje y desmontaje?",
    blocks: [
      {"type": "table", "title": "AGENDA DE LA FERIA – FESQUA", "rows": [{"label": "MONTAJE", "value": "A partir del 5, 6, 7 y 8 de septiembre / SÁB – DOM – LUN 8H – 20H"}, {"label": "REALIZACIÓN", "value": "9, 10, 11 / MIÉ – JUE – VIE 13H – 20H y 12 de septiembre / SÁB de 11H a 18H"}, {"label": "DESMONTAJE", "value": "A partir del 12 / SÁB a las 21:30 hasta el 13 de septiembre / DOM a las 11H"}, {"label": "DECORACIÓN DEL STAND", "value": "8 de septiembre, a partir de las 17H – 22H"}]},
      {"type": "p", "text": "Queda expresamente prohibida la entrada de personas en bermudas, camiseta sin mangas o chancletas, y de menores de 16 (dieciséis) años, incluso acompañados de sus responsables. Se exceptúan los lactantes de hasta 1 año de edad como máximo."},
    ],
  },
  {
    n: 4,
    q: "¿Existe algún sindicato de montadoras?",
    blocks: [
      {"type": "p", "text": "Sí, sugerimos contratar montadoras afiliadas al SINDIPROM:"},
      {"type": "contact", "org": "SINDIPROM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3120-7099", "href": "tel:+551131207099", "suffix": "."}, {"prefix": "E-mail: ", "link": "sindiprom@sindiprom.org.br", "href": "mailto:sindiprom@sindiprom.org.br"}, {"prefix": "Sitio web: ", "link": "www.sindiprom.org.br", "href": "https://www.sindiprom.org.br", "external": true}]},
    ],
  },
  {
    n: 5,
    q: "¿Pueden entrar los camiones al Pabellón durante todo el período de montaje?",
    blocks: [
      {"type": "p", "text": "El acceso debe hacerse por el portón de servicios (Rua Miguel Estéfano, a la altura del n.º 3000, frente al portón principal del Jardín Botánico)."},
      {"type": "p", "text": "Se permite la entrada de camiones al pabellón el 1.er día de montaje únicamente para descargar."},
    ],
  },
  {
    n: 6,
    q: "¿Qué documentos necesita la montadora para acceder al Pabellón e iniciar el montaje de mi stand?",
    blocks: [
      {"type": "p", "text": "Para ingresar al pabellón, la montadora / el expositor deberá entregar las copias originales de los documentos siguientes:"},
      {"type": "list", "items": ["Término de responsabilidad (sellado y firmado) tanto por el expositor como por la montadora;", "ART o RRT (registro de responsabilidad técnica) de la ejecución del proyecto y de la instalación eléctrica del stand, con el pago de la tasa (la fecha que debe constar en la ART / RRT va desde el primer día de montaje hasta el último día de desmontaje del evento);", "Copia del proyecto;", "Cheque de garantía para los no afiliados al SINDIPROM, o el comprobante de afiliación para los afiliados al SINDIPROM."]},
    ],
  },
  {
    n: 7,
    q: "¿Cuál es la edad mínima permitida en el Pabellón durante el montaje y el desmontaje?",
    blocks: [
      {"type": "p", "text": "Durante los períodos de montaje y desmontaje no se permite la entrada de menores de 18 años."},
    ],
  },
  {
    n: 8,
    q: "¿Cuál es la dirección del Pabellón donde se realizará el evento?",
    blocks: [
      {"type": "place", "text": "São Paulo Expo Exhibition & Convention Center"},
      {"type": "p", "text": "Entrada de Servicios: Rodovia dos Imigrantes, km 1,5 – São Paulo – SP"},
      {"type": "maplink", "text": "Haga clic aquí para ver el mapa.", "href": MAP_URL},
    ],
  },
  {
    n: 9,
    q: "¿Qué documentos debo presentar en la entrada del evento?",
    blocks: [
      {"type": "p", "text": "Para acceder al evento, deberá realizar su acreditación y la de sus prestadores de servicios a través del portal del expositor, y se le solicitará presentar el documento de identidad (RG) para retirar las credenciales."},
    ],
  },
  {
    n: 10,
    q: "¿Cómo emito la factura de remisión de mercancías para la exposición?",
    blocks: [
      {"type": "p", "text": "La factura para el envío de las mercancías que se expondrán debe emitirse a nombre del propio expositor, con su CNPJ e Inscripción Estatal (Inscrição Estadual), e incluir los siguientes datos complementarios:\n– Mercancía destinada a la exposición en la feria Fesqua, que se realizará el ______/______/_________, en São Paulo Expo – Rodovia dos Imigrantes Km 1,5 – Vila Água Funda / São Paulo – CP: 04329-900."},
      {"type": "p", "text": "Solo la dirección indicada en la factura debe ser la del pabellón donde se realizará el evento."},
    ],
  },
  {
    n: 11,
    q: "¿Existe un horario específico para el reabastecimiento y el mantenimiento durante el evento?",
    blocks: [
      {"type": "p", "text": "Sí. Solo se autoriza el mantenimiento del stand hasta una hora antes de la apertura del evento."},
    ],
  },
  {
    n: 12,
    q: "Durante el montaje y el desmontaje del evento, ¿es obligatorio el uso de EPP – Equipo de Protección Personal?",
    blocks: [
      {"type": "p", "text": "Sí, el uso de EPP es obligatorio para todas las personas que accedan al Pabellón durante el período de montaje y desmontaje."},
    ],
  },
  {
    n: 13,
    q: "¿Puedo entrar en bermudas y/o chancletas durante el montaje y el desmontaje?",
    blocks: [
      {"type": "p", "text": "No se permite la entrada con bermudas, falda, shorts o calzado abierto durante los períodos de montaje, decoración y desmontaje del evento."},
    ],
  },
  {
    n: 14,
    q: "¿Cómo accedo al Portal del Expositor?",
    blocks: [
      {"type": "p", "text": "A través del enlace con el usuario y el operador enviado al correo electrónico indicado en el contrato."},
      {"type": "p", "text": "Su usuario y contraseña se proporcionarán automáticamente tras la validación del contrato."},
    ],
  },
  {
    n: 15,
    q: "Compré un stand con montaje básico. ¿Cuál es la montadora oficial del evento?",
    blocks: [
      {"type": "p", "text": "DMR Karam"},
    ],
  },
  {
    n: 16,
    q: "¿Cómo registro a la montadora?",
    blocks: [
      {"type": "p", "text": "El contacto de la montadora oficial está disponible en el portal del expositor, en servicios oficiales."},
    ],
  },
  {
    n: 17,
    q: "¿Debo enviar el proyecto de mi stand para su análisis?",
    blocks: [
      {"type": "p", "text": "Sí, el proyecto debe enviarse al correo electrónico del responsable técnico."},
      {"type": "p", "text": "45 días antes del inicio del montaje, para el debido análisis de alturas y retranqueos."},
      {"type": "p", "text": "El envío de toda la documentación es OBLIGATORIO, conforme a las indicaciones del manual del expositor."},
    ],
  },
  {
    n: 18,
    q: "Quiero contratar servicios extra. ¿Cómo debo proceder?",
    blocks: [
      {"type": "labeled", "label": "Expositor:", "text": "Hay varios servicios adicionales disponibles para contratar a través del portal electrónico del Expositor."},
      {"type": "labeled", "label": "Montadora:", "text": "En caso de excedente de energía, punto hidráulico o punto de aire comprimido, la montadora debe informar al expositor para que la solicitud se realice en el portal electrónico, en la opción formularios."},
    ],
  },
  {
    n: 19,
    q: "¿Cómo debo proceder si perdí el plazo para contratar servicios extra?",
    blocks: [
      {"type": "p", "text": "Una vez vencido el plazo, las solicitudes deben hacerse por correo electrónico."},
    ],
  },
  {
    n: 20,
    q: "¿Cuál es la cuota de credenciales gratuitas?",
    blocks: [
      {"type": "labeled", "label": "Expositor:", "text": "La cantidad de credenciales gratuitas varía según los metros cuadrados de su stand. Esta información está disponible en el portal electrónico del expositor. Después de incluir las credenciales en el sistema, el propio Expositor debidamente identificado, o un portador identificado y autorizado por carta, deberá retirarlas en el CAEX (Centro de Atención al Expositor) a partir del 1.er día de montaje."},
      {"type": "warn", "text": "ESTÁ TERMINANTEMENTE PROHIBIDO REGISTRAR A PRESTADORES DE SERVICIOS Y/O MONTADORES COMO EXPOSITORES. EL EXPOSITOR PODRÁ SER MULTADO POR LA INSPECCIÓN DEL MINISTERIO DE TRABAJO."},
      {"type": "labeled", "label": "Prestadora de Servicios / Montadora:", "text": "Las credenciales de la montadora no son gratuitas y todas deben solicitarse y pagarse a través del portal electrónico del prestador. Las montadoras afiliadas al SINDIPROM están exentas del pago, siempre que soliciten las credenciales mediante el Manual Electrónico y, al retirarlas, entreguen copia de los carnés en el CAEX – Centro de Atención al Expositor – y el comprobante de pago de la cuota del mes vigente."},
      {"type": "labeled", "label": "Obs. general:", "text": "Vencido el plazo del sitio, todas las solicitudes de inclusión o modificación deberán hacerse por correo electrónico."},
    ],
  },
  {
    n: 21,
    q: "¿Cómo completo los Datos de Difusión?",
    blocks: [
      {"type": "p", "text": "Acceda al portal electrónico del expositor, en el icono formularios."},
      {"type": "warn", "label": "ATENCIÓN:", "text": "Este formulario tiene un plazo reducido de cumplimentación debido al tiempo necesario para configurar el Catálogo Oficial del Evento. El plazo está indicado en el portal electrónico del expositor, junto a la numeración de cada formulario."},
    ],
  },
  {
    n: 22,
    q: "¿Cuál es el procedimiento si pierdo u olvido la credencial?",
    blocks: [
      {"type": "p", "text": "El solicitante deberá acudir al CAEX. La segunda vía tendrá un costo por cada credencial extra emitida, según la tabla vigente."},
    ],
  },
  {
    n: 23,
    q: "¿Cuál es el procedimiento para contratar línea telefónica o internet?",
    blocks: [
      {"type": "p", "text": "El expositor deberá comunicarse con el operador del pabellón (São Paulo Expo) donde se realizará el evento:"},
      {"type": "contact", "org": "HIPERNET TELECOM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3077-5500", "href": "tel:+551130775500"}, {"prefix": "E-mail: ", "link": "feirasspo@hthnet.net", "href": "mailto:feirasspo@hthnet.net"}]},
    ],
  },
  {
    n: 24,
    q: "¿Hay seguridad en el evento o debo contratar el servicio para mi stand?",
    blocks: [
      {"type": "p", "text": "La seguridad del evento es responsable de las áreas comunes y del control de acceso. Por lo tanto, la empresa oficial de seguridad de la feria no es responsable de custodiar los productos expuestos en los stands."},
      {"type": "p", "text": "La seguridad para el stand puede contratarse directamente a través del portal electrónico del expositor con nuestra empresa oficial de seguridad, o con otra empresa a libre elección del expositor, teniendo en cuenta que contratar una empresa distinta de la oficial del evento requiere la compra de una credencial de seguridad, que se entregará en el CAEX previa presentación de la siguiente documentación del profesional designado:"},
      {"type": "list", "items": ["Carta de designación de la empresa de seguridad;", "Comprobante de designación del expositor, si no se hizo a través del portal electrónico;", "Copia simple del documento de identidad (RG) y del CPF;", "Certificado de antecedentes penales;", "Copia simple del certificado de finalización del curso de seguridad con validez vigente;", "Copia del curso de actualización, si corresponde."]},
    ],
  },
  {
    n: 25,
    q: "¿Habrá algún servicio de carga de equipaje en los Pabellones?",
    blocks: [
      {"type": "p", "text": "Fiera Milano Brasil no ofrece este tipo de servicio."},
    ],
  },
  {
    n: 26,
    q: "¿Qué tipo de voltaje eléctrico se utiliza en los pabellones?",
    blocks: [
      {"type": "p", "text": "La tensión disponible en el pabellón es de 380V trifásica, que puede transformarse en 220V monofásica por el electricista/técnico de la montadora, con un costo por KVA. Cualquier cambio de voltaje debe ser provisto por la montadora."},
    ],
  },
  {
    n: 27,
    q: "¿Se permiten demostraciones de audio y video durante el evento?",
    blocks: [
      {"type": "p", "text": "Está terminantemente prohibido el uso de equipos sonoros durante todo el evento. Esto incluye la reproducción de música, audios, bandas sonoras o cualquier otro recurso sonoro, en vivo o grabado."},
    ],
  },
  {
    n: 28,
    q: "¿Cuál es el procedimiento para enviar productos al evento?",
    blocks: [
      {"type": "p", "text": "Es responsabilidad exclusiva del Expositor cumplir con los requisitos legales relativos a los procedimientos de remisión de mercancías, equipos, productos, utensilios, etc."},
      {"type": "p", "text": "Los productos deben ir acompañados de una factura de simple remisión para exposición en la feria, con los datos complementarios del centro de exposiciones:"},
      {"type": "address", "text": "SPE GL – Rodovia dos Imigrantes, KM 1,5 – Vila Água Funda – CP: 04329-900 – São Paulo."},
    ],
  },
  {
    n: 29,
    q: "¿Habrá guardarropa en el lugar?",
    blocks: [
      {"type": "p", "text": "Horario de funcionamiento de Malex: 9, 10, 11 / MIÉ – JUE – VIE 13H – 20H y 12 DE SEPTIEMBRE / SÁB DE 11H A 18H"},
    ],
  },
];
