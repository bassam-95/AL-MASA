import { locales, type Locale } from '../data/locales';

export function getLocaleMeta(locale: Locale) {
	return locales[locale];
}
