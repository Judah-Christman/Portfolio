'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import devices from './images/devices.png';
import application from './images/application.png';
import fly from './images/fly.png';
import videoGames from './images/videoGames.png';
import study from './images/study.png';



// Create Navigation bar
function Navigation(){
  const [projects, setProjects] = useState(false);
  const [hobbies, setHobbies] = useState(false);
  const [nav, setNav] = useState(false);

  const handleProject = () => {
    setProjects(!projects);
  }

  const handleHobbie = () => {
    setHobbies(!hobbies);
  }

  const handleNav = () => {
    setNav(!nav);
    setHobbies(false);
    setProjects(false);
  }

  return (
    <>
      {nav ? <div className=" fixed w-full h-screen bg-gray-600/90  z-50"> 
        <div className="fixed top-3 right-3 text-4xl text-red-400" onClick={handleNav }>X</div>
        <h1 className="w-fit text-green-300 text-5xl p-2 hover:underline"><Link href="./" onClick={handleNav}>Home</Link></h1>
        <h1 onClick={handleProject} className="w-fit text-green-300 text-5xl p-2 hover:underline hover:cursor-pointer">Projects</h1>
        {projects ? <AnimatePresence><div 
                      className="w-full flex justify-center relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0}}
                      >

          <Link href="/projects/devices" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleProject, handleNav}>
          <motion.figure 
          className="opacity-100"
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={devices}
              style={{ width: "100%", height: "auto", }}
              // width={200}
              // height={200}
              alt="devices" />
            <figcaption className="w-full text-2xl text-[#f6f6f6] text-center">Robotics/Devices</figcaption>
          </motion.figure>
          </Link>

          <Link href="/projects/web-apps" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleProject, handleNav}>
          <motion.figure 
          className="opacity-100"
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={application}
              style={{ width: "100%", height: "auto", }}
              // width={200}
              // height={200}
              alt="devices" />
            <figcaption className="w-full text-2xl text-[#f6f6f6] text-center">Web Apps</figcaption>
          </motion.figure>
          </Link>
        </div></AnimatePresence> : ""}
        <h1 onClick={handleHobbie} className="w-fit text-green-300 text-5xl p-2 hover:underline hover:cursor-pointer">Hobbies</h1>
        {hobbies ? <div className="w-full flex justify-center relative">
          <Link href="/fishing" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleHobbie, handleNav}>
          <motion.figure 
          className="opacity-100"
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={fly}
              style={{ width: "100%", height: "auto", }}
              // width={200}
              // height={200}
              alt="Fishing" />
            <figcaption className="w-full text-2xl text-[#f6f6f6] text-center">Fishing</figcaption>
          </motion.figure>
          </Link>

          <Link href="/writing" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleHobbie, handleNav}>
          <motion.figure 
          className="opacity-100"
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={study}
              style={{ width: "100%", height: "auto", }}
              // width={200}
              // height={200}
              alt="devices" />
            <figcaption className="w-full text-2xl text-[#f6f6f6] text-center">Writing</figcaption>
          </motion.figure>
          </Link>
        </div> : ""}
      </div> : <div className="w-fit fixed top-3 right-3 text-5xl text-green-300" onClick={handleNav}>=</div>}
    </>
  );
}


  // Projects Preview
function Projects(){
  return(
      <>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.paragraph}>
          My passion for technology, especially software development, has driven me to explore a wide range of projects. My journey began at a young age with the robotics platform Arduino, where I learned to program devices using C++. While robotics sparked my interest, I soon realized it could be an expensive hobby and shifted my focus to software development.

I started by building static websites using HTML and CSS, before diving into JavaScript to create more interactive user experiences. Over time, I expanded my skills and began working with modern libraries like React, and frameworks like Next.js (the framework powering this site). With each new project, I continue to refine my skills and grow as a developer.
        </p>
        <div className={styles.flexContainer}>
          <Link href="/projects/devices" className={styles.figure}>
          <motion.figure whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={devices}
              width={200}
              height={200}
              alt={"devices"}
              className={styles.figureImg} />
            <figcaption className={styles.figureCap}>Robotics/Devices</figcaption>
          </motion.figure>
          </Link>
          <Link href="/projects/web-apps" className={styles.figure}>
          <motion.figure whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={application}
              width={200}
              height={200}
              alt={"application"}
              className={styles.figureImg} />
            <figcaption className={styles.figureCap}>Web Apps</figcaption>
          </motion.figure>
          </Link>
        </div>
      </>
    );
};

function Hobbies(){
  return(
    <>
      <h1 className={styles.title}>My Hobbies</h1>
      <p className={styles.paragraph}>I have many hobbies and interests outside of webdevleopment and programming. Here are a few of them!</p>
      <div className={styles.flexContainer}>
      <Link href="/fishing" className={styles.figure}>
        <motion.figure  whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2
            }
          }}>
          <Image
            src={fly}
            width={200}
            height={200}
            alt={"Fishing"}
            className={styles.figureImg} />
          <figcaption className={styles.figureCap}>Fishing</figcaption>
        </motion.figure>
        </Link>
        <Link href="/writing" className={styles.figure}> 
        <motion.figure className={styles.figure} whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2
            }
          }}>
          <Image
            src={study}
            width={200}
            height={200}
            alt={"Biblical Studies"}
            className={styles.figureImg} />
          <figcaption className={styles.figureCap}>Writing</figcaption>
        </motion.figure>
        </Link>
      </div>
    </>
  );
};

export { Navigation, Projects, Hobbies };

