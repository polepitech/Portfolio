'use client'
import Aurora from "@/Componants/Aurora";
import { Contact } from "@/Componants/Contact";
import { DessinIntro } from "@/Componants/DessinIntro";
import { ProjetMusique } from "@/Componants/ProjetMusique";
import { ProjetsWeb } from "@/Componants/ProjetsWeb";
import { TexteDesc } from "@/Componants/TexteDesc";
import { Title } from "@/Componants/Title";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { LoadingScreen } from "@/Componants/LoadingScreen";
import { Navbar } from "@/Componants/Navbar";
import { TextMusic } from "@/Componants/TestMusic";




export default function Home() {
  const [count, setCount] = useState(0);
  const title = "_____| Paul DAVID |_____";

  useEffect(() => {
    const interval = setInterval(() => {
      if(count > 24){
        setCount(0);
      }else{
        setCount((prev) => prev + 1);
      }
      let newtitle = title.substring(count)+title.substring(-count);
      document.title = newtitle;
    }, 500);
    
    
    
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    console.log('scroll to top')
    gsap.to(window, { duration: 0, scrollTo: {y:0}});
  }, [])
  
  


   

  return (
    <>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/> */}


      <Navbar/>
      <LoadingScreen/>
      <Title/>
   
      <DessinIntro/>

      <TexteDesc/>
        

      <ProjetsWeb/>

      {/* <div className="margin pt-100"></div> */}
      <TextMusic/>
      <ProjetMusique/>


      <Contact/>
     

      <div className="grain fixed opacity-10 mix-blend-hard-light top-0 left-0 w-screen h-full z-10"></div> 
      
      <Aurora 
        colorStops={["#FFCA28", "#000000", "#FFCA28"]}
        blend={1}
        amplitude={3.0}
        speed={0.5}
      />
    </>
  );
}
