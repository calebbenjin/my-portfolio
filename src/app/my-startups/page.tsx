"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const FreePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-extrabold mb-3"
          variants={fadeIn}
          custom={0}
        >
          My Startups
        </motion.h1>
        <p className="mb-6 text-lg text-gray-300 md:w-6/12 w-11/12 mx-auto">
          I believe startups can change the world. This page is where I’ll share
          the companies I’m building, the problems I’m solving, and the vision
          driving each project.
        </p>
        <Link href="/" className="inline-block">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default FreePage;
