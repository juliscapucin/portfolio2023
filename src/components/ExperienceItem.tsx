import { useState, useRef, useEffect } from 'react';
import { GridDiv } from '@/components/ui';
import { ButtonPlus, ButtonMinus } from '@/components/buttons';

interface ExperienceItemProps {
 title: string;
 date: string;
 description: string;
}

export default function ExperienceItem({
 title,
 date,
 description,
}: ExperienceItemProps) {
 const [showInfo, setShowInfo] = useState(false);
 const [itemHeight, setItemHeight] = useState(0);
 const refParagraph = useRef<HTMLParagraphElement | null>(null);

 useEffect(() => {
  if (!refParagraph.current) return;
  setItemHeight(refParagraph.current.getBoundingClientRect().height + 35);
 }, [refParagraph]);

 return (
  <GridDiv divClass={'w-full px-2'} top={true} bottom={true}>
   <button
    className='text-bodyLarge w-full flex items-center justify-between h-32'
    onClick={() => setShowInfo(!showInfo)}
   >
    <div className='flex flex-col items-start'>
     <span className='block'>{title}</span>
     <span>{date}</span>
    </div>
    <div className='h-full flex items-center justify-end'>
     {showInfo ? <ButtonMinus /> : <ButtonPlus />}
    </div>
   </button>

   <div
    className={`transition-all overflow-hidden`}
    style={
     showInfo
      ? {
         height: `${refParagraph.current ? itemHeight : 0}px`,
        }
      : {
         height: 0,
        }
    }
   >
    <p ref={refParagraph}>{description}</p>
   </div>
  </GridDiv>
 );
}
