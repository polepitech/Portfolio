"use client"; 
import React, { useEffect } from 'react'
import Matter from "matter-js";
import { gsap ,ScrollTrigger} from "@/lib/gsap";


export const LogoBox = () => {
    useEffect(() => {
        if (typeof window === "undefined") return; // Sécurité : Vérifie qu'on est bien côté client
    
        let cible = document.querySelector(".LogoBox"); // Correction du sélecteur CSS
        console.log(cible);
        if (!cible) return; // Vérifie que l'élément existe
    
        // module aliases
        var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint,
          Body = Matter.Body;
    
        // create an engine
        var engine = Engine.create();
    
        // create a renderer
        var render = Render.create({
          element: cible, // Utilise l'élément cible correctement
          engine: engine,
          options: {
            background: "transparent",
            wireframes: false,
          },
        });
            
        var phpBox = Bodies.rectangle(300, 400, 120,70,{restitution:0.5});
        var jsBox = Bodies.rectangle(450, 250, 80, 80,{restitution:0.8});
        var reactBox = Bodies.circle(350, 250, 40, {restitution:0.5});
        var nextBox = Bodies.circle(550, 250, 40, {restitution:0.5});
        var htmlBox = Bodies.rectangle(400, 120, 40, 80,{restitution:0.5});
        var cBox = Bodies.polygon(400, 220, 6, 35,{restitution:0.5});
        var cssBox = Bodies.rectangle(400, 220, 40, 80,{restitution:0.5});
        var sqlBox = Bodies.rectangle(400, 220, 40, 60,{restitution:0.5});
        var tailwindBox = Bodies.rectangle(400, 220, 80, 40,{restitution:0.5});
        var terminalBox = Bodies.rectangle(450, 250, 40, 35,{restitution:0.5});
        var protoolsBox = Bodies.circle(350, 250, 20, {restitution:0.5});
        var photoshopBox = Bodies.rectangle(450, 250, 60, 60,{restitution:0.5});




        var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
        var topBorder = Bodies.rectangle(400, 10, 810, 20, { isStatic: true });
        var LeftBorder = Bodies.rectangle(10, 410, 20, 1000, { isStatic: true });
        var RightBorder = Bodies.rectangle(790, 410, 20, 1000, { isStatic: true });



        phpBox.render.sprite.texture = "Assets/logo/php.svg";
        sqlBox.render.sprite.texture = "Assets/logo/mysql.svg";
        jsBox.render.sprite.texture = "Assets/logo/js.svg";
        nextBox.render.sprite.texture = "Assets/logo/next.svg";
        reactBox.render.sprite.texture = "Assets/logo/react.svg";
        htmlBox.render.sprite.texture = "Assets/logo/html.svg";
        cBox.render.sprite.texture = "Assets/logo/c.svg";
        cssBox.render.sprite.texture = "Assets/logo/css.svg";
        tailwindBox.render.sprite.texture = "Assets/logo/tailwind.svg";
        terminalBox.render.sprite.texture = "Assets/logo/terminal.svg";
        protoolsBox.render.sprite.texture = "Assets/logo/protools.svg";
        photoshopBox.render.sprite.texture = "Assets/logo/photoshop.svg";






        let allBox = [photoshopBox,protoolsBox,phpBox,sqlBox, tailwindBox,jsBox,nextBox,reactBox,htmlBox,cBox,cssBox,terminalBox];




        // add all of the bodies to the world
        Composite.add(engine.world, [photoshopBox,protoolsBox,terminalBox,phpBox,sqlBox, jsBox,tailwindBox,nextBox,reactBox,htmlBox,cBox,cssBox, ground,LeftBorder,RightBorder,topBorder]);

        // run the renderer
        Render.run(render);
    
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);
    
        // add mouse control
        var mouse = Mouse.create(render.canvas);
        var mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });
        Composite.add(engine.world, mouseConstraint);


        function rescale(factor){
            allBox.forEach(box => {
                box.render.sprite.xScale = factor;
                box.render.sprite.yScale = factor;
        
                let relativeScale = factor / box.originalScale;
                Body.scale(box, relativeScale, relativeScale);
                box.originalScale = factor;
            });
        }
        allBox.forEach(box => {
            box.originalScale = 1; // Garde la trace de l'échelle de départ
        });
        
        window.addEventListener("resize", (e) =>{
            // rescale(window.innerWidth/1000);
        });
        rescale(1.5);

        let speed = (window.innerWidth/700)*(window.innerWidth/50000);

        window.addEventListener("resize", (e) =>{
            speed = (window.innerWidth/700)*(window.innerWidth/50000);
        });


        ScrollTrigger.create({
            onUpdate: self => {
                allBox.forEach(element => {
                    Matter.Body.applyForce( element, {x: element.position.x, y: element.position.y}, {x: 0, y: -(self.direction)*speed});
                });
            }
        });
        let canvas = document.querySelector('canvas');
        canvas.style.width = '50vw';

      }, []); // Exécuter ce code seulement après le rendu du composant
    
      return <div className="cursor-pointer LogoBox w-fit h-fit m-auto bg-amber-300"></div>;
};