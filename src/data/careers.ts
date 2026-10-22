/**
 * Careers / application page content (frontend preview only).
 *
 * STATUS: Week 1 scope is the frontend page only. Nothing is submitted
 * anywhere yet; the backend, CV storage and HR system need a separate secure
 * backend/privacy decision. No real vacancies have been supplied, so the only
 * entry is a general application.
 *
 * ARABIC: all Arabic wording here is a working draft and needs human approval
 * before public use (project rule D005).
 *
 * FUTURE: a vacancy is one record in `vacancies`. Each vacancy names the field
 * set its form uses, so a new vacancy (made by hand, by an HR system or
 * imported from LinkedIn) produces its own form without code changes.
 * Fields deliberately NOT collected (per the Week 1 plan): national ID, date
 * of birth, gender, nationality, full residential address.
 */

export const careersLabels = {
	en: {
		pageTitle: 'Careers - AL MASA',
		brand: 'AL MASA',
		back: 'Back to home',
		switchLabel: 'العربية',
		switchHref: '/ar/careers/apply/',
		homeHref: '/en/',
		kicker: 'Careers',
		title: 'Join AL MASA',
		intro: 'Tell us about your experience and the kind of work you would like to do with us.',
		heroAction: 'Start your application',
		heroImageAlt: 'An AL MASA completed project',
		stepsTitle: 'How it works',
		steps: [
			{ n: '01', t: 'Choose a role', d: 'Pick an open role or send a general application.' },
			{ n: '02', t: 'Share your details', d: 'Tell us who you are and what you have worked on.' },
			{ n: '03', t: 'Attach your CV', d: 'Add your CV so your background can be reviewed.' },
		],
		rolesTitle: 'Open roles',
		apply: 'Apply',
		formTitle: 'Application form',
		notice: 'Preview only. Applications are not being collected yet.',
		vacancyLabel: 'Role',
		progress: ['About you', 'Experience', 'Your CV', 'Message'],
		sectionAbout: 'About you',
		sectionExperience: 'Your experience',
		sectionCv: 'Your CV',
		sectionMessage: 'Anything else?',
		required: 'Required',
		select: 'Select',
		uploadTitle: 'Drag your CV here or browse',
		uploadHint: 'PDF or Word document',
		uploadChange: 'Change file',
		consent: 'I agree that AL MASA may use these details to review my application.',
		consentNote: 'Privacy wording is pending approval.',
		submit: 'Submit application',
		previewMessage: 'This is a preview. Nothing was sent.',
	},
	ar: {
		pageTitle: 'الوظائف - الماسة',
		brand: 'الماسة',
		back: 'العودة للرئيسية',
		switchLabel: 'English',
		switchHref: '/en/careers/apply/',
		homeHref: '/ar/',
		kicker: 'الوظائف',
		title: 'انضم إلى الماسة',
		intro: 'عرّفنا بخبرتك ونوع العمل الذي تودّ القيام به معنا.',
		heroAction: 'ابدأ التقديم',
		heroImageAlt: 'أحد مشاريع الماسة المنفذة',
		stepsTitle: 'كيف يعمل التقديم',
		steps: [
			{ n: '01', t: 'اختر وظيفة', d: 'اختر وظيفة متاحة أو أرسل طلبًا عامًا.' },
			{ n: '02', t: 'شاركنا بياناتك', d: 'عرّفنا بنفسك وبما عملت عليه.' },
			{ n: '03', t: 'أرفق سيرتك الذاتية', d: 'أضف سيرتك الذاتية لمراجعة خبرتك.' },
		],
		rolesTitle: 'الوظائف المتاحة',
		apply: 'قدّم الآن',
		formTitle: 'نموذج التقديم',
		notice: 'نسخة تجريبية فقط. لا يتم استقبال الطلبات حاليًا.',
		vacancyLabel: 'الوظيفة',
		progress: ['عنك', 'الخبرة', 'السيرة الذاتية', 'رسالة'],
		sectionAbout: 'عنك',
		sectionExperience: 'خبرتك',
		sectionCv: 'السيرة الذاتية',
		sectionMessage: 'هل تود إضافة شيء؟',
		required: 'مطلوب',
		select: 'اختر',
		uploadTitle: 'اسحب سيرتك الذاتية هنا أو اختر ملفًا',
		uploadHint: 'ملف PDF أو Word',
		uploadChange: 'تغيير الملف',
		consent: 'أوافق على أن تستخدم الماسة هذه البيانات لمراجعة طلبي.',
		consentNote: 'صياغة الخصوصية بانتظار الاعتماد.',
		submit: 'إرسال الطلب',
		previewMessage: 'هذه نسخة تجريبية. لم يتم إرسال أي شيء.',
	},
};

/** Vacancies. Only the general application exists until real roles are supplied. */
export const vacancies = [
	{
		id: 'general',
		fieldSet: 'default',
		title: { en: 'General application', ar: 'طلب توظيف عام' },
		summary: {
			en: 'Do not see the right role? Send your details and your CV.',
			ar: 'لا تجد الوظيفة المناسبة؟ أرسل بياناتك وسيرتك الذاتية.',
		},
		tag: { en: 'Open', ar: 'متاح' },
		meta: { en: ['Any department', 'Any city'], ar: ['أي قسم', 'أي مدينة'] },
	},
	{
		id: 'sample-role-1',
		fieldSet: 'default',
		title: { en: 'Role title', ar: 'المسمى الوظيفي' },
		summary: {
			en: 'Sample listing. Real roles will appear here once HR publishes them.',
			ar: 'نموذج تجريبي. ستظهر الوظائف الحقيقية هنا عند نشرها.',
		},
		tag: { en: 'Sample', ar: 'نموذج' },
		meta: { en: ['Department', 'City', 'Full-time'], ar: ['القسم', 'المدينة', 'دوام كامل'] },
	},
	{
		id: 'sample-role-2',
		fieldSet: 'default',
		title: { en: 'Role title', ar: 'المسمى الوظيفي' },
		summary: {
			en: 'Sample listing. Real roles will appear here once HR publishes them.',
			ar: 'نموذج تجريبي. ستظهر الوظائف الحقيقية هنا عند نشرها.',
		},
		tag: { en: 'Sample', ar: 'نموذج' },
		meta: { en: ['Department', 'City', 'Full-time'], ar: ['القسم', 'المدينة', 'دوام كامل'] },
	},
];

/**
 * Field sets. type: text | email | tel | url | select | textarea | file.
 * group maps to a form section: about | experience | cv | message.
 */
export const fieldSets = {
	default: [
		{ id: 'fullName', group: 'about', type: 'text', required: true, autocomplete: 'name', label: { en: 'Full name', ar: 'الاسم الكامل' } },
		{ id: 'email', group: 'about', type: 'email', required: true, autocomplete: 'email', label: { en: 'Email', ar: 'البريد الإلكتروني' } },
		{ id: 'phone', group: 'about', type: 'tel', required: true, autocomplete: 'tel', label: { en: 'Phone', ar: 'رقم الهاتف' } },
		{ id: 'city', group: 'about', type: 'text', required: true, autocomplete: 'address-level2', label: { en: 'Current city', ar: 'المدينة الحالية' } },
		{ id: 'role', group: 'experience', type: 'text', required: true, label: { en: 'Current or most recent job title', ar: 'المسمى الوظيفي الحالي أو الأخير' } },
		{
			id: 'years',
			group: 'experience',
			type: 'select',
			required: true,
			label: { en: 'Years of relevant experience', ar: 'سنوات الخبرة ذات الصلة' },
			options: [
				{ en: 'Less than 1 year', ar: 'أقل من سنة' },
				{ en: '1 to 3 years', ar: 'من 1 إلى 3 سنوات' },
				{ en: '3 to 5 years', ar: 'من 3 إلى 5 سنوات' },
				{ en: '5 to 10 years', ar: 'من 5 إلى 10 سنوات' },
				{ en: 'More than 10 years', ar: 'أكثر من 10 سنوات' },
			],
		},
		{ id: 'qualification', group: 'experience', type: 'text', required: true, label: { en: 'Qualification / degree', ar: 'المؤهل العلمي' } },
		{ id: 'linkedin', group: 'experience', type: 'url', required: false, label: { en: 'LinkedIn (optional)', ar: 'رابط لينكدإن (اختياري)' } },
		{ id: 'portfolio', group: 'experience', type: 'url', required: false, label: { en: 'Portfolio (optional)', ar: 'رابط أعمالك (اختياري)' } },
		{ id: 'cv', group: 'cv', type: 'file', required: true, label: { en: 'CV', ar: 'السيرة الذاتية' } },
		{ id: 'message', group: 'message', type: 'textarea', required: false, label: { en: 'Your message (optional)', ar: 'رسالتك (اختياري)' } },
	],
};
