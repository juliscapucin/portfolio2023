import { NextResponse } from 'next/server';
import { getProject } from '@sanity/sanity-utils';

export async function GET(_: any, { params }: { params: { slug: string } }) {
   const res = await getProject(params.slug);
   const project = await res.json();

   if (!res.ok)
      return NextResponse.json(
         { error: 'Cannot find project' },
         { status: 404 }
      );

   return NextResponse.json(project, { status: 200 });
}
