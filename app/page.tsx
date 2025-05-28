import Image from "next/image";
import "./globals.css"
import React from 'react';
import { Navigation } from './components.jsx';
import { Projects } from './components.jsx';
import { Hobbies } from './components.jsx';
import { motion } from 'framer-motion';
import images from './images/headshot.jpg';
import squirtle from './images/squirtle.png';
import wartortle from './images/wartortle.png';
import blastoise from './images/Blsatoise.png';










export default function Home() {


  return (
    <div className="w-full bg-[url(../public/images/home-background.png)] bg-cover">
      
      <h1 className="w-full text-green-300 text-5xl text-center py-20">Judah Christman</h1>
      <div className="w-full flex justify-center py-5">
        <p className="w-full md:w-1/3 p-2 text-lg text-[#f6f6f6] text-justify ">
          Hello! I am a front-end web developer with about 6 years of experience crafting dynamuc and engaging 
          websites as a hobby. My journey began utilizing HTML, CSS, and JavaScript, and over the years, I have been 
          diving deeper into modern front-end technologies. <br/><br/> 
          Lately, I have been exploring the power of React and Next.js, building lightning-fast, scalable applications 
          that look and feel greatl. I am also loving the flexibility of Tailwind CSS, which has elevated my design game and sreamlined 
          my workflow. <br/><br/>
          I am always curious and eager to learn the latest tools and trends in web development. Let's build something awesome together!
        </p>
        <div className="relative md:w-1/4">
          <Image src={images} style={{ width: "100%", height: "auto", borderRadius: "100%" }} alt="headshot" />
          <div className="absolute w-1/2 bottom-0 -right-5 "><Image src={squirtle} style={{ width: "100%", height: "auto", }} alt="squirtle" /></div>
        </div>
      </div>


      
    </div>
  );
}