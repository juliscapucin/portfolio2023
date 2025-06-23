import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

export default async function getAboutPage() {
 const client = createClient(clientConfig);
 const res = await client.fetch(
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
}`,
 );

 if (!res) return undefined;

 return res;
}
