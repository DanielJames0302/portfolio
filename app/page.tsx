"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { Contact } from "@/components/Contact";
import { Skills } from "@/components/Skills";
import { Header } from "@/components/ui/Header";
import { About } from "@/components/About";
import Award from "@/components/Award";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <RecentProjects />
        <Award />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
