"use client"
import React from "react";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./webapps.module.css";
import todolist from "./images/todolist.png";
import weather from "./images/weather.png";
import quiz from "./images/quiz.png";
import github from "./images/github.png"
import christmanhorseshoeing from "./images/christmanhorseshoeing.png";

export default function webApps(){

	const [toggle, setToggle] = useState(false);

	const handleToggle = () =>{
		setToggle(!toggle);
	}

	

	return(
		<div className={styles.backgroundColor}>
			<div className={styles.backgroundDesign}>
				<nav>
					<a href="../" className={styles.homeLink} title="Go Back to Home">JKC</a>
				</nav>
				<section id="top">
					<h1 className={styles.title}>Web Apps</h1>
					<p className={styles.paragraph}>Below are a number of different web apps I have created to learn various concepts and challenge my skills. These projects have all been great learning opportunities as they build off of each other to create deeper, fuller web applications.</p>
					<br />
					<div className={styles.buttonWrap}>
						<p className={styles.paragraph} style={{"textAlign": "center"}}>Press the button below to view the tools I used in these apps!</p>
						<button className={styles.toggleButton} onClick={handleToggle} style={{background: toggle ? "lightgreen" : "red"}}></button>
					</div>
				</section>

				
				{/*begin list of apps*/}
				<section className={styles.flexContainer}>
				
					<Link href="/projects/web-apps/to-do-list" target="_blank" className={styles.figure}>
					<figure>
            			<Image
              			src={todolist}
              			width={200}
              			height={200}
              			alt={"todolist"}
              			 />
            			<figcaption className={styles.figureCap}>Simple To-Do List</figcaption>
          			</figure>
          			<div className={styles.appInfo} style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>Next.js</li>
          					<li>React</li>
          					<li>CSS3</li>
          				</ul>
          			</div>
          			</Link>

          			<Link href="/projects/web-apps/quiz-app" target="_blank" className={styles.figure}>
					<figure>
            			<Image
              			src={quiz}
              			width={200}
              			height={200}
              			alt={"quiz"}
              			className={styles.figureImg} />
            			<figcaption className={styles.figureCap}>Online Quiz</figcaption>
          			</figure>
          			<div className={styles.appInfo} style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>Next.js</li>
          					<li>React</li>
          					<li>Tailwindcss</li>
          				</ul>
          			</div>
          			</Link>

          			<Link href="/projects/web-apps/weather-app" target="_blank" className={styles.figure}>
					<figure>
            			<Image
              			src={weather}
              			width={200}
              			height={200}
              			alt={"weather-app"}
              			 />
            			<figcaption className={styles.figureCap}>Weather App</figcaption>
          			</figure>
          			<div className={styles.appInfo} style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>React</li>
          					<li>Tailwindcss</li>
          					<li>OpenWeather API</li>
          				</ul>
          			</div>
          			</Link>
				</section>

				{/*begin list of websites*/}
				<h1 className={styles.title}>Websites</h1>
				<section className={styles.flexContainer}>

				<Link href="https://christmanhorseshoeing.com" target="_blank" className={styles.figure}>
					<figure>
            			<Image
              			src={christmanhorseshoeing}
              			width={200}
              			height={200}
              			alt={"quiz"}
              			className={styles.figureImg} />
            			<figcaption className={styles.figureCap}>Christman Horseshoeing</figcaption>
          			</figure>
          			<div className={styles.appInfo} style={{visibility: toggle ? "visible" : "hidden"}}>
          				Tools Used: 
          				<ul>
          					<li>HTML5</li>
          					<li>CSS3</li>
          					<li>Javascript</li>
          				</ul>
          			</div>
          			</Link>

				</section>
			</div>
		</div>
	);
}