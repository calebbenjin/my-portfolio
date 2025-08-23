"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiGithubLogo, PiXLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "https://blog.calebbenjamin.com/" },
  { name: "My Journey", href: "/caleb-story" },
  {
    name: "My Startups",
    href: "/my-startups",
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
      <div className="grid md:grid-cols-5 grid-cols-1 md:gap-x-8 gap-y-6 mx-auto lg:w-10/12 w-11/12 md:pt-20 pt-6">
        <div className="col-span-2 relative">
          <nav className=" sticky top-2 z-50 bg-zinc-800 border border-zinc-600 w-full py-3 md:px-6 px-2 rounded-full md:hidden flex md:gap-0 gap-y-5 flex-wrap justify-between items-start mb-4 md:shadow-md shadow-accent-foreground">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-zinc-200 shadow-md shadow-accent-foreground text-center font-semibold hover:bg-zinc-700 border-zinc-600 border md:px-8 px-3 py-1 rounded-full transition-colors md:text-base text-xs"
                variants={fadeIn}
                custom={index + 1}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
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
          <nav className="bg-zinc-80 border border-zinc-600 w-full py-3 md:px-6 px-2 rounded-full hidden md:flex md:gap-0 gap-y-5 flex-wrap justify-between items-start mb-4 md:shadow-md shadow-accent-foreground">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-zinc-200 shadow-md shadow-accent-foreground text-center font-semibold hover:bg-zinc-700 border-zinc-600 border md:px-8 px-3 py-1 rounded-full transition-colors md:text-base text-xs"
                variants={fadeIn}
                custom={index + 1}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
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
              custom={1}
            >
              I&apos;m a product engineer and techpreneur passionate about
              building meaningful products.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              custom={0}
              className="text-sm font-bold italic text-gray-200 mb-6"
            >
              &quot;I help teams and founders build high-performance
              user-centered products across the full product lifecycle from web
              to mobile with a focus on outcomes, not just output.&ldquo;.
            </motion.p>
            {/* <motion.h1
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
              <div className="border border-zinc-600 rounded-full text-center px-2 py-1 font-bold text-sm whitespace-nowrap cursor-pointer hover:bg-gray-200 transition-colors hover:text-zinc-800">
                SEO
              </div>
            </motion.section> */}
            <motion.p variants={fadeIn} custom={1} className="mt-6">
              I describe myself as a Product Engineer because I do more than
              just write code. With 7 years of experience in engineering, I
              focus on understanding product vision, user experience, and
              business goals to ensure every feature drives impact. I think
              deeply about how features influence users, growth, and long-term
              scalability, and I work closely with designers, product managers,
              and founders to ship products people love to use.
            </motion.p>
            <motion.p variants={fadeIn} custom={1} className="mt-2">
              For the past 6+ years I have work with founders, cto&apos;s,
              product managers and lead teams to build fast, scalable, and
              elegant web apps. I&apos;ve launched 5+ products for startups
              across fintech, logistics, and SaaS turning MVPs into real
              businesses.
            </motion.p>

            <motion.h1
              className="text-base font-semibold mb-4 mt-6"
              variants={fadeIn}
              custom={0}
            >
              🚀 Let&apos;s connect! I&apos;m always open to collaborating with
              founders, teams, and innovators who want to bring new ideas to
              market or scale existing products.
            </motion.h1>
            <div className="w-full flex flex-wrap gap-4 items-center md:mb-1 mb-10">
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
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
