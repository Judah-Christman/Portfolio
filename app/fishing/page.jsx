'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "../globals.css";
import flies from "./flies.js";
import catches from "./fish.js";

export default function(){
	const [fly, setFly] = useState(true);
	const [fish, setFish] = useState(true);


	const handleFly = () =>{
		setFly(!fly);
	}

	const handleFish = () =>{
		setFish(!fish);
	}



	return(
		<div className="w-full min-h-dvh max-h-full bg-[url(/images/fish-background.png)] bg-cover">
			<h1 className="w-full text-5xl text-green-300 text-center my-10">Fishing</h1>
			<p className=" p-2 md:w-1/3 text-lg text-[#f6f6f6] text-justify m-auto">
				One of my hobbies is fishing. I am particularly fond of fly fishing and even tie my own flies! Take a look at some of the flies I have tied and fish I have caught!
			</p>
			<div className="my-10">
				<h2 className="w-1/4 text-green-300 text-3xl text-center">Flies</h2>
				<p className="w-full p-2 text-[#f6f6f6] text-justify md:text-center">Click the button below to view some of the flies I have created!</p>
				<div className="w-full">
					{fly ? "" : 
					<div 
					className="w-full flex justify-center"
					
					>
						{flies.map((src, index)=>(
							<Image
								key={index}
								src={src}
								style={{ borderRadius: "10px", margin: "5px" }}
								width={175}
								height={175}
								alt="Caddis"
								 />	
						))}



						
					</div> 
				}
				<motion.button
					className="w-fit block text-[#f6f6f6] text-lg bg-green-500 border-green-300 rounded-xl border border-2 p-2 my-10 mx-auto"
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.2}}
					whileTap={{ rotate: 5 }}
					onClick={handleFly}
					>{fly ? "Show Flies" : "Hide Flies"}</motion.button>
				</div>
				<hr className="w-3/4 mx-auto my-5"/>
			</div>
			<div>
				<h2 className="w-1/4 text-green-300 text-3xl text-center">Fish</h2>
				<p className="w-full p-2 text-[#f6f6f6] text-justify md:text-center">Click the button to view some of the fish I have caught</p>
				<div>
					{fish ? "" : 
				<div 
					className="w-full flex justify-center"
					
					>
						{catches.map((src, index)=>(
							<Image
								key={index}
								src={src}
								style={{ borderRadius: "10px", margin: "5px" }}
								width={175}
								height={175}
								alt="Fish"
								 />	
						))}



						
					</div> }
					<motion.button
					className="w-fit block text-[#f6f6f6] text-lg bg-green-500 border-green-300 rounded-xl border border-2 p-2 my-10 mx-auto"
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.2}}
					whileTap={{ rotate: 5 }}
					onClick={handleFish}
					>{fish ? "Show Catches" : "Hide catches"}</motion.button>
				</div>
			</div>
		</div>
	);
}