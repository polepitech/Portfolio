'use client';
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "@/lib/gsap";
import { Carousel, carousel } from './Carousel';
export const ProjetsWeb = () => {
    const videoRef = useRef(null);
    const [CarousselPosition, setCarousselPosition] = useState("")
    const [compteur, setcompteur] = useState(0);
    const [boutonTxt, setboutonTxt] = useState('');
    let projetTop = 0; 
    let projetBot = 0;

    const projetRef = useRef(null);

    const videoLink = [
        '/Assets/Videos/MeeticMobile.mp4',
        '/Assets/Videos/TwitterMobile.mp4',
        '/Assets/Videos/JulietteMobile.mp4',
        '/Assets/Videos/MyCinemaMobile.mp4',
        '/Assets/Videos/MyCinemaMobile.mp4'
    ]
    const colorsbg = [
        'red',
        'green',
        'blue',
        'black',
        'brown'
    ]
    const Titres = [
        'Meetic',
        'Twitter',
        'Studio Saladin',
        'MyCinema',
        'Token Wars'
    ]


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

        gsap.set('.indicator',{opacity:0,xPercent: -50, yPercent: -50});
        const handleMouseMove = (e)=>{
            if(e.target.classList.contains('CarousselButtonGauche')){
                setboutonTxt('<')
                scale(2)
            }
            else if(e.target.classList.contains('CarousselButtonDroite')){
                setboutonTxt('>')
                scale(2)
            }else{
                setboutonTxt('+')
                scale(1)
            }
            gsap.to(".indicator", {
                duration: 1.5,
                overwrite: "auto",
                x: e.clientX,
                y: e.clientY,
                opacity:1,
                ease: "power3.out",
            });
        }

        const scale = (i) =>{
            gsap.to(".indicator", {
                duration: 4,
                scale:i,
                ease: "elastic.out(1.5,0.3)",
            });
        }

        const element = projetRef.current;
        if (element) {
          element.addEventListener("mousemove", handleMouseMove);
          element.addEventListener("mouseleave", ()=>{
            gsap.to(".indicator", {
                duration: 0.5,
                overwrite: "auto",
                opacity:0,
                ease: "power3.out",
            });
          });
        }
        
        const handleResize = () =>{
            let bouding = projetRef.current.getBoundingClientRect();
            projetTop = bouding.top + window.scrollY;;
            projetBot = bouding.bottom + window.scrollY;;
        }

        window.addEventListener('resize',handleResize);
        // window.addEventListener('scroll',(e)=>{
        //     if(window.innerWidth > 650 && window.scrollY > projetTop-(window.innerWidth/2) && window.scrollY < projetBot-(window.innerWidth/2)){
        //         gsap.to(window, { duration: 2, scrollTo: {y:"#projetWeb",autoKill:true}});
        //     }
        // })
        

        
        handleResize();
    
    }, []); 


    useEffect(() => {
        let startX = 0;
        let endX = 0;
      
        const touchStart = (e) => {
          startX = e.changedTouches[0].clientX;
        };
      
        const touchEnd = (e) => {
          endX = e.changedTouches[0].clientX;
          if (startX - endX > 50) droite();
          if (endX - startX > 50) gauche();
        };
      
        const element = projetRef.current;
        if (element) {
          element.addEventListener('touchstart', touchStart);
          element.addEventListener('touchend', touchEnd);
        }
      
        return () => {
          if (element) {
            element.removeEventListener('touchstart', touchStart);
            element.removeEventListener('touchend', touchEnd);
          }
        };
      }, []);
      


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.src = videoLink[compteur];
        video.load();
        video.play().catch(() => {});
    }, [compteur]);

    function gauche() {
        setcompteur(prev => {
            if(prev == 0){
                var newCompteur = videoLink.length-1;
            }else{
                var newCompteur = prev - 1;
            }
            setCarousselPosition(`-${newCompteur * 100}vw`);
            if(newCompteur == 4){
                gsap.to(".iphone", {duration: 1,opacity:0})
            }else{
                gsap.to(".iphone", {duration: 1,opacity:1})
            }
            return newCompteur;
        });
    }
    
    function droite() {
        setcompteur(prev => {
            if(prev == videoLink.length-1){
                var newCompteur = 0;
            }else{
                var newCompteur = prev + 1;
            }
            setCarousselPosition(`-${newCompteur * 100}vw`);
            if(newCompteur == 4){
                gsap.to(".iphone", {duration: 1,opacity:0})
            }else{
                gsap.to(".iphone", {duration: 1,opacity:1})
            }
            return newCompteur;
        });
    }
   



  return (
    <div ref={projetRef} id="projetWeb" className="projets flex relative w-screen h-screen cursor-pointer overflow-hidden">
 
        <Carousel pos={CarousselPosition}/>

        <div className="iphone w-[221px] h-[400px] absolute right-20 bottom-[25%] sm:bottom-12 pointer-events-none">
            <img className="absolute w-full h-full z-10" src="Assets/Images/Iphone.png" alt=""/>
            <div className="Mask w-full h-full bg-black">
                <video ref={videoRef} className="absolute w-full h-full rotationIphone" autoPlay loop muted playsInline />
            </div>
        </div>

        <div className="titreProjet absolute left-0 bottom-0 z-100 text-Rubik flex bg-white w-screen sm:w-fit p-2 justify-around">
            <p className='block sm:hidden text-4xl sm:text-8xl font-black  sm:w-fit text-center' style={{color:colorsbg[compteur]}}>{'<'}</p>
            <p className=" text-4xl sm:text-8xl font-black  sm:w-fit text-center" style={{color:colorsbg[compteur]}} >{Titres[compteur]}</p>
            <p className='block sm:hidden text-4xl sm:text-8xl font-black  sm:w-fit text-center' style={{color:colorsbg[compteur]}}>{'>'}</p>

        </div>
        <div className="fond -z-10 h-full w-full absolute opacity-70" style={{backgroundColor:colorsbg[compteur]}}></div>
        <div className="shadow absolute h-[101vh] -translate-y-1 w-screen z-1"></div>

        <div onClick={gauche} className="CarousselButtonGauche bg-linear-to-r from-white to-transparent absolute h-full w-[20%] top-0 opacity-1 hover:opacity-50 transition-opacity  z-10"></div>
        <div onClick={droite} className="CarousselButtonDroite bg-linear-to-r from-transparent to-white absolute h-full w-[20%] top-0 opacity-0 hover:opacity-50 transition-opacity right-0 z-10"></div>
        
        <div className="indicator h-8 w-8 outline-1 text-center outline-amber-50 rounded-full fixed top-0 left-0 pointer-events-none opacity-0 text-white hidden sm:block">{boutonTxt}</div>

    </div>
  )
}
