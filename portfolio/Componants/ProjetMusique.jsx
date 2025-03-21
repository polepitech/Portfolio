'use client';
import React, { useEffect } from 'react';
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjetMusique = () => {
  useEffect(() => {
    document.querySelectorAll(".entry").forEach((el) => {
      const myscale = el.dataset.scale || 1;
      gsap.set(el, { scale: myscale, x: 0, y: 0 });
    })

    const MoveElement = (e) => {
      const currX = (e.clientX / window.innerWidth - 0.5) * 2;
      const currY = (e.clientY / window.innerHeight - 0.5) * 2;

      document.querySelectorAll(".para").forEach((el) => {
        const speed = el.dataset.speed || 1;
        gsap.to(el, {
          x: currX * 100 * speed,
          y: currY * 50 * speed,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    gsap.from(".entry", {
      scrollTrigger: {
        trigger: ".albumParralax",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions:"play reverse replay reverse"
      },
      scale: 3,
      duration: 2,
      ease: "sine.inOut",
      stagger: {
        each: 0.3,
      },
    });

    gsap.from(".letter", {
      scrollTrigger: {
        trigger: ".jefetxt",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions:"play reverse replay reverse",
      },
      y: 200,
      duration: 1,
      ease: "power1.inOut",
      stagger: {
        each: 0.2,
      },
    });

    window.addEventListener("mousemove", MoveElement);

    return () => {
      window.removeEventListener("mousemove", MoveElement);
    };
  }, []);

  return (
    <div className="projet flex relative w-screen h-screen cursor-pointer">
      <div className="para albumParralax relative w-[40vw] h-[40vw] bg-red-500 m-auto overflow-hidden" data-speed="0.1">
        <img className='entry para w-[80vw] absolute top-[-10px]' src='/Assets/Images/Ninho/ciel.jpg' data-speed="1.4" data-scale="2"/>
        <img className='entry para w-[80vw] absolute top-[-10px] opacity-40' src='/Assets/Images/Ninho/cloud2.png' data-speed="1.5"  data-scale="2"/>
        <img className='entry para w-[40vw] absolute top-[-10px]' src='/Assets/Images/Ninho/logoC.png' data-speed="0.8" />
        <img className='entry para w-[40vw] absolute top-[-10px]' src='/Assets/Images/Ninho/vitre.png' data-speed="0.2"  data-scale="1.2"/>
        <img className='entry para w-[40vw] absolute top-[-10px]' src='/Assets/Images/Ninho/Ni.png' data-speed="0.1"  data-scale="1.2"/>
      </div>
      <div className='jefetxt text-yellow-400 text-4xl absolute z-1 bottom-[10vh] w-[50vw] left-[25vw] flex justify-between'>
        <div className='overflow-hidden'><div className='letter'>J</div></div>
        <div className='overflow-hidden'><div className='letter'>E</div></div>
        <div className='overflow-hidden'><div className='letter'>F</div></div>
        <div className='overflow-hidden'><div className='letter'>E</div></div>
      </div>
    </div>
  );
};
