import type { Locale } from './locales';

export interface NavigationItem {
	id: 'home' | 'projects' | 'expertise' | 'about' | 'contact';
	labels: Record<Locale, string>;
	href: Record<Locale, string>;
}

export const primaryNavigation: NavigationItem[] = [
	{
		id: 'home',
		labels: {
			en: 'Home',
			ar: 'الرئيسية',
		},
		href: {
			en: '/en/',
			ar: '/ar/',
		},
	},
	{
		id: 'projects',
		labels: {
			en: 'Projects',
			ar: 'مشاريعنا',
		},
		href: {
			en: '/en/projects/',
			ar: '/ar/projects/',
		},
	},
	{
		id: 'expertise',
		labels: {
			en: 'Expertise',
			ar: 'خبراتنا',
		},
		href: {
			en: '/en/expertise/',
			ar: '/ar/expertise/',
		},
	},
	{
		id: 'about',
		labels: {
			en: 'About',
			ar: 'عن الماسة',
		},
		href: {
			en: '/en/about/',
			ar: '/ar/about/',
		},
	},
	{
		id: 'contact',
		labels: {
			en: 'Contact',
			ar: 'اتصل بنا',
		},
		href: {
			en: '/en/contact/',
			ar: '/ar/contact/',
		},
	},
];

export function getLocalizedPath(pathname: string, locale: Locale): string {
	const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
	const withoutLocale = normalizedPath.replace(/^\/(en|ar)(?=\/)/, '');
	return `/${locale}${withoutLocale}`.replace(/\/\/{2,}/g, '/');
}
