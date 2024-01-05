const AnimatedLinkLabel = ({ title }: { title: string }) => {
 return (
  <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
   <span className='font-headline text-headlineSmall uppercase text-secondary'>
    {title}
   </span>
   <span className='font-headline text-headlineSmall uppercase text-secondary'>
    {title}
   </span>
  </div>
 );
};

export default AnimatedLinkLabel;
