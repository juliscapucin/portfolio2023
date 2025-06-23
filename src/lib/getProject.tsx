import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

export default async function getProject(slug: string) {
 const client = createClient(clientConfig);
 const res = await client.fetch(
  groq`*[_type == "project" && slug.current == $slug][0]{
   _id,
   title,
   "slug": slug.current,
   description,
   coverImage{
      fileName,
      alt,
    },
      gridSize,
   thumbnailSize,
   url,
   images,
   isWeb,
   category,
   "textContent1": content1[]{
      children[0]{
        text,
        _key
      }
    },
    "textContent2": content1[]{
      children[0]{
        text,
        _key
      }
    },
   info[0]{
      tech,
      scope,
      link
   }
}`,
  { slug },
 );

 if (!res) return undefined;

 return res;
}
