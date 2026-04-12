import React from 'react'

export const Projet = ({title,link,desc}) => {
  return (
    <div className="projet flex flex-col">
    <video className="video -z-2 w-full h-screen object-cover blur-[0px] opacity-60 bg-blend-hard-light" autoPlay loop muted playsInline>
        <source src={link} type="video/mp4"/>
        Votre navigateur ne supporte pas la balise vidéo.
    </video>
    <div className="info w-screen h-screen text-white flex">
        <div className="gauche w-[100%] sm:w-[50%]">
            <h1 className='text-8xl text-Rubik text-center m-10 text-white'>{title}</h1>
            <div className="photos flex flex-col gap-1">
                <video className="video -z-2 w-[80%] m-auto hidden sm:flex" autoPlay loop muted playsInline>
                    <source src={link} type="video/mp4"/>
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                <p className='m-20 text-2xl flew sm:hidden text-Rubik' dangerouslySetInnerHTML={{ __html: desc }}></p>

            </div>
        </div>
        <div className="droite w-[50%] items-end hidden sm:flex text-Rubik">
            <p className='m-20 text-2xl' dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    </div>
</div>
  )
}
