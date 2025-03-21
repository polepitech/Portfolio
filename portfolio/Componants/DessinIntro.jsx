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
                start: "20% 20%",
                scrub:true,
                // markers:true,   
                },
                rotateZ:180,
            });
       
            gsap.to(".DessinEtBox", {duration: 2,
                scrollTrigger: {
                trigger:".DessinEtBox",
                start: "top 20%",
                scrub:true,
                // markers:true,  
                pin:true 
                },
            });
       
      
    }, [])
    


  return (
    <div className='DessinEtBox h-[200vh]'>
        <div className="Dessin relative -top-20 h-[100vh] pointer-events-none z-10">
            <img className='h-[100vh] left-[50%] translate-x-[-50%] absolute layerDessin  top-4 z-10 casquette origin-right' src='/Assets/Images/Paul/Casquette.png'></img>
            <img className='h-[100vh] left-[50%] translate-x-[-50%] absolute layerDessin z-9' src='/Assets/Images/Paul/tete.png'></img>
            <img className='h-[100vh] left-[50%] translate-x-[-50%] absolute layerDessin z-8' src='/Assets/Images/Paul/coup.png'></img>
        </div>
        <LogoBox/>
    </div>
  )
}
