"use client";

import { useState } from "react";

import BootScreen from "@/components/BootScreen";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import WhyHireMe from "@/sections/WhyHireMe";
import Roles from "@/sections/Roles";
import Skills from "@/sections/Skills";
import SkillsGraph from "@/sections/SkillsGraph";
import Projects from "@/sections/Projects";
import GithubStats from "@/sections/GithubStats";
import Contact from "@/sections/Contact";
import CareerMap from "@/sections/CareerMap";
export default function Home() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <BootScreen onFinish={() => setBooted(true)} />;
  }

  return (
    <main className="flex flex-col gap-40">

      <Hero />

      <About />

      <WhyHireMe />

      <Roles />

      <Skills />
      <CareerMap />
      <SkillsGraph />

      <Projects />


      <GithubStats />

     

      <Contact />



    </main>
  );
}