import { MAP_URL, type Faq } from "./shared";

export const faqEn: Faq[] = [
  {
    n: 1,
    q: "Where can I find all the rules and regulations for my participation in the event?",
    blocks: [
      {"type": "p", "text": "All specific rules, as well as guidance on the mandatory fees to be paid, will be available on the Exhibitor Online Portal. You will receive your login and password for the site once the signed contract has been submitted."},
    ],
  },
  {
    n: 2,
    q: "From what date will the rules be available in the Exhibitor Manual?",
    blocks: [
      {"type": "p", "text": "The event rules are made available on the exhibitor online portal 90 days before the start of the setup date."},
    ],
  },
  {
    n: 3,
    q: "What are the setup and teardown dates and times?",
    blocks: [
      {"type": "table", "title": "FAIR SCHEDULE – FESQUA", "rows": [{"label": "SETUP", "value": "From September 5, 6, 7 and 8 / SAT – SUN – MON 8 AM – 8 PM"}, {"label": "EVENT DAYS", "value": "September 9, 10, 11 / WED – THU – FRI 1 PM – 8 PM & September 12 / SAT 11 AM – 6 PM"}, {"label": "TEARDOWN", "value": "From September 12 / SAT at 9:30 PM until September 13 / SUN at 11 AM"}, {"label": "BOOTH DECORATION", "value": "September 8, from 5 PM – 10 PM"}]},
      {"type": "p", "text": "Entry is strictly prohibited for people wearing shorts, tank tops or flip-flops, and for children under 16 (sixteen) years of age, even if accompanied by their guardians. Nursing infants up to a maximum of 1 year of age are the only exception."},
    ],
  },
  {
    n: 4,
    q: "Is there a union of booth builders?",
    blocks: [
      {"type": "p", "text": "Yes. We suggest hiring booth builders affiliated with SINDIPROM:"},
      {"type": "contact", "org": "SINDIPROM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3120-7099", "href": "tel:+551131207099", "suffix": "."}, {"prefix": "E-mail: ", "link": "sindiprom@sindiprom.org.br", "href": "mailto:sindiprom@sindiprom.org.br"}, {"prefix": "Website: ", "link": "www.sindiprom.org.br", "href": "https://www.sindiprom.org.br", "external": true}]},
    ],
  },
  {
    n: 5,
    q: "Can trucks enter the Pavilion throughout the entire setup period?",
    blocks: [
      {"type": "p", "text": "Access must be through the service gate (Rua Miguel Estéfano, near no. 3000, opposite the main gate of the Botanical Garden)."},
      {"type": "p", "text": "Trucks are allowed into the pavilion on the 1st day of setup only to unload."},
    ],
  },
  {
    n: 6,
    q: "What documents does the booth builder need to access the Pavilion and begin building my booth?",
    blocks: [
      {"type": "p", "text": "To enter the pavilion, the booth builder / exhibitor must hand in the original copies of the documents below:"},
      {"type": "list", "items": ["Statement of responsibility (stamped and signed) by both the exhibitor and the booth builder;", "ART or RRT (technical responsibility record) for the booth design and electrical work, with the fee paid (the date on the ART / RRT must run from the first day of setup to the last day of teardown of the event);", "Copy of the design;", "Security deposit check for non-members of SINDIPROM, or proof of membership for SINDIPROM members."]},
    ],
  },
  {
    n: 7,
    q: "What is the minimum age allowed in the Pavilion during setup and teardown?",
    blocks: [
      {"type": "p", "text": "During setup and teardown, entry is not permitted for anyone under 18 years of age."},
    ],
  },
  {
    n: 8,
    q: "What is the address of the Pavilion where the event will take place?",
    blocks: [
      {"type": "place", "text": "São Paulo Expo Exhibition & Convention Center"},
      {"type": "p", "text": "Service Entrance: Rodovia dos Imigrantes, km 1.5 – São Paulo – SP"},
      {"type": "maplink", "text": "Click here to see the map.", "href": MAP_URL},
    ],
  },
  {
    n: 9,
    q: "What documents must I present at the event entrance?",
    blocks: [
      {"type": "p", "text": "To access the event, you must register yourself and your service providers through the exhibitor portal, and you will be asked to show your ID (RG) to collect the badges."},
    ],
  },
  {
    n: 10,
    q: "How do I issue the shipping invoice for exhibition goods?",
    blocks: [
      {"type": "p", "text": "The invoice for shipping the goods to be exhibited must be issued in the exhibitor's own name, with its CNPJ and State Registration (Inscrição Estadual), and include the following additional information:\n– Goods intended for exhibition at the Fesqua fair, to be held on ______/______/_________, at São Paulo Expo – Rodovia dos Imigrantes Km 1.5 – Vila Água Funda / São Paulo – ZIP code: 04329-900."},
      {"type": "p", "text": "Only the address stated on the invoice must be that of the pavilion where the event will take place."},
    ],
  },
  {
    n: 11,
    q: "Is there a specific time for restocking and maintenance during the event?",
    blocks: [
      {"type": "p", "text": "Yes. Booth maintenance is only authorized until one hour before the event opens."},
    ],
  },
  {
    n: 12,
    q: "Is it mandatory to wear PPE – Personal Protective Equipment – during setup and teardown?",
    blocks: [
      {"type": "p", "text": "Yes, PPE is mandatory for everyone entering the Pavilion during the setup and teardown period."},
    ],
  },
  {
    n: 13,
    q: "Can I enter wearing shorts and/or flip-flops during setup and teardown?",
    blocks: [
      {"type": "p", "text": "Entry wearing shorts, skirts or open-toed footwear is not permitted during the setup, decoration and teardown periods of the event."},
    ],
  },
  {
    n: 14,
    q: "How do I access the Exhibitor Portal?",
    blocks: [
      {"type": "p", "text": "Through the link containing the login and operator sent to the e-mail address provided in the contract."},
      {"type": "p", "text": "Your username and password will be provided automatically after the contract is validated."},
    ],
  },
  {
    n: 15,
    q: "I bought a booth with basic setup. Who is the official booth builder of the event?",
    blocks: [
      {"type": "p", "text": "DMR Karam"},
    ],
  },
  {
    n: 16,
    q: "How do I register my booth builder?",
    blocks: [
      {"type": "p", "text": "The official booth builder's contact is available on the exhibitor portal under official services."},
    ],
  },
  {
    n: 17,
    q: "Do I need to submit my booth design for review?",
    blocks: [
      {"type": "p", "text": "Yes, the design must be sent to the technical manager's e-mail."},
      {"type": "p", "text": "45 days before the start of setup, so that heights and setbacks can be properly reviewed."},
      {"type": "p", "text": "Submitting all documentation is MANDATORY, as set out in the exhibitor manual."},
    ],
  },
  {
    n: 18,
    q: "I want to order extra services. How should I proceed?",
    blocks: [
      {"type": "labeled", "label": "Exhibitor:", "text": "Several additional services are available to order through the Exhibitor online portal."},
      {"type": "labeled", "label": "Booth builder:", "text": "In case of excess power, plumbing points or compressed air points, the booth builder must inform the exhibitor so that the request can be made on the online portal under the forms option."},
    ],
  },
  {
    n: 19,
    q: "What should I do if I missed the deadline to order extra services?",
    blocks: [
      {"type": "p", "text": "After the deadline, requests must be made by e-mail."},
    ],
  },
  {
    n: 20,
    q: "What is the quota of free badges?",
    blocks: [
      {"type": "labeled", "label": "Exhibitor:", "text": "The number of free badges varies according to the size of your booth. This information is available on the exhibitor online portal. After entering the badges in the system, the properly identified Exhibitor, or a bearer identified and authorized by letter, must collect the badges at the CAEX (Exhibitor Service Center) from the 1st day of setup."},
      {"type": "warn", "text": "IT IS STRICTLY PROHIBITED TO REGISTER SERVICE PROVIDERS AND/OR BOOTH BUILDERS AS EXHIBITORS. THE EXHIBITOR MAY BE FINED BY MINISTRY OF LABOR INSPECTORS."},
      {"type": "labeled", "label": "Service Provider / Booth Builder:", "text": "Booth builder badges are not free, and all of them must be requested and paid for through the provider's online portal. Booth builders affiliated with SINDIPROM are exempt from payment, provided they request the badges through the Online Manual and, at pickup, hand in a copy of their membership cards at the CAEX – Exhibitor Service Center – together with proof of payment of the current month's membership fee."},
      {"type": "labeled", "label": "General note:", "text": "Once the website deadline has passed, all requests for additions or changes must be made by e-mail."},
    ],
  },
  {
    n: 21,
    q: "How do I fill in the Promotional Data?",
    blocks: [
      {"type": "p", "text": "Go to the exhibitor online portal and click the forms icon."},
      {"type": "warn", "label": "ATTENTION:", "text": "This form has a shortened filling deadline because of the time needed to compile the Official Event Catalog. The deadline is shown on the exhibitor online portal next to the number of each form."},
    ],
  },
  {
    n: 22,
    q: "What is the procedure if I lose or forget my badge?",
    blocks: [
      {"type": "p", "text": "The requester must go to the CAEX. The replacement badge carries a fee per extra badge issued, according to the current price table."},
    ],
  },
  {
    n: 23,
    q: "How do I order a telephone line or internet?",
    blocks: [
      {"type": "p", "text": "The exhibitor must contact the pavilion's operator (São Paulo Expo) where the event will take place:"},
      {"type": "contact", "org": "HIPERNET TELECOM", "lines": [{"prefix": "Tel.: ", "link": "(11) 3077-5500", "href": "tel:+551130775500"}, {"prefix": "E-mail: ", "link": "feirasspo@hthnet.net", "href": "mailto:feirasspo@hthnet.net"}]},
    ],
  },
  {
    n: 24,
    q: "Is there security at the event, or do I need to hire the service for my booth?",
    blocks: [
      {"type": "p", "text": "Event security is responsible for common areas and access control. Therefore, the fair's official security company is not responsible for looking after the products displayed in the booths."},
      {"type": "p", "text": "Security for the booth can be hired directly through the exhibitor online portal from our official security company, or from another company of the exhibitor's choice. Please note that hiring a company other than the event's official one requires the purchase of a security badge, which will be handed over at the CAEX upon presentation of the following documents for the designated professional:"},
      {"type": "list", "items": ["Letter of appointment from the security company;", "Proof of appointment by the exhibitor, if it was not made through the online portal;", "Simple copy of ID (RG) and CPF;", "Criminal record certificate;", "Simple copy of the security course completion certificate, within its validity period;", "Copy of the refresher course, if applicable."]},
    ],
  },
  {
    n: 25,
    q: "Will a porter service be available in the Pavilions?",
    blocks: [
      {"type": "p", "text": "Fiera Milano Brasil does not provide this type of service."},
    ],
  },
  {
    n: 26,
    q: "What electrical voltage is used in the pavilions?",
    blocks: [
      {"type": "p", "text": "The voltage available in the pavilion is 380V three-phase, which can be converted to 220V single-phase by the booth builder's electrician/technician, at a cost per KVA. Any voltage change must be provided by the booth builder."},
    ],
  },
  {
    n: 27,
    q: "Are audio and video demonstrations allowed during the event?",
    blocks: [
      {"type": "p", "text": "The use of sound equipment is strictly prohibited throughout the entire event. This includes playing music, audio, soundtracks or any other sound devices, whether live or recorded."},
    ],
  },
  {
    n: 28,
    q: "What is the procedure for shipping products to the event?",
    blocks: [
      {"type": "p", "text": "It is the Exhibitor's sole responsibility to comply with the legal requirements for shipping goods, equipment, products, utensils, etc."},
      {"type": "p", "text": "Products must be accompanied by a simple shipping invoice for exhibition at the fair, with additional information containing the local details of the exhibition center:"},
      {"type": "address", "text": "SPE GL – Rodovia dos Imigrantes, KM 1.5 – Vila Água Funda – ZIP code: 04329-900 – São Paulo."},
    ],
  },
  {
    n: 29,
    q: "Will there be a cloakroom on site?",
    blocks: [
      {"type": "p", "text": "Malex opening hours: September 9, 10, 11 / WED – THU – FRI 1 PM – 8 PM & SEPTEMBER 12 / SAT 11 AM – 6 PM"},
    ],
  },
];
