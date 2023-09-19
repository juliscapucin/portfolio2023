import { NextResponse } from 'next/server';

export async function GET() {
   const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'API-Key': process.env.storyblokApiKey || '', // Add a fallback value if DATA_API_KEY is undefined
   };

   const res = await fetch('https://data.mongodb-api.com/...', { headers });
   const data = await res.json();

   return NextResponse.json({ data });
}
