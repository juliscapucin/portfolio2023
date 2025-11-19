import { NextResponse } from 'next/server';
import { getServices } from '@/sanity/sanity-queries';

export async function GET() {
   const res = await getServices();

   return NextResponse.json(res, { status: 200 });
}
