import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

const client = createClient(clientConfig);

export async function getProjects() {
   return client.fetch(
      groq`*[_type == "project"]{
      _id,
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
}

export async function getProject(slug: string) {
   return client.fetch(
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
      category,
      "textContent1": content1[]{
         children[0]{
           text,
           _key
         }
       },
       "textContent2": content2[]{
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
   return client.fetch(
      groq`*[_type == "navigation" && title == "Socials"][0] {
         title,
      items
   }`
   );
}

export async function getNavbarLinks() {
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

export async function getServices() {
   return client.fetch(
      groq`*[_type == "services"][0] {
         services[]
   }`
   );
}
