import { NextResponse } from 'next/server';
import { getWorkPage } from '@sanity/sanity-queries';

export async function GET() {
   const res = await getWorkPage();

   // if (!res.ok)
   //    return NextResponse.json(
   //       { error: 'Cannot find page data' },
   //       { status: 404 }
   //    );

   return NextResponse.json(res, { status: 200 });
}
