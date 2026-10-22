/**
 * Authoritative AL MASA project inventory.
 *
 * One entity per project. Mega projects are NOT a separate content type —
 * `scale` distinguishes them, exactly like `status` does.
 *
 * Architecture note: the homepage renders a curated showcase from this file.
 * A future projects listing page can render the full inventory (all
 * `publish: true` entries) with no change to this module.
 *
 * `interior` is false for every project until the owner confirms it. The field
 * exists so that a future owner request to feature interior work is a data
 * change, not a redesign.
 */

import { projectPhotos } from './project-media';
import type { ProjectPhoto } from './project-media';

export type ProjectStatus = 'completed' | 'in-progress';

export type ProjectScale = 'mega' | 'standard';

export interface ProjectSeed {
	/** Owner project number. Stable identity across tasks and future pages. */
	id: number;
	/** Official Arabic display name, verified. */
	nameAr: string;
	status: ProjectStatus;
	scale: ProjectScale;
	publish: boolean;
	/** false until the owner confirms interior work per project. */
	interior: boolean;
	/**
	 * Curated homepage showcase image, relative to /public.
	 * Only set for projects approved for the homepage showcase.
	 */
	showcaseImage?: ShowcaseImage;
}

export interface ShowcaseImage {
	/** Public path, e.g. /assets/owner-confirmed/mega/completed/project-05-mokattam.jpg */
	src: string;
	/** Natural pixel width of the source file. */
	width: number;
	/** Natural pixel height of the source file. */
	height: number;
	/** SHA-256 of the production file, for provenance verification. */
	sha256: string;
}

const seeds: ProjectSeed[] = [
	// ---- Mega, completed -------------------------------------------------
	{ id: 5, nameAr: 'المقطم', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 27, nameAr: 'مول الروبيكي', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 35, nameAr: 'مزرعة الخيول', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 37, nameAr: 'خيرات الرحمن', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },

	// ---- Mega, under construction ---------------------------------------
	{ id: 7, nameAr: 'المنظمات', status: 'in-progress', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 8, nameAr: 'درة الكرز', status: 'in-progress', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },

	// ---- Standard, completed --------------------------------------------
	{ id: 3, nameAr: 'صوفيا', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 9, nameAr: 'عرب اليسار', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 12, nameAr: 'تأمينات الغريب', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 16, nameAr: 'مستشفى 500500', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 18, nameAr: 'الجوهرة', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 22, nameAr: 'سقارة', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },

	// ---- Standard, under construction ------------------------------------
	{ id: 10, nameAr: 'تأمينات اكتوبر', status: 'in-progress', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 11, nameAr: 'تأمينات شيراتون', status: 'in-progress', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 17, nameAr: 'اللوجستي وجراجات الطب الشرعي', status: 'in-progress', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 24, nameAr: 'مسجد الكيان', status: 'in-progress', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },

	// ---- Added 2026-10-07 from the 40-project intake workbook (no approved homepage image yet) ----
	// publish=false: owner excluded the project (X) or has not classified it yet (#4).
	{ id: 1, nameAr: 'السلام', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 2, nameAr: 'الالفي', status: 'in-progress', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 4, nameAr: 'الرحاب', status: 'in-progress', scale: 'standard', publish: false, interior: false, showcaseImage: undefined },
	{ id: 6, nameAr: 'جاردينيا', status: 'in-progress', scale: 'standard', publish: false, interior: false, showcaseImage: undefined },
	{ id: 13, nameAr: 'عمارات السلام', status: 'in-progress', scale: 'standard', publish: false, interior: false, showcaseImage: undefined },
	{ id: 14, nameAr: 'عيادات طيبه مول', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 15, nameAr: 'ممشى مطروح', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 19, nameAr: 'حديقة الشعب', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 20, nameAr: 'سور السخنة', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 21, nameAr: 'الكاترينج المطار', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 23, nameAr: 'مستشفى مارفل', status: 'in-progress', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 25, nameAr: 'مسجد المشير', status: 'in-progress', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 26, nameAr: 'الوادي الجديد', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 28, nameAr: 'مركز إبداع طنطا', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 29, nameAr: 'هناجر بني سويف', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 30, nameAr: 'معهد تكنولوجيا الفضاء', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 31, nameAr: 'تكنولوجيا الفضاء', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 32, nameAr: 'العاصمة R3', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 33, nameAr: 'عمارات دار مصر', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 34, nameAr: 'مبنى الامتحانات السويس', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 36, nameAr: 'مسجد الخياله', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 38, nameAr: 'مسجد الماظه', status: 'completed', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
	{ id: 39, nameAr: 'مسجد العلمين', status: 'completed', scale: 'standard', publish: true, interior: false, showcaseImage: undefined },
	{ id: 40, nameAr: 'محكمة العداله', status: 'in-progress', scale: 'mega', publish: true, interior: false, showcaseImage: undefined },
];


// ---------------------------------------------------------------------------
// Fields added for the project pages (2026-10-07)
// ---------------------------------------------------------------------------
export interface ProjectFilm {
	/** Public path to a web-ready mp4. */
	src: string;
	poster: string;
	/** True while the file is only the hero clip, not the full-length project film. */
	isHeroClip: boolean;
}

export interface Project extends ProjectSeed {
	/** URL slug: /en/projects/<slug>/ */
	slug: string;
	/** English name, only where the current website (almasa-ta.com) already uses one. */
	nameEn?: string;
	/** Location from the intake workbook (Arabic). */
	locationAr: string;
	/** Draft web photos (not yet owner-approved). Empty when no media was supplied. */
	photos: ProjectPhoto[];
	films: ProjectFilm[];
}

const slugs: Record<number, string> = {
	'1': 'salam',
	'2': 'al-alphy',
	'3': 'sofia',
	'4': 'rehab',
	'5': 'mokattam',
	'6': 'gardenia',
	'7': 'munadat',
	'8': 'durrat-alkiraz',
	'9': 'arab-al-yasar',
	'10': 'taminat-oktober',
	'11': 'taminat-sheraton',
	'12': 'taminat-algharib',
	'13': 'omarat-salam',
	'14': 'tayba-mall-clinics',
	'15': 'matrouh-promenade',
	'16': 'hospital-500500',
	'17': 'logistic-garages',
	'18': 'aljawhara-mosque',
	'19': 'people-park',
	'20': 'sokhna-wall',
	'21': 'airport-catering',
	'22': 'saqqara',
	'23': 'marvel-hospital',
	'24': 'masjid-alkayan',
	'25': 'masjid-almushir',
	'26': 'new-valley',
	'27': 'roubeky-mall',
	'28': 'tanta-ibdaa-center',
	'29': 'beni-suef-hangars',
	'30': 'space-technology-institute',
	'31': 'space-technology',
	'32': 'capital-r3',
	'33': 'dar-misr-buildings',
	'34': 'suez-exams-building',
	'35': 'horse-farm',
	'36': 'masjid-alkhayala',
	'37': 'khairat-rahman',
	'38': 'masjid-almazza',
	'39': 'masjid-alalamein',
	'40': 'justice-court'
};

/** English names taken from the current almasa-ta.com project pages. Others stay Arabic until confirmed. */
const namesEn: Record<number, string> = {
	2: 'Al Alphy',
	10: '6-October Insurance Building',
	12: 'Gareb Insurance Building',
	33: 'Dar Masr Buildings',
	37: 'Khairat Al Rahman Mosque',
};

const locationsAr: Record<number, string> = {
	'1': 'القاهرة - مدينة السلام',
	'2': 'القاهرة - وسط البلد',
	'3': 'القاهرة - مدينة المقطم',
	'4': 'القاهرة - مدينة الرحاب',
	'5': 'القاهرة - مدينة المقطم',
	'6': 'القاهرة - مدينة نصر',
	'7': 'العاصمة الإدارية',
	'8': 'العاصمة الإدارية',
	'9': 'القاهرة - مصر القديمة',
	'10': 'مدينة اكتوبر',
	'11': 'القاهرة - شيراتون',
	'12': 'السويس',
	'13': 'القاهرة - مدينة السلام',
	'14': 'القاهرة - مدينة نصر',
	'15': 'مطروح',
	'16': 'مدينة اكتوبر',
	'17': 'الروبيكي',
	'18': 'العاصمة الإدارية',
	'19': 'العاصمة الإدارية',
	'20': 'السخنة',
	'21': 'القاهرة - المطار',
	'22': 'الجيزة - دهشور',
	'23': 'القاهرة - محور المشير',
	'24': 'الكيان العسكري',
	'25': 'القاهرة - محور المشير',
	'26': 'الوادي الجديد',
	'27': 'منطقة الروبيكي',
	'28': 'الغربية - طنطا',
	'29': 'بني سويف',
	'30': 'القاهرة',
	'31': 'العاصمة الإدارية',
	'32': 'العاصمة الإدارية',
	'33': 'القاهرة - دار مصر',
	'34': 'السويس',
	'35': 'العاصمة الإدارية',
	'36': 'القاهرة - مصر القديمة',
	'37': 'الشروق',
	'38': 'القاهرة - الماظة',
	'39': 'العلمين',
	'40': 'العاصمة الإدارية'
};

/** Hero clips that already exist as web files; the full-length films come later. */
const films: Record<number, ProjectFilm[]> = {
	2: [{ src: '/assets/owner-confirmed/hero/hero-m-alphy.mp4', poster: '/assets/owner-confirmed/hero/hero-m-alphy-poster.jpg', isHeroClip: true }],
	5: [{ src: '/assets/owner-confirmed/hero/hero-m-mokattam-clean2.mp4', poster: '/assets/owner-confirmed/hero/hero-m-mokattam-poster.jpg', isHeroClip: true }],
	27: [{ src: '/assets/owner-confirmed/hero/hero-m-roubeky.mp4', poster: '/assets/owner-confirmed/hero/hero-m-roubeky-poster.jpg', isHeroClip: true }],
	35: [{ src: '/assets/owner-confirmed/hero/hero-m-horse.mp4', poster: '/assets/owner-confirmed/hero/hero-m-horse-poster.jpg', isHeroClip: true }],
	37: [{ src: '/assets/owner-confirmed/hero/hero-m-khairat.mp4', poster: '/assets/owner-confirmed/hero/hero-m-khairat-poster.jpg', isHeroClip: true }],
};

export const projects: Project[] = seeds.map((seed) => ({
	...seed,
	slug: slugs[seed.id],
	nameEn: namesEn[seed.id],
	locationAr: locationsAr[seed.id] ?? '',
	photos: projectPhotos[slugs[seed.id]] ?? [],
	films: films[seed.id] ?? [],
}));

export const projectById = (id: number): Project | undefined => projects.find((project) => project.id === id);
export const projectBySlug = (slug: string): Project | undefined => projects.find((project) => project.slug === slug);

/**
 * Showcase images are attached by an explicit owner-approved mapping rather
 * than written inline above, so the inventory reads as a clean list and every
 * published image keeps its provenance in one auditable place.
 *
 * Every production file is a web delivery copy: uniform downscale to <=2000px
 * on the long edge, JPEG q82-85, under 600 KB. All images are centre-cropped
 * to 3:2 aspect ratio. Raw camera originals stay in incoming/ and never
 * enter the repo.
 */
const showcaseImages: Record<number, ShowcaseImage> = {
	5: {
		src: '/assets/owner-confirmed/mega/completed/project-05-mokattam.jpg',
		width: 1998,
		height: 1332,
		sha256: '7262315b3de9ec4a10431e0effe2d78952ba622251de0c3c13c931a0d35e99d3',
	},
	27: {
		src: '/assets/owner-confirmed/mega/completed/project-27-roubeky-mall.jpg',
		width: 1998,
		height: 1332,
		sha256: '73511569f72da167cadab61e5c5aee49b9b0ddbdf58697588b17c44e52637335',
	},
	37: {
		src: '/assets/owner-confirmed/mega/completed/project-37-khairat-rahman.jpg',
		width: 1998,
		height: 1332,
		sha256: 'f9c77944fd6eb3b1fe11f9a112ef07ef3d93cccedaa5f444659e310df40734ea',
	},
	35: {
		src: '/assets/owner-confirmed/mega/completed/project-35-horse-farm.jpg',
		width: 1040,
		height: 693,
		sha256: '0031a8bcc28ccdc181121f444f444e6abc60b8f04d6b6c4b358bc6a61d7fac4e',
	},

	// ---- Mega, under construction ---------------------------------------
	7: {
		src: '/assets/owner-confirmed/mega/in-progress/project-07-munadat.jpg',
		width: 1700,
		height: 1133,
		sha256: 'd565ce1e39afe381eae78c3c2e96a2209c8c5eff1353c17eb851f3f5d61a0a00',
	},
	8: {
		src: '/assets/owner-confirmed/mega/in-progress/project-08-durrat-alkiraz.jpg',
		width: 2000,
		height: 1333,
		sha256: 'f60b1c47d3971343c9c51fe08dd0e93dcfafa90a48c551679329e15ddd5001af',
	},

	// ---- Standard, completed ---------------------------------------------
	3: {
		src: '/assets/owner-confirmed/standard/completed/project-03-sofia.jpg',
		width: 1600,
		height: 1066,
		sha256: '3fc5167acb8011cb43d9357b081e27fba6164c431672ee12b458017d8d92390e',
	},
	9: {
		// Already live and owner-approved. The existing production file is reused
		// byte-for-byte: same path, same pixels, no re-pick, no replacement.
		src: '/assets/owner-confirmed/completed-standard/project-09-arab-al-yasar.jpg',
		width: 1156,
		height: 770,
		sha256: '5a92e0a9354b01f15563bb6591af3b9e7609759acf8cf058856cde245848d511',
	},
	12: {
		src: '/assets/owner-confirmed/standard/completed/project-12-taminat-algharib.jpg',
		width: 1080,
		height: 720,
		sha256: '192c926724c6727151372719ebcb36503f99e5fff64b8e9c2ef737ca22cb9b95',
	},
	16: {
		src: '/assets/owner-confirmed/standard/completed/project-16-hospital-500500.jpg',
		width: 1280,
		height: 853,
		sha256: '5001f1fb0d1c63a0ee0c31a195ee497efcaf8fa2978788054873d5a926af0226',
	},
	18: {
		src: '/assets/owner-confirmed/standard/completed/project-18-aljawhara-mosque.jpg',
		width: 1998,
		height: 1332,
		sha256: 'c1aac6edab8792c87aac7e507d99ea8696370ea01f8ed37b804a41dd5ae43878',
	},
	22: {
		src: '/assets/owner-confirmed/standard/completed/project-22-saqqara.jpg',
		width: 1280,
		height: 853,
		sha256: 'cc87e591109b718d51443642a4df67494b8b00428e974206b6456a376c9e9c01',
	},

	// ---- Standard, under construction ------------------------------------
	10: {
		src: '/assets/owner-confirmed/standard/in-progress/project-10-taminat-oktober.jpg',
		width: 1204,
		height: 802,
		sha256: '2549c2fe9c627be8f5b81d2ca800a0ecb8465c0e1e2924fa002e17dae4aaeece',
	},
	11: {
		src: '/assets/owner-confirmed/standard/in-progress/project-11-taminat-sheraton.jpg',
		width: 768,
		height: 512,
		sha256: '2529f5c468f92de9978e6ffb4c96c3c21bbc60ce83dae9b3a6e4bd752b8b7c64',
	},
	17: {
		src: '/assets/owner-confirmed/standard/in-progress/project-17-logistic-garages.jpg',
		width: 1000,
		height: 666,
		sha256: '4c69679290cdc684a36fd8d899fb827435ffac96458def62a37c63aa73725158',
	},
	24: {
		src: '/assets/owner-confirmed/standard/in-progress/project-24-masjid-alkayan.jpg',
		width: 1280,
		height: 853,
		sha256: 'a97ed35fdbd7680ca84127e8037a3cd33c8a1d5a4bd7dddc5d09e183361164a8',
	},
};

for (const project of projects) {
	const image = showcaseImages[project.id];
	if (image) project.showcaseImage = image;
}

export const selectShowcaseProjects = (status: ProjectStatus, scale: ProjectScale): Project[] =>
	projects.filter((project) => project.publish && project.status === status && project.scale === scale && project.showcaseImage);
