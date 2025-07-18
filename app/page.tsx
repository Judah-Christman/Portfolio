'use client'
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useState } from 'react';
import { Navigation, Home, About, Contact } from './components.jsx';
import { motion } from 'framer-motion';










export default function Main() {

  return (
    <section id="main">
      <Home />
      <br/>
      <About />
      <br/>
      <Contact />
    </section>
  );
}