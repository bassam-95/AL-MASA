/**
 * Educational Channel content.
 *
 * STATUS: owner has not supplied any educational videos yet. Every entry below
 * is a SAMPLE placeholder (isSample: true) so the section can be reviewed.
 * Sample entries carry no real claims: neutral titles, categories taken from
 * the legacy site's service names. A "Sample" chip is shown while isSample is
 * true. To publish a real video, replace the entry (set isSample to false and
 * fill title / video / poster). Newest first.
 *
 * ARABIC: UI wording below is a working draft and needs human approval before
 * public use (project rule D005).
 */

export const educationalLabels = {
	en: {
		title: 'Educational Channel',
		viewAll: 'View All Videos',
		sample: 'Sample',
		play: 'Play video',
		latest: 'Latest',
	},
	ar: {
		title: 'القناة التعليمية',
		viewAll: 'عرض كل الفيديوهات',
		sample: 'نموذج',
		play: 'تشغيل الفيديو',
		latest: 'الأحدث',
	},
};

export const educationalVideos = [
	{
		id: 'edu-sample-01',
		isSample: true,
		category: { en: 'Concrete structure', ar: 'هيكل خرساني' },
		title: { en: 'Sample video title', ar: 'عنوان فيديو تجريبي' },
		duration: '',
		video: '',
		poster: '',
	},
	{
		id: 'edu-sample-02',
		isSample: true,
		category: { en: 'Finishing', ar: 'تشطيبات' },
		title: { en: 'Sample video title', ar: 'عنوان فيديو تجريبي' },
		duration: '',
		video: '',
		poster: '',
	},
	{
		id: 'edu-sample-03',
		isSample: true,
		category: { en: 'Landscape', ar: 'مساحات خضراء' },
		title: { en: 'Sample video title', ar: 'عنوان فيديو تجريبي' },
		duration: '',
		video: '',
		poster: '',
	},
	{
		id: 'edu-sample-04',
		isSample: true,
		category: { en: 'Strategies & Approaches', ar: 'الاستراتيجيات والأساليب' },
		title: { en: 'Sample video title', ar: 'عنوان فيديو تجريبي' },
		duration: '',
		video: '',
		poster: '',
	},
];
