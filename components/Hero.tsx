import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Button } from "@/components/Button";
import { Icons } from "@/components/Icons";

const Hero = () => {
  const { ref } = useSectionInView("Home");
  return (
    <div ref={ref} id="home" className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Link
              href="#contact"
              className="flex items-center gap-3 rounded border px-3 py-1"
            >
              <span className="relative flex size-2">
                <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative flex size-2 rounded-full bg-green-400"></span>
              </span>
              <span className="font-mono text-sm">Available for work!</span>
            </Link>
          </motion.div>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
          >
            Hi I&#39;m a{" "}
            <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
              Software
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
              AI Engineer
            </span>{" "}
            with great passion for building scalable and efficient systems
          </motion.h1>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m passionate about building applications and AI systems.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className="flex flex-row gap-2 mt-5"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                Get in touch <Icons.arrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="hidden sm:flex"
              asChild
            >
              <a href="/Tram_Minh_Man_CV.pdf" download>
                Download CV <Icons.download className="ml-2 size-4" />
              </a>
            </Button> */}
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/man-tram/"
                aria-label="Linkedin"
                target="_blank"
              >
                <Icons.linkedin className="size-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/DanielJames0302"
                aria-label="Github"
                target="_blank"
              >
                <Icons.github className="size-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
