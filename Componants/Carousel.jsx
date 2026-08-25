import React, { useEffect, useState } from 'react'
import { gsap } from "@/lib/gsap";
import { Projet } from './Projet';

export const Carousel = ({pos}) => {
  const [openned, setopenned] = useState(false);


   function open(){
          console.log('ok')
          if(openned){
              gsap.to(".Carousel,.fond", {duration: 1,
                  y:"0vh",
              });
              gsap.to(".iphone", {duration: 1,
                  y:0,
              });
              gsap.to(".shadow,.titreProjet", {duration: 1,
                  opacity:1,
              });
          }else{
              gsap.to(".Carousel,.fond", {duration: 1,
                  y:"-100vh",
              });
              gsap.to(".iphone", {duration: 1,
                  y:600,
              });
              gsap.to(".shadow,.titreProjet", {duration: 1,
                  opacity:0,
              });
          }
          setopenned(!openned);
      }

  return (
    <div onClick={open} className="Carousel h-[200vh] flex relative left-0" style={{left:pos}}>
        <Projet 
            title='Kraken'     
            link='/Assets/Videos/Kraken.mp4'    
            desc="Plateforme d'automatisation pour beatmaker, Oauth, AWS, Sytem de Queue, Test unitaires etc <br><a href='https://kraken-lab.fr' class='text-blue-500 cursor-pointer' target='_blank'>https://kraken-lab.fr</a>"/>
        
        <Projet 
            title='Meetic'     
            link='/Assets/Videos/Meetic.mp4'    
            desc="Dans le cadre d'un projet étudiant, j'ai développé une <span>application web</span> de rencontre.<br>Ce projet m'a permis d'apprendre à intégrer des <span>API</span> externes (Spotify, MovieCover) ainsi qu'à gérer une base de données."/>

        <Projet 
            title='Twitter'    
            link='/Assets/Videos/Twitter.mp4'   
            desc="Projet étudiant réalisé en groupe consistant à développer un clone de Twitter en <span>PHP</span>.<br>Compétences acquises : gestion de base de données, authentification, cybersécurité, Ajax."/>

        <Projet 
            title='Studio Saladin'   
            link='/Assets/Videos/Juliette.mp4'  
            desc="Développement d'un site vitrine pour un studio de graphisme avec <span>NextJS</span>.<br>Création d'un CMS personnalisé permettant au studio de gérer et publier des articles.<br>système d'authentification, gestion d'une base de données, stockage et gestion des images."/>

        <Projet 
            title='My cinema'  
            link='/Assets/Videos/MyCinema.mp4'  
            desc="Une de mes premières réalisations en développement web.<br>Application web de gestion d'un cinéma réalisée en <span>PHP</span> avec une base de données <span>MySQL</span>."/>

        <Projet 
            title='TokenWars'  
            link='/Assets/Videos/TokenWar.mp4'  
            desc="Parallèlement à ma carrière d'ingénieur du son, je me suis formé en programmation à travers la réalisation de jeux vidéo sur <span>Unity3D</span> en <span>C#</span>.<br>Ce projet est un jeu mobile de stratégie avec des visuels générés par <span>MidJourney</span> et une <span>IA</span> utilisant un algorithme MinMax."/>
    </div>
  )
}
