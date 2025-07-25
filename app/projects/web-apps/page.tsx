import React from "react";
import { motion } from 'framer-motion';
import { WebApps } from "./components.tsx";

export default function Apps(){


	return(
		<section>
			<section id="webapps" className="w-full min-h-dvh bg-gradient-to-r from-green-400/100 to-green-300/20">
      			<div className="w-full min-h-dvh bg-[url(/images/webappbg.png)] bg-cover">
          			<h1 className="w-full text-4xl md:text-7xl text-[#fafafa] p-20 pt-[70%] sm:pt-[20%]">Web Apps...</h1>
      			</div>
				
			</section>
			<WebApps />
		</section>
	);
}