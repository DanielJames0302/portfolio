"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const { ref: sectionRef } = useSectionInView("Skills");

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Skills"
        content="Professional skills that I have developed over several years."
      />
      <div className="relative max-w-screen-md">
        {skillsData.map(({ title, technologies }) => (
          <div
            key={title}
            className="not-last:pb-12 relative ml-20 pl-8 [&:not(:last-child)]:pb-10"
          >
            <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
              <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.175,
              }}
              viewport={{
                once: true,
              }}
              className={cn("space-y-3 opacity-0")}
            >
              <div>
                <h3 className="text-xl font-medium">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
