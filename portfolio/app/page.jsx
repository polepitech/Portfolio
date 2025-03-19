'use client'
import Aurora from "@/Componants/Aurora";
import { LogoBox } from "@/Componants/LogoBox";
import { ProjetMusique } from "@/Componants/ProjetMusique";
import { ProjetsWeb } from "@/Componants/ProjetsWeb";
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
  

      <h1 className="w-fit m-auto text-white p-8 text-8xl text-center">PORTFOLIO</h1>
   
      <LogoBox/>

      <div className="top-50 w-[50vw] m-auto mt-100 mb-100">
        <p animate="" className="char text-white text-3xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores natus hic ab! Totam culpa maiores <span className="font-black text-amber-300">Test</span> iure. Doloribus, dolorum odio. Dignissimos quae provident repellat sequi consectetur sit nobis corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus, voluptatum rerum incidunt a aperiam voluptatem qui animi nihil illo ullam culpa praesentium amet. Architecto possimus voluptatum quam amet ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores natus hic ab! Totam culpa maiores nostrum iure. Doloribus, dolorum odio. Dignissimos quae provident repellat sequi consectetur sit nobis corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus, voluptatum rerum incidunt a aperiam voluptatem qui animi nihil illo ullam culpa praesentium amet. Architecto possimus voluptatum quam amet ex! </p>
      </div>
        

      <h2 className="w-fit m-10 text-white p-8 text-8xl text-left font-bold">PROJETS :</h2>
      <ProjetsWeb/>

      <h2 className="w-fit m-10 mt-60 text-white p-8 text-8xl text-left font-bold">Musique :</h2>
      <ProjetMusique/>

      <div className="grain fixed opacity-5 mix-blend-hard-light top-0 left-0 w-screen h-full z-10"></div> 

      
      <Aurora 
        colorStops={["#034efc", "#000000", "#034efc"]}
        blend={1}
        amplitude={3.0}
        speed={0.5}
      />
    </>
  );
}
