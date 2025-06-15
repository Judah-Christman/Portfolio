'use client'
import Link from "next/link";
import React from "react";
import "../globals.css";
import  {Stories}  from "./components.tsx"


export default function Writing(){

	return(
		<div className="w-full min-h-dvh max-h-fit bg-[url(./images/writing-background.png)] bg-contain">
			<h1 className="w-full text-green-300 text-5xl text-center py-10">Writing</h1>
			<p className="w-full text-lg text-[#f6f6f6] text-justify md:text-center p-2">One of my more prominent hobbies is writting. I enjoy writing many things from essays to short stories. View a few things I have written below!</p>
			<div className="w-full h-fit py-10">
				<Stories />


			</div>
		</div>
	);
}