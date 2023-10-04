import { NextResponse } from 'next/server';
import { getAboutPage } from '@sanity/sanity-queries';

export async function GET() {
   const about = await getAboutPage();

   return NextResponse.json(about, { status: 200 });
}
