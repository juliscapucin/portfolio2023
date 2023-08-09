interface AnimationGridDivProps {
 children?: React.ReactNode;
 divClass?: string;
}

export default function AnimationGridDiv({
 children,
 divClass,
}: AnimationGridDivProps) {
 return (
  <div className={`animation-grid-element ${divClass}`}>
   <div className='static-line'></div>
   <div className='static-line'></div>
   <div className='static-line'></div>
   <div className='static-line'></div>
   {children}
  </div>
 );
}
