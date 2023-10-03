import { NextResponse } from 'next/server';
import { getProject } from '@sanity/sanity-utils';

export const dynamic = 'force-dynamic';

export async function GET(_: any, { params }: { params: { slug: string } }) {
   const slug = params.slug;
   const res = await getProject(slug);

   // if (!res.ok)
   //    return NextResponse.json(
   //       { error: 'Cannot find project' },
   //       { status: 404 }
   //    );

   return NextResponse.json(res, { status: 200 });
}
