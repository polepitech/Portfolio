'use client'
import { gsap } from '@/lib/gsap';
import React from 'react'
import { useEffect, useRef } from "react";
import SplitType from 'split-type';



export const Contact = () => {
    const contactRef = useRef(null);
    

      useEffect(() => {
        const text = new SplitType('#follower2');
        gsap.set('.follower,.follower2', {
            xPercent: -50, yPercent: -50, opacity: 0
          });

        const handleMouseMove = (e) => {
          gsap.to(".follower", {
            duration: 1.5,
            overwrite: "auto",
            x: e.clientX,
            y: e.clientY,
            ease: "power3.out",
          });
          gsap.to(".follower2", {
            duration: 1.2,
            overwrite: "auto",
            x: e.clientX,
            y: e.clientY,
            ease: "power3.out",
          });
        };

        const disapear = (e) => {
            gsap.to(".follower,.follower2", {
              duration: 1.5,
              overwrite: "auto",
              opacity:0,
              ease: "power3.out",
            });
          };
          const appear = (e) => {
            gsap.to(".follower,.follower2", {
              duration: 1.5,
              overwrite: "auto",
              opacity:1,
              ease: "power3.out",
            });
          };
    
        const element = contactRef.current;
        if (element) {
          element.addEventListener("mousemove", handleMouseMove);
          element.addEventListener("mouseleave",disapear);
          element.addEventListener("mouseenter",appear);


        }
    
        return () => {
          if (element) {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", disapear);
            element.removeEventListener("mouseenter", appear);

          }
        };
      }, []);

    function copy(e){
      // require('clipboard-copy');
      gsap.to("#follower2 .char", {
        duration: 1,
        y:"-100%",
        stagger:{
          each:0.05,
        },
        ease: "power3.out",
      });
      gsap.to(".follower", {
        duration: 1,
        outlineColor: '#FFCA28'
      });
      copi(e)
    }
    const copi = require('clipboard-copy');

      
    
  return (

    <div id='contactSection' className='relative'>
      <div ref={contactRef} className="relative contact w-screen h-screen flex items-center justify-center">
          <div className="follower p-2 outline-1 outline-amber-50 rounded-full fixed top-4 left-4 pointer-events-none opacity-0 text-transparent hidden sm:flex">Copier</div>
          <div id='follower2' className='follower2 text-white fixed top-4 left-4 h-6 opacity-0 pointer-events-none overflow-hidden      flex-col hidden sm:flex'>
              <p>copier</p>
              <p className='text-amber-400'>copié</p>
          </div>
          {/* <DecryptedText text="Hover me!" /> */}
          <h3 onClick={()=>copy('paul1.david@epitech.eu')} className="hover:text-amber-400 cursor-pointer text-3xl sm:text-[5vw] text-white">paul1.david@epitech.eu</h3>
      </div>
      
      <div className="contactBar flex gap-3 absolute bottom-0 right-0 w-screen justify-between p-4">
          <div className="flex gap-4">
            <a download='CV_Paul_DAVID' href='/Assets/Ressources/Paul-David_CV_2025.pdf' className=''>
              <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"  stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M34.5,31c0,0.553-0.448,1-1,1h-10c-0.552,0-1-0.447-1-1s0.448-1,1-1h10 C34.052,30,34.5,30.447,34.5,31z M16.262,23.479l0.32-0.741c0.291-0.674,0.769-1.207,1.382-1.541l2.204-1.087 c-0.969-0.622-1.667-1.558-2.083-2.793c-0.684-0.417-1.115-1.158-1.115-1.984v-0.667c0-0.668,0.289-1.293,0.778-1.73 c0.096-0.613,0.254-1.189,0.471-1.719c0.102-0.247,0.188-0.432,0.257-0.582c0.046-0.1,0.104-0.224,0.112-0.259 c0.003-0.032-0.002-0.153-0.086-0.573c-0.065-0.327-0.108-0.627-0.138-0.884c-0.037-0.322,0.065-0.645,0.279-0.885 c0.448-0.5,1.321-0.477,1.739,0.056c0.076,0.097,0.231,0.255,0.534,0.459c0.512,0.346,1.208,0.502,1.937,0.438 c0.147-0.012,0.297-0.018,0.451-0.018c3.896,0,5.183,2.053,5.54,3.951c0.5,0.438,0.794,1.068,0.794,1.745v0.667 c0,0.826-0.431,1.567-1.115,1.984c-0.418,1.24-1.12,2.178-2.095,2.801l2.122,1.083c0.632,0.317,1.135,0.848,1.447,1.531l0.344,0.752 l-0.674,0.479C27.792,25.296,25.592,26,23.302,26c-2.298,0-4.505-0.709-6.384-2.052L16.262,23.479z M19.5,31 c0,0.26-0.11,0.52-0.29,0.71C19.02,31.89,18.77,32,18.5,32s-0.53-0.11-0.71-0.3c-0.18-0.181-0.29-0.44-0.29-0.7 c0-0.261,0.11-0.521,0.29-0.71c0.36-0.36,1.05-0.37,1.42,0C19.39,30.479,19.5,30.739,19.5,31z M17.5,36c0-0.553,0.448-1,1-1h17 c0.552,0,1,0.447,1,1s-0.448,1-1,1h-17C17.948,37,17.5,36.553,17.5,36z M22.686,47.766c-0.031,0.918-1.045,1.262-1.707,0.707 c-0.935-0.784-1.871-1.567-2.806-2.351c-0.99-0.83,0.433-2.237,1.414-1.415c0.414,0.347,0.828,0.693,1.241,1.04 c0.268-2.261,1.005-4.441,3.196-5.582c1.142-0.594,2.154,1.132,1.009,1.727C22.863,43.023,22.759,45.599,22.686,47.766z M37.637,46.259c-0.246-0.337-3.424,1.211-4.333,0.883c-0.713-0.257-1.248-0.585-1.697-1.067c-2.122,1.151-4.536,1.774-6.407-0.259 c-0.871-0.947,0.539-2.365,1.414-1.414c1.489,1.619,3.34,0.369,4.756-0.5c0.458-0.281,1.106-0.109,1.368,0.359 c1.034,1.843,3.535-0.242,4.992-0.132c0.773,0.059,1.209,0.542,1.632,1.121C40.126,46.293,38.389,47.289,37.637,46.259z M41.21,36.71C41.02,36.89,40.76,37,40.5,37c-0.26,0-0.52-0.11-0.71-0.29C39.6,36.52,39.5,36.27,39.5,36 c0-0.271,0.11-0.521,0.29-0.71c0.38-0.37,1.04-0.37,1.42,0c0.18,0.189,0.29,0.449,0.29,0.71C41.5,36.27,41.4,36.52,41.21,36.71z M46.21,36.7C46.02,36.89,45.76,37,45.5,37c-0.26,0-0.52-0.11-0.71-0.29C44.6,36.52,44.5,36.27,44.5,36 c0-0.271,0.11-0.521,0.29-0.71c0.38-0.37,1.04-0.37,1.42,0c0.18,0.189,0.29,0.449,0.29,0.71C46.5,36.26,46.4,36.51,46.21,36.7z M45.5,32h-7c-0.552,0-1-0.447-1-1s0.448-1,1-1h7c0.552,0,1,0.447,1,1S46.052,32,45.5,32z M37.5,16V2l14,14H37.5z"></path> </g></svg>
            </a>
          </div>
          <div className="flex gap-4">
              <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/pollux_inge/' className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30px" height="30px" fillRule="nonzero"><g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path></g></g></svg>            
              </a>
              <a target="_blank" rel="noopener noreferrer" href='https://github.com/polepitech' className=''>
                  <svg width="30px" height="30px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <g fill="#ffffff"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/> </g> </g></svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href='mailto:pollux.inge@gmail.com' className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/paul-david-167ba425b' className=''>
              <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
            </a>
          </div>
      </div>
    </div>

  )
}
