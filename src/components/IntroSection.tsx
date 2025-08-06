"use client";

import React from "react";
import { motion } from "framer-motion";

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
        className="text-4xl font-bold mb-8"
        variants={fadeIn}
        custom={0}
      >
        Caleb Benjamin
      </motion.h1>
      <motion.h1
        className="text-xl font-bold mb-2"
        variants={fadeIn}
        custom={0}
      >
        🧑‍💻 Senior Frontend Engineer | React, TypeScript & Next.js Specialist.
      </motion.h1>
      <motion.p variants={fadeIn} custom={1}>
        I build fast, scalable, and elegant web apps. I’ve launched 5+ products
        for startups across fintech, logistics, and SaaS turning MVPs into real
        businesses.
      </motion.p>

      <motion.div className="mt-10" variants={fadeIn} custom={2}>
        <h2 className="font-bold text-3xl">👱‍♂️ About me</h2>
        <motion.p variants={fadeIn} custom={1} className="mt-4">
          I’m Caleb Benjamin, a Senior Frontend Engineer with 6+ years of
          experience building scalable, user-first web applications using React,
          TypeScript, and Next.js.
        </motion.p>
        <motion.p variants={fadeIn} custom={1} className="mt-4">
          I’m the founder of EachBlock, a development studio where I’ve led MVP
          builds and full-scale products for over a dozen startups across
          Nigeria, Canada, the US, and Europe. I specialize in turning founder
          ideas into polished, production-ready platforms.
        </motion.p>
        <motion.p variants={fadeIn} custom={1} className="mt-4">
          I’ve mentored 20+ junior devs, collaborated directly with CTOs, and
          shipped apps used by thousands in fintech, e-commerce, transport, and
          SaaS. My approach balances clean UI/UX with performance optimization
          and technical depth.
        </motion.p>
        <motion.p variants={fadeIn} custom={1} className="font-bold mt-4">
          I’m currently open to frontend engineering roles or product-building
          partnerships let’s build something powerful.
        </motion.p>
      </motion.div>

      {/* <motion.div className="mt-8" variants={fadeIn} custom={2}>
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
      </motion.div> */}

      {/* <motion.div
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
      </motion.div> */}
    </motion.section>
  );
};

export default IntroSection;
