import Aurora from "@/Componants/Aurora";
import { LogoBox } from "@/Componants/LogoBox";
import { ProjetsWeb } from "@/Componants/ProjetsWeb";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="w-fit m-auto text-white p-8 text-8xl text-center">PORTFOLIO</h1>
   
      <LogoBox/>

      <div className="top-50 w-[50vw] m-auto mt-100 mb-100">
        <p animate="" className="char text-white text-3xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores natus hic ab! Totam culpa maiores <span className="font-black text-amber-300">Test</span> iure. Doloribus, dolorum odio. Dignissimos quae provident repellat sequi consectetur sit nobis corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus, voluptatum rerum incidunt a aperiam voluptatem qui animi nihil illo ullam culpa praesentium amet. Architecto possimus voluptatum quam amet ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores natus hic ab! Totam culpa maiores nostrum iure. Doloribus, dolorum odio. Dignissimos quae provident repellat sequi consectetur sit nobis corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatibus, voluptatum rerum incidunt a aperiam voluptatem qui animi nihil illo ullam culpa praesentium amet. Architecto possimus voluptatum quam amet ex! </p>
      </div>
        

      <h2 className="w-fit m-10 text-white p-8 text-8xl text-left font-bold">PROJETS :</h2>
      <ProjetsWeb/>

      <div className="projet flex relative w-screen h-screen cursor-pointer">
      </div>

      <div className="grain fixed opacity-5 mix-blend-hard-light top-0 left-0 w-screen h-full z-10"></div> 
      <Aurora 
        colorStops={["#06314a", "#000317", "#000a42"]}
        blend={1}
        amplitude={3.0}
        speed={0.5}
      />
    </>
  );
}
