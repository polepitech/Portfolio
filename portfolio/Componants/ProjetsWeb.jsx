'use client';
import React, { useEffect } from 'react'
import { gsap } from "@/lib/gsap";
export const ProjetsWeb = () => {

    useEffect(() => {
        gsap.to(".iphone", {
            rotate: 5,
            duration: 4,
            repeat: -1,
            yoyo:true,
            ease: "sine.inOut",
            });
            gsap.to(".iphone", {
            scale: 1.04,
            duration: 3,
            repeat: -1,
            yoyo:true,
            ease: "sine.inOut",
            });

        gsap.to(".iphone", {duration: 2,
            scrollTrigger: {
            trigger:".iphone",
            start: "top 70%",
            end: "bottom 30%",

            // markers:true,
            toggleActions: "restart reverse play reverse",
            },
            x:0,
            ease: "elastic.out(1,0.3)",
        });
        let iphone = document.querySelector('.iphone');
        iphone.addEventListener('mouseenter',(e)=>{
            console.log(iphone)
            gsap.to(".iphone", {
                scale: 1.3,
                duration: 0.2,
                ease: "sine.inOut",
                });
        })
    
    }, []); // Exécuter ce code seulement après le rendu du composant




  return (
    <div className="projet flex relative w-screen h-screen cursor-pointer overflow-hidden">
        <video className="-z-2 w-full object-cover blur-[0px] opacity-60 bg-blend-hard-light" autoPlay loop muted playsInline>
            <source src="/Assets/Videos/test2.mp4" type="video/mp4"/>
            Votre navigateur ne supporte pas la balise vidéo.
        </video>

        <div className="iphone w-[221px] h-[400px] absolute right-20 bottom-12">
            <img className="absolute w-full h-full z-10" src="Assets/Images/Iphone.png" alt=""/>
            <div className="Mask w-full h-full">
                <video className=" absolute w-full h-full rotationIphone" autoPlay loop muted playsInline>
                    <source src="/Assets/Videos/MeeticMobile.mov" type="video/mp4"/>
                </video>
            </div>
        </div>

        <div className="titreProjet absolute left-20 bottom-30">
            <p className="text-black bg-white p-2 text-8xl font-extrabold">MEETIC</p>
        </div>
        <div className="fond bg-red-600 -z-10 h-full w-full absolute opacity-70"></div>
        <div className="shadow absolute h-[101vh] -translate-y-1 w-screen z-1"></div>
    </div>
  )
}
