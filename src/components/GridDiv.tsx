'use client';

interface GridDivProps {
 top?: boolean;
 right?: boolean;
 bottom?: boolean;
 left?: boolean;
 children?: React.ReactNode;
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
  <div className={`grid-element relative overflow-hidden ${divClass}`}>
   {top ? (
    <div className='line absolute translate-x-0 translate-y-0 bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0 bg-primary'></div>
   )}
   {right ? (
    <div className='line absolute translate-x-0 translate-y-0 bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0 bg-primary'></div>
   )}
   {bottom ? (
    <div className='line absolute translate-x-0 translate-y-0 bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0 bg-primary'></div>
   )}
   {left ? (
    <div className='line absolute translate-x-0 translate-y-0 bg-secondary'></div>
   ) : (
    <div className='line-transparent absolute translate-x-0 translate-y-0 bg-primary'></div>
   )}
   {children}
  </div>
 );
}
