import type { Faq } from "./shared";

export const faqEn: Faq[] = [
  {
    n: 1,
    q: "I received my advance badge. Do I need to register on site?",
    blocks: [
      {"type": "p", "text": "No. The advance badge lets you enter the event without registering again at the registration desk."},
    ],
  },
  {
    n: 2,
    q: "I did not receive my badge by mail. What should I do?",
    blocks: [
      {"type": "p", "text": "If you do not receive your badge by the day of the event, you can complete your free pre-registration on the event website and print your badge at the self-service kiosks available at the fair entrance."},
    ],
  },
  {
    n: 3,
    q: "Can I register at the event venue?",
    blocks: [
      {"type": "p", "text": "Yes. However, to make your entry easier, we recommend pre-registering on the website. That way, you can print your badge at the self-service kiosks located at the fair entrance."},
    ],
  },
  {
    n: 4,
    q: "Are minors allowed to enter?",
    blocks: [
      {"type": "p", "text": "For safety reasons, entry is not permitted for children under 16, except for nursing infants up to 1 year old."},
    ],
  },
  {
    n: 5,
    q: "Can I enter the event wearing a tank top, flip-flops or shorts?",
    blocks: [
      {"type": "p", "text": "No. We recommend wearing clothes and closed shoes to visit the fair."},
    ],
  },
  {
    n: 6,
    q: "Are students allowed to enter?",
    blocks: [
      {"type": "p", "text": "Yes, students are allowed to enter, subject to the minimum age of 16."},
    ],
  },
  {
    n: 7,
    q: "How do I get to the event?",
    blocks: [
      {"type": "labeled", "label": "Subway:", "text": "São Paulo Expo is 850 m from Jabaquara station. For your convenience, we will provide a free shuttle on event days, running from Santos Imigrantes station to the event venue."},
      {"type": "hours", "title": "Free Shuttle Service Hours", "items": ["🕐 Wednesday to Friday: 12 PM to 9 PM", "🕐 Saturday: 10 AM to 7 PM"]},
      {"type": "labeled", "label": "Taxi:", "text": "Taxi stands will be available during the fair. From the subway station, you can take a taxi to São Paulo Expo."},
    ],
  },
  {
    n: 8,
    q: "Is there parking at the event venue?",
    blocks: [
      {"type": "p", "text": "Yes, the venue has parking for more than 4,500 vehicles. The official price table is available at www.saopauloexpo.com.br.", "link": {"text": "www.saopauloexpo.com.br", "href": "https://www.saopauloexpo.com.br"}},
    ],
  },
  {
    n: 9,
    q: "Do I receive a Certificate of Attendance?",
    blocks: [
      {"type": "p", "text": "Certificates of Attendance will not be issued to event visitors."},
    ],
  },
  {
    n: 10,
    q: "Will there be a cloakroom on site?",
    blocks: [
      {"type": "p", "text": "Yes. The event will provide a cloakroom located at the fair entrance."},
      {"type": "p", "text": "All exhibitors and visitors can use Malex's services to store their belongings and walk around the fair with full convenience and comfort."},
      {"type": "labeled", "label": "Price:", "text": "R$ 25.00 (twenty-five reais) per item."},
      {"type": "labeled", "label": "Payment method:", "text": "Cash, debit card or credit card."},
      {"type": "labeled", "label": "Accepted:", "text": "Bags, backpacks and suitcases."},
      {"type": "labeled", "label": "Not accepted:", "text": "Loose wallets and handbags, for security reasons."},
      {"type": "labeled", "label": "Malex opening hours:", "text": "Sep 14 to 16 from 12 PM to 8:30 PM and Sep 17 from 10 AM to 6:30 PM, only on the days the event takes place."},
    ],
  },
  {
    n: 11,
    q: "Are there ATMs on site?",
    blocks: [
      {"type": "p", "text": "No, this service is not available on site."},
    ],
  },
  {
    n: 12,
    q: "Does the venue have internet access and power outlets?",
    blocks: [
      {"type": "p", "text": "No, these services are not available on site."},
    ],
  },
];
