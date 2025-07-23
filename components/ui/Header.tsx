'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/ActiveSectionProvider';
import { Button } from '@/components/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/Dialog';
import { Icons } from '@/components/Icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { links } from '@/lib/data';
import { cn } from "@/lib/utils";

export const Header = ({className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop-blur-sm sm:hidden"
          >
            Menu <Icons.chevronDown className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="text-muted-foreground max-h-screen w-[90%] rounded">
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              Navigation
            </DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={name}
                  className="border-muted-foreground/10 py-3 text-sm [&:not(:last-child)]:border-b"
                >
                  <Link className="block" href={hash}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
      <ThemeToggle className="bg-background/80 backdrop-blur-sm sm:hidden" />
      <nav className="text-muted-foreground hidden text-sm sm:block">
        <ul className="flex gap-5">
          {links.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className="hover:text-foreground relative px-4 py-2 transition-colors"
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="bg-muted absolute inset-0 -z-10 rounded-full"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};