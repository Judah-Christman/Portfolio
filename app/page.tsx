'use client'
import Image from "next/image";
import Link from "next/link";
import "./globals.css"
import React from 'react';
import { useState } from 'react';
import { Navigation } from './components.jsx';
import { motion } from 'framer-motion';
import images from './images/headshot.jpg';










export default function Home() {

  return (
    <>
    <div className="w-full min-h-dvh max-h-full bg-[url(../public/images/home-background.png)] bg-cover">
      
      <h1 className="w-full text-green-300 text-5xl text-center py-10">Judah Christman</h1>
      <motion.div className="w-full flex justify-center flex-wrap py-5 h-fit"
      initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.4, },
          y: { duration: 0.4 }
        }}>
        <p className="w-full md:w-1/3 p-2 text-lg text-[#f6f6f6] text-justify mr-5 backdrop-blur-lg bg-green-300/60 rounded-xl">
          Hello! I am a web developer who has been crafting websites for the last 6 years. Most of my experience comes from creating websites for fun as a hobby but have built a few websites for local businesses.
I have built many different websites from simple landing pages advertising businesses to multipage websites managed by an admin dashboard. I specialize in Next.js, Tailwind CSS, and Framer Motion, developing quick and interactive websites and web apps for all kinds of needs. I have also developed sites that integrate with databases using REST api’s, or that pull data from online csv sheets. Whether you need a landing page to advertise your business and provide contact information, or an admin console managed webpage that displays your products and/or events, I have you covered. Reach out today and I am sure we can develop something great together!
 
        </p>
        <div 
        className="relative w-[200px] md:w-1/4">
          <Image src={images} style={{ width: "100%", height: "auto", borderRadius: "100%",  }} alt="headshot" />
          <p className="my-5 text-[#f6f6f6] text-center text-lg">Take a look at a few <Link href="https://judahchristman.com/web-apps#websites" className="font-black underline">websites</Link>!</p>
        </div>
      </motion.div>


      
    </div>
    </>
  );
}