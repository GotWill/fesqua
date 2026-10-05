/** Monta o e-mail do contato. Função pura (sem rede): fácil de testar. Só roda no servidor. */
import { DEPARTMENTS, type ContactInput } from './contact-schema';

// Todo texto digitado pela pessoa é escapado antes de entrar no HTML (evita injeção de HTML/script no e-mail).
export const escapeHtml = (s: string) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

// Assunto: uma linha só (sem quebras de linha, que poderiam injetar cabeçalhos) e com tamanho limitado.
const oneLine = (s: string, max: number) => s.replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, max);

export function buildContactEmail(input: ContactInput) {
	const dept = DEPARTMENTS[input.departament as keyof typeof DEPARTMENTS] ?? input.departament;
	const subject = `FESQUA | Contato — ${oneLine(input.name, 60)}`;

	const rows: [string, string][] = [
		['Nome', input.name],
		['Empresa', input.company],
		['Telefone', input.phone],
		['E-mail', input.email],
		['Departamento', dept],
	];
	const html =
		`<h2>FESQUA | Contato</h2>` +
		rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join('') +
		`<p><strong>Mensagem:</strong></p><p>${escapeHtml(input.message).replace(/\r?\n/g, '<br>')}</p>`;
	const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nMensagem:\n${input.message}`;

	return { subject, html, text };
}
