'use client'
import React, { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from '@/lib/gsap'
export const TexteDesc = () => {


  useEffect(() => {
    const text = new SplitType('#target')

    gsap.from("#target .word", {duration: 2,
      scrollTrigger: {
      trigger:".Mytxt",
      start: "top 50%",
      end: "bottom 50%",
      // markers:true,
      scrub:true
      },
      stagger:{
        each:0.5,
      },
      opacity:0.2,
      // ease: "elastic.in"
  });
 
  }, [])
  

  return (
    <div className="Mytxt2 top-0 w-[80vw] m-auto mt-[80vw] sm:mt-[20vw] mb-[20vw] text-Rubik">
    <p id='target2' className="text-white font-light text-[4vw] md:text-[2vw]">Après plusieurs années consacrées à la musique en tant <span className='font-black text-amber-300'>qu'ingénieur du son</span>, je suis désormais étudiant à <span className='font-black text-amber-300'>Epitech</span> où je me forme au développement <span className='font-black text-amber-300'>Web</span>. 
    <br></br>Passionné par la programmation et la création numérique, je recherche actuellement une <span className='font-black text-amber-300'>alternance</span> pour approfondir mes compétences et participer à des projets innovants.
    </p>
  </div>
  )
}
