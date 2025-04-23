"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedPortfolio");

    if (hasVisited) {
      setShowLoader(false);
    } else {
      localStorage.setItem("hasVisitedPortfolio", "true");
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 8000); // Duration of the video
      return () => clearTimeout(timeout);
    }
  }, []);

  if (!showLoader) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }}
    >
      <video
        src="/loader-3.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />
    </motion.div>
  );
};

export default PageLoader;
