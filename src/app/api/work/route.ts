import { NextResponse } from 'next/server';
import { getWorkPage } from '@sanity/sanity-utils';

export async function GET() {
   const res = await getWorkPage();

   return NextResponse.json(res, { status: 200 });
}
