import { notFound } from 'next/navigation';

import { getProjects } from '@/lib';
import { HomePage } from '@/components/pages';

export default async function page() {
 const allProjectsData = getProjects();

 const allProjects = await allProjectsData;

 if (!allProjects) return notFound();
 return <HomePage allProjects={allProjects} />;
}
