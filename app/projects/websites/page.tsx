import React from "react";
import { motion } from 'framer-motion';
import { Websites } from "./components";

export default function Projects(){



	return(
		<section>
			<section id="websites" className="w-full min-h-dvh bg-gradient-to-r from-green-400/100 to-green-300/20">
      			<div className="w-full min-h-dvh bg-[url(/images/fish-background.png)] bg-cover">
          			<h1 className="w-full text-5xl md:text-7xl text-[#fafafa] p-20 pt-[70%] sm:pt-[20%]">Websites...</h1>
      			</div>
				
			</section>
			<Websites />
		</section>
	);
}