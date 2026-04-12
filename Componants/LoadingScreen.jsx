import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type';

export const LoadingScreen = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    let counterObj = { value: 0 };

    gsap.to(counterObj, {
      duration: 1,
      value: 100,
      ease: "power1.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = `${Math.round(counterObj.value)}%`;
        }
      }
    });

    gsap.from('.blanc', {
        duration: 1.3,
        ease: "power1.out",
        x:'-200%'
      });

    setTimeout(() => {
        const text = new SplitType('#loadingnumber');
        
        gsap.to(".loadingnumber .char", {duration: 0.7,
            y:"100%",
            ease:'power2.out',
            stagger:{
                each:0.05
            }
        });
        gsap.to(".blanc", {duration: 0.5,
            y:"200%",
            ease:'power2.out',
        });
        
    }, 1100);

    setTimeout(() => {
        
        gsap.to(".blackscreen", {duration: 1,
            y:"-100%",
            borderBottomLeftRadius:'50%',
            borderBottomRightRadius:'50%',

            ease:'power2.out',
        });
        
    }, 1400);

  }, []);

  return (
    <div data-lenis-prevent className="blackscreen z-1000 fixed top-0 w-screen h-screen bg-black flex flex-col items-center justify-center">
        <div className="overflow-hidden">
            <div ref={counterRef} id='loadingnumber' className="loadingnumber text-8xl text-white text-center">
                0%
            </div>
        </div>
        <div className="loadingbar w-[50vw] h-1 overflow-hidden">
            <div className="blanc bg-white w-full h-full relative"></div>
        </div>
    </div>
  )
}
