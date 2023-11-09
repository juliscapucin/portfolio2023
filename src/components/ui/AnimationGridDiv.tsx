interface AnimationGridDivProps {
 children?: React.ReactNode;
 divClass?: string;
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
}

export default function AnimationGridDiv({
 children,
 divClass,
 top,
 right,
 bottom,
 left,
}: AnimationGridDivProps) {
 return (
  <div
   className={`animation-grid-element w-full h-full overflow-hidden ${divClass}`}
  >
   {top ? (
    <div className='static-line absolute bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0'></div>
   )}
   {right ? (
    <div className='static-line absolute bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0'></div>
   )}
   {bottom ? (
    <div className='static-line absolute bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0'></div>
   )}
   {left ? (
    <div className='static-line absolute bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0'></div>
   )}
   {children}
  </div>
 );
}
