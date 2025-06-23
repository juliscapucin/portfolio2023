import { notFound } from 'next/navigation';

import { getProject, getProjects } from '@/lib';
import { ProjectPage } from '@/components/pages';

type Params = {
 params: Promise<{
  slug: string;
 }>;
};

export async function generateMetadata(props: Params) {
 const params = await props.params;

 const {
  slug
 } = params;

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

export default async function Page(props: { params: Promise<{ slug: string }> }) {
 const params = await props.params;
 const { slug } = params;
 const projectData = getProject(slug);
 const allProjectsData = getProjects();

 const [project, allProjects] = await Promise.all([
  projectData,
  allProjectsData,
 ]);

 if (!project) return notFound();

 return (
  <ProjectPage project={project} allProjects={allProjects} isShallow={true} />
 );
}
