import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { WorkPage } from '@/components/pages';

import { getProjects, getWorkPage } from '@/lib';

export const metadata: Metadata = {
 title: 'Work',
 description: 'A list of projects I have worked on.',
};

const workPageData = getWorkPage();
const allProjectsData = getProjects();

export default async function Page() {
 const [data, allProjects] = await Promise.all([workPageData, allProjectsData]);

 if (!data || !allProjects) return notFound();

 return <WorkPage data={data} allProjects={allProjects} />;
}
