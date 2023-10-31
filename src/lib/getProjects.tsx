import { createClient, groq } from 'next-sanity';
import clientConfig from '@sanity/config/client-config';

export default async function getWorkPage() {
 const client = createClient(clientConfig);
 const res = await client.fetch(
  groq`*[_type == "project"] | order(releaseDate desc){
   _id,
   releaseDate,
   title,
   "slug": slug.current,
   coverImage{
      fileName,
      alt,
    },
    gridSize,
   imageSize,
   imageStart,
   url,
   category,
   services,
   info[0]{
      scope,
   }
}`
 );

 if (!res) return undefined;

 return res;
}
