interface GridElementProps {
 text?: string;
 elementClass?: string;
 textClass?: string;
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
}

export default function GridElement({
 text,
 textClass,
 elementClass,
 top,
 right,
 bottom,
 left,
}: GridElementProps) {
 return (
  <div className={`grid-element ${elementClass}`}>
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
   <span className={textClass}>{text}</span>
  </div>
 );
}
