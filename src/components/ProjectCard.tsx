'use client';

import { GridDiv } from '@/components';
import { handleShallowClick } from '@/utils';

import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from '@/components/ui/tooltip';

import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';

interface ProjectCardProps {
 title: string;
 description?: string;
 slug: string;
}

export default function ProjectCard({
 title,
 description,
 slug,
}: ProjectCardProps) {
 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <Select>
    <SelectTrigger className='w-[180px]'>
     <SelectValue placeholder='Theme' />
    </SelectTrigger>
    <SelectContent>
     <SelectItem value='light'>Light</SelectItem>
     <SelectItem value='dark'>Dark</SelectItem>
     <SelectItem value='system'>System</SelectItem>
    </SelectContent>
   </Select>

   <TooltipProvider>
    <Tooltip>
     <TooltipTrigger>Hover</TooltipTrigger>
     <TooltipContent>
      <p>Add to library</p>
     </TooltipContent>
    </Tooltip>
   </TooltipProvider>

   <button
    className='h-full w-full flex justify-start items-center text-7xl'
    onClick={(e) => handleShallowClick(e, `/projects/${slug}`)}
   >
    <span className='font-headline text-7xl font-thin ml-8'>{title}</span>
   </button>
  </GridDiv>
 );
}
