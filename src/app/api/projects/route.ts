import { NextResponse } from 'next/server';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@sanity/config/client-config';

export async function GET() {
   const client = createClient(clientConfig);
   const projects = await client.fetch(
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
      content
   }`,
      {
         next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
   );

   return NextResponse.json(projects, { status: 200 });
}
