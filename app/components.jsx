'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// This comment is to test the git push to temp branch

// Create Navigation bar
function Navigation(){
  const [projects, setProjects] = useState(false);

// create Navigation
  return (
    <section id="navigation" className="fixed w-full">
        <div className="w-full h-20 bg-[#333333]">
          <ul className="w-full flex items-start">
            <img src="/images/logo.png" width={75} height={75} alt="logo home"/>
            <li className="w-fit text-xl text-[#fafafa] font-semibold hover:underline px-1 md:px-5 my-auto">
              <Link href="/#home">Home</Link>
            </li>
            <li className="w-fit text-xl text-[#fafafa] font-semibold hover:underline px-1 md:px-5 my-auto">
              <Link href="/#about">About</Link>
            </li>
            <li 
              className="w-fit text-xl text-[#fafafa] font-semibold hover:underline hover:cursor-pointer px-1 md:px-5 my-auto"
              onMouseEnter={()=>{setProjects(true)}}
              onMouseLeave={()=>{setProjects(false)}}>
              Projects
              <ul className="absolute bg-[#333333] p-2" style={{ visibility: projects ? "visible" : "hidden" }}>
                <li className="hover:text-green-300"><Link href="/projects/websites">Websites</Link></li>
                <li className="hover:text-green-300"><Link href="/projects/web-apps">Web Apps</Link></li>
              </ul>
            </li>
            <li className="w-fit text-xl text-[#fafafa] font-semibold hover:underline px-1 md:px-5 my-auto">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      
    </section>
  );
}

function Home(){
  return(
    <section id="home" className="w-full min-h-dvh bg-gradient-to-r from-green-400/100 to-green-300/20">
      <div className="w-full min-h-dvh bg-[url(/images/home-background.png)] bg-cover">
          <h1 className="w-full text-5xl md:text-7xl text-[#fafafa] text-center pt-[70%] sm:pt-[20%]">Judah Christman</h1>
          <p className="w-full text-xl text-[#fafafa] text-center">Web Designer and Developer</p>
      </div>
    </section>
  );
}

function About(){
  return(
    <section id="about" className="w-full h-fit">

      <h2 className="w-full text-5xl text-green-300 text-center pt-20">About Me...</h2>
        <div className="w-full sm:grid grid-cols-2 gap-x-0 items-center overflow-x-hidden">
          <motion.div
            className="overflow-hidden"
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            viewport={{ once: true }}>
            <img src="/images/headshot.jpg" className="w-3/4 sm:h-3/4 mx-auto my-20 rounded-3xl" alt="Profile" />
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            viewport={{ once: true }}>
            <p className="sm:w-3/4 mx-auto p-3 text-justify text-lg text-[#fafafa] mb-20 bg-green-400/70 sm:my-20 sm:rounded-3xl sm:h-3/4 border-[5px] border-green-400 ">Hello! I am a web developer who has been crafting websites for the last 6 years. Most of my experience comes from creating websites for fun as a hobby but have built a few websites for local businesses. I have built many different websites from simple landing pages advertising businesses to multipage websites managed by an admin dashboard. I specialize in Next.js, Tailwind CSS, and Framer Motion, developing quick and interactive websites and web apps for all kinds of needs. I have also developed sites that integrate with databases using REST api’s, or that pull data from online csv sheets. Whether you need a landing page to advertise your business and provide contact information, or an admin console managed webpage that displays your products and/or events, I have you covered. Reach out today and I am sure we can develop something great together!</p>
          </motion.div>
        </div>
    </section>
  );
}

function Contact(){
  const [completed, setCompleted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }),
  });

  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
    setCompleted(!completed);
  }
  return(
    <section id="contact" className="w-full h-fit">
      <div className="w-full sm:w-3/4 sm:mx-auto my-10">
        {completed ?  <p className="w-full px-2 py-20 text-2xl text-[#f6f6f6] text-center">Thank you for reaching out! I will get back to you as soon as I can!</p> : 
          <div className="w-full min-h-fit my-20 sm:grid grid-cols-2">
            <div>
            <p className="w-full px-2 text-2xl text-[#f6f6f6] text-center py-5 ">Use the form below to contact me!</p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="w-full md:w-3/4 md:m-auto h-fit bg-green-400/70 rounded-xl flex flex-col p-5 my-10"
              initial={{ x: -500 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >

              <div>
                <label htmlFor="name" className="text-xl p-1 text-[#f6f6f6]">Name</label>
                <input type="text" name="name" required placeholder="Your name" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"/>
              </div>
              <div>
                <label htmlFor="email" className="text-xl p-1 text-[#f6f6f6]">Email</label>
                <input type="email" name="email" required placeholder="email@example.com" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"/>
              </div>
              <div>
                <label htmlFor="subject" className="text-xl p-1 text-[#f6f6f6]">Subject</label>
                <input type="text" name="subject" required placeholder="Subject of Message" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"/>
              </div>
              <div>
                <label htmlFor="message" className="text-xl p-1 text-[#f6f6f6]">Message</label>
                <textarea name="message" required rows="3" placeholder="Enter Message" className="w-full text-lg p-1 mx-auto my-2 text-black-500 rounded-md"></textarea>
              </div>
              <div>
                <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>
              </div>
              <button  type="submit" className="w-1/3 block mx-auto my-2 p-2 bg-green-400 rounded-xl transition delay-150 duration-300 ease-in-out hover:scale-[1.2]">Send</button>
            </motion.form>
            </div>
            <motion.div
            initial={{ x: 500 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              viewport={{ once: true }}><img src="/gifs/giphy.gif" className="w-3/4 m-auto sm:mt-20" /></motion.div>
            </div>}
      </div>
    </section>
  );
}

export { Navigation, Home, About, Contact};

