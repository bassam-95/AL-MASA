/**
 * Status and view-all labels for the project showcase.
 * Separated from the .astro component to avoid Astro compiler limitations
 * with TypeScript syntax in frontmatter.
 */

export const statusLabels = {
	en: { completed: 'Completed', 'in-progress': 'Under construction' },
	ar: { completed: 'مكتملة', 'in-progress': 'قيد التنفيذ' },
};

export const viewAllLabels = {
	en: 'View All Projects',
	ar: 'عرض كل المشاريع',
};
