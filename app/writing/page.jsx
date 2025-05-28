'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../globals.css";
import stories from "./stories.js";
import { Stories, Essays } from "./components.jsx";


export default function Writing(){

	return(
		<div className="w-full h-dvh bg-[url(./images/writing-background.png)] bg-cover">
			<h1 className="w-full text-green-300 text-5xl text-center py-10">Writing</h1>
			<p className="w-full text-lg text-[#f6f6f6] text-justify md:text-center p-2">One of my more prominent hobbies is writting. I enjoy writing many things from essays to short stories. View a few things I have written below!</p>
			<div className="w-full h-fit">
				<h2 className="w-full text-green-300 text-3xl text-center my-10">Short Stories</h2>
				<Stories />

				<h2 className="w-full text-green-300 text-3xl text-center my-10">Essays</h2>
				<Essays />

			</div>
		</div>
	);
}