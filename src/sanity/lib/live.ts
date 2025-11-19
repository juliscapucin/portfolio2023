// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { createClient } from 'next-sanity'
import { defineLive } from 'next-sanity/live'

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	stega: { studioUrl: '/studio' },
})

const token = process.env.SANITY_VIEWER_TOKEN
if (!token) {
	throw new Error('Missing SANITY_VIEWER_TOKEN')
}

export const { sanityFetch, SanityLive } = defineLive({
	client,
	serverToken: token,
	browserToken: token,
})
