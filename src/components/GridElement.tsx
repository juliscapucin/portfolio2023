interface GridElementProps {
 text?: string;
 buttonLabel?: string;
 divClass?: string;
 width?: string;
 textClass?: string;
 hoverClass?: string;
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
}

export default function GridElement({
 text,
 buttonLabel,
 textClass,
 hoverClass,
 divClass,
 width,
 top,
 right,
 bottom,
 left,
}: GridElementProps) {
 return (
  <div
   className={`grid-element h-full ${width ? width : 'w-full'} ${
    divClass ? divClass : ''
   }`}
  >
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
   {text && (
    <span className={`select-none ${textClass ? textClass : ''}`}>{text}</span>
   )}
   {buttonLabel && (
    <button className={`select-none ${textClass ? textClass : ''}`}>
     {buttonLabel}
    </button>
   )}
   <div
    className={`opacity-0 hover:opacity-100 ${hoverClass ? hoverClass : ''}`}
   ></div>
  </div>
 );
}
