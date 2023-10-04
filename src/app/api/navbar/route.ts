import { NextResponse } from 'next/server';
import { getNavbarLinks } from '@sanity/sanity-queries';

export async function GET() {
   const data = await getNavbarLinks();

   return NextResponse.json(data, { status: 200 });
}
