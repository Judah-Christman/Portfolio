import type { Metadata } from "next";
import "./globals.css";
import {motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./components.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"


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
        {children}
        <Analytics />
        <SpeedInsights />
        <div className="w-full p-2 relative bg-green-400 flex justify-between">
          <p className="">Judah Christman 2025</p>
            <a href="https://github.com/Judah-Christman" target="_blank">
              <img
                src="/images/github.png"
                width={30}
                height={30}
                style={{ position: "absolute", right: "5px" }}
                alt="github"
              />
            </a>
        </div>
      </body>
    </html>
  );
}
