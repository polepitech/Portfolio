'use client'
import React, { useEffect } from 'react'
import { gsap } from '@/lib/gsap'

export const Title = () => {

    
    // useEffect(() => {
    //       gsap.from('.svgTitle',{
    //         x:0,
    //         left:1000,
    //         duration:10,
    //       })
        
    //   }, [])
      
    
  return (
    <>
        <svg  id='home' className=" absolute mb-10 top-10 md:top-0  md:translate-x-0 w-[100vw] md:w-[100vw] overflow-hidden hidden sm:flex" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
            id="circlePath"
            d="
                M 10, 50
                a 40,40 0 1,1 80,0
                40,40 0 1,1 -80,0
            "
            fill="none" 
            />
            <text>
            <textPath className="txt svgTitle text-Rubik"
                href="#circlePath" fill="white" fontWeight={'900'} fontFamily="MangoGrotesque" letterSpacing={-0.5}  fontSize='8' startOffset="6%">
                PAUL DAVID • Developpeur
            </textPath>
            </text>
        </svg> 
        <h1 className='text-Rubik font-extrabold text-white text-[10vw] text-center mt-[50vw] sm:hidden'>Paul DAVID Developpeur Web</h1>
    </>
  )
}
