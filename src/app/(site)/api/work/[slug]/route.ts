import { NextResponse } from 'next/server';
import { getProject } from '@/sanity/sanity-queries';

export const dynamic = 'force-dynamic';

export async function GET(_: any, props: { params: Promise<{ slug: string }> }) {
   const params = await props.params;
   const slug = params.slug;
   const res = await getProject(slug);

   // if (!res.ok)
   //    return NextResponse.json(
   //       { error: 'Cannot find project' },
   //       { status: 404 }
   //    );

   return NextResponse.json(res, { status: 200 });
}
