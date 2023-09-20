import { useState, useRef, useEffect } from 'react';

interface ExperienceItemProps {
 title: string;
 description: string;
}

export default function ExperienceItem({
 title,
 description,
}: ExperienceItemProps) {
 const [showInfo, setShowInfo] = useState(false);
 const [itemHeight, setItemHeight] = useState(0);
 const refParagraph = useRef<HTMLParagraphElement | null>(null);

 useEffect(() => {
  if (!refParagraph.current) return;
  console.log(refParagraph.current.getBoundingClientRect().height);
  setItemHeight(refParagraph.current.getBoundingClientRect().height + 35);
 }, [refParagraph]);

 return (
  <article className='question'>
   <header>
    <button className='text-bodyLarge' onClick={() => setShowInfo(!showInfo)}>
     {title}
    </button>
    <button className='btn-accordion' onClick={() => setShowInfo(!showInfo)}>
     {`${showInfo ? 'Hide' : 'Show'}`}
    </button>
   </header>

   <div
    className={`transition-all overflow-hidden ${showInfo ? '' : ''}`}
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
  </article>
 );
}
