import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { Project } from '@/types';

import { getProject, getProjects } from '@/lib';
import { ProjectPage } from '@/components/pages';

type Params = {
 params: {
  slug: string;
 };
};

export async function generateMetadata({ params: { slug } }: Params) {
 const projectData = getProject(slug);
 const project = await projectData;

 if (!project) {
  return { title: 'User Not Found', description: 'User not found' };
 }

 return {
  title: project.title,
  description: `${project.category} – ${project.title}`,
 };
}

export default async function Page({ params }: { params: { slug: string } }) {
 const { slug } = params;
 const projectData = getProject(slug);
 const allProjectsData = getProjects();

 const [project, allProjects] = await Promise.all([
  projectData,
  allProjectsData,
 ]);

 if (!project) return notFound();

 return (
  <Suspense fallback={<h1>Loading...</h1>}>
   <ProjectPage project={project} allProjects={allProjects} isShallow={false} />
  </Suspense>
 );
}

// SSG – Static Site Generation
export async function generateStaticParams() {
 const projectData = getProjects();
 const projects: Project[] = await projectData;

 return projects.map((project) => {
  return {
   projectSlug: project.slug,
  };
 });
}
