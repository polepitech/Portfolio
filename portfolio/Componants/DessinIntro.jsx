'use client'
import React, { useEffect } from 'react'
import { LogoBox } from './LogoBox'
import { gsap } from '@/lib/gsap'

export const DessinIntro = () => {

    useEffect(() => {
        gsap.from(".layerDessin", 
          {   duration: 0.3,
              y: 20,
              duration: 3,
              repeat: -1,
              yoyo:true,
              ease: "sine.inOut",
              stagger:{
                each:0.2
              }
          });

        gsap.to(".casquette", {duration: 2,
                scrollTrigger: {
                trigger:".DessinEtBox",
                start: "1% 20%",
                scrub:true,
                markers:true, 
                pin:true  
                },
                rotateZ:180,
            });
         
            // gsap.to(".DessinEtBox", {duration: 2,
            //     scrollTrigger: {
            //     trigger:".spacing",
            //     start: "top bottom",
            //     scrub:true,
            //     },
            //     scale:70,
            //     ease:'power1.in',
            //     markers:true,
            // });
   
       
      
    }, [])
    


  return (
    <div className='top-[20vh] DessinEtBox origin-[52.3vw_33%] h-[100vh] sticky'>
        <div className="Dessin relative -top-20 h-[100vh] pointer-events-none z-10">
            <img className='h-[100vh] object-cover left-[50%] translate-x-[-50%] absolute layerDessin  top-4 z-10 casquette origin-right' src='/Assets/Images/Paul/Casquette.png'></img>
            <img className='h-[100vh] object-cover left-[50%] translate-x-[-50%] absolute layerDessin z-9' src='/Assets/Images/Paul/tete.png'></img>
            <img className='h-[100vh] object-cover left-[50%] translate-x-[-50%] absolute layerDessin z-8' src='/Assets/Images/Paul/coup.png'></img>
        </div>
        <LogoBox/>
    </div>
  )
}
