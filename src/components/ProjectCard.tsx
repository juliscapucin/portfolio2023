import Link from 'next/link';

interface ProjectCardProps {
 title: string;
 description: string;
 slug: string;
}

export default function ProjectCard({
 title,
 description,
 slug,
}: ProjectCardProps) {
 return (
  <div className='project-card'>
   <h3 className='project-card__title'>{title}</h3>
   <p className='project-card__description'>{description}</p>
   <Link className='project-card__link' href={`/projects/${slug}`}>
    View Project
   </Link>
  </div>
 );
}
