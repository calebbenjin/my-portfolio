"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiGithubLogo, PiXLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

const navLinks = [
  { name: "My Story", href: "/caleb-story" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "https://blog.calebbenjamin.com/" },
  {
    name: "Free Resources",
    href: "/free-resources",
  },
];

const socialLinks = [
  {
    icon: <PiGithubLogo />,
    label: "Github",
    link: "https://github.com/calebbenjin",
  },

  {
    icon: <PiXLogo />,
    label: "LinkedIn",
    link: "https://x.com/calebbenjamiin",
  },
  {
    icon: <AiOutlineLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/calebbenjin/",
  },
  {
    icon: <TfiEmail />,
    label: "Send a Message",
    link: "mailto:calebbenjin@gmail.com",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const HeroPage = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-5 grid-cols-1 md:gap-x-8 gap-y-6 mx-auto lg:w-10/12 w-11/12 md:pt-20 pt-10">
        <div className="col-span-2">
          <div className="md:h-[80vh] h-[50vh] overflow-hidden w-full rounded-2xl shadow-lg relative">
            <Image
              src="/profile-img.jpeg"
              width={500}
              height={600}
              alt="Hero"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-3 relative flex flex-col items-center justify-between">
          <motion.section
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h1
              className="text-6xl font-extrabold mb-3"
              variants={fadeIn}
              custom={0}
            >
              Caleb Benjamin
            </motion.h1>
            <motion.h1
              className="text-xl font-meduim mb-6"
              variants={fadeIn}
              custom={0}
            >
              I&apos;m a product engineer passionate about crafting meaningful
              things.
            </motion.h1>
            <motion.h1
              className="text-xl font-semibold mb-2"
              variants={fadeIn}
              custom={0}
            >
              Things I&apos;m really into:
            </motion.h1>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <div className="border-zinc-600 border rounded-full text-center px-6 py-1 font-bold text-sm cursor-pointer hover:bg-gray-200 transition-all hover:text-zinc-800 shadow-md shadow-accent-foreground">
                AI
              </div>
              <div className="border border-zinc-600 rounded-full text-center px-2 py-1 font-bold text-sm cursor-pointer hover:bg-gray-200 transition-colors hover:text-zinc-800">
                React/TypeScript
              </div>
              <div className="border border-zinc-600 rounded-full text-center px-2 py-1 font-bold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-200 transition-colors hover:text-zinc-800">
                ReactNative
              </div>
              <div className="border border-zinc-600 rounded-full text-center px-2 py-1 font-bold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-200 transition-colors hover:text-zinc-800">
                Design Engineering
              </div>
              <div className="border border-zinc-600 rounded-full text-center px-2 py-1 font-bold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-200 transition-colors hover:text-zinc-800">
                Web Performance
              </div>
            </motion.section>
            <motion.p variants={fadeIn} custom={1} className="mt-6">
              I describe myself as a Fullstack React Product Developer. I work
              across the entire stack in TypeScript (I know Nodejs(backend) but
              prefer React & ReactNative (frontend)), I collaborate with
              product, talk to customers and do what&apos;s required for the
              product to succeed.
            </motion.p>
            <motion.p variants={fadeIn} custom={1} className="mt-6">
              For the past 6+ years I have build fast, scalable, and elegant web
              apps. I&apos;ve launched 5+ products for startups across fintech,
              logistics, and SaaS turning MVPs into real businesses.
            </motion.p>
            <motion.h1
              className="text-xl font-semibold mb-2 mt-6"
              variants={fadeIn}
              custom={0}
            >
              Let&apos;s connect:
            </motion.h1>
            <div className="w-full flex flex-wrap gap-4 items-center">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="text-zinc-200 shadow-md shadow-accent-foreground text-center font-semibold hover:bg-zinc-700 border-zinc-600 border p-2 rounded-full transition-colors text-2xl"
                  variants={fadeIn}
                  custom={index + 1}
                >
                  {link?.icon}
                </motion.a>
              ))}
            </div>
          </motion.section>
          <nav className="bg-zinc-80 border border-zinc-600 w-full py-3 md:px-6 px-3 rounded-full flex md:gap-0 gap-y-5 flex-wrap justify-between items-center md:my-0 my-6 shadow-md shadow-accent-foreground">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-zinc-200 shadow-md shadow-accent-foreground text-center font-semibold hover:bg-zinc-700 border-zinc-600 border md:px-8 px-3 py-1 rounded-full transition-colors"
                variants={fadeIn}
                custom={index + 1}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
