import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

const client = createClient(clientConfig);

export async function getProjects() {
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
       gridSize,
      thumbnailSize,
      url,
      images,
      category,
      content,
      services
   }`
   );
}

export async function getProject(slug: string) {
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
         gridSize,
      thumbnailSize,
      url,
      images,
      category,
      content,
      services
   }`,
      { slug }
   );
}

export async function getWorkPage() {
   return client.fetch(
      groq`*[_type == "workPage"][0] {
      title,
      description,
   }`
   );
}

export async function getAboutPage() {
   const client = createClient(clientConfig);

   return client.fetch(
      groq`*[_type == "aboutPage"][0] {
      title,
      description,
      coverImage{
         alt,
         asset->{
           url
         }
       },
       content1,
       content2,
         services
   }`
   );
}

export async function getSocialLinks() {
   const client = createClient(clientConfig);

   return client.fetch(
      groq`*[_type == "navigation" && title == "Socials"][0] {
         title,
      items
   }`
   );
}

export async function getNavbarLinks() {
   const client = createClient(clientConfig);

   return client.fetch(
      groq`*[_type == "navigation" && title == "Navbar"][0] {
         items[] {
            title,
            "slug": slug.current,
            _key
          }
   }`
   );
}
