'use client';
import React, { useEffect, useState } from 'react';
import { gsap } from "@/lib/gsap";


export const ProjetMusique = () => {
  const [posX, setPosX] = useState(0.0);
  const [posY, setPosY] = useState(0.0);


  useEffect(() => {
    const MoveElement = (e) => {
      const currX = (e.clientX / window.innerWidth - 0.5) * 2; // entre -1 et 1;
      const currY = (e.clientY / window.innerHeight - 0.5) * 2; // entre -1 et 1;

      setPosX(currX*100);
      setPosY(currY*50);

    };

    gsap.from(".entry", {
            scrollTrigger: {
              trigger:".albumParralax",
              start: "top bottom",
              },
            scale: 3,
            duration: 2,
            ease: "sine.inOut",
            stagger:{
                each:0.3,
            }
            });


    window.addEventListener('mousemove', MoveElement);

    return () => {
      window.removeEventListener('mousemove', MoveElement);
    };
  }, []);

  

  return (
    <div className="projet flex relative w-screen h-screen cursor-pointer">
        <div className="albumParralax relative w-[40vw] h-[40vw] bg-red-500 m-auto overflow-hidden" style={{ transform: `translateX(${posX/7}px) translateY(${posY/7}px)`}}>

        <img className='entry w-[80vw] absolute top-[-10px]' src='/Assets/Images/Ninho/ciel.jpg' style={{ transform: `translateX(${posX}px) translateY(${posY}px) scale(2)` }}></img>
        <img className='entry w-[80vw] absolute top-[-10px] opacity-40' src='/Assets/Images/Ninho/cloud2.png' style={{ transform: `translateX(${posX/3}px) translateY(${posY/3}px) scale(2)`}}></img>
      1
        <img className='entry w-[40vw] absolute top-[-10px]' src='/Assets/Images/Ninho/logoC.png'style={{ transform: `translateX(${posX/1.4}px) translateY(${posY/1.4}px)`}}></img>
        <img className='entry w-[40vw] absolute top-[-10px]' src='/Assets/Images/Ninho/vitre.png' style={{transform:`scale(1.2) translateX(${posX/10}px) translateY(${posY/10}px)`}}></img>
        <img className='entry w-[40vw] absolute top-[-10px]' src='/Assets/Images/Ninho/Ni.png'style={{transform:`translateY(20px) scale(1.2)`}}></img>
        </div>
        <p className='jefe text-yellow-400 text-4xl absolute z-1 bottom-[5vw] w-[50vw] left-[25vw] flex justify-between'>
            <span>J</span>
            <span>E</span>
            <span>F</span>
            <span>E</span>
        </p>
    </div>

  )
}
