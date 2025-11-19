import { defineQuery } from 'next-sanity'

import type { CaseType, NavLinkType, PageType, ConnectPageType } from '@/types'
import { client } from '@/sanity/lib/client'

export async function getNavLinks(): Promise<NavLinkType[]> {
	const query = defineQuery(`*[_type == "navLink"]|order(order asc) {
			label,
			"slug": slug.current,
		 }`)

	const data = await client.fetch(query)

	return data
}

export async function getPageContent($type: string): Promise<PageType> {
	const query = defineQuery(`*[_type == "${$type}"][0] {
			title,
			subtitle,
			metadataTitle,
			metadataDescription,
			metadataKeywords,
		 }`)

	const data = await client.fetch(query)
	return data
}

export async function getAllCases(): Promise<CaseType[]> {
	const query = defineQuery(`*[_type == "case"]|order(publishedOn desc) {
			title,
			"slug": slug.current,
			"mainImage": mainImage.asset->url,
			client,
			publishedOn,
		 }`)

	const cases = await client.fetch(query)
	return cases
}

export async function getCaseBySlug(slug: string) {
	const query = defineQuery(`*[_type == "case" && slug.current == $slug][0] {
				title,
				"slug": slug.current,
				"mainImage": mainImage.asset->url,
				client,
				role,
				services,
				publishedOn,
				"services": services[].label,
				intro,
				body[]{
					...,
					// for images: include needed asset fields
					_type == "image" => {
						...,
						"src": asset->url
					}
				},
				metadataTitle,
				metadataDescription,
				metadataKeywords,
			 }`)
	const caseData = await client.fetch(query, { slug })
	return caseData
}

export async function getAllCasesSlugs() {
	const query = defineQuery(`*[_type == "case"] {
			"slug": slug.current,
			client,
		 }`)

	const casesSlugs = await client.fetch(query)
	return casesSlugs
}

export async function getAllServices() {
	const query = defineQuery(`*[_type == "service"]|order(publishedOn desc) {
			title,
			description,
		 }`)

	const services = await client.fetch(query)
	return services
}

export async function getAllArticles() {
	const query = defineQuery(`*[_type == "article"]|order(publishedOn desc) {
			title,
			url,
			publication,
			publishedOn,
		 }`)

	const articles = await client.fetch(query)
	return articles
}

export async function getConnectPageContent(): Promise<ConnectPageType> {
	const query = defineQuery(`*[_type == "connectPage"][0] {
			title,
			subtitle,
			cta,
			email,
			socials[] {
				label,
				url,
			},
			metadataTitle,
			metadataDescription,
			metadataKeywords,
		 }`)

	const connectPageContent = await client.fetch(query)
	return connectPageContent
}
