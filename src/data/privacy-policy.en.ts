// TODO: revisão jurídica (tradução em rascunho)
import type { Section } from './privacy-policy';

export const TITLE = 'Privacy Policy';
export const SUMMARY = 'Summary';
export const HERO = ['Privacy', 'Policy'];

export const sections: Section[] = [
	{
		id: 'introducao',
		title: 'Introduction',
		blocks: [
			{
				t: 'p',
				x: 'This Privacy Policy (hereinafter the “Policy”) is provided in accordance with the applicable personal data protection legislation, with regard to the personal data processed by ITALIAN EXHIBITION GROUP S.p.A. (“IEG”) and/or by the other companies controlled by it and listed in the table below (the “Subsidiaries”), which:',
			},
			{
				t: 'ul',
				x: [
					'organise and host, also jointly with third-party partners and also on behalf of third parties, events, exhibitions, conferences/congresses, workshops, webinars and/or business meetings, whether physical and/or virtual (the “Events”), or',
					'provide services and products (by way of example and without limitation: catering, fit-outs, cleaning and cloakroom services, training, publishing, event services, etc.) (the “Services”).',
				],
			},
			{
				t: 'p',
				x: 'Personal data (the “data”) means any information that is connected or connectable to i) persons qualifying as “interested parties” (data subjects) under EU Regulation 679/2016 (“GDPR”) (i.e. natural persons, sole proprietorships and/or partnerships or other organisations with a limited subjective basis to which the personal data refer) and/or ii) other persons substantially equated to data subjects by the EU or foreign data protection legislation applicable to the relevant processing.',
			},
			{
				t: 'p',
				x: 'Data processing includes, where applicable, the operations of recording, organisation, storage and processing on paper, magnetic, automated or telematic media, processing, modification, selection, extraction, comparison, use, interconnection of data on the basis of qualitative, quantitative and temporal criteria, whether recurring or periodically definable, temporary processing aimed at the rapid aggregation or transformation of the data themselves, communication, erasure and destruction of the data, or combinations of two or more of the aforementioned operations, as necessary for the purposes set out below.',
			},
		],
	},
	{
		id: 'categorias',
		title: 'Categories of data subjects and data collection',
		blocks: [
			{
				t: 'p',
				x: 'The data processed relate to the following categories of data subjects, who provide the data for themselves or for the organisations to which they belong:',
			},
			{
				t: 'ul',
				x: [
					'customers (i.e. exhibitors, visitors/consumers, buyers, conference attendees, congress attendees, event speakers, participants in workshops, webinars and business meetings, purchasers of services and products),',
					'prospects (i.e. persons who have expressed interest in the Events, Services and/or Products by means of requests for contact, information or quotations or in any other way, including by subscribing to the newsletters of the IEG Group),',
					'other categories of data subjects (recipients of invitations to attend the Events, e.g. guests, journalists and representatives of media outlets, minors under 14 years of age, users of the websites and/or apps provided by IEG and/or by the Subsidiaries).',
				],
			},
			{ t: 'p', x: 'Data is collected:' },
			{
				t: 'ul',
				x: [
					'from the data subject and/or,',
					'from public and/or private databases, limited to identification, contact, corporate, tax, economic-patrimonial and financial data, creditworthiness and business reliability of the data subject,',
					'through the Subsidiaries, limited to identification, contact, corporate, tax, economic-patrimonial and financial data, and',
					'from social media platforms (e.g. LinkedIn, Facebook), limited to identification data (first name and surname, or business name), contact data (city and region of residence and/or registered office, e-mail address, landline/mobile telephone number), and the economic and product sector to which the data subject belongs and/or in which there is a commercial interest.',
				],
			},
		],
	},
	{
		id: 'principios',
		title: 'General principles of processing',
		blocks: [
			{
				t: 'p',
				x: 'The data are processed in compliance with the principles of lawfulness, fairness, correctness, transparency, proportionality, necessity, accuracy, integrity and security, and with other regulatory obligations under the regulations applicable from time to time to the processing of personal data.',
			},
		],
	},
	{
		id: 'finalidade',
		title: 'Purposes of processing',
		blocks: [
			{ t: 'p', x: 'The processing has the following purposes:' },

			{ t: 'h', x: '1. Asset protection and IT security' },
			{
				t: 'p',
				x: 'Protection of the intangible information assets of IEG and/or its Subsidiaries, and Business Continuity and IT Security.',
			},

			{ t: 'h', x: '2. Newsletter and pre-contractual and contractual needs' },
			{ t: 'p', x: '2.a) Subscription to the newsletter service.' },
			{
				t: 'p',
				x: '2.b) Fulfilment of pre-contractual needs (e.g. creditworthiness checks and risk and fraud control, processing of the data subject’s requests for quotations or other information) and/or performance of contractual obligations (including, among other things, the technical-organisational planning and management of the Events and/or Services and Products) and/or obligations established by law, by a regulation or by EU or foreign legislation relating to the Events and/or Services and Products of IEG (including, for example, the preparation of the consolidated financial statements of the IEG Group by the Parent Company IEG) and/or of the Subsidiary (e.g. accounting, tax or administrative obligations).',
			},

			{ t: 'h', x: '3. Market research' },
			{
				t: 'p',
				x: 'Market research, carried out by means of named surveys (provided exclusively by IEG), aimed at detecting perceived performance levels and/or degrees of satisfaction relating to Events, Services and Products and the resulting expectations of customers and prospects of IEG and/or its Subsidiaries.',
			},

			{ t: 'h', x: '4. Basic profiling' },
			{ t: 'p', x: 'Basic profiling carried out by IEG and/or its Subsidiaries.' },
			{
				t: 'p',
				x: 'Profiling means the automated processing of personal data consisting of the use of such data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning (…) the economic situation, (…) individual preferences, interests, reliability, behaviour, location (…) of that person.',
			},
			{
				t: 'p',
				x: 'Profiling is relevant for privacy purposes only if it concerns natural persons, i.e. sole proprietorships or partnerships and their partners/directors, or internal representatives of joint-stock companies, bodies or organisations.',
			},
			{
				t: 'p',
				x: 'Basic profiling uses limited data sets, provided to us by the data subject and collected from the third-party sources indicated above and/or communicated to IEG by the Subsidiaries.',
			},
			{ t: 'p', x: 'The following data are mainly processed:' },
			{
				t: 'ul',
				x: [
					'exhibitors: first name and surname, company name of the organisation to which they belong, contact details, residence or registered office, country of origin, website, business sector, brand, types of service or product offered by the exhibitor, annual promotional/advertising budget, type of distribution (shop, department store, concept store), markets of interest (e.g. countries, type of clients B2B or B2C);',
					'other purchasers of Services and Products: first name and surname, company name of the organisation to which they belong, contact details, residence or registered office, country of origin, website, business sector, type of Service or Product purchased,',
					'buyers/visitors: first name and surname, company name of the organisation to which they belong, contact details, job title and level of responsibility of the contact person, residence or registered office, country of origin, website, year the company was founded, turnover, number of employees, business sector, percentage of business linked to Italy and abroad, Italian and foreign regions of interest, main categories of Events, Services or Products of interest to the buyer, main categories of services and/or products marketed by the buyer (also in terms of percentage of sales by geographical area), categories of the organisation’s customers, purpose of the visit to the Event;',
					'journalists: first name and surname, contact details, sector and newspaper to which they belong, country of origin, language;',
					'event speakers, participants in conferences/meetings: first name and surname, contact details, sector to which they belong, professional expertise/topics addressed, language;',
					'other categories of customers: first name and surname, contact details, country of origin, product or economic sector of activity, turnover, number of employees, main categories of services or products of interest and/or marketed by the customer.',
				],
			},

			{ t: 'h', x: '5. Advanced profiling' },
			{ t: 'p', x: 'Advanced profiling carried out exclusively by IEG.' },
			{
				t: 'note',
				x: 'NB: This purpose is limited to customers and prospects of IEG and/or its Subsidiaries who are natural persons, sole proprietorships or partnerships and related partners/directors and/or internal representatives of joint-stock companies, bodies or organisations. The same analysis, where it relates to data of persons other than the categories mentioned above, is not subject to personal data protection legislation.',
			},
			{ t: 'p', x: 'This purpose requires the specific consent of the data subject.' },
			{
				t: 'p',
				x: 'Advanced profiling aims to analyse the general interactions of the data subject with the various entities of the IEG Group (so-called “customer centricity”) by using and integrating with one another, comparing and reprocessing, according to logics relevant to this objective, the categories of data and/or the main criteria described below:',
			},
			{
				t: 'ul',
				x: [
					'product or economic sector of activity of the buyer/visitor/exhibitor/congress participant or other customer of IEG and/or its Subsidiaries;',
					'categories of Events, Services and/or Products requested by data subjects and/or offered to them;',
					'history of transactions with IEG and/or its Subsidiaries. For example: categories of Events and Services and/or Products purchased or of interest, trend of relative purchase prices within pre-defined periods of time, trend of the annual promotional/advertising budget for Events declared by the data subject;',
					'perceived performance levels and degree of satisfaction of the data subject with regard to the Events attended and Services and/or Products purchased, deduced from: named surveys provided by IEG to data subjects and relating only to IEG and/or from other statistical data reports, also named, processed by IEG from data relating to participation in Events or the purchase of Services and/or Products, relating to data subjects attributable to the Subsidiary and shared by IEG with the Subsidiaries, processed to identify common operational marketing strategies, functional to: increasing, over time, the level of satisfaction of data subjects with regard to the Events, Services and Products, as well as the development of the resulting turnover of the IEG Group, both at the level of the individual Subsidiaries and on a consolidated basis;',
					'commercial margin, relating to the data subject and/or groups of data subjects, assessed at Group level (for individual Events, Services and/or Products and/or for aggregations thereof, e.g. on the basis of product categories, relevant periods of time, price bands applied, etc.) on the basis of the commercial margins applied to the data subject by IEG and/or by the Subsidiaries;',
					'(if the data subject is a customer or prospect) data on browsing behaviour on the websites of IEG and/or its Subsidiaries or when using the Services and/or Products provided through such websites (e.g. through cookies relating to the website pages the data subject visits or the country from which the data subject connects), interactions with other communication channels (e.g. through cookies relating to pages and profiles on social media) and/or with commercial e-mail messaging services (e.g. cookies relating to the successful delivery of messages sent, to the user’s reactions to e-mails through actions such as opening an attachment or accepting a link request to landing pages or message attachments);',
				],
			},
			{
				t: 'p',
				x: 'Advanced profiling makes it possible, depending on the case, to send the data subject only promotional communications relevant to his or her most likely expectations and needs as deduced from the aforementioned analysis, to limit the frequency of such messages within predefined periods of time so as to avoid fatigue, to limit the sending of messages through ineffective channels, to ensure the best purchasing experience of Events, Services and/or Products, and to identify the most effective actions for certain target audiences.',
			},

			{ t: 'h', x: '6. Commercial communications (soft spam)' },
			{
				t: 'p',
				x: 'Sending by IEG and/or its Subsidiaries (via e-mail, text message, app push notifications, instant messaging functions such as WhatsApp and Telegram, telephone calls with an operator, social media and other automated tools, ordinary mail) of commercial and advertising communications – including newsletters – and offers for the sale of Events and/or Services and/or Products similar to those previously purchased by the data subject (customer) or to those that have been the subject of pre-contractual requests or other expression of interest by the data subject (prospect), even implicit (e.g. expressed by spontaneously handing over a business card to IEG and/or a Subsidiary) (collectively referred to as “soft spam”).',
			},
			{
				t: 'p',
				x: 'In the case of processing by Subsidiaries based in BRAZIL, CHINA and SINGAPORE, the Data Controller may process for the purposes of sub 6 the data of the data subject (exclusively visitors of B2C Events) only on the basis of the data subject’s prior specific consent.',
			},

			{ t: 'h', x: '7. Direct marketing by IEG' },
			{
				t: 'p',
				x: 'Following, as a rule but not exclusively, the named surveys referred to in point 3 and/or the statistical reports referred to in point 5: Direct marketing actions (i.e. commercial and advertising communications – including newsletters – and/or offers for the sale of Events and/or Services and/or Products) exclusively by IEG (not also by the Subsidiaries) to customers and prospects of IEG and/or of the Subsidiaries (i.e. data subjects who have never purchased Events, Services or Products) if the Direct Marketing concerns Events, Services and Products of a nature not similar to those already purchased or in which interest has been expressed, or in any case, iii) to customers and prospects of the Subsidiaries whose data are transferred to IEG by them.',
			},
			{ t: 'p', x: 'This purpose requires the specific consent of the data subject.' },

			{ t: 'h', x: '8. Transfer of data' },
			{
				t: 'p',
				x: '8.a) From IEG to partner companies or to third parties of IEG and/or its Subsidiaries (e.g. Event organisers, exhibitors, other operators active in the Events or Services/Products), for their autonomous direct marketing actions relating to their respective services/products. This purpose requires the specific consent of the data subject.',
			},
			{
				t: 'p',
				x: '8.b) From IEG to social media platforms for the purpose of determining – on the basis of an analysis of the social profile(s) of the data subject – new groups of leads (i.e. other potential customers) with a profile similar to those communicated by IEG, and subsequent direct marketing actions aimed at these new groups of leads (so-called “lookalike” services) by social media platforms. This purpose requires the specific consent of the data subject, in favour of IEG.',
			},

			{ t: 'h', x: '9. Online and physical security' },
			{
				t: 'p',
				x: 'Management of online and physical security, in particular to protect IEG and the Subsidiaries, participants in Events and Services, and the websites and apps of the IEG Group against fraud, theft, misappropriation, damage or other violations of the law, to ascertain related liabilities and to protect the related rights of IEG and/or its Subsidiaries.',
			},

			{ t: 'h', x: '10. Other organisational and production activities' },
			{ t: 'p', x: 'Management of other organisational and production activities of IEG and/or its Subsidiaries:' },
			{
				t: 'ul',
				x: [
					'management of the quality system adopted by IEG and/or its Subsidiaries, improvement of the quality of Events, services and Products,',
					'management control,',
					'management of access (e.g. through spontaneous registration by the user) to the websites of IEG and/or its Subsidiaries and to the content and/or services accessible from them (where such activities are not already due under contract),',
					'management of VIP data (e.g. for the application of facilitated access conditions to the Events),',
					'production, printing and dissemination of printed and/or web-based editorial materials,',
					'management of the accreditation and participation in the Events and/or Services of media bodies, media outlets and representatives of journalistic and communication services,',
					'extra-contractual management of the participation of data subjects in thematic initiatives of an extraordinary and/or temporary nature, collateral to the Events,',
					'management of video surveillance on the Event premises.',
				],
			},
			{
				t: 'p',
				x: 'Additional specific purposes relating to individual processing operations may be identified in detail through supplementary notices by the Data Controllers.',
			},

			{ t: 'h', x: '11. Credit data management' },
			{
				t: 'p',
				x: 'Credit data management by the Subsidiary IEG Events Arabia LLC: the processing concerns data relating to the economic and financial situation of an individual, data on payment capacity, data relating to past transactions and behaviour related to payments and debts. This purpose requires the specific consent of the data subject.',
			},
		],
	},
	{
		id: 'base-legal',
		title: 'Legal basis for processing. Mandatory or optional provision of data and consequences of not providing data',
		blocks: [
			{ t: 'p', x: 'The legal bases for the processing are as follows:' },
			{
				t: 'ul',
				x: [
					'With regard to the purposes of sub 1 (protection of intangible information assets and Business Continuity and Information Security): the legitimate interest of IEG and/or the Subsidiaries in the adequate protection, managed centrally at IEG and/or decentrally also at the Subsidiaries, of the intangible information assets of IEG and the Subsidiaries and of the related business continuity and IT security.',
					'With regard to the purposes of sub 2a (newsletter service): the legitimate interest of IEG and/or the Subsidiaries in maintaining commercial contact with those who have already shown interest in the Events, Services or Products of the IEG Group by subscribing to the newsletter service (therefore, without the need for the data subject’s consent);',
					'With regard to the purposes of sub 2b (fulfilment of pre-contractual requirements and/or performance of contractual obligations and/or obligations under an EU or foreign law, regulation or legislation): the need for IEG and/or the Subsidiaries to fulfil pre-contractual requirements and/or contractual obligations (including the diligent planning and organisation of the Events and/or Services/Products and the verification of the reliability of the company requesting an entry visa to the Events) and/or requirements of law, regulation or other legislation (applicable only at local or transnational level, e.g. provisions of Italian law requiring the Subsidiaries to cooperate with IEG in the preparation of the consolidated financial statements of the Group).',
				],
			},
			{
				t: 'p',
				x: 'The data subject is free not to provide his or her data, but in that case his or her pre-contractual requests and/or the conclusion of the requested contract and/or the aforementioned legal or regulatory obligations cannot be fulfilled.',
			},
			{
				t: 'p',
				x: 'In the case of an Event or Service/Product delivered online, the data subject is free not to activate the PC’s camera and/or microphone, but in that case, if his or her image or voice is necessary to enjoy the Event or Service/Product, we will not be able to deliver it.',
			},
			{
				t: 'ul',
				x: [
					'With regard to the purposes of sub 3 (named market research): the legitimate interest of IEG in analysing and protecting the reputation of IEG, its Subsidiaries, Events, Services and/or Products among data subjects, and the quality perceived by them, since maximising their satisfaction is also a benefit for data subjects. The data subject is free not to provide his or her data, but in that case the specified surveys cannot be carried out.',
					'With regard to the purpose of sub 4 (basic profiling): the legitimate interest of IEG and/or its Subsidiaries in having a minimal commercial profile of the data subject useful to guide actions to maintain the commercial relationship with him or her over time and, in particular, to verify and optimise the effectiveness of promotional communications and/or sales offers of Events, Services and/or Products, avoiding content that is not relevant to them.',
					'With regard to the purposes of sub 5 (advanced profiling): specific prior consent. The data subject is free not to provide his or her data and not to give consent. In that case, such advanced profiling cannot be carried out, but there will be no other legal effects (in particular, the data subject’s ability to attend the Events and/or use the Services and/or Products will remain intact).',
					'With regard to the purposes of sub 6 (soft spam, also in the USA and DUBAI): the legitimate interest of IEG and/or its Subsidiaries in keeping commercial contact with customers and prospects active, at a reasonable frequency over time, without prejudice to the data subject’s right to object to the processing for this purpose at any time.',
				],
			},
			{
				t: 'p',
				x: 'In the case of processing by Subsidiaries based in BRAZIL, CHINA and SINGAPORE, the Data Controller may process for the purposes of sub 6 the data of the data subject (exclusively visitors of B2C Events) only on the basis of the data subject’s prior specific consent.',
			},
			{
				t: 'ul',
				x: [
					'With regard to the purpose of sub 7 (direct marketing by IEG other than soft spam): specific prior consent. The data subject is free not to provide his or her data and not to give consent, but in that case it will not be possible to carry out such direct marketing activities beyond soft spam.',
					'With regard to the purposes of sub 8 a-b (transfer of data to partner companies or to third parties other than the Subsidiaries; transfer of data to social media platforms for “lookalike” services): specific prior consent. The data subject is free not to give consent and, in that case, the transfer to third parties cannot be carried out.',
					'With regard to the purposes of sub 9 (security): the legitimate interest of IEG and/or its Subsidiaries in ensuring the security of the Events and Services.',
					'With regard to the purposes of sub 10 (miscellaneous purposes): the legitimate interest of IEG and/or its Subsidiaries in diligently carrying out the activities related to them, respectively.',
					'With regard to the purposes of sub 11 (credit data management by the Subsidiary IEG EVENTS ARABIA LLC): specific prior consent. The data subject is free not to give consent, in which case credit data management cannot take place.',
				],
			},
		],
	},
	{
		id: 'titularidade',
		title: 'Controllership of the processing',
		blocks: [
			{
				t: 'p',
				x: 'On the basis of the regulations applicable from time to time on the subject, the data controllers are:',
			},
			{
				t: 'ul',
				x: [
					'for all the purposes set out in this Policy: IEG, with regard to the personal data of data subjects (e.g. customer data or website user data) processed by: IEG and/or its Subsidiaries based in the EEA area; Subsidiaries based outside the EEA area, where the aforementioned role of Controller of IEG derives from the extraterritorial application rules contained in the local legislation applicable from time to time in the country of the respective registered offices of the Subsidiaries outside the EEA;',
					'for the exclusive purposes of sub 1, 2, 4, 6: each Subsidiary (based in the EEA or outside the EEA), with regard to the data processed by it in accordance with the respective applicable local regulations; and',
					'for the sole purpose of sub 11: the Subsidiary IEG Events Arabia LLC.',
				],
			},
		],
	},
	{
		id: 'dpo',
		title: 'Data Protection Officer',
		blocks: [
			{
				t: 'ul',
				x: [
					'The DPO – Data Protection Officer of ITALIAN EXHIBITION GROUP SPA is Luca De Muri, domiciled at the same address.',
					'The DPO – Data Protection Officer of the Subsidiary IEG ASIA PTE LDT. – 1, Maritime Square # 09-56, Harbourfront Center – Singapore 099253, is Ilaria Cicero, domiciled at the same address.',
				],
			},
		],
	},
	{
		id: 'representante-ue',
		title: 'Legal representative within the EU of non-EU companies',
		blocks: [
			{
				t: 'p',
				x: 'IEG CHINA Co. Ltd (Subsidiary in CHINA), IEG Events Arabia LLC (Subsidiary in Saudi Arabia), IEG ASIA PTE. LIMITED (Subsidiary in SINGAPORE), IEG EVENTS MIDDLE EAST LLC (Subsidiary in DUBAI), ITALIAN EXHIBITION GROUP USA INC. (Subsidiary in the USA) and ITALIAN EXHIBITION GROUP BRASIL EVENTOS LTDA (Subsidiary in BRAZIL), in their capacity as data controllers of the non-occasional processing of personal data for the purposes of sub 1, 2, 4, 6 and 11 (the latter carried out only by IEG Events Arabia LLC) in the context of the offering of Services (including Events organised by them) and/or Products to data subjects based or resident in the EU, have appointed ITALIAN EXHIBITION GROUP SPA as their respective representative in the EU, in accordance with and for the purposes of Art. 27 of the GDPR. As such, ITALIAN EXHIBITION GROUP SPA, in place of or in addition to the aforementioned appointing companies, but without prejudice to their responsibility, acts as the point of contact for the national Supervisory Authorities and for data subjects on any issue relating to these processing activities, in order to ensure compliance with the GDPR and to facilitate the exercise of their rights under the GDPR.',
			},
		],
	},
	{
		id: 'representante-extra-ue',
		title: 'Non-EU legal representative of EU companies',
		blocks: [
			{
				t: 'p',
				x: 'ITALIAN EXHIBITION GROUP SPA, in its capacity as controller of personal data in the context of the offering of Services (including Events organised by it) and/or Products to data subjects based or resident in China, has appointed IEG CHINA Co. Ltd (Subsidiary in CHINA) as its representative in China, in accordance with and for the purposes of Art. 53 of the Chinese Personal Information Protection Law (PIPL). In that capacity, IEG CHINA Co. Ltd acts as the point of contact for the Chinese national supervisory authorities and for data subjects on any issue relating to the aforementioned processing activities.',
			},
		],
	},
	{
		id: 'comunicacao',
		title: 'Communication and disclosure of data',
		blocks: [
			{
				t: 'p',
				x: 'The data are shared with the personnel of IEG and/or its Subsidiaries authorised to process the data (e.g. Finance, Communication, Travel, Sales, Marketing, Legal teams, etc.).',
			},
			{
				t: 'p',
				x: 'The data are communicated for the purposes of sub 1, 2, 3 by IEG, for the purposes of sub 1, 2 and 7 by the Subsidiaries, and for the purposes of sub 11 by the Subsidiary IEG Events Arabia LLC. To:',
			},
			{
				t: 'ul',
				x: [
					'providers of hosting, development, management, maintenance, disaster recovery and cybersecurity services in relation to the IT systems (services, websites and databases) of IEG and/or its Subsidiaries; providers of research services;',
					'other suppliers engaged for the organisation and management of the Events and/or Services and/or Products (e.g. suppliers of materials and products; suppliers of services: design, technical planning and set-up, ticketing, organisational secretariat, enveloping and mailing, design, printing and maintenance of editorial, advertising or promotional materials, logistics, security, first aid, electronic payment, banking, insurance and financial materials, information on corporate reputation, hotel services, catering, passenger transport, language translations, business platforms, issuing of titles, accreditations, tickets and entry passes for Events and Services and/or Products, event help desk, courier, carrier and shipping services, advertising, media relations and communication, direct marketing, web marketing, marketing analysis, CRM – Customer Relationship Management, compliance management, electronic communication, e.g. telephone or telematic),',
					'third-party partners carrying out activities functional or complementary to the promotion of the Events and/or the purchase of Services and Products, e.g. private and public bodies, other trade fair bodies and/or event organisers, trade associations, with which IEG and/or the Subsidiaries activate co-marketing actions for Events,',
					'journalists, newspapers and representatives of other media outlets,',
					'agents, regional advisors,',
					'law firms and notaries,',
					'control and supervisory bodies, in particular, for example, auditing firms and auditors, statutory auditors, accounting experts, DPOs – Data Protection Officers, members of supervisory bodies on the organisational models of IEG and/or the Group companies aimed at preventing the commission of certain categories of offences, auditors and members of boards of auditors,',
					'debt collection companies and firms,',
					'computer forensics companies and professionals in the case of technical and legal investigations relating to suspected crimes or other offences committed to the detriment of IEG, the other Subsidiaries and/or third parties,',
					'other consultants and professionals,',
					'public authorities to which communication is necessary by virtue of law, regulation or other legislation (e.g. diplomatic and consular representations, Police Headquarters, Prefecture, Police, other Public Security Authorities, Revenue Agency, Financial Police and the like),',
					'IEG (in this case, the data are communicated only by the Subsidiaries),',
					'Subsidiaries (in this case, the data are communicated only by IEG and at IEG’s discretion).',
				],
			},
			{
				t: 'p',
				x: 'The identification and contact data and the product data of visitors and buyers may be communicated to exhibitors (e.g. through search and/or meeting request and/or contact functions available on digital platforms or through QR Code or Barcode), as well as any spontaneous messages from the data subjects themselves.',
			},
			{
				t: 'p',
				x: 'The identification, contact and product data of exhibitors and any spontaneous messages from them may be communicated to visitors/buyers (e.g. through search and/or meeting request and/or contact functions available on digital platforms, through QR Codes or Barcodes, or through event catalogues).',
			},
			{
				t: 'p',
				x: 'The data are communicated, as appropriate, by IEG for the purposes of sub 4 to 7 and/or by the Subsidiaries for the exclusive purposes of sub 4 and 6 to:',
			},
			{
				t: 'ul',
				x: [
					'providers of marketing analysis services, communication and/or public relations agencies,',
					'providers of services for the purchase of advertising space on the Internet;',
					'suppliers of advertising or promotional materials (e.g. graphic and creative agencies in general),',
					'companies producing and managing websites or blogs, web marketing companies,',
					'providers of landing page management services,',
					'providers of large language model services that support data analysis for profiling and marketing purposes without public sharing of the processed data.',
				],
			},
			{
				t: 'p',
				x: 'If the aforementioned third party processes the data on behalf of and on the basis of written instructions from IEG and/or the sending Subsidiaries, they will be appointed as External Data Processors in accordance with and for the purposes of Art. 28 of the GDPR.',
			},
			{
				t: 'p',
				x: 'The Subsidiaries, for the purposes of points 4 and 6, also communicate the data to the Parent Company IEG (see also the following chapter “Transfer of data abroad”).',
			},
			{ t: 'p', x: 'IEG and the other Subsidiaries refrain from any dissemination of data.' },
			{
				t: 'p',
				x: 'Exhibitors’ data will be published, only upon request, through the exhibition catalogue relating to the Events, both on paper and online.',
			},
		],
	},
	{
		id: 'transferencia',
		title: 'Transfer of data abroad',
		blocks: [
			{
				t: 'p',
				x: 'The data are transferred by IEG and/or its Subsidiaries based in the EU to the following categories of third-party recipients based outside the EU (hereinafter the “importers”):',
			},
			{
				t: 'ul',
				x: [
					'Subsidiaries and/or their suppliers, based outside the EU (China, Singapore, USA, United Arab Emirates, Brazil), to the extent necessary for contractual performance and/or compliance with legal or regulatory obligations, e.g. where IEG or the other Subsidiaries, based in the EU, transfer the data as agents in the interest of the foreign Subsidiary;',
					'online service providers for: collection of data through text forms that can be filled in by the data subject and contained in the landing pages provided by the Data Controller; social platforms (USA) on which the social pages and/or profiles of IEG and/or the Group companies are active (for more information on the joint controllership regime applicable in this specific case to the parties involved, see the section “joint controllership” in the Cookie Policy), and/or to which IEG communicates data in relation to the “lookalike” services subscribed with them; login management through the user’s LinkedIn social account; analysis of the traffic generated by users of the websites of IEG and/or other Group companies (USA); electronic payment services; CRM – Customer Relationship Management.',
				],
			},
			{
				t: 'p',
				x: 'The Privacy Policies of online service providers outside the EU can be found at the link indicated by the respective provider.',
			},
			{ t: 'p', x: 'This transfer of data will take place subject to appropriate safeguards, such as:' },
			{
				t: 'ul',
				x: [
					'In the case of transfer to the USA: the European Commission Adequacy Decision of 10 July 2023 on US personal data protection legislation as amended by the bilateral EU-US agreement, the “Trans-Atlantic Data Privacy Framework”.',
					'In the case of transfer to Canada (active only for landing page management service providers): the European Commission Adequacy Decision of 15 January 2024 on Canadian personal data protection legislation, in particular the Personal Information Protection and Electronic Documents Act (PIPEDA);',
					'In the case of transfer to non-EU countries other than the USA and Canada: the prior execution by IEG and/or its Subsidiaries based in the EU, with the third-party importer, of standard contractual clauses – or so-called “SCCs” – complying with at least the text approved by the European Commission (except for any additions and/or amendments more favourable to the data subject) by means of which, for the processing within its remit, the data importer undertakes to comply with privacy obligations substantially equivalent to those provided for by the relevant EU legislation.',
				],
			},
			{
				t: 'p',
				x: 'The data are also transferred by the Subsidiaries based outside the EU, within the limits necessary for the purposes of sub 1, 2, 4, 6, 7 and 11, to IEG, as well as to the following third-party recipients based outside the country of the same Subsidiaries (hereinafter the “importers”):',
			},
			{
				t: 'ul',
				x: [
					'agents;',
					'suppliers of Products and/or Services functional to the activities and/or Events relating to the foreign Subsidiaries;',
					'providers of social media platforms (USA) on which the social pages and/or profiles of Group companies based outside the EU are active (for more information on the joint controllership regime applicable in this specific case to the parties involved, see the section “joint controllership” in our Cookie Policy).',
				],
			},
			{
				t: 'p',
				x: 'This transfer of data, where carried out by non-EU Subsidiaries to IEG or to the non-EU party, will take place on the basis of appropriate safeguards, consisting of the execution, between the parties involved in the transfer, of standard contracts or standard contractual clauses, complying at least with the texts approved by the competent Administrative Authorities of the country in which the natural person controlled abroad is based (except for any additions and/or amendments more favourable to the data subject).',
			},
			{
				t: 'p',
				x: 'Through these contracts and/or clauses, IEG and/or the various importers of the data undertake to comply with obligations for the protection and processing of the transferred personal data substantially equivalent to those provided for by the applicable EU legislation.',
			},
			{
				t: 'p',
				x: 'The data are also transferred by the Subsidiaries based in the EU, for the purposes of sub 1, 2, 4, 6 and 7, to IEG without the need for particular and adequate safeguards, since the entire scope of the processing appears to be adequately covered by the GDPR.',
			},
		],
	},
	{
		id: 'duracao',
		title: 'Duration of processing',
		blocks: [
			{
				t: 'p',
				x: 'The data are stored for maximum periods of time (retention) that depend on the purpose of the processing, after which the data are deleted or anonymised, as follows:',
			},
			{
				t: 'ul',
				x: [
					'Purpose sub 1 (protection of information assets): for an indefinite period, except as provided in this document. Data processed for business continuity and IT security logs (e.g. login data, failure and logout logs, suspicious anomaly logs, etc.): retained for 1 year from the date of collection, except for any shorter period provided for by the internal procedures of the Data Controller.',
					'Purpose sub 2 – pre-contractual needs (if the data subject is a lead, i.e. a potential customer who has made no purchases and has not expressed interest in the Events, Services and/or Products): 2 years from the date of data collection (unless further processing results in an expression of interest in the Events, Services and/or Products, in which case the processing will last for the period provided for in the following paragraph);',
					'Purpose sub 2 – pre-contractual needs (if the data subject is a prospect, i.e. a potential customer who has made no purchases but has expressed interest in Events, Services and/or Products): 10 years from the collection of the data subject’s data (unless this activity does not entail the conclusion of a contract, in which case the processing will last for the period described in the following paragraph);',
					'Purpose sub 2 – performance of the contract (if the data subject is a customer): for the entire duration of the commercial relationship and for 10 years from the date of termination of the contract; subject to the shorter periods below in relation to specific categories of data:',
				],
			},
			{
				t: 'ul',
				x: [
					'data relating to the preparation of invitation letters for consular visa applications (e.g. copy of passport, etc.): 6 months from the end of the Event to which they relate.',
					'data from requests for assistance communicated at collection points (including the insurance desk, information point and emergency room) by visitors and exhibitors during the Events: 60 days after the end of each Event; in the case of complaints submitted by the data subject in relation to the Events (e.g. claims for compensation), the data may be further processed, as better provided for in the paragraph “In the event of a dispute”.',
					'data contained in the promotional catalogue of the Events: for 2 editions of the catalogue.',
					'data relating to the “Business Matching” service provided during the Events: 3 months from the end of the individual Event.',
					'editorial products: 5 years from publication (NB: after the sale of the Product containing the data, the Data Controller has no control over its subsequent circulation).',
				],
			},
			{
				t: 'ul',
				x: [
					'Purpose sub 2 – compliance with legal and regulatory obligations: 10 years from the date of conclusion of the contract (in the case of customers) or from the collection of the data subject’s data (in the case of prospects); the following shorter periods are reserved in relation to specific categories of data: event certification data: until the end of the certification and therefore until the certification has been carried out;',
					'Purpose sub 3 (named surveys): 2 years from the collection of the data subject’s data (in the case of customers and prospects);',
					'Purpose sub 4 (basic profiling): 2 years from the collection of the data subject’s data (in the case of customers and prospects);',
					'Purpose sub 5 (advanced profiling): 2 years from the collection of the data subject’s data (in the case of customers and prospects);',
					'Purpose sub 6 (soft spam): until any objection by the data subject.',
					'Purpose sub 7 (direct marketing) for leads, customers and prospects: 10 years from the date of data collection or until the date of withdrawal of consent by the data subject, if such withdrawal occurs before that deadline;',
					'Purpose sub 11 (credit data management carried out by IEG Events Arabia LLC): 2 years from the date of data collection.',
				],
			},
			{
				t: 'p',
				x: 'In the event of an extrajudicial or judicial dispute, in relation to the data subject and/or third parties (e.g. persons injured during the Events due to the activities of the Data Controller, the data subject and/or third parties), the data are processed for the time necessary to exercise the protection of the Data Controller’s rights (as a rule, until the 6th calendar year following the year of full execution of a final judgment or of an amicable settlement between the parties in dispute).',
			},
		],
	},
	{
		id: 'meios',
		title: 'Means of processing',
		blocks: [
			{
				t: 'p',
				x: 'IEG, also through its Subsidiaries and/or third-party suppliers delegated by them, collects data through:',
			},
			{
				t: 'ul',
				x: [
					'websites of the IEG Group whose web pages the data subject browses;',
					'online or paper forms or pre-registration or participation applications completed by the data subject during or in connection with the Events and/or Services and/or Products,',
					'QR Codes or Barcodes displayed and scanned at the entrances to the Events or during participation in them,',
					'business cards spontaneously handed over by the data subject,',
					'applications (paper or online) for the data subject to participate in the Events, Services and/or Products,',
					'contracts entered into with the data subject,',
					'requests for quotations and/or information sent by the data subject (e.g. online forms),',
					'online platforms for the management of contact requests/business meetings and for the exchange of information between exhibitors, visitors and/or buyers (e.g. texts, videos, presentations, live sessions; insights and itineraries on trends and innovation, tourist visits, sharing and communication of events and/or other digital content; sharing of public comments relating to the content shared above, exchange of messages).',
				],
			},
			{ t: 'p', x: 'IEG also collects data from Subsidiaries as part of intra-group information exchanges.' },
			{
				t: 'p',
				x: 'The data are processed by personnel authorised and trained by IEG and/or its Subsidiaries, within the limits strictly necessary for the performance of their respective tasks (e.g. legal, commercial, marketing, administrative, logistics, IT, management control, etc.), using electronic and paper tools and with logic strictly connected to the individual purposes, as respectively set out above.',
			},
		],
	},
	{
		id: 'seguranca',
		title: 'Security measures',
		blocks: [
			{
				t: 'p',
				x: 'Technical and organisational security measures are applied to the processing of the data subject’s personal data to ensure its integrity, security and availability. For security reasons, not all relevant information is made available here. The measures may vary depending on the Group company. The main types of measures applied are as follows:',
			},
			{ t: 'h', x: 'IT asset management procedures' },
			{
				t: 'ul',
				x: ['Firewall', 'Antivirus', 'Antispam', 'DMZ – Demilitarised Zone', 'Redundant storage'],
			},
			{ t: 'h', x: 'Identity and access management procedures' },
			{
				t: 'ul',
				x: [
					'Unique authentication credentials for access to data; 2FA and VPN for remote access',
					'Limitation of access to data to internal personnel only, previously designated in writing, authorised and trained by the Data Controller',
					'Authorisation profiles managed through Active Directory and/or Azure Directory (Entra ID) limited according to the “need to use, need to know” principle.',
					'Written confidentiality obligations',
					'Staff training',
					'Appointment of external managers who carry out outsourced processing on behalf of the Data Controllers',
				],
			},
			{ t: 'h', x: 'Other measures' },
			{
				t: 'ul',
				x: [
					'VLAN – Virtual Local Area Network',
					'Daily backup',
					'Disaster recovery',
					'Patch management procedures',
					'Incident Management Procedure and Data Breach Procedure',
					'IDS (Intrusion Detection System), IPS (Intrusion Prevention System), EDR (Endpoint Detection and Response), DLP (Data Loss Prevention) systems',
					'SIEM – Security Information and Event Management',
					'SOC – Security Operations Center',
					'Connections via secure HTTP protocol (HTTPS) with 2048-bit encryption and TLS v1.x protocol (PCI DSS compliance)',
					'Periodic vulnerability assessment and penetration testing',
					'Periodic audits.',
				],
			},
			{
				t: 'p',
				x: 'The use of ‘bot’ (i.e. automated) software programs violates the Terms of Use of our websites. IEG and its Subsidiaries therefore reserve all rights to compensation for damages resulting from such behaviour and the right to suspend access to the services of any person who violates this prohibition.',
			},
			{
				t: 'p',
				x: 'We reserve the right to carry out security checks (e.g. log analysis) at any time to validate your identity, the registration data provided by you and to verify your correct use of our online services, as well as to verify possible violations of the Terms of Use of our websites and/or of the law applicable to them.',
			},
		],
	},
	{
		id: 'direitos',
		title: 'Rights of the data subject',
		blocks: [
			{
				t: 'p',
				x: 'Data subjects, using the contact details of the Data Controller (visible in the Table of IEG Group Companies), may exercise the following rights, provided for by the GDPR and/or by the different local legislation applicable from time to time in the relevant non-EU country in relation to data processing:',
			},
			{
				t: 'ul',
				x: [
					'Access to their personal data processed by the Data Controller,',
					'Rectification or completion of inaccurate or incomplete data,',
					'Erasure of obsolete data, where the Data Controller has not done so independently, in cases where (i) they are no longer necessary for the purposes of data processing, (ii) the data subject has withdrawn his or her consent to the processing of data where such consent is required by law, (iii) the data subject has objected to the processing of the data, (iv) the processing of personal data is unlawful, (v) the personal data must be erased to comply with a legal obligation incumbent on the Controller. Each Data Controller undertakes to take all reasonable steps to inform the other IEG Group companies of the erasure.',
					'Restriction of the processing of personal data, if (i) the accuracy of the data subject’s personal data is contested, to enable the Data Controller to carry out the necessary checks, (ii) the data subject wishes to restrict his or her personal data rather than have it erased, although the processing is unlawful, (iii) the data subject wishes the Data Controller to retain the personal data as deemed necessary to defend himself or herself in legal actions, (iv) the data subject has objected to the processing, but the Data Controller must carry out checks to verify the existence of legitimate grounds for the processing that override the rights of the data subject.',
					'Data portability (i.e. obtaining a copy in a machine-readable format of the data provided by the data subject to the Data Controller, or having that copy communicated to another data controller indicated by the data subject, where the data relate to an existing contract between the data subject and the first Data Controller and are processed using software) within the limits established by the applicable legislation.',
					'Objection to processing carried out on the basis of a legitimate interest of the Data Controller.',
					'The right not to be subject to automated decision-making that produces legal effects concerning or significantly affecting the data subject, and to object to the outcome of any automated decision of the Data Controller relating to the processing of the data subject’s personal data. Automated decision-making occurs when decisions are made using technological means without human involvement. This right does not exist where the automated decision i) is necessary for entering into or performing a contract between the data subject and a data controller, or ii) is authorised by EU or EU Member State law to which the Data Controller is subject, which in that case also specifies appropriate measures to safeguard the rights, freedoms and legitimate interests of the data subject, or iii) is based on the data subject’s explicit consent.',
					'Withdrawal of consent where consent is, by law, the legal basis for the processing (without prejudice to the lawfulness of the processing carried out up to the time of withdrawal).',
					'(where the GDPR applies) The right to lodge a complaint with the competent Supervisory Authority; in Italy, this is the Italian Data Protection Authority (Garante per la protezione dei dati personali) – Piazza Venezia 11 – IT-00187 – Rome), tel. (+39) 06.69677.1, e-mail: rpd@gpdp.it.',
					'(where personal data protection legislation other than the GDPR applies) The right to lodge a complaint, take legal action and/or use alternative dispute resolution, as provided from time to time by the applicable foreign legislation (e.g. in the State of New Jersey, the right to appeal against any rejection of a request to exercise the rights provided for by the New Jersey Data Privacy Act, within a reasonable period after communication of the rejection and in a manner similar to that of the process for submitting the first request; the Controller’s response must be communicated within 60 days; if the Controller rejects the appeal, the consumer may file a complaint with the New Jersey Division of Consumer Affairs in the Department of Law and Public Safety (see https://njconsumeraffairs.gov/).',
					'The right to request: from IEG and/or the Subsidiaries based in the EU area, as well as from the Subsidiaries based in DUBAI, SAUDI ARABIA, SINGAPORE and/or the USA, a list of the names of the third-party recipients of the data designated as external data controllers (see also the chapter “Communication and disclosure of data” of this Policy), and, for the Subsidiaries based in CHINA and BRAZIL, a list of the names of all third-party recipients of the data (External Managers and Data Controllers).',
				],
			},
			{ t: 'h', x: 'How to obtain more information about your rights' },
			{
				t: 'ul',
				x: [
					'if the data subject resides or is based in the EEA area, or is in any case subject to processing of personal data regulated by the GDPR, he or she should consult for further details Articles 15 to 22 and 77 of EU Privacy Regulation No. 679/2016 (“GDPR”), available at: https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679#d1e2800-1-1;',
					'if the data subject resides or is based in China, or is in any case subject to processing regulated by Chinese legislation for the protection of personal data, he or she should consult for further details Articles 44 to 50 of Chapter IV of the Personal Information Protection Law of the People’s Republic of China (PIPL), available at: http://en.npc.gov.cn.cdurl.cn/2021-12/29/c_694559.htm;',
					'if the data subject resides or is based in Dubai, or is in any case subject to processing regulated by Arab legislation for the protection of personal data, he or she should consult for further details – the United Arab Emirates – ‘The Guide to Accessing Government Information’ and Law No. 26 of 2015 on the Organisation of Dubai Data Publication and Sharing, also known as Law No. 26 of 2015 Regulating Data Dissemination and Exchange; and the Personal Data Protection Law, Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data) at: https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws;',
					'if the data subject resides or is based in Brazil, or is in any case subject to processing regulated by Brazilian personal data protection legislation, he or she should consult Articles 17 to 22 of Chapter III of the General Personal Data Protection Law (LGPD), at: https://lgpd-brazil.info;',
					'if the data subject resides or is based in Singapore or is in any case subject to processing regulated by Singapore legislation for the protection of personal data, he or she should consult Articles 5.1 to 5.2 of Chapter V of the “Personal Data Protection Act 2012 (“PDPA”)” available at: https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act;',
					'if the data subject resides or is based in the USA, or is in any case subject to processing regulated by US legislation for the protection of personal data, he or she may consult the information available at: https://www.whitecase.com/insight-our-thinking/us-data-privacy-guide and, in relation to the processing of personal data relating to persons qualifying as consumers (i.e. acting in an individual or household context) carried out by our Subsidiary based in the State of New Jersey (USA), the New Jersey Data Privacy Act visible at: https://pub.njleg.state.nj.us/Bills/2022/S0500/332_R6.PDF;',
					'if the data subject resides or is based in Saudi Arabia, or is subject to processing governed by Saudi Arabian data protection legislation, he or she should consult: https://sdaia.gov.sa/en/Research/Pages/DataProtection.aspx',
				],
			},
		],
	},
	{
		id: 'alteracoes',
		title: 'Changes to the Privacy Policy',
		blocks: [
			{
				t: 'p',
				x: 'The Policy may be modified over time to reflect changes made to the processing of personal data and/or to adapt to any regulatory requirements that may arise.',
			},
			{
				t: 'p',
				x: 'Updated information will be communicated to the data subject as required by law and by appropriate methods (e.g. by publication on the Website(s) of IEG and/or its Subsidiaries, or an e-mail message or insertion in online areas reserved for users).',
			},
		],
	},
];
