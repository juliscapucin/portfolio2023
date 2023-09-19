import { useState, useRef, useEffect } from 'react';

interface ExperienceItem {
 id: number;
 title: string;
 description: string;
}

interface ExperienceProps {
 experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
 const [showInfo, setShowInfo] = useState(false);
 const [itemHeight, setItemHeight] = useState(0);
 const refParagraph = useRef<HTMLParagraphElement | null>(null);

 useEffect(() => {
  if (!refParagraph.current) return;
  setItemHeight(refParagraph.current.getBoundingClientRect().height + 35);
 }, [refParagraph]);

 return (
  <section>
   <h2>Work Experience</h2>
   <div className='description'>
    {experience.map((item) => {
     return (
      <article className='question'>
       <header>
        <button className='btn-title' onClick={() => setShowInfo(!showInfo)}>
         <p>
          <strong>{item.title}</strong>
         </p>
        </button>
        <button
         className='btn-accordion'
         onClick={() => setShowInfo(!showInfo)}
        >
         {`${showInfo ? 'Hide' : 'Show'}`}
        </button>
       </header>

       <div
        className={showInfo ? 'active' : 'inactive'}
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
        <p ref={refParagraph}>{item.description}</p>
       </div>
      </article>
     );
    })}
   </div>
  </section>
 );
}
