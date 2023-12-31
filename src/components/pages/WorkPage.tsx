'use client';

import { breakpoints } from '@/constants';

import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';
import { Footer, ProjectsMenu } from '@/components';
import { Title } from '@/components/ui';

import { Project } from '@/types';
import { useEnterTransitionDirection } from '@/hooks';

type Props = {
 data: { title: string; description: string };
 allProjects: Project[];
};

export default function WorkPage({ data, allProjects }: Props) {
 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);
 const { pageRef } = usePageContext();

 useEnterTransitionDirection(pageRef);

 return (
  <div ref={pageRef} className='page work-page pt-64'>
   <Title title={data.title} />
   <p className='text-titleLarge md:text-headlineSmall mt-4 lg:mt-0 lg:w-4/6'>
    {data.description}
   </p>
   <ProjectsMenu
    startVariant='image'
    activeBreakpoint={breakpoint}
    allProjects={allProjects}
    startCategory='all'
   />
   <Footer />
  </div>
 );
}
