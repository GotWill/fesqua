/*
 * Política de Privacidade (conteúdo do Italian Exhibition Group S.p.A.).
 * Cada seção vira um bloco numerado na página e um item do sumário.
 *
 * Tipos de bloco:
 *   p     parágrafo
 *   ul    lista de itens
 *   h     subtítulo dentro da seção
 *   note  observação em destaque
 * URLs soltas no texto viram links automaticamente.
 */

export type Block =
	| { t: 'p'; x: string }
	| { t: 'ul'; x: string[] }
	| { t: 'h'; x: string }
	| { t: 'note'; x: string };

export interface Section {
	id: string;
	title: string;
	blocks: Block[];
}

export const TITLE = 'Política de Privacidade';
export const CONTROLLER = 'ITALIAN EXHIBITION GROUP SPA';

export const sections: Section[] = [
	{
		id: 'introducao',
		title: 'Introdução',
		blocks: [
			{
				t: 'p',
				x: 'Esta Política de Privacidade (doravante denominada “Política”) é fornecida de acordo com a legislação aplicável em matéria de proteção de dados pessoais, em relação aos dados pessoais tratados pela empresa ITALIAN EXHIBITION GROUP S.p.A. (“IEG“) e/ou pelas demais empresas controladas pela mesma listadas na tabela abaixo (as “Sociedades Controladas“), que:',
			},
			{
				t: 'ul',
				x: [
					'organizar, hospedar, também em conjunto com parceiros terceirizados, também em favor de terceiros, eventos, exposições, conferências/congressos, workshops, webinars e/ou reuniões de negócios, físicas e/ou virtuais (os “Eventos“), ou',
					'fornecer serviços e produtos (a título de exemplo, mas não se limitando a: catering, configurações, limpeza e bagageiro, treinamento, publicação, serviços de eventos, etc.) (os “Serviços“).',
				],
			},
			{
				t: 'p',
				x: 'Dados pessoais (os “dados“) são dados que consistem em qualquer informação que esteja conectada ou conectável a i) sujeitos qualificados como “partes interessadas” de acordo com o Regulamento da UE 679/2016 (“GDPR”) (ou seja, pessoas físicas, empresas individuais e/ou parcerias ou outras organizações com uma base subjetiva restrita à qual os dados pessoais se referem) e/ou ii) outros sujeitos substancialmente equiparados às partes interessadas pela legislação de proteção de dados da UE ou estrangeira aplicável ao processamento relevante.',
			},
			{
				t: 'p',
				x: 'O tratamento de dados inclui, se for caso disso, as operações de registo, organização, armazenamento e tratamento em papel, suportes magnéticos, automatizados ou telemáticos, o tratamento, a modificação, a seleção, a extração, a comparação, a utilização, a interconexão entre dados com base em critérios qualitativos, quantitativos e temporais, recorrentes ou definíveis periodicamente, o tratamento temporário destinado a uma rápida agregação ou transformação dos próprios dados, a comunicação, o cancelamento e a destruição dos dados, ou combinações de duas ou mais das operações acima mencionadas, com base no que for necessário para os fins mencionados abaixo.',
			},
		],
	},
	{
		id: 'categorias',
		title: 'Categorias de partes interessadas e recolha de dados',
		blocks: [
			{
				t: 'p',
				x: 'Os dados tratados dizem respeito às seguintes categorias de partes interessadas, que fornecem os dados para si ou para as organizações a que pertencem:',
			},
			{
				t: 'ul',
				x: [
					'clientes (ou seja, expositores, visitantes/consumidores, compradores, participantes de conferências, participantes de congressos, palestrantes de eventos, participantes de workshops, webinars e reuniões de negócios, compradores de serviços e produtos),',
					'clientes em potencial (ou seja, sujeitos que manifestaram interesse nos Eventos, Serviços e/ou Produtos por meio de solicitações de contato, informações ou cotações ou de qualquer outra forma, incluindo a assinatura de boletins informativos do Grupo IEG),',
					'outras categorias de interessados (destinatários de convites para participar dos Eventos, por exemplo, convidados, jornalistas e representantes de órgãos de comunicação, menores de 14 anos, usuários dos sites e/ou aplicativos fornecidos pelo IEG e/ou pelas Empresas Controladas).',
				],
			},
			{ t: 'p', x: 'A coleta de dados acontece:' },
			{
				t: 'ul',
				x: [
					'através da parte interessada e/ou,',
					'em bases de dados públicas e/ou privadas, limitadas à identificação, contacto, societária, fiscal, económico-patrimonial e financeira, solvabilidade e idoneidade empresarial do titular dos dados,',
					'através das Sociedades Controladas, limitando-se a dados de identificação, contacto, societários, fiscais, económico-patrimoniais e financeiros, e',
					'em plataformas de redes sociais (por exemplo, LinkedIn, Facebook), limitadas a dados de identificação (nome e sobrenome ou nome/nome da empresa), dados de contato (cidade e região de residência e/ou sede, endereço de e-mail, número de telefone fixo-móvel), setor econômico e de commodities ao qual pertence e/ou de interesse comercial.',
				],
			},
		],
	},
	{
		id: 'principios',
		title: 'Princípios gerais do tratamento',
		blocks: [
			{
				t: 'p',
				x: 'Os dados são processados em conformidade com os princípios de legalidade, justiça, correção, transparência, proporcionalidade, necessidade, precisão, integridade e segurança e outras obrigações regulamentares sob os regulamentos aplicáveis de tempos em tempos em relação ao processamento de dados pessoais.',
			},
		],
	},
	{
		id: 'finalidade',
		title: 'Finalidade do tratamento',
		blocks: [
			{ t: 'p', x: 'O processamento tem as seguintes finalidades:' },

			{ t: 'h', x: '1. Proteção de ativos e segurança de TI' },
			{
				t: 'p',
				x: 'Proteção dos ativos de informação intangíveis do IEG e/ou de suas Controladas e Continuidade Operacional e Segurança de TI.',
			},

			{ t: 'h', x: '2. Newsletter e necessidades pré-contratuais e contratuais' },
			{ t: 'p', x: '2.a) Subscrição do serviço de newsletter.' },
			{
				t: 'p',
				x: '2.b) Satisfação de necessidades pré-contratuais (por exemplo, verificações de solvência e controle de riscos e fraudes, processamento de solicitações da parte interessada para cotações ou outras informações e/ou cumprimento de obrigações contratuais (incluindo, entre outras coisas, o planejamento e gestão técnico-organizacional dos Eventos e/ou Serviços e Produtos e/ou obrigações estabelecidas por lei, por um regulamento ou por uma legislação comunitária ou estrangeira relacionada aos Eventos e/ou Serviços e Produtos do IEG (incluindo, por exemplo, a preparação das demonstrações financeiras consolidadas do Grupo IEG, pela Controladora IEG) e/ou do Controlado (por exemplo, obrigações contábeis, fiscais ou administrativas).',
			},

			{ t: 'h', x: '3. Pesquisas de mercado' },
			{
				t: 'p',
				x: 'Pesquisas de mercado, realizadas por meio de pesquisas nominativas (fornecidas exclusivamente pelo IEG), com o objetivo de detectar níveis de desempenho percebidos e/ou graus de satisfação relacionados a Eventos, Serviços e Produtos e as consequentes expectativas de clientes e prospects do IEG e/ou de suas Controladas.',
			},

			{ t: 'h', x: '4. Perfil básico' },
			{ t: 'p', x: 'Perfil básico realizado pelo IEG e/ou suas Controladas.' },
			{
				t: 'p',
				x: 'Definição de perfis significa o processamento automatizado de dados pessoais que consiste no uso desses dados para avaliar certos aspectos pessoais relacionados a uma pessoa física, em particular para analisar ou prever aspectos relativos (…) à situação econômica, (…) preferências individuais, interesses, confiabilidade, comportamento, localização (…) desse sujeito.',
			},
			{
				t: 'p',
				x: 'A definição de perfis é relevante, para fins de privacidade, apenas se disser respeito a pessoas singulares, ou seja, empresas individuais ou parcerias e seus sócios/administradores, ou representantes internos de sociedades anónimas, organismos ou organizações.',
			},
			{
				t: 'p',
				x: 'A criação de perfil básica usa conjuntos de dados limitados, fornecidos a nós pelo titular dos dados e coletados das fontes de terceiros indicadas acima e/ou comunicadas ao IEG pelas Empresas Controladas.',
			},
			{ t: 'p', x: 'Os seguintes dados são processados principalmente:' },
			{
				t: 'ul',
				x: [
					'expositores: nome e sobrenome, nome da empresa da organização a que pertencem, dados de contato, residência ou sede, país de origem, site, setor de atividade, marca, tipos de serviço ou produto oferecido pelo expositor, orçamento anual promocional/publicitário, tipo de distribuição (loja, loja de departamentos, loja conceito), mercados de interesse (por exemplo, países, tipo de clientes B2B ou B2C);',
					'outros compradores de Serviços e Produtos: nome e sobrenome, nome da empresa da organização a que pertencem, detalhes de contato, residência ou sede, país de origem, site, setor de atividade, tipo de Serviço ou Produto adquirido,',
					'compradores/visitantes: nome e sobrenome, nome da empresa da organização a que pertencem, dados de contato, cargo e nível de responsabilidade da pessoa de contato, residência ou sede, país de origem, site, ano de fundação da empresa, volume de negócios, número de funcionários, setor de atividade, porcentagem de negócios ligados à Itália e ao exterior, regiões italianas e estrangeiras de interesse, principais categorias de Eventos, Serviços ou Produtos de interesse do comprador, principais categorias de serviços e/ou produtos comercializados pelo mesmo (também em termos percentuais de vendas por área geográfica), categorias de clientes da organização, finalidade de visita ao Evento;',
					'jornalistas: nome e apelido, dados de contacto, setor e jornal a que pertencem, país de origem, língua;',
					'oradores do evento, participantes em conferências/reuniões: nome e apelido, dados de contacto, setor a que pertencem, profissionalismo/temas abordados, língua;',
					'outras categorias de clientes: nome e apelido, dados de contacto, país de origem, produto ou setor económico de atividade, volume de negócios, número de trabalhadores, principais categorias de serviços ou produtos de interesse e/ou comercializados pelo cliente.',
				],
			},

			{ t: 'h', x: '5. Perfil avançado' },
			{ t: 'p', x: 'Criação de perfil avançada realizada exclusivamente pelo IEG.' },
			{
				t: 'note',
				x: 'NB: Este propósito é limitado a clientes e potenciais clientes do IEG e/ou de suas Controladas que sejam pessoas físicas, empresas individuais ou parcerias e parceiros/diretores relacionados e/ou representantes internos de sociedades anônimas, órgãos ou organizações. Mesma análise, se, no entanto, em relação a dados de sujeitos diferentes das categorias mencionadas acima, a legislação sobre proteção de dados pessoais não se aplicar.',
			},
			{ t: 'p', x: 'Esta finalidade pressupõe um consentimento específico do titular dos dados.' },
			{
				t: 'p',
				x: 'O perfil avançado visa analisar as interações gerais da parte interessada com as várias entidades do Grupo IEG (o chamado “customer centricity”) usando e integrando entre si, comparando e reprocessando de acordo com lógicas relevantes para este objetivo, as categorias de dados e/ou os principais critérios descritos abaixo:',
			},
			{
				t: 'ul',
				x: [
					'produto ou setor econômico de atividade do comprador/visitante/expositor/congressista ou congressista ou outro cliente do IEG e/ou de suas Controladas;',
					'categorias de Eventos, Serviços e/ou Produtos solicitados pelos interessados e/ou oferecidos a eles;',
					'histórico de transações com o IEG e/ou suas Controladas. Por exemplo: categorias de Eventos e Serviços e/ou Produtos adquiridos ou de interesse, tendência dos preços de compra relativos dentro de períodos de tempo pré-definidos, tendência do orçamento anual promocional/publicitário dos Eventos declarados pelo interessado;',
					'níveis de desempenho percebido e grau de satisfação do interessado com relação aos Eventos Participados e Serviços e/ou Produtos adquiridos, deduzidos de: inquéritos nominativos fornecidos pelo IEG às partes interessadas e referentes apenas ao IEG e/ou a partir de outros relatórios de dados estatísticos, também nominativos, processados pelo IEG a partir de dados relativos à participação em Eventos ou à compra de Serviços e/ou Produtos, relativos a partes interessadas atribuíveis ao Controlado e compartilhados pelo IEG com as Controladas, processados para identificar estratégias comuns de marketing operacional, funcionais para: aumentar, ao longo do tempo, o nível de satisfação das partes interessadas relativamente aos Eventos, Serviços e Produtos e bem como o desenvolvimento do volume de negócios resultante do Grupo IEG, tanto ao nível das Sociedades Controladas individuais como consolidadas;',
					'marginalidade comercial, referente à parte interessada e/ou a grupos de partes interessadas, avaliada a nível do Grupo (para Eventos, Serviços e/ou Produtos individuais e/ou para agregações dos mesmos, por exemplo, com base em categorias de produtos, períodos relevantes de tempo, faixas de preço aplicadas, etc.) com base nas margens comerciais aplicadas ao interessado, pelo IEG e/ou pelas Controladas;',
					'(se a parte interessada for um cliente ou prospect) dados sobre o comportamento de navegação nos sites do IEG e/ou de suas Empresas Controladas ou durante o uso dos Serviços e/ou Produtos fornecidos por meio de tais sites (por exemplo, por meio de cookies relacionados às páginas dos sites que a parte interessada visita ou ao país de onde a parte interessada se conecta), interações com outros canais de comunicação (por exemplo, por meio de cookies relacionados a páginas e perfis em redes sociais) e/ou com serviços de envio de mensagens de e-mails comerciais (por exemplo, cookies relacionados à conclusão bem-sucedida das mensagens enviadas, às reações do usuário a e-mails por meio de ações como abrir um anexo ou aceitar uma solicitação de link para páginas de destino ou anexos da mensagem);',
				],
			},
			{
				t: 'p',
				x: 'O perfil avançado permite, dependendo do caso, enviar ao interessado apenas comunicações promocionais relevantes para suas expectativas e necessidades mais prováveis deduzidas da análise acima mencionada, limitar a frequência de tais mensagens dentro de períodos de tempo predefinidos evitando fadiga, limitar o envio de mensagens de canais ineficazes, garantir a melhor experiência de compra de Eventos, Serviços e/ou Produtos, identificar as ações mais eficazes para determinados públicos-alvo.',
			},

			{ t: 'h', x: '6. Comunicações comerciais (soft spam)' },
			{
				t: 'p',
				x: 'Envio pelo IEG e/ou suas Controladas (via e-mail, mensagem de texto, notificações push de aplicativos, funções de mensagens instantâneas como WhatsApp e Telegram, ligações telefônicas com operadora, redes sociais e outras ferramentas automatizadas, correio comum) de comunicações comerciais e publicitárias – incluindo newsletters – e ofertas de venda de Eventos e/ou Serviços e/ou Produtos de natureza semelhante àquelas previamente adquiridas pelo titular dos dados (cliente) ou para aqueles que tenham sido objeto de solicitações pré-contratuais ou outra manifestação de interesse pelo titular dos dados (prospect), mesmo implícitas (por exemplo, expressas por meio da entrega espontânea de um cartão de visita ao IEG e/ou a uma Controlada (coletivamente denominadas “soft spam“).',
			},
			{
				t: 'p',
				x: 'No caso de processamento por Empresas Controladas sediadas no BRASIL, CHINA e CINGAPURA, o Controlador de Dados pode processar para os fins do sub 6 os dados do titular dos dados (exclusivamente visitante de Eventos de natureza B2C) somente com base no consentimento prévio específico do titular dos dados.',
			},

			{ t: 'h', x: '7. Marketing direto pelo IEG' },
			{
				t: 'p',
				x: 'Seguindo, em regra, mas não só, os inquéritos nominativos referidos no ponto 3 e/ou os relatórios estatísticos referidos no ponto 5: Ações de marketing direto (i.e. comunicações comerciais e publicitárias – incluindo newsletter – e/ou ofertas de venda de Eventos e/ou Serviços e/ou Produtos) exclusivamente pelo IEG (não também pelas Sociedades Controladas) para (ou seja, partes interessadas que nunca adquiriram Eventos, Serviços ou Produtos) do IEG e/ou das Controladas clientes e prospectos do IEG e/ou das Sociedades Controladas se o Marketing Direto disser respeito a Eventos, Serviços e Produtos de natureza não semelhante aos já adquiridos ou de interesse manifestado dos mesmos, ou no entanto, iii) para clientes e prospects das Sociedades Controladas cujos dados são transferidos para o IEG por elas.',
			},
			{ t: 'p', x: 'Esta finalidade pressupõe um consentimento específico do titular dos dados.' },

			{ t: 'h', x: '8. Transferência de dados' },
			{
				t: 'p',
				x: '8.a) Do IEG para empresas parceiras ou para terceiros sujeitos do IEG e/ou de suas Controladas (por exemplo, organizadores de Eventos, expositores, outros operadores ativos nos Eventos ou Serviços/Produtos), por suas ações autônomas de marketing direto relacionadas aos seus respectivos serviços/produtos. Esta finalidade pressupõe o consentimento específico do titular dos dados.',
			},
			{
				t: 'p',
				x: '8.b) Do IEG para as plataformas de redes sociais com o objetivo de determinar – a partir da análise do(s) perfil(is) social(is) do titular dos dados – novos grupos de leads (ou seja, outros clientes potenciais) com um perfil semelhante aos comunicados pelo IEG, e subsequentes ações de marketing direto destinadas a esses novos grupos de leads (os chamados serviços “semelhantes”) por plataformas de redes sociais. Esta finalidade pressupõe o consentimento específico do titular dos dados, a favor do IEG.',
			},

			{ t: 'h', x: '9. Segurança online e física' },
			{
				t: 'p',
				x: 'Gerenciamento de segurança online e física, especialmente para proteger o IEG e as Empresas Controladas, participantes de Eventos e Serviços, sites e aplicativos do Grupo IEG contra fraude, roubo, apropriação indébita, danos ou outras violações da lei, apurar responsabilidades relacionadas e proteger os direitos relacionados do IEG e/ou de suas Controladas.',
			},

			{ t: 'h', x: '10. Outras atividades organizacionais e produtivas' },
			{ t: 'p', x: 'Gestão de outras atividades organizacionais e produtivas do IEG e/ou de suas Controladas:' },
			{
				t: 'ul',
				x: [
					'gestão do sistema de qualidade adotado pelo IEG e/ou suas Controladas, melhoria da qualidade dos Eventos, serviços e Produtos,',
					'controlo de gestão,',
					'gerenciamento de acesso (por exemplo, por meio de registro espontâneo pelo usuário) aos sites do IEG e/ou de suas Controladas e aos conteúdos e/ou serviços acessíveis a partir deles (se tais atividades ainda não forem devidas por contrato),',
					'gestão de dados de VIPs (por exemplo, para a aplicação de condições de acesso facilitado aos Eventos),',
					'produção, impressão e divulgação de materiais editoriais impressos e/ou baseados na web,',
					'gestão da acreditação e participação nos Eventos e/ou Serviços dos organismos de comunicação, órgãos de comunicação social e representantes dos serviços jornalísticos e de comunicação,',
					'gestão extracontratual da participação de interessados em iniciativas temáticas de caráter extraordinário e/ou temporário, colaterais aos Eventos,',
					'gestão de videovigilância nos recintos do Evento.',
				],
			},
			{
				t: 'p',
				x: 'Finalidades adicionais específicas relacionadas ao processamento individual podem ser identificadas em detalhes por meio de divulgações suplementares pelos Controladores de Dados.',
			},

			{ t: 'h', x: '11. Gerenciamento de dados de crédito' },
			{
				t: 'p',
				x: 'Gerenciamento de dados de crédito pela Empresa Controlada IEG Events Arabia LLC: o processamento diz respeito a dados relacionados à situação econômico-financeira de um indivíduo, dados sobre capacidade de pagamento, dados relativos a transações passadas e comportamento relacionado a pagamentos e dívidas. Esta finalidade pressupõe o consentimento específico do titular dos dados.',
			},
		],
	},
	{
		id: 'base-legal',
		title: 'Base legal do processamento. Fornecimento obrigatório ou facultativo de dados e consequências do não fornecimento de dados',
		blocks: [
			{ t: 'p', x: 'As bases legais do processamento são as seguintes:' },
			{
				t: 'ul',
				x: [
					'Em relação às finalidades do sub 1 (proteção de ativos de informação intangíveis e Continuidade de Negócios e Segurança da Informação): o interesse legítimo do IEG e/ou das Controladas na proteção adequada, gerenciada centralmente no IEG e/ou descentralizada também nas Controladas, dos ativos de informação intangíveis do IEG e das Controladas e da continuidade operacional e segurança de TI relacionadas.',
					'Em relação às finalidades sub 2a (serviço de newsletter): o interesse legítimo do IEG e/ou das Sociedades Controladas em manter contacto comercial com aqueles que já demonstraram interesse nos Eventos, Serviços ou Produtos do Grupo IEG ao subscreverem o serviço de newsletter (portanto, sem necessidade de consentimento do titular dos dados);',
					'Em relação às finalidades sub 2b (satisfação de requisitos pré-contratuais e/ou cumprimento de obrigações contratuais e/ou obrigações sob uma lei, regulamento ou legislação da UE ou estrangeira): a necessidade de o IEG e/ou as Sociedades Controladas cumprirem requisitos pré-contratuais e/ou obrigações contratuais (incluindo o planejamento e a organização diligentes dos Eventos e/ou Serviços/Produtos e a verificação da confiabilidade da empresa que solicita um visto de entrada nos Eventos) e/ou requisitos de lei, regulamento ou outra legislação (aplicável apenas em nível local ou transnacional, por exemplo, disposições da lei italiana que obrigam as Empresas Controladas a cooperar com o IEG na preparação das demonstrações financeiras consolidadas do Grupo).',
				],
			},
			{
				t: 'p',
				x: 'O titular dos dados é livre de não fornecer os seus dados, mas, neste caso, os seus pedidos pré-contratuais e/ou a celebração do contrato solicitado e/ou as obrigações legais ou regulamentares acima mencionadas não podem ser cumpridos.',
			},
			{
				t: 'p',
				x: 'No caso de um Evento ou Serviço/Produto entregue online, o titular dos dados é livre para não ativar as câmeras e/ou microfone do PC, mas, nesse caso, se sua imagem ou voz for necessária para aproveitar o Evento ou Serviço/Produto, não poderemos entregar o mesmo.',
			},
			{
				t: 'ul',
				x: [
					'Em relação às finalidades do sub 3 (pesquisas de mercado nominativas): o interesse legítimo do IEG em analisar e proteger a reputação do IEG, de suas Controladas, Eventos, Serviços e/ou Produtos entre as partes interessadas, e a qualidade percebida por elas, uma vez que maximizar sua satisfação também é um benefício para as partes interessadas. A parte interessada é livre de não fornecer os seus dados, mas, neste caso, as investigações especificadas não podem ser realizadas.',
					'Em relação à finalidade sub 4 (perfil básico): o interesse legítimo do IEG e/ou de suas Controladas em ter um perfil comercial mínimo da parte interessada útil para orientar ações para manter a relação comercial com o mesmo ao longo do tempo e, em particular, para verificar e otimizar a eficácia das comunicações promocionais e/ou ofertas de vendas de Eventos, Serviços e/ou Produtos, evitando conteúdos que não sejam relevantes para os mesmos.',
					'Em relação aos propósitos sub 5 (perfil avançado): consentimento específico prévio. A parte interessada é livre para não fornecer seus dados e não dar seu consentimento. Nesse caso, esse perfil avançado não pode ser realizado, mas não haverá outros efeitos legais (em particular, a possibilidade de o interessado participar dos Eventos e/ou usar os Serviços e/ou Produtos permanecerá intacta).',
					'Em relação às finalidades sub 6 (soft spam, também nos EUA e DUBAI): o interesse legítimo do IEG e/ou de suas Controladas em manter ativo, com frequência razoável ao longo do tempo, contato comercial com clientes e prospects, feito sem prejuízo do direito da parte interessada de se opor ao processamento para esse fim a qualquer momento.',
				],
			},
			{
				t: 'p',
				x: 'No caso de processamento por Empresas Controladas com sede no BRASIL, CHINA e CINGAPURA, o Controlador de Dados poderá processar para os fins abaixo 6 os dados do titular dos dados (exclusivamente visitante de Eventos de natureza B2C) apenas com base no consentimento prévio específico do titular dos dados.',
			},
			{
				t: 'ul',
				x: [
					'Em relação à finalidade sub 7 (marketing direto pelo IEG que não seja soft spam): consentimento prévio específico. O titular dos dados é livre para não fornecer seus dados e não dar seu consentimento, mas, neste caso, não será possível realizar tais atividades de marketing direto além do soft spam.',
					'Em relação às finalidades sub 8 a-b (transferência de dados para empresas parceiras ou para terceiros que não sejam as Sociedades Controladas; transferência de dados para plataformas de redes sociais para serviços “similares”): consentimento prévio e específico. A parte titular dos dados é livre de não dar o seu consentimento e, neste caso, a transferência para terceiros não pode ser realizada.',
					'Em relação às finalidades do sub 9 (segurança): o interesse legítimo do IEG e/ou de suas Controladas em garantir a segurança dos Eventos e Serviços.',
					'Em relação às finalidades sub 10 (finalidades diversas): o interesse legítimo do IEG e/ou de suas Controladas em realizar diligentemente as atividades a elas relacionadas, respectivamente.',
					'Em relação às finalidades sub 11 (gestão de dados de crédito pela Controlada, IEG EVENTS ARABIA LLC): o consentimento prévio específico. O titular dos dados é livre de não dar consentimento, caso em que a gestão dos dados de crédito não pode ter lugar.',
				],
			},
		],
	},
	{
		id: 'titularidade',
		title: 'Titularidade do tratamento',
		blocks: [
			{
				t: 'p',
				x: 'Com base nos regulamentos aplicáveis de tempos em tempos sobre o assunto, os controladores de dados são:',
			},
			{
				t: 'ul',
				x: [
					'para todos os fins estabelecidos nesta Política: IEG, em relação aos dados pessoais de partes interessadas (por exemplo, dados de clientes ou usuários de sites) processados por: IEG e/ou suas Sociedades Controladas sediadas na área do EEE; Sociedades controladas com sede fora da área do EEE, quando a função de Proprietário do IEG acima mencionada deriva das regras de aplicação extraterritorial contidos na legislação local aplicável de tempos em tempos no país das respectivas sedes das Sociedades Controladas fora do EEE;',
					'para os fins exclusivos sub 1, 2, 4, 6: cada Empresa Controlada (com sede no EEE ou fora do EEE), em relação aos dados processados por ela de acordo com os respectivos regulamentos locais aplicáveis; e',
					'para o único propósito sub 11: a Empresa Controlada IEG Events Arabia LLC.',
				],
			},
		],
	},
	{
		id: 'dpo',
		title: 'Encarregado de proteção de dados',
		blocks: [
			{
				t: 'ul',
				x: [
					'O DPO – Data Protection Officer do ITALIAN EXHIBITION GROUP SPA é Luca De Muri, domiciliado no mesmo.',
					'O DPO – Data Protection Officer da empresa controlada IEG ASIA PTE LDT. – 1, Praça Marítima # 09-56, Harbourfront Center – Cingapura 099253, é Ilaria Cicero, domiciliada no mesmo.',
				],
			},
		],
	},
	{
		id: 'representante-ue',
		title: 'Representante legal dentro da UE de empresas extra-UE',
		blocks: [
			{
				t: 'p',
				x: 'As empresas IEG CHINA Co. Ltd (empresa controlada na CHINA), IEG Events Arabia LLC (empresa controlada na Arábia Saudita) IEG ASIA PTE. LIMITED (Empresa Controlada em CINGAPURA), IEG EVENTS MIDDLE EAST LLC (Empresa Controlada em DUBAI), ITALIANA EXHIBITION GROUP USA INC. (controlada nos EUA) e ITALIAN EXHIBITION GROUP BRASIL EVENTOS LTDA (controlada no BRASIL), na qualidade de controladores de dados do tratamento não ocasional de dados pessoais para os fins sub 1, 2, 4, 6 e 11 (este último realizado apenas pela IEG Events Arabia LLC) no contexto da oferta de Serviços (incluindo Eventos organizados por eles) e/ou Produtos a partes interessadas com sede ou residência na UE, designaram o ITALIAN EXHIBITION GROUP SPA como seu respectivo representante na UE, de acordo com e para os fins do art. 27 do GDPR. Como tal, o ITALIAN EXHIBITION GROUP SPA, em substituição ou em adição aos designadores acima mencionados, mas sem prejuízo de sua responsabilidade, atua como interlocutor perante as Autoridades Supervisoras nacionais e perante as partes interessadas para qualquer questão relacionada a essas atividades de processamento, a fim de garantir o cumprimento do GDPR e facilitar o exercício de seus direitos sob o GDPR.',
			},
		],
	},
	{
		id: 'representante-extra-ue',
		title: 'Representante legal extra-UE de empresas da UE',
		blocks: [
			{
				t: 'p',
				x: 'ITALIAN EXHIBITION GROUP SPA, na qualidade de controlador de dados pessoais no contexto da oferta de Serviços (incluindo Eventos organizados pelo mesmo) e/ou Produtos a interessados sediados ou residentes na China, designou a IEG CHINA Co. Ltd (Empresa Controlada na CHINA) como seu representante na China, de acordo com e para os fins do art. 53 da Lei de Proteção de Dados Pessoais da China (PIPL). Nessa qualidade, a IEG CHINA Co. Ltd atua como interlocutora junto às autoridades supervisoras nacionais chinesas e às partes interessadas em qualquer questão relacionada às atividades de processamento acima mencionadas.',
			},
		],
	},
	{
		id: 'comunicacao',
		title: 'Comunicação e divulgação de dados',
		blocks: [
			{
				t: 'p',
				x: 'Os dados são compartilhados com o pessoal do IEG e/ou suas Controladas autorizadas a processar os dados (exemplo de equipes Financeiras, de Comunicação, Viagens, Vendas, Marketing, Jurídica, etc.).',
			},
			{
				t: 'p',
				x: 'Os dados são comunicados para os fins sub 1, 2, 3 pelo IEG e para os fins sub 1, 2 e 7 pelas Empresas Controladas e para os fins sub 11 pela Empresa Controlada IEG Events Arabia LLC. Para:',
			},
			{
				t: 'ul',
				x: [
					'prestadores de serviços de hospedagem, desenvolvimento, gerenciamento, manutenção, recuperação de desastres e segurança cibernética em relação aos sistemas de TI (serviços, sites e bancos de dados) do IEG e/ou de suas Controladas; prestadores de serviços de pesquisa;',
					'outros fornecedores ativados para a organização e gestão dos Eventos e/ou Serviços e/ou Produtos (por exemplo, fornecedores de materiais e produtos; fornecedores de serviços: design, planeamento técnico e montagem, emissão de bilhetes, secretariado organizacional, envelopamento e envio de correspondência, design, impressão e manutenção de materiais editoriais, publicitários ou promocionais, logística, segurança, primeiros socorros, pagamento eletrónico, banca, seguros e materiais financeiros, informações sobre a reputação e reputação corporativa, hotelaria, restauração, transporte de passageiros, traduções linguísticas, plataformas de negócios, hotelaria, emissão de títulos, acreditações, bilhetes e passes de entrada para Eventos e Serviços e/ou Produtos, help desk de eventos, serviços de correio, transportadora e expedição, publicidade, relações com a mídia e comunicação, marketing direto, web marketing, análise de marketing, CRM – Customer Relationship Management, gestão da conformidade, comunicação electrónica, por exemplo, telefone ou telemática),',
					'parceiros terceiros que realizem atividades funcionais ou complementares à promoção dos Eventos e/ou à compra de Serviços e Produtos, por exemplo, órgãos privados e públicos, outros órgãos de feiras e/ou organizadores de eventos, associações comerciais, com as quais o IEG e/ou as Controladas ativem ações de co-marketing para Eventos,',
					'jornalistas, jornais e representantes de outros organismos de comunicação,',
					'agentes, conselheiros regionais,',
					'escritórios de advocacia e notários,',
					'órgãos de controle e supervisão, em particular, por exemplo, empresas de auditoria e auditores, revisores oficiais de contas, especialistas em contabilidade, DPO – Data Protection Officers, membros de órgãos de supervisão sobre os modelos organizacionais do IEG e/ou das empresas do Grupo destinadas a prevenir a prática de certas categorias de crimes, auditores e membros de conselhos de auditoria,',
					'empresas e empresas de cobrança de dívidas,',
					'empresas e profissionais de computação forense no caso de investigações técnicas e jurídicas relacionadas a suspeitas de crimes ou outros delitos cometidos em detrimento do IEG, das demais Controladas e/ou de terceiros,',
					'outros consultores e profissionais,',
					'autoridades públicas às quais a comunicação é necessária por força de lei, regulamento ou outra legislação (por exemplo, representações diplomáticas e consulares, Quartéis-Generais da Polícia, Prefeitura, Polícia, outras Autoridades de Segurança Pública, Agência de Receitas, Polícia Financeira e similares),',
					'IEG (neste caso, os dados são comunicados apenas pelas Empresas Controladas),',
					'Empresas Controladas (neste caso, os dados são comunicados apenas pelo IEG e a critério do IEG).',
				],
			},
			{
				t: 'p',
				x: 'Os dados de identificação e contacto e os dados dos produtos dos visitantes e compradores poderão ser comunicados aos expositores (por exemplo, através de pesquisa e/ou pedido de reuniões e/ou funções de contacto disponíveis em plataformas digitais ou através de QR Code ou Código de Barras), e quaisquer mensagens espontâneas dos próprios interessados.',
			},
			{
				t: 'p',
				x: 'Os dados de identificação, dados de contacto e de produtos dos expositores e quaisquer mensagens espontâneas dos mesmos podem ser comunicados aos visitantes/compradores (por exemplo, através de pesquisa e/ou pedido de reunião e/ou funcionalidades de contacto disponíveis em plataformas digitais, através de QR Codes ou Códigos de Barras, ou através de catálogos de eventos).',
			},
			{
				t: 'p',
				x: 'Os dados são comunicados, conforme apropriado, pelo IEG para os fins sub 4 a 7 e/ou pelas Sociedades controladas para os fins exclusivos sub 4 e 6 para:',
			},
			{
				t: 'ul',
				x: [
					'prestadores de serviços de análise de marketing, agências de comunicação e/ou relações públicas,',
					'provedores de serviços de compra de espaço publicitário na Internet;',
					'fornecedores de materiais publicitários ou promocionais (por exemplo, agências gráficas e criativas em geral),',
					'empresas de produção e gestão de sites ou blogs, empresas de marketing na web,',
					'provedores de serviços de gerenciamento de páginas de destino,',
					'provedores de serviços de modelo de linguagem de grande porte que suportam a análise de dados para fins de criação de perfil e marketing sem compartilhamento público dos dados processados.',
				],
			},
			{
				t: 'p',
				x: 'Se o terceiro acima mencionado processar os dados em nome e com base em diretrizes escritas do IEG e/ou das Empresas Controladas remetentes, eles serão designados como Processadores de Dados Externos de acordo com e para os fins do artigo 28 do GDPR.',
			},
			{
				t: 'p',
				x: 'As Sociedades Controladas para os fins dos parágrafos 4 e 6 também comunicam os dados à Controladora IEG (consulte também o capítulo seguinte “Transferência de dados para o exterior”).',
			},
			{ t: 'p', x: 'O IEG e as demais Controladas se abstêm de qualquer divulgação de dados.' },
			{
				t: 'p',
				x: 'Os dados dos expositores serão divulgados, apenas mediante solicitação, através do catálogo da exposição relativo aos Eventos, tanto em papel como online.',
			},
		],
	},
	{
		id: 'transferencia',
		title: 'Transferência de dados para o exterior',
		blocks: [
			{
				t: 'p',
				x: 'Os dados são transferidos pelo IEG e/ou suas Empresas Controladas sediadas na UE para as seguintes categorias de destinatários terceirizados sediados fora da UE (doravante denominados “importadores“):',
			},
			{
				t: 'ul',
				x: [
					'Empresas controladas e/ou seus fornecedores, com sede fora da UE (China, Cingapura, EUA, Emirados Árabes Unidos, Brasil), na medida do necessário para a execução contratual e/ou cumprimento de obrigações legais ou regulatórias, por exemplo, quando o IEG ou as demais Sociedades Controladas, sediadas na UE, transferem os dados como agentes no interesse da Controlada estrangeira;',
					'prestadores de serviços online para: coleta de dados por meio de formulários de texto que podem ser preenchidos pela parte interessada e contidos nas páginas de destino fornecidas pelo Controlador de Dados; plataformas sociais (EUA) nas quais as páginas sociais e/ou perfis do IEG e/ou das Empresas do Grupo estão ativos (para mais informações sobre o regime de copropriedade aplicável neste caso específico às partes envolvidas, consulte a seção “propriedade conjunta” na Política de Cookies), e/ou para as quais o IEG comunica dados em relação aos serviços “semelhantes” assinados com eles; gerenciamento de login por meio da conta social do LinkedIn do usuário; análise do tráfego gerado pelos usuários dos sites do IEG e/ou de outras empresas do Grupo (EUA); serviços de pagamento eletrônico; CRM – Customer Relationship Management.',
				],
			},
			{
				t: 'p',
				x: 'As Políticas de Privacidade de Provedores de serviços online fora da UE podem ser encontradas no link indicado pelo respectivo provedor.',
			},
			{ t: 'p', x: 'Esta transferência de dados ocorrerá contra garantias adequadas, tais como:' },
			{
				t: 'ul',
				x: [
					'No caso de transferência para os EUA: a Decisão de Adequação da Comissão da UE de 10 de julho de 2023 relativa à legislação americana sobre proteção de dados pessoais conforme alterada pela convenção bilateral UE-EUA. “Quadro Transatlântico de Proteção de Dados”.',
					'No caso de transferência para o Canadá (ativo apenas para provedores de serviços de gerenciamento de páginas de destino): a Decisão de Adequação da Comissão da UE de 15 de janeiro de 2024 relativa à legislação canadense sobre proteção de dados pessoais, em particular a Lei de Proteção de Informações Pessoais e Documentos Eletrônicos (PIPEDA);',
					'No caso de transferência para países não pertencentes à UE que não sejam EUA e Canadá: a partir da estipulação prévia pelo IEG e/ou suas Controladas sediadas na UE, para o terceiro importador, de cláusulas contratuais padrão – ou as chamadas “CCS” – em conformidade com pelo menos o texto aprovado pela Comissão da UE (exceto quaisquer adições e/ou modificações mais favoráveis à parte interessada) por meio das quais, para o tratamento no âmbito da sua competência, o importador de dados compromete-se a cumprir obrigações de privacidade substancialmente equivalentes às previstas na legislação pertinente da UE.',
				],
			},
			{
				t: 'p',
				x: 'Os dados também são transferidos pelas Empresas Controladas sediadas fora da UE, dentro dos limites necessários para os fins sub 1, 2, 4, 6, 7 e 11, para o IEG, bem como para os seguintes destinatários terceiros sediados fora do país das mesmas Empresas Controladas (doravante os “importadores“):',
			},
			{
				t: 'ul',
				x: [
					'agentes;',
					'fornecedores de Produtos e/ou Serviços funcionais às atividades e/ou Eventos relativos às Sociedades Controladas estrangeiras;',
					'provedores de plataformas de redes sociais (EUA) nas quais as páginas sociais e/ou perfis de empresas do Grupo com sede fora da UE estão ativos (para obter mais informações sobre o regime de propriedade conjunta aplicável neste caso específico às partes envolvidas, consulte a seção “propriedade conjunta” em nossa Política de Cookies).',
				],
			},
			{
				t: 'p',
				x: 'Esta transferência de dados, no caso de ser realizada por empresas não controladas pela UE para o IEG ou para o sujeito não pertencente à UE, ocorrerá com base em garantias adequadas, consistindo na estipulação, entre as partes envolvidas na transferência, de contratos-tipo ou cláusulas contratuais-tipo, em conformidade, no mínimo, com os textos aprovados pelas Autoridades Administrativas competentes do país em que a pessoa física controlada no exterior está sediada (exceto quaisquer acréscimos e/ou modificações mais favoráveis ao interessado).',
			},
			{
				t: 'p',
				x: 'Através destes contratos e/ou cláusulas, o IEG e/ou os diferentes importadores dos dados comprometem-se a cumprir obrigações de proteção e tratamento de dados pessoais transferidos substancialmente equivalentes às previstas pela legislação comunitária aplicável.',
			},
			{
				t: 'p',
				x: 'Os dados também são transferidos pelas Empresas Controladas, com sede na UE, para os fins sub 1, 2, 4, 6 e 7 para o IEG sem a necessidade de garantias particulares e adequadas, pois todo o escopo do processamento parece estar adequadamente coberto pelo GDPR.',
			},
		],
	},
	{
		id: 'duracao',
		title: 'Duração do tratamento',
		blocks: [
			{
				t: 'p',
				x: 'Os dados são armazenados por períodos máximos de tempo (retenção) que dependem da finalidade do tratamento, após os quais os dados são eliminados ou tornados anónimos, da seguinte forma:',
			},
			{
				t: 'ul',
				x: [
					'Finalidade sub 1 (proteção de ativos de informação): por um período indefinido, exceto conforme disposto neste documento. Dados processados para logs de continuidade de negócios e segurança de TI (por exemplo, dados de login, logs de falha e logout, logs de anomalias suspeitas, etc.): são retidos por 1 ano a partir da data de coleta, exceto por qualquer prazo inferior previsto pelos procedimentos internos do Controlador de Dados.',
					'Finalidade sub 2 – necessidades pré-contratuais (se o interessado for um lead, ou seja, um potencial cliente que não efetuou quaisquer compras e não manifestou interesse nos Eventos, Serviços e/ou Produtos): 2 anos a contar da data de recolha dos dados (a menos que o tratamento posterior determine uma manifestação de interesse nos Eventos, Serviços e/ou Produtos, caso em que o tratamento terá a duração prevista no parágrafo seguinte);',
					'Finalidade sub 2 – necessidades pré-contratuais (se o interessado for um prospect, ou seja, um potencial cliente que não fez nenhuma compra, mas manifestou interesse em Eventos, Serviços e/ou Produtos): 10 anos a partir da coleta dos dados do interessado (a menos que esta atividade não implique a estipulação de um contrato, caso em que o tratamento terá a duração descrita no parágrafo seguinte);',
					'Finalidade sub 2 – execução do contrato (se o interessado for um cliente): por toda a duração da relação comercial e por 10 anos a partir da data de rescisão do contrato; sujeito aos prazos mais curtos abaixo em relação a categorias específicas de dados:',
				],
			},
			{
				t: 'ul',
				x: [
					'dados relacionados com a elaboração de cartas-convite para o pedido de vistos consulares (por exemplo, cópia do passaporte, etc.): 6 meses a partir do final do Evento a que se referem.',
					'dados de pedidos de assistência comunicados nos pontos de recolha (incluindo balcão de seguros, ponto de informação e sala de emergência) por visitantes e expositores durante os Eventos: 60 dias após o término de cada Evento; no caso de reclamações apresentadas pelo interessado em relação aos Eventos (por exemplo, pedidos de compensação), os dados poderão ser processados posteriormente, conforme melhor previsto no parágrafo “Em caso de litígio”.',
					'dados contidos no catálogo promocional dos Eventos: para 2 edições do catálogo.',
					'dados relacionados ao serviço “Business Matching” fornecido durante os Eventos: 3 meses a partir do final do Evento individual.',
					'produtos editoriais: 5 anos a partir da publicação (NB: após a venda do Produto que contém os dados, o Controlador de Dados não controla sua posterior circulação).',
				],
			},
			{
				t: 'ul',
				x: [
					'Finalidade sub 2 – cumprimento de obrigações legais e regulamentares: 10 anos a contar da data de estipulação do contrato (no caso de clientes) ou da recolha dos dados do interessado (no caso de prospects); são reservados os seguintes prazos mais curtos em relação a categorias específicas de dados: dados de certificação do evento: até ao final da certificação e, portanto, até à realização da certificação;',
					'Finalidade sub 3 (pesquisas nominativas): 2 anos a partir da coleta dos dados do interessado (no caso de clientes e prospects);',
					'Finalidade sub 4 (perfil básico): 2 anos a partir da coleta dos dados da parte interessada (no caso de clientes e prospects);',
					'Finalidade sub 5 (perfil avançado): 2 anos a partir da coleta dos dados da parte interessada (no caso de clientes e prospects);',
					'Finalidade sub 6 (soft spam): até eventual oposição do interessado.',
					'Finalidade sub 7 (marketing direto) para leads, clientes e prospects: 10 anos a partir da data da coleta de dados ou até a data da revogação do consentimento pelo interessado, se tal revogação ocorrer antes do prazo;',
					'Finalidade sub 11 (gerenciamento de dados de crédito operado pela IEG Events Arabia LLC): 2 anos a partir da data da coleta de dados.',
				],
			},
			{
				t: 'p',
				x: 'Em caso de litígio extrajudicial ou judicial, em relação à parte interessada e/ou a terceiros (por exemplo, pessoas lesadas durante os Eventos devido às atividades do Controlador de Dados, da parte interessada e/ou de terceiros), os dados são processados pelo tempo necessário para exercer a proteção dos direitos do Controlador de Dados (em regra, até ao 6.º ano civil seguinte ao ano da plena execução de uma disposição transitada em julgado ou de resolução amigável entre as partes em litígio).',
			},
		],
	},
	{
		id: 'meios',
		title: 'Meios de tratamento',
		blocks: [
			{
				t: 'p',
				x: 'O IEG, também por meio de suas Controladas e/ou fornecedores terceirizados por elas delegados, coleta dados por meio de:',
			},
			{
				t: 'ul',
				x: [
					'sites do Grupo IEG cujas páginas eletrônicas o interessado navega;',
					'formulários online ou em papel ou aplicativos de pré-registro ou participação preenchidos pela parte interessada durante ou em relação aos Eventos e/ou Serviços e/ou Produtos,',
					'QR Code ou Código de Barras exibido e escaneado nas entradas dos Eventos ou durante a participação nos mesmos,',
					'cartões de visita entregues espontaneamente pelo interessado,',
					'aplicativos (papel ou online) para o interessado participar dos Eventos, Serviços e/ou Produtos,',
					'contratos estipulados com a parte interessada,',
					'pedidos de orçamento e/ou informações enviados pela parte interessada (por exemplo, formulários em linha),',
					'plataformas online para a gestão de pedidos de contacto/reuniões de negócios e para a troca de informações entre expositores, visitantes e/ou compradores (e.g. textos, vídeos, apresentações, secções ao vivo; insights e itinerários sobre tendências e inovação, visitas turísticas, partilha e comunicação de eventos e/ou outros conteúdos digitais; partilha de comentários públicos relativos aos conteúdos acima partilhados, troca de mensagens).',
				],
			},
			{ t: 'p', x: 'O IEG também coleta dados de empresas controladas como parte de trocas de informações intragrupo.' },
			{
				t: 'p',
				x: 'Os dados são processados por pessoal autorizado e treinado pelo IEG e/ou suas Empresas Controladas, dentro dos limites estritamente necessários para a execução de suas respectivas tarefas (por exemplo, jurídicas, comerciais, de marketing, administrativas, logísticas, TI, controle de gestão, etc.), usando ferramentas eletrônicas e em papel e com lógica estritamente conectada aos propósitos individuais, conforme respectivamente previsto acima.',
			},
		],
	},
	{
		id: 'seguranca',
		title: 'Medidas de segurança',
		blocks: [
			{
				t: 'p',
				x: 'Medidas de segurança técnicas e organizacionais são aplicadas ao processamento dos dados pessoais da parte interessada para garantir sua integridade, segurança e disponibilidade. Por razões de segurança, nem todas as informações relevantes são disponibilizadas aqui. As medidas podem variar dependendo da empresa do Grupo. Os principais tipos de medidas aplicadas são os seguintes:',
			},
			{ t: 'h', x: 'Procedimentos de gerenciamento de ativos de TI' },
			{
				t: 'ul',
				x: ['Firewall', 'Antivírus', 'Antispam', 'DMZ – Zona Desmilitarizada', 'Armazenamento redundante'],
			},
			{ t: 'h', x: 'Procedimentos de gerenciamento de identidade e acesso' },
			{
				t: 'ul',
				x: [
					'Credenciais de autenticação exclusivas para acesso a dados; 2FA e VPN para acesso remoto',
					'Limitação do acesso aos dados apenas ao pessoal interno, previamente designado por escrito, autorizado e treinado pelo Controlador de Dados',
					'Perfis de autorização gerenciados por meio do Active Directory e/ou do Azure Directory (ID de Entrada) limitados de acordo com o princípio “necessário usar, necessário saber”.',
					'Obrigações de confidencialidade por escrito',
					'Treinamento de pessoal',
					'Nomeação de gerentes externos que realizam o processamento terceirizado em nome dos Controladores de Dados',
				],
			},
			{ t: 'h', x: 'Outras medidas' },
			{
				t: 'ul',
				x: [
					'VLAN – Rede Local Virtual',
					'Backup diário',
					'Recuperação de desastres',
					'Procedimentos de gerenciamento de patches',
					'Procedimento de Gerenciamento de Incidentes e Procedimento de Violação de Dados',
					'Sistemas IDS (Sistema de Detecção de Intrusão), IPS (Sistema de Prevenção de Intrusão), EDR (Detecção e Resposta de Endpoint), DLP (Prevenção de Perda de Dados)',
					'SIEM – Gerenciamento de Informações e Eventos de Segurança',
					'SOC – Centro de Operações de Segurança',
					'Conexões por protocolo HTTP seguro (HTTPS) com criptografia de 2048 bits e protocolo TLS v1.x (conformidade com PCI DSS)',
					'Avaliação periódica de vulnerabilidade e teste de penetração',
					'Auditorias periódicas.',
				],
			},
			{
				t: 'p',
				x: 'O uso de programas de software ‘bot’ (ou seja, automatizados) viola nossos Termos de Uso de nossos sites. O IEG e suas Controladas reservam-se, portanto, todos os direitos de indenização por danos resultantes de tal comportamento e o direito de suspender o acesso aos serviços de qualquer pessoa que viole esta proibição.',
			},
			{
				t: 'p',
				x: 'Reservamo-nos o direito de realizar verificações de segurança (e.g. log análise) a qualquer momento para validar sua identidade, os dados de registro fornecidos por você e verificar seu uso correto de nossos serviços online, bem como para verificar possíveis violações das Condições de Uso de nossos sites e/ou da lei aplicável a eles.',
			},
		],
	},
	{
		id: 'direitos',
		title: 'Direitos da parte interessada',
		blocks: [
			{
				t: 'p',
				x: 'As partes interessadas, usando os dados de contato do Controlador de Dados (visíveis na Tabela de Empresas do Grupo IEG), podem exercer os seguintes direitos, previstos pelo GDPR e/ou pela legislação local diferente aplicável de tempos em tempos no país não pertencente à UE relevante em relação ao processamento de dados:',
			},
			{
				t: 'ul',
				x: [
					'Acesso aos seus dados pessoais processados pelo Controlador de Dados,',
					'Retificação ou integração de dados inexatos ou incompletos,',
					'Exclusão de dados obsoletos, quando o Controlador de Dados não o tiver feito de forma independente, nos casos em que (i) eles não são mais necessários para fins de processamento de dados, (ii) a parte interessada revogou seu consentimento para o processamento de dados quando tal consentimento é exigido por lei, (iii) a parte interessada se opôs ao processamento dos dados, (iv) o processamento de dados pessoais é ilegal, (v) os dados pessoais devem ser apagados para cumprir uma obrigação legal a cargo do Proprietário. Cada Controlador de Dados compromete-se a tomar todas as medidas razoáveis para informar as outras empresas do Grupo IEG sobre o cancelamento.',
					'Limitação do processamento de dados pessoais, se (i) a exatidão dos dados pessoais da parte interessada for contestada, para permitir que o Controlador de Dados realize as verificações necessárias, (ii) a parte interessada pretende limitar seus dados pessoais em vez de excluí-los, embora o processamento seja ilegal, (iii) a parte interessada deseja que o Controlador de Dados retenha os dados pessoais conforme considerado necessário para se defender em ações legais, (iv) a parte interessada se opôs ao processamento, mas o Controlador de Dados deve realizar verificações para verificar a existência de motivos legítimos para o processamento que prevalecem sobre os direitos do titular dos dados.',
					'Portabilidade de dados (ou seja, obter uma cópia em formato legível por máquina dos dados fornecidos pela parte interessada ao Controlador de Dados, ou para que essa cópia seja comunicada a outro controlador de dados indicado pela parte interessada, quando os dados se referirem a um contrato existente entre o interessado e o primeiro Controlador de Dados e o mesmo são processados usando software) dentro dos limites estabelecidos pela legislação aplicável.',
					'Oposição ao tratamento realizado com base num interesse legítimo do Responsável pelo Tratamento.',
					'Direito de não ficar sujeito a um processo automatizado de tomada de decisão que produza efeitos jurídicos que digam respeito ou afetem significativamente a parte interessada e se opor ao resultado de qualquer decisão automatizada do Controlador de Dados relacionada ao processamento dos dados pessoais da parte interessada. A tomada de decisão automatizada ocorre quando as decisões são tomadas usando meios tecnológicos sem envolvimento humano. Este direito não existe quando a decisão automatizada i) é necessária para a celebração ou execução de um contrato entre a parte interessada e um controlador de dados, ou ii) é autorizada pela lei da UE ou do Estado-Membro da UE ao qual o Controlador de Dados está sujeito, que nesse caso também especifica medidas apropriadas para proteger os direitos, liberdades e interesses legítimos do titular dos dados, ou iii) se baseie no consentimento explícito do interessado.',
					'Revogação do consentimento quando o consentimento por lei for a base legal do tratamento (sem prejuízo da licitude do tratamento efetuado até ao momento da revogação).',
					'(quando o GDPR é aplicável) Direito de reclamar à Autoridade Supervisora competente; na Itália, é a Autoridade Italiana de Proteção de Dados (Garante per la protezione dei dati personali) – Piazza Venezia 11 – IT-00187 – Roma), tel. (+39) 06.69677.1, e-mail: rpd@gpdp.it.',
					'(quando aplicável legislação sobre a proteção de dados pessoais que não seja o GDPR) Direito de reclamar, tomar medidas legais e/ou resolução alternativa de disputas, fornecido de tempos em tempos pela legislação estrangeira aplicável (por exemplo, no Estado de Nova Jersey, direito de apelar contra qualquer rejeição de uma solicitação para exercer os direitos previstos pela Lei de Privacidade de Dados de Nova Jersey, num prazo razoável após a comunicação da rejeição e de forma semelhante à do processo de comunicação do primeiro pedido; a resposta do Proprietário deve ser comunicada no prazo de 60 dias; caso o Proprietário rejeite o recurso, o consumidor pode registrar uma reclamação na Divisão de Assuntos do Consumidor de Nova Jersey no Departamento de Direito e Segurança Pública (ver https://njconsumeraffairs.gov/).',
					'Direito de solicitar: ao IEG e/ou às Empresas Controladas sediadas no espaço da UE, bem como às Empresas Controladas sediadas em DUBAI, ARÁBIA SAUDITA, CINGAPURA e/ou EUA, uma lista de nomes dos terceiros destinatários dos dados designados como controladores de dados externos (consulte também o capítulo “Comunicação e divulgação de dados” desta Política), e para as Empresas Controladas com sede na CHINA e no BRASIL, uma lista de nomes de todos os terceiros destinatários dos dados (Gerentes Externos e Controladores de Dados).',
				],
			},
			{ t: 'h', x: 'Como obter mais informações sobre seus direitos' },
			{
				t: 'ul',
				x: [
					'se o interessado residir ou estiver sediado na área do EEE, ou em qualquer caso está sujeito a tratamento de dados pessoais regulado pelo RGPD, deve consultar para mais detalhes os artigos 15.º a 22.º e 77.º do Regulamento de Privacidade da UE n.º 679/2016 (“RGPD”), disponíveis em: https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679#d1e2800-1-1;',
					'se o interessado residir ou estiver sediado na China, ou estiver em qualquer caso sujeito a tratamento regulamentado pela legislação chinesa para a proteção de dados pessoais, deverá consultar para mais detalhes os artigos 44 a 50 do capítulo IV da Lei de Proteção de Dados Pessoais da República da China (PIPL), disponível em: http://en.npc.gov.cn.cdurl.cn/2021-12/29/c_694559.htm;',
					'se o interessado residir ou estiver sediado em Dubai, ou em qualquer caso estiver sujeito a processamento regulamentado pela legislação árabe para a proteção de dados pessoais, para mais detalhes deverá consultar – os Emirados Árabes Unidos – ‘O Guia para Acessar Informações Governamentais’ e a Lei nº 26 de 2015 sobre a Organização da Publicação e Compartilhamento de Dados de Dubai, também conhecida como Lei nº 26 de 2015 que Regula a Disseminação e Troca de Dados; e a Lei de Proteção de Dados Pessoais, Decreto-Lei Federal nº 45 de 2021 sobre a Proteção de Dados Pessoais) em: https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws;',
					'caso o interessado resida ou esteja sediado no Brasil, ou em qualquer caso esteja sujeito a tratamento regulado pela legislação brasileira de proteção de dados pessoais, deverá consultar os artigos 17 a 22 do capítulo III da Lei Geral de Proteção de Dados Pessoais (LGPD), em: https://lgpd-brazil.info;',
					'se o interessado residir ou estiver sediado em Cingapura ou estiver em qualquer caso sujeito a processamento regulamentado pela legislação de Cingapura para a proteção de dados pessoais, ele deve consultar os artigos 5.1 a 5.2 do capítulo V da “Lei de Proteção de Dados Pessoais de 2012 (“PDPA”)” disponível em: https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act;',
					'se o titular dos dados residir ou estiver sediado nos EUA, ou está em qualquer caso sujeito a processamento regulamentado pela legislação americana para a proteção de dados pessoais, ele pode consultar as informações disponíveis em: https://www.whitecase.com/insight-our-thinking/us-data-privacy-guide e, em relação ao tratamento de dados pessoais relativos a sujeitos qualificados como consumidores (ou seja, atuando em contexto individual ou familiar) realizado pela nossa Empresa Controlada com sede no Estado de Nova Jersey (EUA), a Lei de Privacidade de Dados de Nova Jersey visível em: https://pub.njleg.state.nj.us/Bills/2022/S0500/332_R6.PDF;',
					'se o titular dos dados residir ou estiver sediado na Arábia Saudita, ou estiver sujeito a processamento regido pela legislação de proteção de dados da Arábia Saudita, deve consultar: https://sdaia.gov.sa/en/Research/Pages/DataProtection.aspx',
				],
			},
		],
	},
	{
		id: 'alteracoes',
		title: 'Alterações à Política de Privacidade',
		blocks: [
			{
				t: 'p',
				x: 'A política pode ser modificada ao longo do tempo para refletir as alterações feitas no processamento de dados pessoais e/ou para se adaptar a quaisquer requisitos regulamentares que possam surgir.',
			},
			{
				t: 'p',
				x: 'As Informações atualizadas serão comunicadas à parte interessada conforme exigido por lei e com métodos adequados (por exemplo, por publicação no(s) Site(s) do IEG e/ou de suas Empresas Controladas, ou uma mensagem de e-mail ou inserção em áreas online reservadas aos usuários).',
			},
		],
	},
];

/* ---------- versões por idioma (en/es/it: rascunho, TODO: revisão jurídica) ---------- */
import * as en from './privacy-policy.en';
import * as es from './privacy-policy.es';
import * as it from './privacy-policy.it';

export interface PolicyContent {
	title: string;
	summary: string;
	hero: [string, string];
	pageTitle: string;
	description: string;
	sections: Section[];
}

export const policy: Record<'pt' | 'en' | 'es' | 'it', PolicyContent> = {
	pt: {
		title: TITLE,
		summary: 'Resumo',
		hero: ['Política de', 'Privacidade'],
		pageTitle: 'Política de Privacidade — FESQUA',
		description:
			'Política de Privacidade do Italian Exhibition Group S.p.A. e das empresas controladas: como tratamos os dados pessoais, finalidades, bases legais, retenção e direitos do titular.',
		sections,
	},
	// TODO: revisão jurídica
	en: {
		title: en.TITLE,
		summary: en.SUMMARY,
		hero: en.HERO as [string, string],
		pageTitle: 'Privacy Policy — FESQUA',
		description:
			'Privacy Policy of Italian Exhibition Group S.p.A. and its subsidiaries: how we process personal data, purposes, legal bases, retention and data subject rights.',
		sections: en.sections,
	},
	// TODO: revisão jurídica
	es: {
		title: es.TITLE,
		summary: es.SUMMARY,
		hero: es.HERO as [string, string],
		pageTitle: 'Política de Privacidad — FESQUA',
		description:
			'Política de Privacidad de Italian Exhibition Group S.p.A. y de las sociedades controladas: cómo tratamos los datos personales, finalidades, bases jurídicas, conservación y derechos del interesado.',
		sections: es.sections,
	},
	// TODO: revisão jurídica
	it: {
		title: it.TITLE,
		summary: it.SUMMARY,
		hero: it.HERO as [string, string],
		pageTitle: 'Informativa sulla Privacy — FESQUA',
		description:
			'Informativa sulla Privacy di Italian Exhibition Group S.p.A. e delle società controllate: come trattiamo i dati personali, finalità, basi giuridiche, conservazione e diritti dell’interessato.',
		sections: it.sections,
	},
};
