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
  return { title: 'Project Not Found', description: 'Project not found' };
 }

 return {
  title: project.title,
  description: `${project.category} – ${project.title}`,
 };
}

const allProjectsData = getProjects();

export default async function Page({ params }: { params: { slug: string } }) {
 const { slug } = params;
 const projectData = getProject(slug);

 const [project, allProjects] = await Promise.all([
  projectData,
  allProjectsData,
 ]);

 if (!project) return notFound();

 return (
  <ProjectPage project={project} allProjects={allProjects} isShallow={false} />
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

// Revalidation – Incremental Static Regeneration
export const revalidate = 30; // 300 seconds = 5 minutes
