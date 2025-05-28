'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../globals.css";
import stories from "./stories.js";
import essays from "./essays.js"

function Stories(){
		if (stories.length === 0){
			return(<p className="w-full text-[#f6f6f6] text-lg text-center">It looks like I have not uploaded anything yet. Try looking again later!</p>);			
		} else {
			return(
				<div className="w-full h-fit flex justify-center">
					{stories.map((story, index) =>(
							<Link key={index} href={story.file} download className="w-fit text-green-300 hover:text-green-400 m-5">{story.title}</Link>
					))}
				</div>
			);
		}
	}

function Essays(){
		if (essays.length === 0){
			return(<p className="w-full text-[#f6f6f6] text-lg text-center">It looks like I have not uploaded anything yet. Try looking again later!</p>);			
		} else {
			return(
				<div className="w-full flex justify-center">
					{essays.map((essay, index) =>(
							<Link key={index} href={essay.file} download className="w-fit text-green-300 hover:text-green-400 m-5">{essay.title}</Link>
					))}
				</div>
			);
		}
	}

export { Stories, Essays };