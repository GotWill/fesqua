/**
 * Schema do formulário de contato, compartilhado pelo NAVEGADOR (validação antes de enviar)
 * e pelo SERVIDOR (a action usa este mesmo schema em `input`).
 *
 * ⚠ Este arquivo vai para o navegador: não importe aqui nada de servidor (Resend, astro:env, astro:actions).
 */
import { z } from 'astro/zod';
import type { Lang } from '../i18n/routes';

// valor do <select> -> rótulo mostrado no e-mail
export const DEPARTMENTS = {
	comercial: 'Comercial',
	operacional: 'Operacional',
	marketing: 'Marketing',
	financeiro: 'Financeiro',
	outros: 'Outros',
} as const;

// Mensagens de validação por idioma (o servidor usa pt; o navegador usa o idioma da página).
const MESSAGES = {
	pt: {
		name: ['Informe seu nome.', 'O nome deve ter pelo menos 2 letras.', 'O nome deve ter no máximo 100 caracteres.'],
		company: ['Informe o nome da empresa.', 'O nome da empresa deve ter pelo menos 2 letras.', 'O nome da empresa deve ter no máximo 120 caracteres.'],
		phone: ['Informe seu telefone.', 'Informe um telefone com DDD, ex.: (11) 99999-9999.'],
		email: ['Informe seu e-mail.', 'O e-mail deve ter no máximo 254 caracteres.', 'Informe um e-mail válido.'],
		departament: ['Selecione o departamento.', 'Selecione um departamento válido.'],
		message: ['Escreva sua mensagem.', 'A mensagem deve ter pelo menos 10 caracteres.', 'A mensagem deve ter no máximo 2000 caracteres.'],
	},
	en: {
		name: ['Enter your name.', 'The name must have at least 2 letters.', 'The name must have at most 100 characters.'],
		company: ['Enter your company name.', 'The company name must have at least 2 letters.', 'The company name must have at most 120 characters.'],
		phone: ['Enter your phone number.', 'Enter a phone number with area code, e.g. (11) 99999-9999.'],
		email: ['Enter your email.', 'The email must have at most 254 characters.', 'Enter a valid email.'],
		departament: ['Select a department.', 'Select a valid department.'],
		message: ['Write your message.', 'The message must have at least 10 characters.', 'The message must have at most 2000 characters.'],
	},
	es: {
		name: ['Indique su nombre.', 'El nombre debe tener al menos 2 letras.', 'El nombre debe tener como máximo 100 caracteres.'],
		company: ['Indique el nombre de la empresa.', 'El nombre de la empresa debe tener al menos 2 letras.', 'El nombre de la empresa debe tener como máximo 120 caracteres.'],
		phone: ['Indique su teléfono.', 'Indique un teléfono con prefijo, ej.: (11) 99999-9999.'],
		email: ['Indique su correo electrónico.', 'El correo electrónico debe tener como máximo 254 caracteres.', 'Indique un correo electrónico válido.'],
		departament: ['Seleccione el departamento.', 'Seleccione un departamento válido.'],
		message: ['Escriba su mensaje.', 'El mensaje debe tener al menos 10 caracteres.', 'El mensaje debe tener como máximo 2000 caracteres.'],
	},
	it: {
		name: ['Inserisci il tuo nome.', 'Il nome deve avere almeno 2 lettere.', 'Il nome deve avere al massimo 100 caratteri.'],
		company: ['Inserisci il nome dell’azienda.', 'Il nome dell’azienda deve avere almeno 2 lettere.', 'Il nome dell’azienda deve avere al massimo 120 caratteri.'],
		phone: ['Inserisci il tuo telefono.', 'Inserisci un telefono con prefisso, es.: (11) 99999-9999.'],
		email: ['Inserisci la tua e-mail.', 'L’e-mail deve avere al massimo 254 caratteri.', 'Inserisci un’e-mail valida.'],
		departament: ['Seleziona il reparto.', 'Seleziona un reparto valido.'],
		message: ['Scrivi il tuo messaggio.', 'Il messaggio deve avere almeno 10 caratteri.', 'Il messaggio deve avere al massimo 2000 caratteri.'],
	},
} as const;

// Campo vazio chega como `null` no servidor (FormData das actions) e como "" no navegador: os dois viram "".
const clean = (v: unknown) => (typeof v === 'string' ? v.trim() : v == null ? '' : v);

const text = (min: number, max: number, required: string, short: string, long: string) =>
	z.preprocess(clean, z.string().min(1, required).min(min, short).max(max, long));

const isPhone = (v: string) => {
	const digits = v.replace(/\D/g, '');
	return digits.length >= 10 && digits.length <= 13; // DDD + número (aceita +55)
};

/** Schema com mensagens no idioma. `lang` (hidden do formulário) é opcional e só informa o idioma de origem. */
export function makeContactSchema(lang: Lang = 'pt') {
	const m = MESSAGES[lang] ?? MESSAGES.pt;
	return z.object({
		name: text(2, 100, m.name[0], m.name[1], m.name[2]),
		company: text(2, 120, m.company[0], m.company[1], m.company[2]),
		phone: z.preprocess(clean, z.string().min(1, m.phone[0]).refine(isPhone, m.phone[1])),
		email: z.preprocess(
			clean,
			z
				.string()
				.min(1, m.email[0])
				.max(254, m.email[1])
				.refine((v) => z.email().safeParse(v).success, m.email[2]),
		),
		departament: z.preprocess(
			clean,
			z
				.string()
				.min(1, m.departament[0])
				.refine((v) => Object.hasOwn(DEPARTMENTS, v), m.departament[1]),
		),
		message: text(10, 2000, m.message[0], m.message[1], m.message[2]),
		// idioma de origem (campo hidden); opcional e nunca bloqueia o envio
		lang: z.preprocess((v) => (v == null || v === '' ? undefined : v), z.enum(['pt', 'en', 'es', 'it']).optional().catch(undefined)),
	});
}

// Versão em português (usada pela action no servidor e mantida por compatibilidade).
export const contactSchema = makeContactSchema('pt');

export type ContactInput = z.infer<typeof contactSchema>;
