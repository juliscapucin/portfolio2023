import { NextResponse } from 'next/server';
import { getProjects } from '@sanity/sanity-utils';

export async function GET() {
   const projects = await getProjects();

   return NextResponse.json(projects, { status: 200 });
}
