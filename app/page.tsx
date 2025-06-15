'use client'
import Image from "next/image";
import "./globals.css"
import React from 'react';
import { useState } from 'react';
import { Navigation } from './components.jsx';
import { motion } from 'framer-motion';
import images from './images/headshot.jpg';
import squirtle from './images/squirtle.png';
import wartortle from './images/wartortle.png';
import blastoise from './images/Blsatoise.png';










export default function Home() {

  return (
    <>
    <div className="w-full min-h-dvh max-h-full bg-[url(../public/images/home-background.png)] bg-cover">
      
      <motion.h1 
      className="w-full text-green-300 text-5xl text-center py-20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        // opacity: { duration: 0.6 },
        scale: { type: "spring", duration: 0.4, bounce: 0.6 },
      }}>Judah Christman</motion.h1>
      <div className="w-full flex justify-center flex-wrap py-5">
        <motion.p className="w-full md:w-1/3 p-2 text-lg text-[#f6f6f6] text-justify mr-5 backdrop-blur-lg bg-green-300/60 rounded-xl"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.4, },
          y: { duration: 0.4 }
        }}>
          Hello! I am a front-end web developer with about 6 years of experience crafting dynamic and engaging 
          websites as a hobby. My journey began utilizing HTML, CSS, and JavaScript, and over the years, I have been 
          diving deeper into modern front-end technologies. <br/><br/> 
          Lately, I have been exploring the power of React and Next.js, building lightning-fast, scalable applications that look and feel great. I am also loving the flexibility of Tailwind CSS, which has elevated my design game and streamlined my workflow. <br/><br/>
          I am always curious and eager to learn the latest tools and trends in web development. Let's build something awesome together!
        </motion.p>
        <motion.div 
        className="relative w-[200px] md:w-1/4"
        initial={{ y: 300, opacity: 0, }}
        animate={{ y: 0, opacity: 1, }}
        transition={{
          opacity: { duration: 0.4 },
          y: { duration: 0.4 },
        }}>
          <Image src={images} style={{ width: "100%", height: "auto", borderRadius: "100%", paddingTop: "10px" }} alt="headshot" />
          {/*<div className="absolute w-1/2 bottom-0 -right-5 ">
            <Image src={squirtle} style={{ width: "100%", height: "auto", }} alt="squirtle" />
          </div>*/}
        </motion.div>
      </div>


      
    </div>
    </>
  );
}