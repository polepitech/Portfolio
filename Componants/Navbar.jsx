import React from 'react'
import SplitType from 'split-type';
import { gsap } from '@/lib/gsap';
import { useEffect, useRef } from "react";


export const Navbar = () => {
     useEffect(() => {
         
         const text = new SplitType('#case1');
         const text2 = new SplitType('#case2');
         const text3 = new SplitType('#case3');
         
         gsap.set('#case1 .char,#case2 .char,#case3 .char', {
                   y: '50%'
         });

        // gsap.to(".point", {duration: 2,
        //     scrollTrigger: {
        //         trigger:"body",
        //         start: "50% top",
        //         end: "120% top",
        //         // markers:true,
        //         scrub:true
        //     },
            
        //     x:"100vw",
        //     // ease: "elastic.in"
        // });

     }, [])

     function hoverTxt(nmbr){
        gsap.to("#"+nmbr+" .char", {
                duration: 1,
                y:"-50%",
                stagger:{
                  each:0.02,
                },
                ease: "power3.out",
        });
     }

     function dehoverTxt(nmbr){
        gsap.to("#"+nmbr+" .char", {
                duration: 1,
                y:"50%",
                stagger:{
                  each:0.02,
                },
                ease: "power3.out",
        });

    }
    function navTo(id){
        gsap.to(window, { duration: 2, scrollTo: {y:id,autoKill:true}});
    }
  return (
    <div className='w-full flex justify-around items-center h-10 bg-black text-white fixed top-0 z-50 text-Rubik '>
        {/* <div className="point absolute -top-[2px] -left-[100vw] w-full h-1  bg-white"></div> */}
            <div className='hidden sm:flex absolute left-0 top-0 p-2 justify-center items-center cursor-pointer' onClick={() => navTo('#home')}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
            </div>
            <div id='case1' className="case overflow-hidden h-4 flex flex-col justify-center items-center cursor-pointer p-3 pl-[5vw] pr-[5vw]" onMouseOver={() => {hoverTxt('case1')}} onMouseLeave={() => {dehoverTxt('case1')}} onClick={() => navTo('#projetWeb')}>
                <p className='text-center font-light flex justify-center' href="#home">Projet Web</p>
                <p className='text-center font-black' href="#home">Projet Web</p>
            </div>
            <div id='case2' className="case overflow-hidden h-4 flex flex-col justify-center items-center cursor-pointer p-3 pl-[5vw] pr-[5vw]" onMouseOver={() => {hoverTxt('case2')}} onMouseLeave={() => {dehoverTxt('case2')}} onClick={() => navTo('#projetMusique')}>
                <p className='text-center font-light flex justify-center' href="#home">Musique</p>
                <p className='text-center font-black' href="#home">Musique</p>
            </div>
            <div id='case3' className="case overflow-hidden h-4 flex flex-col justify-center items-center cursor-pointer p-3 pl-[5vw] pr-[5vw]" onMouseOver={() => {hoverTxt('case3')}} onMouseLeave={() => {dehoverTxt('case3')}} onClick={() => navTo('#contactSection')}>
                <p className='text-center font-light flex justify-center' href="#home">Contact</p>
                <p className='text-center font-black' href="#home">Contact</p>
            </div>
    </div>
  )
}
