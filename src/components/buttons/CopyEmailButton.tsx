import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function CopyEmailButton() {
 const [showCopyFeedback, setShowCopyFeedback] = useState(false);
 const labelRef = useRef(null);

 const copyToClipboard = () => {
  navigator.clipboard
   .writeText('hello@juliscapucin.com')
   .then(() => {
    setShowCopyFeedback(true);
    setTimeout(() => setShowCopyFeedback(false), 2000);
   })
   .catch((err) => {
    console.error('Failed to copy email address: ', err);
   });
 };

 useLayoutEffect(() => {
  if (!showCopyFeedback) return;

  let ctx = gsap.context(() => {});

  ctx.add(() => {
   gsap.fromTo(
    labelRef.current,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.1, ease: 'power1.out' }
   );
  });

  return () => ctx.revert();
 }, [showCopyFeedback]);

 return (
  <div className='relative h-16 mt-8'>
   {showCopyFeedback && (
    <div ref={labelRef} className='absolute -top-8 w-full flex justify-center'>
     <span className='bg-secondary px-2 text-primary text-labelSmall uppercase whitespace-nowrap'>
      Copied to clipboard!
     </span>
    </div>
   )}
   <button className='group overflow-hidden h-8' onClick={copyToClipboard}>
    <div className='flex flex-col text-labelSmall group-hover:-translate-y-1/2 transition-transform duration-200'>
     <span>Copy email address</span>
     <span>Copy email address</span>
    </div>
   </button>
  </div>
 );
}
