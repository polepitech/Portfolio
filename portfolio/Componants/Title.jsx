'use client'
import React, { useEffect } from 'react'
import { gsap } from '@/lib/gsap'

export const Title = () => {

    
    useEffect(() => {
          gsap.from('.svgTitle',{
            // startOffset:'0%',
              duration:3,
          })
        
      }, [])
      
    
  return (
        <svg className="absolute mb-10  overflow-hidden" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
            <textPath className="txt svgTitle"
                href="#circlePath" fill="white" fontWeight={'900'} fontFamily="MangoGrotesque" fontSize='8' startOffset="14%">
                PAUL DAVID • Developpeur
            </textPath>
            </text>
        </svg> 
  )
}
