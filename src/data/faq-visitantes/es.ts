import type { Faq } from "./shared";

export const faqEs: Faq[] = [
  {
    n: 1,
    q: "Recibí mi credencial anticipada. ¿Debo registrarme en el lugar?",
    blocks: [
      {"type": "p", "text": "No. La credencial anticipada permite ingresar al evento sin necesidad de volver a registrarse en el mostrador de acreditación."},
    ],
  },
  {
    n: 2,
    q: "No recibí mi credencial por correo. ¿Cómo debo proceder?",
    blocks: [
      {"type": "p", "text": "Si no recibe su credencial hasta el día del evento, podrá realizar su preacreditación gratuita en el sitio web del evento e imprimir su credencial en los tótems de autoservicio disponibles en la entrada de la feria."},
    ],
  },
  {
    n: 3,
    q: "¿Puedo acreditarme en el lugar del evento?",
    blocks: [
      {"type": "p", "text": "Sí. Sin embargo, para facilitar su ingreso, le recomendamos realizar la preacreditación a través del sitio web. Así podrá emitir su credencial en los tótems de autoservicio ubicados en la entrada de la feria."},
    ],
  },
  {
    n: 4,
    q: "¿Se permite la entrada de menores de edad?",
    blocks: [
      {"type": "p", "text": "Por razones de seguridad no se permite la entrada de menores de 16 años, con excepción de bebés lactantes de hasta 1 año."},
    ],
  },
  {
    n: 5,
    q: "¿Puedo entrar al evento con camiseta sin mangas, chancletas o bermudas?",
    blocks: [
      {"type": "p", "text": "No. Recomendamos usar ropa y calzado cerrado para visitar la feria."},
    ],
  },
  {
    n: 6,
    q: "¿Se permite la entrada de estudiantes?",
    blocks: [
      {"type": "p", "text": "Sí, se permite la entrada de estudiantes, respetando la edad mínima de 16 años."},
    ],
  },
  {
    n: 7,
    q: "¿Cómo llego al evento?",
    blocks: [
      {"type": "labeled", "label": "Metro:", "text": "São Paulo Expo está a 850 m de la estación Jabaquara. Para su comodidad, habrá un servicio de transfer gratuito durante los días del evento, desde la estación Santos Imigrantes hasta el lugar del evento."},
      {"type": "hours", "title": "Horario del Servicio de Transfer Gratuito", "items": ["🕐 Miércoles a viernes: de 12h a 21h", "🕐 Sábado: de 10h a 19h"]},
      {"type": "labeled", "label": "Taxi:", "text": "Habrá paradas de taxi durante los días de feria. Desde la estación de metro se puede tomar un taxi hasta São Paulo Expo."},
    ],
  },
  {
    n: 8,
    q: "¿El evento cuenta con estacionamiento en el lugar?",
    blocks: [
      {"type": "p", "text": "Sí, el evento cuenta con estacionamiento para más de 4.500 vehículos. La tabla con los precios oficiales está disponible en el sitio www.saopauloexpo.com.br.", "link": {"text": "www.saopauloexpo.com.br", "href": "https://www.saopauloexpo.com.br"}},
    ],
  },
  {
    n: 9,
    q: "¿Recibo un Certificado de Participación?",
    blocks: [
      {"type": "p", "text": "No se emitirán Certificados de Participación para los visitantes del evento."},
    ],
  },
  {
    n: 10,
    q: "¿Habrá guardarropa en el lugar?",
    blocks: [
      {"type": "p", "text": "Sí. El evento dispondrá de un guardarropa ubicado en la entrada de la feria."},
      {"type": "p", "text": "Todos los expositores y visitantes pueden utilizar los servicios de Malex para guardar sus pertenencias y recorrer la feria con total practicidad y comodidad."},
      {"type": "labeled", "label": "Valor:", "text": "R$ 25,00 (veinticinco reales) por bulto."},
      {"type": "labeled", "label": "Forma de pago:", "text": "Efectivo, tarjeta de débito o crédito."},
      {"type": "labeled", "label": "Se aceptan:", "text": "Bolsos, mochilas y maletas."},
      {"type": "labeled", "label": "No se permiten:", "text": "Carteras y bolsos de mano sueltos, por medida de seguridad."},
      {"type": "labeled", "label": "Horario de funcionamiento de Malex:", "text": "del 14 al 16/9 de 12h a 20h30 y el 17/9 de 10h a 18h30, solo en los días de realización del evento."},
    ],
  },
  {
    n: 11,
    q: "¿Hay cajeros automáticos en el lugar?",
    blocks: [
      {"type": "p", "text": "No, este servicio no está disponible en el lugar."},
    ],
  },
  {
    n: 12,
    q: "¿El lugar cuenta con acceso a internet y enchufes?",
    blocks: [
      {"type": "p", "text": "No, estos servicios no están disponibles en el lugar."},
    ],
  },
];
