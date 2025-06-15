'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Projects } from "./components.tsx";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Devices(){



	return(
		<>
			<div className="w-full min-h-dvh max-height-full bg-[url(./images/device-background.png)] bg-contain">
				<h1 className="w-full text-5xl text-green-300 text-center py-10">Robotics and Devices</h1>
				<p className="w-full p-2 md:w-2/3 text-justify text-[#f6f6f6] text-lg m-auto">
					My first introduction to programming was not actually in web development but robotics. Specifically, I was introduced
					 to the robotics platform and hardware from <Link className="font-semibold" href="https://arduino.cc" target="_blank">Arduino</Link>.
					  I spent many of my pre-teen and teen years learning and creating various devices and toys with the Arduino boards. 
					  While Arduino was fairly affordable at the time for basic projects, I found that it was an expensive hobby to maintain.
					   When I got into High School my sister introduced me to web development as a cheaper alternative to robotics, for my enjoyment
					    was really in writing code and seeing it at work. Throughout High School I had practiced and developed many different websites
					     using HTML5, CSS3, and JavaScript.
				</p>

				<div className="w-full">
					<Projects />
					
				</div>
			</div>
		</>

	);
}