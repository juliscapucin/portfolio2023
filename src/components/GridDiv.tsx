interface GridDivProps {
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
 children: React.ReactNode;
 divClass?: string;
}

export default function GridDiv({
 top,
 right,
 bottom,
 left,
 children,
 divClass,
}: GridDivProps) {
 return (
  <div className={`grid-element ${divClass}`}>
   {top ? (
    <div className='line'></div>
   ) : (
    <div className='line-transparent'></div>
   )}
   {right ? (
    <div className='line'></div>
   ) : (
    <div className='line-transparent'></div>
   )}
   {bottom ? (
    <div className='line'></div>
   ) : (
    <div className='line-transparent'></div>
   )}
   {left ? (
    <div className='line'></div>
   ) : (
    <div className='line-transparent'></div>
   )}
   {children}
  </div>
 );
}
