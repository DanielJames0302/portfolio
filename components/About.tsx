"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { useSectionInView } from "@/hooks/use-section-in-view";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Tram Minh Man, I&apos;m a penultimate Computer Science
          undergraduate student from National University of Singapore. I have a
          strong passion for Software Engineering and Artificial Intelligence
          because I am inspired by how innovative AI breakthroughs can be
          applied to impactful software serving millions of users. I thrive on
          the excitement of solving complex problems and have had the
          opportunity to work on a variety of challenging projects, including
          personal initiatives, collaborative ventures, and research work. I am
          always eager to learn new technologies and expand my horizons.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
    </motion.section>
  );
};
