import { createClient, groq } from 'next-sanity';
import clientConfig from '@sanity/config/client-config';

export default async function getWorkPage() {
 const client = createClient(clientConfig);
 const res = await client.fetch(
  groq`*[_type == "workPage"][0] {
	title,
	description,
}`,
  { next: { revalidate: 3600 } }
 );

 if (!res) return undefined;

 return res;
}
