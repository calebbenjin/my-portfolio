"use client";

import React, { useState } from "react";
import { PiAddressBookLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const externalLinks = [
  {
    icon: <TfiEmail size={14} />,
    label: "Email me",
    href: "mailto:calebbenjin@gmail.com",
  },
  {
    icon: <AiOutlineLinkedin size={14} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/calebbenjin/",
  },
];

const WorkTogetherSection = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <motion.section
        className="mt-20 pt-10 border-t border-zinc-300 dark:border-zinc-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p
          className="text-xs text-zinc-600 dark:text-zinc-400 uppercase font-bold tracking-widest mb-4"
          variants={fadeIn}
          custom={0}
        >
          Get in touch
        </motion.p>
        <motion.h2
          className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug"
          variants={fadeIn}
          custom={1}
        >
          Open to senior frontend roles and product partnerships.
        </motion.h2>
        <motion.p
          className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
          variants={fadeIn}
          custom={2}
        >
          Available for full-time positions and selective consulting. I work best
          with teams building ambitious products at the intersection of great UX
          and complex engineering.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-3 mt-6"
          variants={fadeIn}
          custom={3}
        >
          {/* Resume — opens inline modal */}
          <button
            onClick={() => setShowResume(true)}
            className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600 rounded-lg px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
          >
            <PiAddressBookLight size={14} />
            Resume
          </button>

          {externalLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600 rounded-lg px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
            >
              {link.icon}
              {link.label}
              <ArrowUpRight size={12} className="text-zinc-400 dark:text-zinc-600" />
            </Link>
          ))}
        </motion.div>
      </motion.section>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default WorkTogetherSection;
