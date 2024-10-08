import { NextResponse } from 'next/server';
import { getSocialLinks } from '@/sanity/sanity-queries';

export async function GET() {
   const data = await getSocialLinks();

   return NextResponse.json(data, { status: 200 });
}
