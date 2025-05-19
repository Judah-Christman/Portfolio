'use client'


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import devices from './images/devices.png';
import application from './images/application.png';
import fly from './images/fly.png';
import videoGames from './images/videoGames.png';
import study from './images/study.png';



// Create Navigation bar
const LandingPage = () => {

  const [isHover, setIsHover] = useState(false);


  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <nav 
        className={styles.navigation}  
        style={{
          background: isHover ? '#161616' : '',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className={styles.navList}>
          <li className={styles.link}><a href="#Jkc" className={styles.linkStyle}>JKC</a></li>
          <li className={styles.link}><a href="#Projects" className={styles.linkStyle}>Projects</a></li>
          <li className={styles.link}><a href="#Hobbies" className={styles.linkStyle}>Hobbies</a></li>
        </ul>
      </nav> 
    </>
  );
};


// Create Preview Window Options

  // Home Preview
const Jkc = () => {
  const [className, setClassName] = useState(styles.squirtle);

  const handleClick = () => {
    if (className === styles.squirtle){
      setClassName(styles.wartortle);
    }
    else if (className === styles.wartortle) {
      setClassName(styles.blastoise);
    }
    else{
      setClassName(styles.squirtle);
    }
  };
  return(
    <>
      <div className={styles.Jkc}>
        <h2 className={styles.title}>JKC</h2>
        <div className={styles.headshot}></div>
        <div className={className} onClick={handleClick}   ></div>
        <p className={styles.paragraph}>Hello! I am Judah Christman, an ameteur in many tech fields, from robotics to web development. I have hope to bring my skills and talents into the professional world. On this site you can view a number of my projects and hobbies.</p>
        <h2 className={styles.smallTitle}>About Me</h2>
        <p className={styles.paragraph}>
          I am a passionate web developer specializing in building dynamic web applications and creating devices. With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning complex problems into clean, functional solutions. I also have hands-on experience with React and the Next.js framework, and I'm always looking for new challenges to deepen my skills and broaden my knowledge.

          One of my favorite aspects of web development is the constant learning. Whenever I am programming I like utilizing a dual screen setup to quickly and efficiently update my code, making real-time updates and instantly seeing the results. And when I hit a roadblock, I consult my trusty Squirtle (small figurine on my desk) for guidance—sometimes explaining the problem aloud is all it takes to find a solution!

          I'm naturally inclined toward problem-solving, and I pride myself on being a dedicated and organized developer. Whether I'm working on a personal project or collaborating with a team, I bring a generous work ethic and a commitment to creating well-structured, maintainable code.

          If you're looking for a developer who loves challenges and is dedicated to delivering high-quality results, let's connect!
        </p>
      </div>
    </>
  );
};

  // Projects Preview
const Projects = () => {
  return(
      <>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.paragraph}>
          My passion for technology, especially software development, has driven me to explore a wide range of projects. My journey began at a young age with the robotics platform Arduino, where I learned to program devices using C++. While robotics sparked my interest, I soon realized it could be an expensive hobby and shifted my focus to software development.

I started by building static websites using HTML and CSS, before diving into JavaScript to create more interactive user experiences. Over time, I expanded my skills and began working with modern libraries like React, and frameworks like Next.js (the framework powering this site). With each new project, I continue to refine my skills and grow as a developer.
        </p>
        <div className={styles.flexContainer}>
          <motion.figure href="/projects" className={styles.figure} whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={devices}
              width={200}
              height={200}
              alt={"devices"}
              className={styles.figureImg} />
            <figcaption className={styles.figureCap}>Robotics/Devices</figcaption>
          </motion.figure>
          <Link href="/projects/web-apps" className={styles.figure}>
          <motion.figure whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}>
            <Image
              src={application}
              width={200}
              height={200}
              alt={"application"}
              className={styles.figureImg} />
            <figcaption className={styles.figureCap}>Web Apps</figcaption>
          </motion.figure>
          </Link>
        </div>
      </>
    );
};

const Hobbies = () => {
  return(
    <>
      <h1 className={styles.title}>My Hobbies</h1>
      <p className={styles.paragraph}>I have a variety of hobbies and interests I enjoy doing on my free time!</p>
      <div className={styles.flexContainer}>
        <motion.figure className={styles.figure} whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2
            }
          }}>
          <Image
            src={fly}
            width={200}
            height={200}
            alt={"Fishing"}
            className={styles.figureImg} />
          <figcaption className={styles.figureCap}>Fishing</figcaption>
        </motion.figure>
        <motion.figure className={styles.figure} whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2
            }
          }}>
          <Image
            src={videoGames}
            width={200}
            height={200}
            alt={"videoGames"}
            className={styles.figureImg} />
          <figcaption className={styles.figureCap}>Video Games</figcaption>
        </motion.figure>
        <motion.figure className={styles.figure} whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2
            }
          }}>
          <Image
            src={study}
            width={200}
            height={200}
            alt={"Biblical Studies"}
            className={styles.figureImg} />
          <figcaption className={styles.figureCap}>Biblical Studies</figcaption>
        </motion.figure>
      </div>
    </>
  );
};



export {
  Hobbies,
  Projects,
  Jkc,
  LandingPage,
};