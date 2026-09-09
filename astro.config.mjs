// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Jost',
			cssVariable: '--font-jost',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Poppins',
			cssVariable: '--font-poppins',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['sans-serif'],
		},
	],
	i18n: {
		locales: ['en', 'ar'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
