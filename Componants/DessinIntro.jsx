'use client'
import React, { useEffect } from 'react'
import { LogoBox } from './LogoBox'
import { gsap } from '@/lib/gsap'

export const DessinIntro = () => {

    useEffect(() => {
        gsap.set('.layerDessin',{x:"-50%"});
        gsap.from(".layerDessin", 
          {   duration: 0.3,
              y: 20,
              duration: 3,
              repeat: -1,
              yoyo:true,
              // force2D: true,
              ease: "sine.inOut",
              stagger:{
                each:0.4
              }
          });

        gsap.to(".casquette", {duration: 2,
                scrollTrigger: {
                trigger:".DessinEtBox",
                start: "1% 20%",
                scrub:true,
                force2D: true,
                // markers:true, 
                pin:true  
                },
                rotateZ:180,
            });
         
      
    }, [])
    


  return (
    <div className='top-[20vh] DessinEtBox h-[100vh] sticky hidden sm:flex'>
        <div className="Dessin relative top-0 md:-top-20 h-[100vh] w-screen pointer-events-none z-10">
            <img alt='layer du dessin' className='h-[60vh] sm:h-[100vh] object-cover left-[50%] absolute layerDessin will-change-[transform]  top-4 z-10 casquette origin-right' src='/Assets/Images/Paul/Casquette.png'></img>
            <img alt='layer du dessin' className='h-[60vh] sm:h-[100vh] object-cover left-[50%] absolute layerDessin will-change-[transform] z-9' src='/Assets/Images/Paul/tete.png'></img>
            <img alt='layer du dessin' className='h-[60vh] sm:h-[100vh] object-cover left-[50%] absolute layerDessin will-change-[transform] z-8' src='/Assets/Images/Paul/coup.png'></img>
        </div>
        <LogoBox/>
    </div>
  )
}
