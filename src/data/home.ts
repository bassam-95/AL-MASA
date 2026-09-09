import type { Locale } from './locales';

export interface HomeSlide {
	title: string;
	text: string;
	cta: string;
	image: string;
	alt: string;
}

export interface HomeService {
	title: string;
	text: string;
	image: string;
}

export interface HomeStat {
	value: number;
	suffix: string;
	label: string;
}

export interface HomeProject {
	title: string;
	image: string;
	url: string;
}

export interface HomeFeature {
	title: string;
	text: string;
	icon: 'clock' | 'coin';
}

export interface HomeNewsItem {
	title: string;
	date: string;
	excerpt: string;
	image: string;
	url: string;
	readMore: string;
}

export interface HomePartner {
	name: string;
	image: string;
}

export interface HomeContent {
	title: string;
	slides: HomeSlide[];
	services: {
		title: string;
		intro: string;
		items: HomeService[];
	};
	stats: HomeStat[];
	projects: {
		title: string;
		intro?: string;
		items: HomeProject[];
	};
	about: {
		eyebrow: string;
		title: string;
		text: string;
		phones: string[];
		features: HomeFeature[];
	};
	news: {
		title: string;
		intro: string;
		readAll: string;
		items: HomeNewsItem[];
	};
	partners: {
		title: string;
		items: HomePartner[];
	};
	footer: {
		phones: string[];
		addresses: string[];
		newsTitle: string;
		recentNews: string[];
		copyright: string;
		formTitle: string;
		form: {
			name: string;
			email: string;
			phone: string;
			service: string;
			message: string;
			submit: string;
			previewNotice: string;
		};
	};
}

const partners: HomePartner[] = [
	{ name: 'Dar Al-Handasah', image: '/assets/home/partner-dar-al-handasah.webp' },
	{ name: 'MCG', image: '/assets/home/partner-mcg.jpg' },
	{ name: 'Administrative Capital Company for Urban Development - Ministry of Housing', image: '/assets/home/partner-administrative-capital.jpg' },
	{ name: 'Arch Plan', image: '/assets/home/partner-arch-plan.png' },
	{ name: 'Designers Consultants Associates', image: '/assets/home/partner-designers.jpg' },
	{ name: 'DSC International', image: '/assets/home/partner-dsc.jpg' },
	{ name: 'El RAEID Engineering Consultants', image: '/assets/home/partner-el-raeid.jpg' },
	{ name: 'General Authority for Industrial Development Ministry of Trade and Industry', image: '/assets/home/partner-industrial-development.png' },
	{ name: 'National Organization for Social', image: '/assets/home/partner-national-organization.jpg' },
	{ name: 'Sabbour', image: '/assets/home/partner-sabbour.jpg' },
	{ name: 'SMART Professional Service', image: '/assets/home/partner-smart.jpg' },
	{ name: 'شعار الهيئة الهندسية للقوات المسلحة', image: '/assets/home/partner-engineering-authority.jpg' },
	{ name: 'Partner logo', image: '/assets/home/partner-whatsapp-1.jpg' },
	{ name: 'Partner logo', image: '/assets/home/partner-whatsapp-2.jpg' },
];

export const homeContent: Record<Locale, HomeContent> = {
	en: {
		title: 'AL MASA',
		slides: [
			{
				title: 'Professional\nInterior Design',
				text: 'We believe in using only the finest materials and craftsmanship in our interior design projects. From the luxurious hardwood flooring to the handcrafted furniture pieces, every element has been chosen with utmost care to ensure longevity and enduring beauty',
				cta: 'Discover Now',
				image: '/assets/home/hero-interior.jpg',
				alt: 'AL MASA interior design project',
			},
			{
				title: 'Construction',
				text: "Our construction projects seamlessly blend innovative design with practical functionality. Whether it's a residential development or a commercial space, we create environments that optimize space utilization, maximize natural light, and incorporate cutting-edge design elements. Experience a space that not only looks exquisite but also enhances everyday living or business operations.",
				cta: 'Discover Now',
				image: '/assets/home/hero-construction.jpg',
				alt: 'AL MASA construction project',
			},
		],
		services: {
			title: 'services offered',
			intro: 'We provide a comprehensive range of services, catering to diverse construction needs. Whether it’s new construction, remodeling, commercial projects, or maintenance, these companies bring expertise, craftsmanship, and project management capabilities to deliver high-quality construction solutions.',
			items: [
				{
					title: 'General Contracting',
					text: 'Contracting and real estate together form the solid core of Al-Masa Contracting Company’s operations company, as a contracting company classified as one of the leaders, qualifies to engage in any major.',
					image: '/assets/home/service-contracting.jpg',
				},
				{
					title: 'Interior Design',
					text: 'We offers our customers innovative design solutions according to the highest levels of professionalism in dealing with interior spaces and achieving psychological comfort by distributing and employing interior design elements.',
					image: '/assets/home/service-interior.jpg',
				},
				{
					title: 'Landscape',
					text: 'Transform your properties into lush, inviting environments with our Landscape as a Service (LaaS). We offer end-to-end professional landscaping solutions designed to elevate the aesthetic appeal, functionality, and value of your real estate investments.',
					image: '/assets/home/service-landscape.jpg',
				},
			],
		},
		stats: [
			{ value: 250, suffix: '+', label: 'Projects' },
			{ value: 13, suffix: '+', label: 'Market Leaders' },
			{ value: 200, suffix: '+', label: 'Loyal Clients' },
		],
		projects: {
			title: 'Latest Projects',
			intro: 'Empowering Growth Through Innovation',
			items: [
				{ title: 'CREATIVA', image: '/assets/home/project-creativa.jpeg', url: 'https://almasa-ta.com/projects/creativa/' },
				{ title: '6-October Insurance Building', image: '/assets/home/project-october.png', url: 'https://almasa-ta.com/projects/6-october-insurance-building/' },
				{ title: 'Gareb Insurance Building', image: '/assets/home/project-gareb.jpg', url: 'https://almasa-ta.com/projects/gareb-insurance-building-insurance-building/' },
			],
		},
		about: {
			eyebrow: '20 Years of experience',
			title: 'Who We Are',
			text: 'Al Masa Contracting Company is one of the distinguished national companies that has pursued thoughtful policies since its inception in 2011. Based on scientific basics, realistic and thoughtful solutions, The company has a unique ambition that grows significantly to reach major achievements and pursue a flexible business strategy seeks to leadership in the public contracting sector and leaves its mark in management and implementation of important projects, reflected in the scale of projects completed during the past years.',
			phones: ['01273350041', '01204966069'],
			features: [
				{ icon: 'clock', title: '24/7 Services', text: 'Reliable 24/7 landscaping services, available anytime to meet your property’s needs.' },
				{ icon: 'coin', title: 'Affordable Price', text: 'Affordable, high-quality landscaping solutions tailored to enhance your property’s beauty and value.' },
			],
		},
		news: {
			title: 'latest news',
			intro: 'We take pride in perfection; pride by producing a first-quality product in a highly efficient and cost-effective manner.',
			readAll: 'Read All News',
			items: [
				{
					title: 'Interior Design Trends 2024',
					date: 'September 29, 2024',
					excerpt: 'Interior design is constantly evolving, blending the best of past and present styles with innovative approaches to create spaces that are both functional and aesthetically…',
					image: '/assets/home/news-interior.jpg',
					url: 'https://almasa-ta.com/2024/09/29/interior-design-trends-2024/',
					readMore: 'Read More',
				},
				{
					title: 'General Contracting Trends 2024',
					date: 'April 24, 2024',
					excerpt: 'The general contracting landscape in real estate is rapidly evolving, driven by technological advancements, a growing focus on sustainability, and changing market demands. In 2024,…',
					image: '/assets/home/news-contracting.jpg',
					url: 'https://almasa-ta.com/2024/04/24/general-contracting-trends-2024/',
					readMore: 'Read More',
				},
			],
		},
		partners: {
			title: 'Partners of success',
			items: partners,
		},
		footer: {
			phones: ['+201273350041', '+201204966069'],
			addresses: ['23 Mohamed Qenaya ST, Almaza, Heliopolis', '24 Dr Mohamed ahmed Ebrahim St, Abbass EL Aqad, Nasr City'],
			newsTitle: 'News & Tips',
			recentNews: ['Interior Design Trends 2024', 'General Contracting Trends 2024', 'Landscape Trends 2024'],
			copyright: '© 2026 Al Masa. Made by Mandala',
			formTitle: 'Keep in touch',
			form: {
				name: 'Your Name *',
				email: 'Your Email *',
				phone: 'Your Phone',
				service: 'Service Type *',
				message: 'How can we help you?',
				submit: 'Submit',
				previewNotice: 'Static preview only. Form submission will be connected in a later approved form task.',
			},
		},
	},
	ar: {
		title: 'الماسة',
		slides: [
			{
				title: 'تصميم داخلي',
				text: 'نحن نؤمن باستخدام أفضل المواد وأعلى مستويات الحرفية في مشاريع التصميم الداخلي لدينا. من الأرضيات الخشبية الفاخرة إلى قطع الأثاث المصنوعة يدويًا، تم اختيار كل عنصر بعناية فائقة لضمان المتانة والجمال الدائم.',
				cta: 'اكتشف الآن',
				image: '/assets/home/hero-interior.jpg',
				alt: 'مشروع تصميم داخلي من الماسة',
			},
			{
				title: 'البناء',
				text: 'تجمع مشاريع البناء لدينا بين التصميم المبتكر والوظائف العملية بشكل سلس. سواء كان مشروعًا سكنيًا أو مساحة تجارية، نحن نبتكر بيئات تستفيد من الاستخدام الأمثل للمساحة، وتعظم الإضاءة الطبيعية، وتدمج عناصر التصميم المتطورة. استمتع بمساحة لا تتميز فقط بالجمال الفائق، بل تعزز أيضًا الحياة اليومية أو العمليات التجارية.',
				cta: 'اكتشف الآن',
				image: '/assets/home/hero-construction.jpg',
				alt: 'مشروع بناء من الماسة',
			},
		],
		services: {
			title: 'خدماتنا',
			intro: 'نحن نقدم مجموعة شاملة من الخدمات لتلبية احتياجات البناء المتنوعة. سواء كان الأمر يتعلق بالبناء الجديد، أو إعادة التصميم، أو المشاريع التجارية، أو الصيانة، فإن هذه الشركات توفر الخبرة والحرفية وقدرات إدارة المشاريع لتقديم حلول بناء عالية الجودة',
			items: [
				{
					title: 'المقاولات العامة',
					text: 'يشكل المقاولات والعقارات معًا النواة الصلبة لعمليات شركة الماسة للمقاولات والتي تعد كشركة مقاولات مصنفة كأحد الشركات الرائدة، مؤهلة للانخراط في أي مجال رئيسي.',
					image: '/assets/home/service-contracting.jpg',
				},
				{
					title: 'تصميمات داخلية',
					text: 'نقدم لعملائنا حلول تصميمية مبتكرة وفق أعلى مستويات الاحترافية في التعامل مع المساحات الداخلية وتحقيق الراحة النفسية من خلال توزيع وتوظيف عناصر التصميم الداخلي.',
					image: '/assets/home/service-interior.jpg',
				},
				{
					title: 'مساحات خضراء',
					text: 'حوّل عقاراتك إلى بيئات خضراء جذابة من خلال خدماتنا لتصميم المناظر الطبيعية. نقدم حلولاً احترافية شاملة لتصميم المناظر الطبيعية تهدف إلى رفع مستوى الجاذبية الجمالية والوظائف وقيمة استثماراتك العقارية. تلبي خدماتنا المصممة خصيصًا المجتمعات السكنية والعقارات التجارية والعقارات الفاخرة، مما يضمن أن كل منظر طبيعي يعكس الطابع الفريد واحتياجات مساحاتك.',
					image: '/assets/home/service-landscape.jpg',
				},
			],
		},
		stats: [
			{ value: 250, suffix: '+', label: 'مشاريع' },
			{ value: 13, suffix: '+', label: 'قادة بالسوق' },
			{ value: 200, suffix: '+', label: 'عملائنا' },
		],
		projects: {
			title: 'مشاريعنا',
			items: [
				{ title: 'مراكز ابداع مصر الرقميه', image: '/assets/home/project-creativa.jpeg', url: 'https://almasa-ta.com/ar/projects/%d9%85%d8%b1%d8%a7%d9%83%d8%b2-%d8%a7%d8%a8%d8%af%d8%a7%d8%b9-%d9%85%d8%b5%d8%b1-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d9%87/' },
				{ title: 'مبنى التأمينات 6 أكتوبر', image: '/assets/home/project-october.png', url: 'https://almasa-ta.com/ar/projects/%d9%85%d8%a8%d9%86%d9%89-%d8%a7%d9%84%d8%aa%d8%a3%d9%85%d9%8a%d9%86%d8%a7%d8%aa-6-%d8%a3%d9%83%d8%aa%d9%88%d8%a8%d8%b1/' },
				{ title: 'مبنى شركة الغريب للتأمين', image: '/assets/home/project-gareb.jpg', url: 'https://almasa-ta.com/ar/projects/%d9%85%d8%a8%d9%86%d9%89-%d8%b4%d8%b1%d9%83%d8%a9-%d8%ac%d8%a7%d8%b1%d8%a8-%d9%84%d9%84%d8%aa%d8%a3%d9%85%d9%8a%d9%86-%d9%85%d8%a8%d9%86%d9%89-%d8%b4%d8%b1%d9%83%d8%a9-%d8%ac%d8%a7%d8%b1%d8%a8-%d9%84/' },
				{ title: 'مكتب تأمينات الألفي', image: '/assets/home/project-alfy.jpg', url: 'https://almasa-ta.com/ar/projects/%d9%85%d9%83%d8%aa%d8%a8-%d8%aa%d8%a3%d9%85%d9%8a%d9%86%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d9%84%d9%81%d9%8a/' },
				{ title: 'مسجد مزرعة الخيول', image: '/assets/home/project-mosque.jpg', url: 'https://almasa-ta.com/ar/projects/%d9%85%d8%b3%d8%ac%d8%af-%d9%85%d8%b2%d8%b1%d8%b9%d8%a9-%d8%a7%d9%84%d8%ae%d9%8a%d9%88%d9%84/' },
				{ title: 'الهناجر', image: '/assets/home/project-hangers.jpg', url: 'https://almasa-ta.com/ar/projects/%d8%a7%d9%84%d9%87%d9%86%d8%a7%d8%ac%d8%b1/' },
			],
		},
		about: {
			eyebrow: '20 عامًا من الخبرة',
			title: 'من نحن',
			text: 'شركة الماسة للمقاولات هي إحدى الشركات الوطنية المتميزة التي انتهجت سياسات مدروسة منذ تأسيسها في عام 2011. بناءً على أسس علمية وحلول واقعية ومدروسة، تتمتع الشركة بطموح فريد ينمو بشكل كبير لتحقيق إنجازات هامة واتباع استراتيجية عمل مرنة تسعى إلى الريادة في قطاع المقاولات العامة وترك بصمتها في إدارة وتنفيذ المشاريع المهمة، وهو ما ينعكس في حجم المشاريع التي تم إنجازها خلال السنوات الماضية.',
			phones: ['01273350041', '01204966069'],
			features: [
				{ icon: 'clock', title: '24/7 خدماتنا', text: 'خدمات تنسيق حدائق موثوقة على مدار الساعة، متوفرة في أي وقت لتلبية احتياجات ممتلكاتك.' },
				{ icon: 'coin', title: 'سعر مناسب', text: 'حلول تنسيق حدائق عالية الجودة وبأسعار مناسبة مصممة لتعزيز جمال وقيمة ممتلكاتك.' },
			],
		},
		news: {
			title: 'الأخبار',
			intro: 'نحن نفتخر بالكمال؛ فخرنا يتمثل في إنتاج منتج عالي الجودة بطريقة فعالة من حيث التكلفة والكفاءة.',
			readAll: 'الاخبار',
			items: [
				{
					title: 'أحدث تصميمات بالمساحات المفتوحة',
					date: 'أكتوبر 22, 2024',
					excerpt: 'يشهد عالم تنسيق الحدائق في العقارات تحولاً جذريًا في عام 2024، مع التركيز المتزايد على الاستدامة والتكنولوجيا وإنشاء مساحات خارجية تعزز قيمة الممتلكات وأسلوب الحياة.…',
					image: '/assets/home/news-landscape.jpg',
					url: 'https://almasa-ta.com/ar/2024/10/22/%d8%a3%d8%ad%d8%af%d8%ab-%d8%aa%d8%b5%d9%85%d9%8a%d9%85%d8%a7%d8%aa-%d8%a8%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%ad%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d9%81%d8%aa%d9%88%d8%ad%d8%a9/',
					readMore: 'المزيد',
				},
				{
					title: 'التطورات بالمقاولات العامة',
					date: 'أكتوبر 22, 2024',
					excerpt: 'يتطور مشهد المقاولات العامة في مجال العقارات بسرعة، مدفوعًا بالتقدم التكنولوجي والتركيز المتزايد على الاستدامة ومتطلبات السوق المتغيرة. في عام 2024، يتنقل المقاولون في بيئة…',
					image: '/assets/home/news-contracting.jpg',
					url: 'https://almasa-ta.com/ar/2024/10/22/%d8%a7%d9%84%d8%aa%d8%b7%d9%88%d8%b1%d8%a7%d8%aa-%d8%a8%d8%a7%d9%84%d9%85%d9%82%d8%a7%d9%88%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%b9%d8%a7%d9%85%d8%a9/',
					readMore: 'المزيد',
				},
			],
		},
		partners: {
			title: 'شركاء النجاح',
			items: partners,
		},
		footer: {
			phones: ['01273350041', '01204966069'],
			addresses: ['٢٣ شارع محمد قنايه الماظه مصر الجديدة', '٢٤ شارع الدكتور محمد احمد ابراهيم متفرع من عباس العقاد مدينه نصر'],
			newsTitle: 'الأخبار',
			recentNews: ['أحدث تصميمات بالمساحات المفتوحة', 'التطورات بالمقاولات العامة', 'أحدث التصميمات الداخلية'],
			copyright: '© 2026 Al Masa. Made by Mandala',
			formTitle: 'اتصل بنا',
			form: {
				name: 'الاسم *',
				email: 'البريد الإلكتروني *',
				phone: 'رقم الهاتف',
				service: 'نوع الخدمة *',
				message: 'كيف يمكننا مساعدتك؟',
				submit: 'إرسال',
				previewNotice: 'هذه معاينة ثابتة فقط. سيتم ربط إرسال النموذج في مهمة نموذج معتمدة لاحقًا.',
			},
		},
	},
};
