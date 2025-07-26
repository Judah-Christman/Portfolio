import type { Metadata } from "next";
import "./globals.css";
import {motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./components.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Judah Christman",
  description: "Portfolio/Personal website for web development, hobbies, and more!",
  keywords: ["web development", "judah christman", "judah", "christman", "frontend web development", "web design", "developer", "freelance", "local", "website"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}
