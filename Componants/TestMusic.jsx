'use client'
import React, { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from '@/lib/gsap'
export const TextMusic = () => {


  useEffect(() => {
    const text = new SplitType('#target2')

    gsap.from("#target2 .word", {duration: 2,
      scrollTrigger: {
      trigger:".Mytxt2",
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
    <div className="Mytxt top-0 w-[80vw] m-auto mt-[80vw] sm:mt-[20vw] mb-[20vw] text-Rubik">
      <p id='target' className="text-white font-light text-[4vw] md:text-[2vw]">Durant ma carrière d'ingénieur du son, j'ai eu la chance de pouvoir travailler avec de nombreux artistes, le plus gros projet étant l'album '<span className='font-black text-amber-300'>Jefe</span>' de <span className='font-black text-amber-300'>Ninho</span>, quasiment entièrement enregistré et mixé par moi-même, certifié <span className='font-black text-amber-300'>diamant</span> et cumulant plus d'un milliard de streams.
      </p>
    </div>
    
  )
}
