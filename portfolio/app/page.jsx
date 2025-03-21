'use client'
import Aurora from "@/Componants/Aurora";
import { DessinIntro } from "@/Componants/DessinIntro";
import { InfoBar } from "@/Componants/InfoBar";
import { ProjetMusique } from "@/Componants/ProjetMusique";
import { ProjetsWeb } from "@/Componants/ProjetsWeb";
import { Title } from "@/Componants/Title";
import { useEffect, useState } from "react";



export default function Home() {
  const [count, setCount] = useState(0);
  const title = " Paul DAVID | Portofolio ";

  useEffect(() => {
    const interval = setInterval(() => {
      if(count > 16){
        setCount(0);
      }else{
        setCount((prev) => prev + 1);
      }
      let newtitle = title.substring(count)+title.substring(-count);
      document.title = newtitle;
    }, 500);

    return () => clearInterval(interval);
  }, [count]);
  
  return (
    <>
  
      <InfoBar/>
      <Title/>
   
      <DessinIntro/>


      <div className="top-50 w-[50vw] m-auto mt-100 mb-100">
        <p animate="" className="char text-white text-3xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores natus hic ab! Totam culpa maiores <span className="font-black text-amber-300">Test</span> iure. Doloribus, dolorum odio. Dignissimos quae provident repellat sequi consectetur sit nobis corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus, voluptatum rerum incidunt a aperiam voluptatem qui animi nihil illo ullam culpa praesentium amet. Architecto possimus voluptatum quam amet ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores natus hic ab! Totam culpa maiores nostrum iure. Doloribus, dolorum odio. Dignissimos quae provident repellat sequi consectetur sit nobis corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus, voluptatum rerum incidunt a aperiam voluptatem qui animi nihil illo ullam culpa praesentium amet. Architecto possimus voluptatum quam amet ex! </p>
      </div>
        

      <ProjetsWeb/>

      <div className="margin pt-100"></div>
      <ProjetMusique/>

      <div className="grain fixed opacity-5 mix-blend-hard-light top-0 left-0 w-screen h-full z-10"></div> 

      
      <Aurora 
        colorStops={["#ff0000", "#000000", "#ff0000"]}
        blend={1}
        amplitude={3.0}
        speed={0.5}
      />
    </>
  );
}
