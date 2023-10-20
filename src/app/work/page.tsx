import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { WorkPage } from '@/components/pages';

import { getWorkPage } from '@/lib';

export const metadata: Metadata = {
 title: 'Work',
 description: 'A list of projects I have worked on.',
};

export default async function Page() {
 const projectData = getWorkPage();
 const data = await projectData;

 if (!data) return notFound();

 return <WorkPage data={data} />;
}
