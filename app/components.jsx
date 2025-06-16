'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "./images/logo.png";
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
// create Navigation
  return (
    <>
      <AnimatePresence>{nav && <motion.div className=" fixed w-full h-screen bg-gray-600/90  z-50"
              key="navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.4 },
              }}> 
        <div className="fixed top-3 right-3 text-4xl text-red-400 hover:cursor-pointer" onClick={handleNav }>X</div>
        <h1 className="w-fit text-green-300 text-5xl p-2 hover:underline"><Link href="https://judahchristman.com" onClick={handleNav}>Home</Link></h1>
        <h1 onClick={handleProject} className="w-fit text-green-300 text-5xl p-2 hover:underline hover:cursor-pointer">Projects</h1>
        <AnimatePresence>
        {projects ? <motion.div 
                      className="w-full flex justify-center relative"
                      key="projects"
                      initial={{ opacity: 0, x: -2000 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -2000}}
                      transition={{
                        opacity: { duration: 0.4, },
                        x: { duration: 0.4 }
                        
                      }}>

          <Link href="https://judahchristman.com/devices" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleNav}>
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
            <figcaption className="w-full text-xl text-[#f6f6f6] text-center">Robotics/ Devices</figcaption>
          </motion.figure>
          </Link>

          <Link href="https://judahchristman.com/web-apps" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleNav}>
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
            <figcaption className="w-full text-xl text-[#f6f6f6] text-center">Web Apps</figcaption>
          </motion.figure>
          </Link>
        </motion.div> : null}
        </AnimatePresence>
        
        <h1 onClick={handleHobbie} className="w-fit text-green-300 text-5xl p-2 hover:underline hover:cursor-pointer">Hobbies</h1>
        <AnimatePresence>
        {hobbies ? <motion.div 
                    className="w-full flex justify-center relative"
                    key="hobbies"
                      initial={{ opacity: 0, x: -2000 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -2000}}
                      transition={{
                        opacity: { duration: 0.4, },
                        x: { duration: 0.4 }
                        
                      }}>
          <Link href="https://judahchristman.com/fishing" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleNav}>
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
            <figcaption className="w-full text-xl text-[#f6f6f6] text-center">Fishing</figcaption>
          </motion.figure>
          </Link>

          <Link href="https://judahchristman.com/writing" className="relative w-1/4 md:w-[200px] m-auto" onClick={handleNav}>
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
            <figcaption className="w-full text-xl text-[#f6f6f6] text-center">Writing</figcaption>
          </motion.figure>
          </Link>
        </motion.div> : null}
        </AnimatePresence>
        <h1 className="w-fit text-green-300 text-5xl p-2 hover:underline"><Link href="https://judahchristman.com/contact" onClick={handleNav}>Contact</Link></h1>
      </motion.div> }</AnimatePresence>
      <div className="w-[75px] fixed top-3 right-3 text-5xl text-green-300 hover:cursor-pointer z-50" onClick={handleNav}>
        <Image src={logo} alt="logo" style={{ width: "100%", height: "auto"}} />
        <motion.p 
        className="absolute top-0 -left-20 w-full text-green-300 text-center text-lg"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0 }}
        transition={{
          opacity: { delay: 2, duration: 0.4 },
          scale: { delay: 2, duration: 0.4 }
        }}>Click Me! -&gt;</motion.p>
      </div>
    </>
  );
}

export { Navigation};

