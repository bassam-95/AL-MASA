export const locales = {
	en: {
		code: 'en',
		lang: 'en',
		dir: 'ltr',
		label: 'English',
	},
	ar: {
		code: 'ar',
		lang: 'ar',
		dir: 'rtl',
		label: 'العربية',
	},
} as const;

export type Locale = keyof typeof locales;

export function isLocale(value: string): value is Locale {
	return value in locales;
}
