//https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool

import { defineDocuments, defineLocations } from 'sanity/presentation'

// Configures the "Used on x pages" banner
export const locations = {
	// Map document types to frontend routes
	workPage: defineLocations({
		select: { title: 'title', subtitle: 'subtitle' },
		resolve: () => ({
			locations: [
				{ title: 'Work', href: `/work` },
				{ title: 'Work', href: `/` },
			],
		}),
	}),
	// ...
}

// Configures documents presentation tool should open by default when navigating to an URL
export const mainDocuments = defineDocuments([
	{
		route: '/work',
		filter: `_type == "workPage"`,
	},
	// ...
])
