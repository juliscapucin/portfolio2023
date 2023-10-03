import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getProjects() {
   const client = createClient(clientConfig);

   return client.fetch(
      groq`*[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      description,
      coverImage{
         alt,
         asset->{
           url
         }
       },
      thumbnailSize,
      url,
      images,
      category,
      content
   }`
   );
}

export async function getProject(slug: string) {
   const client = createClient(clientConfig);

   return client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      coverImage{
         alt,
         asset->{
           url
         }
       },
      thumbnailSize,
      url,
      images,
      category,
      content
   }`,
      { slug }
   );
}

export async function getWorkPage() {
   const client = createClient(clientConfig);

   return client.fetch(
      groq`*[_type == "workPage"][0] {
      title,
      description,
   }`
   );
}
