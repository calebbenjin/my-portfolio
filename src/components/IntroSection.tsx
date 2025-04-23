"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Redux Toolkit" },
  { name: "React Hooks" },
  { name: "Tailwind CSS" },
  { name: "GraphQL" },
  { name: "AWS S3" },
  { name: "Git & GitHub" },
  { name: "(CI/CD)" },
  { name: "Performance" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Styled Components" },
  { name: "Web Accessibility" },
  { name: "Agile" },
  { name: "SSR" },
  { name: "Integration Testing" },
];

const learnStack = [
  { name: "EVM-based blockchains" },
  { name: "Solana" },
  { name: "IPFS" },
  { name: "Ceramic" },
  { name: "Wagmi" },
  { name: "Ethers" },
  { name: "Web3js." },
  { name: "Solidity" },
  { name: "SVM" },
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

const IntroSection = () => {
  return (
    <motion.section
      className="mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.h1
        className="text-xl font-bold mb-4"
        variants={fadeIn}
        custom={0}
      >
        🧑‍💻Caleb Benjamin
      </motion.h1>
      <motion.p variants={fadeIn} custom={1}>
        I&apos;m a frontend developer with 5+ years building scalable
        applications and an optimist, passionate about optimization, business
        goals, and, most importantly Startups and Founders. This led me to join{" "}
        <a href="https://www.eachblock.xyz/" className="text-zinc-400">
          Eachblock
        </a>
        , where I build MVP for non-technical founders and launch to market on
        time.
      </motion.p>

      <motion.div className="mt-8" variants={fadeIn} custom={2}>
        <h2 className="font-bold text-xl">My Stack</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((stack, i) => (
            <motion.span
              key={i}
              className="text-sm border rounded-lg px-2 py-1"
              variants={fadeIn}
              custom={i + 3}
            >
              {stack.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-8 text-zinc-600"
        variants={fadeIn}
        custom={techStack.length + 3}
      >
        <h2 className="font-medium text-md text-zinc-400">
          Currently Learning Web3 technologies including
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {learnStack?.map((stack, i) => (
            <motion.span
              className="text-sm border border-zinc-600 rounded-lg px-2 py-1"
              key={i}
              variants={fadeIn}
              custom={techStack.length + 4 + i}
            >
              {stack.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
