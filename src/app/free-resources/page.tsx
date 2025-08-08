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
          Free Resources
        </motion.h1>
        <p className="mb-6">
          Coming soon! Stay tuned for free resources to help you on your
          journey.
        </p>
        <Link href="/" className="inline-block">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default FreePage;
