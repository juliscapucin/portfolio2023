import { useEffect, useRef, useState } from 'react';
import { useCustomCursor } from '@/hooks';

export default function CustomCursor() {
 const refCursor = useRef(null);
 const refFollower = useRef(null);
 const [isHovering, setIsHovering] = useState(false);

 useCustomCursor(refCursor, refFollower);

 return (
  <div className='customcursor__cursor' ref={refCursor}>
   <div className='customcursor__follower' ref={refFollower}>
    <div
     className={`customcursor__follower__inner ${isHovering ? 'active' : ''}`}
    >
     <h4>OPEN</h4>
    </div>
   </div>
  </div>
 );
}
