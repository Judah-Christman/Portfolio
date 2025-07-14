"use client"
import React from "react";
import { useState } from "react";
import { motion, inView } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import todolist from "./images/todolist.png";
import weather from "./images/weather.png";
import quiz from "./images/quiz.png";
import github from "./images/github.png"
import christmanhorseshoeing from "./images/christmanhorseshoeing.png";
import chRedesign from "./images/chRedesign.png";
import leaveYourName from "./images/leaveYourName.png";
import rbs from "./images/rbs.png";

export default function webApps(){

	const [toggle, setToggle] = useState(false);

	const handleToggle = () =>{
		setToggle(!toggle);
	}

	

	return(
		<>
			<div className="w-full h-full bg-[url(/images/webapp-background.png)] bg-contain">
				<section id="top">
					<h1 className="w-full text-5xl text-green-300 text-center py-10">Web Apps</h1>
					<p className="w-full md:w-2/3 mx-auto text-xl text-[#f6f6f6] text-justify p-2">Below are a number of different web apps I have created to learn various concepts and challenge my skills. These projects have all been great learning opportunities as they build off of each other to create deeper, fuller web applications.</p>
					<br />
					<motion.div 
					className="w-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						opacity: { duration: 0.4 }
					}}>
						<p className="w-full md:w-2/3 mx-auto text-xl text-[#f6f6f6] text-justify p-2" style={{"textAlign": "center"}}>Press the button below to view the tools I used in these apps!</p>
						<button className="block w-[50px] h-[25px] rounded-lg mx-auto" onClick={handleToggle} style={{background: toggle ? "lightgreen" : "red"}}></button>
					</motion.div>
				</section>

				
				{/*begin list of apps*/}
				<section className="w-full px-2 py-[20px] flex flex-wrap justify-center">
				
					<Link href="/web-apps/to-do-list" className="w-1/3 md:w-[200px] mx-5 md:m-auto" >
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          				whileTap={{ scale: 0.7 }}>
            			<Image
              			src={todolist}
              			style={{ width: "100%", height: "auto" }}
              			// width={200}
              			// height={200}
              			alt={"todolist"}
              			 />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Simple To-Do List</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>          					
          					<li>React</li>
          					<li>Tailwind CSS</li>
          				</ul>
          			</div>
          			</motion.figure>
          			</Link>

          			<Link href="/web-apps/quiz-app"  className="w-1/3 md:w-[200px] mx-5 md:m-auto">
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          			whileTap={{ scale: 0.7 }}>
            			<Image
              			src={quiz}
              			style={{ width: "100%", height: "auto" }}
              			// width={200}
              			// height={200}
              			alt={"quiz"} />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Online Quiz</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>React</li>
          					<li>Tailwind CSS</li>
          				</ul>
          			</div>
          			</motion.figure>
          			</Link>

          			<Link href="/web-apps/weather-app" className="w-1/3 md:w-[200px] mx-5 md:m-auto">
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          			whileTap={{ scale: 0.7 }}>
            			<Image
              			src={weather}
              			style={{ width: "100%", height: "auto" }}
              			// width={200}
              			// height={200}
              			alt={"weather-app"}
              			 />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Weather App</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>React</li>
          					<li>Tailwind CSS</li>
          					<li>OpenWeather API</li>
          				</ul>
          			</div>
          			</motion.figure>
          			</Link>

          			<Link href="https://leave-your-name.vercel.app/" target="_blank" className="w-1/3 md:w-[200px] mx-5 md:m-auto"  >
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          				whileTap={{ scale: 0.7 }}>
            			<Image
              			src={leaveYourName}
              			style={{ width: "100%", height: "auto" }}
              			// width={200}
              			// height={200}
              			alt={"leaveYourName"}
              			 />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Leave A Message</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>          					
          					<li>Next.js</li>
          					<li>Supabase Database</li>
          					<li>Tailwind CSS</li>
          				</ul>
          			</div>
          			</motion.figure>
          			</Link>
				</section>

				{/*begin list of websites*/}
				<h2 className="w-full text-4xl text-center text-green-300 pb-10">Websites</h2>
				<section className="w-full flex flex-wrap">

				<Link href="https://christmanhorseshoeing.com" target="_blank" className="w-1/3 md:w-[200px] mx-5 md:m-auto">
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          			whileTap={{ scale: 0.7 }}>
            			<Image
              			src={christmanhorseshoeing}
              			width={200}
              			height={200}
              			alt={"quiz"}
              			style={{ borderRadius: "15px"}} />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Christman Horseshoeing</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>HTML5</li>
          					<li>CSS3</li>
          					<li>Javascript</li>
          				</ul>
          			</div>
          		</motion.figure>
          			</Link>

          			<Link href="https://ch-redesign.vercel.app/" target="_blank" className="w-1/3 md:w-[200px] mx-5 md:m-auto">
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          			whileTap={{ scale: 0.7 }}>
            			<Image
              			src={chRedesign}
              			width={200}
              			height={200}
              			alt={"quiz"}
              			style={{ borderRadius: "15px"}} />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Christman Horseshoeing (Redesign)</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>Next.js</li>
          					<li>Tailwind CSS</li>
          					<li>Framer Motion</li>
          				</ul>
          			</div>
          		</motion.figure>
          			</Link>

          			<Link href="https://retro-buy-sell.vercel.app" target="_blank" className="w-1/3 md:w-[200px] mx-5 md:m-auto">
					<motion.figure className="relative w-full"
					initial={{ x: "-100%", opacity: 0 }}
          			whileInView={{ x: 0, opacity: 1 }}
          			transition={{ duration: 0.4, ease: 'easeInOut'}}
          			viewport={{ once: true }}
					whileHover={{
            			scale: 1.2,
            			transition: {
              				duration: 0.2
            			}
          				}}
          			whileTap={{ scale: 0.7 }}>
            			<Image
              			src={rbs}
              			width={200}
              			height={200}
              			alt={"Retro Buy & Sell"}
              			style={{ borderRadius: "15px"}} />
            			<figcaption className="w-full text-xl text-[#f6f6f6] text-center pt-2">Retro Buy & Sell</figcaption>
          			
          			<div className="w-full text-lg text-center text-[#f6f6f6]" style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>Next.js</li>
          					<li>Tailwind CSS</li>
          					<li>Framer Motion</li>
          				</ul>
          			</div>
          		</motion.figure>
          			</Link>



				</section>
			</div>
		</>
	);
}