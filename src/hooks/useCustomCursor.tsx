import { useEffect, useRef, useState } from 'react';

export const useCustomCursor = (refCursor, refFollower) => {
 const positionRef = useRef({
  // current position
  mouseX: 0,
  mouseY: 0,

  // next position
  destinationX: 0,
  destinationY: 0,

  // distance between current and next
  distanceX: 0,
  distanceY: 0,
  key: -1,
 });

 useEffect(() => {
  const mouseMove = (e) => {
   const { clientX: mouseX, clientY: mouseY } = e;

   positionRef.current.mouseX = mouseX - refFollower.current.clientWidth / 2;
   positionRef.current.mouseY = mouseY - refFollower.current.clientHeight / 2;

   refCursor.current.style.transform = `translate3d(${
    mouseX - refCursor.current.clientWidth / 2
   }px, ${mouseY - refCursor.current.clientHeight / 2}px, 0)`;
  };

  document.addEventListener('mousemove', (e) => mouseMove(e));

  return () => {
   document.removeEventListener('mousemove', (e) => mouseMove(e));
  };
 }, []);

 useEffect(() => {
  const followMouse = () => {
   positionRef.current.key = requestAnimationFrame(followMouse);

   const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
    positionRef.current;

   if (!destinationX || !destinationY) {
    positionRef.current.destinationX = mouseX;
    positionRef.current.destinationY = mouseY;
   } else {
    positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
    positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

    if (
     Math.abs(positionRef.current.distanceX) +
      Math.abs(positionRef.current.distanceY) <
     0.1
    ) {
     positionRef.current.destinationX = mouseX;
     positionRef.current.destinationY = mouseY;
    } else {
     positionRef.current.destinationX += distanceX;
     positionRef.current.destinationY += distanceY;
    }
   }

   refFollower.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
  };

  followMouse();

  return () => {};
 }, []);
};
