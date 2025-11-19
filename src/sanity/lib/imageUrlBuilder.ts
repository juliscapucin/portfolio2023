import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import { ImageType } from '@/types'

const builder = imageUrlBuilder(client)

export function urlFor(source: ImageType) {
	return builder.image(source)
}
