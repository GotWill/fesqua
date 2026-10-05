// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	// Necessário para canonical/hreflang absolutos. TROCAR se o domínio de produção for outro.
	site: 'https://fesqua.com.br',
	// Português na raiz (sem prefixo); /en, /es e /it em pastas próprias de src/pages.
	// Slugs traduzidos: src/i18n/routes.ts. Sem redirecionamento automático pelo idioma do navegador.
	i18n: {
		defaultLocale: 'pt',
		locales: ['pt', 'en', 'es', 'it'],
		routing: { prefixDefaultLocale: false },
		// Sem `fallback` do Astro: ele geraria /en/<slug-em-português> (cópias em português em URLs
		// que não existem no mapa). A reserva em português é feita por texto, em `pick()`/`t()`.
	},
	// Actions precisam de um servidor: o adaptador Node roda só o endpoint da action; as páginas continuam estáticas.
	adapter: vercel(),
	security: {
		// TROCAR pelos domínios reais do site (necessário atrás de proxy HTTPS)
		allowedDomains: [
			{ hostname: 'fesqua.com.br', protocol: 'https' },
			{ hostname: 'www.fesqua.com.br', protocol: 'https' },
			{ hostname: '*.vercel.app', protocol: 'https' },
		],
	},
	env: {
		schema: {
			// chave do Resend: segredo de servidor (nunca vai para o navegador)
			RESEND_KEY: envField.string({ context: 'server', access: 'secret' }),
		},
	},
});
