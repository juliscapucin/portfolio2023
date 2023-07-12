interface GridElementProps {
 text?: string;
 elementClass?: string;
 textClass?: string;
 hoverClass?: string;
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
}

export default function GridElement({
 text,
 textClass,
 hoverClass,
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
   <span className={`select-none ${textClass}`}>{text}</span>
   <div
    className={`h-full w-full opacity-0 hover:opacity-100 ${hoverClass}`}
   ></div>
  </div>
 );
}
