/**
 * Company facts shown in the footer and on the About, Approach and Contact pages.
 * Every line below is taken from the current website (almasa-ta.com, read 2026-10-07).
 * Nothing here is invented. English only for now; Arabic is added later from approved text.
 */

export const company = {
	name: 'AL MASA',
	longName: 'Al Masa Contracting Company',
	founded: 2011,
	email: 'Info@Almasa-ta.com',
	offices: ['23 Mohamed Qenaya St, Almaza, Heliopolis', '24 Dr Mohamed Ahmed Ebrahim St, Abbass El Aqad, Nasr City'],
	social: [
		{ label: 'Facebook', href: 'https://www.facebook.com/AlmasaForContracting/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/al-masa-contracting-125a57323' },
	],
};

export const aboutText = {
	headline: 'We build for a greater future success',
	company:
		'Al Masa Contracting Company is one of the distinguished national companies that have pursued thoughtful policies since its inception in 2011. Based on scientific basics, realistic and thoughtful solutions, the company has a unique ambition that grows significantly to reach major achievements and pursue a flexible business strategy that seeks leadership in the public contracting sector and leaves its mark in the management and implementation of important projects, reflected in the scale of projects completed during the past years.',
	goal: 'Creating an integrated work environment, through which we invest the highest human competencies, expertise and enhanced by the latest engineering and scientific technologies applied globally to keep pace with the needs and requirements of the Egyptian market, with the development process witnessed by the Arab Republic of Egypt in all aspects of life and society.',
	vision: 'Successful planning, precise implementation, innovative performance, high quality, and credibility are our work standards that enhance our leadership in integrated services in the field of general contracting and designs.',
};

export const approachItems = [
	{
		title: 'BIM (Building Information Modeling)',
		paragraphs: [
			'BIM is a process that involves creating and using an intelligent 3D model to represent the physical and functional characteristics of a building facility. This model includes the structural, architectural, MEP and IT characteristics of the building, which facilitates the full coordination of the various construction activities and eliminates any clashes, resulting in pushing the progress of a project and decreasing the cost.',
			'Design, visualization, simulation, and collaboration enabled by BIM solutions provide greater clarity for all stakeholders across a project lifecycle.',
		],
	},
	{
		title: 'Human Resources',
		paragraphs: [
			'We believe that people are our most valuable asset. Therefore, every opportunity is taken to hire, train and employ only the most talented and experienced people fitting into our culture.',
			'Furthermore, we apply extensive training programs and career path development based upon the appraisal of individuals. Our aim is to create an organization with a culture that cares for the employees, promotes their performance and makes them feel different and proud.',
		],
	},
	{
		title: 'ERP System',
		paragraphs: [
			'AL MASA implements ERP as an Enterprise Resource Planning software that integrates finance, tendering, technical, operations, supply chain, schedule, progress, cost control and other information into a form for easy retrieval by all departments for use in improving the company’s efficiency.',
		],
	},
	{
		title: 'Cost Control',
		paragraphs: ['AL MASA applies a detailed cost control system in all its projects that involves all different phases:'],
		list: ['Tendering Phase', 'Execution Phase', 'Periodic Reports'],
	},
];
