import { notFound } from 'next/navigation';

import { getProjects } from '@/lib';
import { HomePage } from '@/components/pages';

const allProjectsData = getProjects();

export default async function page() {
 const allProjects = await allProjectsData;

 //  if (!allProjects) return notFound();
 return <HomePage allProjects={allProjects} />;
}
