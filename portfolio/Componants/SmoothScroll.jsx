'use client'
import { gsap,ScrollTrigger } from '@/lib/gsap'
import { ReactLenis,lenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'

export const SmoothScroll = ({children}) => {

  
//   useEffect(() => {
//     function update(time) {
//       lenisRef.current?.lenis?.raf(time * 1000)
//     }
  
//     gsap.ticker.add(update)
  
//     return () => gsap.ticker.remove(update)
//   }, [])

const lenisOptions = {
    lerp: 0.1,         // Controls how smooth the scrolling is
    duration: 1.5,     // Slows down or speeds up the scrolling
    smoothTouch: false, // Disable smooth scroll on touch devices
    smooth: true,      // Smooth scroll for desktop (obviously)
  };
  
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}



