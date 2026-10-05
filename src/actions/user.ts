import { defineAction, ActionError } from 'astro:actions';
import { Resend } from 'resend';
import { RESEND_KEY, CONTACT_TO } from 'astro:env/server';
import { contactSchema } from '../lib/contact-schema';
import { buildContactEmail } from '../lib/contact-email';

// A chave vem da variável de ambiente RESEND_KEY (declarada em astro.config.mjs).
const resend = new Resend(RESEND_KEY);

// ⚠ TROCAR antes de ir para produção:
//  - FROM precisa ser de um domínio verificado no Resend. Enquanto isso, 'onboarding@resend.dev' só entrega para o e-mail da sua conta Resend.
//  - TO (quem recebe os contatos) vem da variável de ambiente CONTACT_TO (vários e-mails separados por vírgula).
const FROM = 'Site FESQUA <onboarding@resend.dev>';
const TO = CONTACT_TO.split(',').map((email) => email.trim()).filter(Boolean);

export const user = {
	sendPost: defineAction({
		accept: 'form', // recebe FormData do <form>
		input: contactSchema, // validação do servidor (o mesmo schema do navegador)
		handler: async (input) => {
			const { subject, html, text } = buildContactEmail(input);

			let failure: unknown = null;
			try {
				// O SDK do Resend NÃO lança exceção nos erros da API: devolve { data, error }.
				const { data, error } = await resend.emails.send({ from: FROM, to: TO, replyTo: input.email, subject, html, text });
				if (error) failure = error;
				else return { id: data?.id ?? null };
			} catch (e) {
				failure = e; // falha de rede etc.
			}

			// O detalhe técnico fica só no log do servidor; a pessoa vê uma mensagem genérica.
			console.error('[sendPost] falha ao enviar pelo Resend:', failure);
			throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Não foi possível enviar sua mensagem agora. Tente novamente em instantes.' });
		},
	}),
};
