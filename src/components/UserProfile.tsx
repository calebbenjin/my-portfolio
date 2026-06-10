"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

const UserProfile = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex items-start gap-5"
      >
        <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10 flex-shrink-0">
          <Image
            src="/eachblock-founder.jpg"
            alt="Caleb Benjamin"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-widest font-medium">
              Available for roles
            </span>
          </div>
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Caleb Benjamin
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-0.5">
            Senior Frontend Engineer · React, TypeScript & Next.js
          </p>
          <button
            onClick={() => setShowResume(true)}
            className="mt-3 flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-500 rounded-lg px-3 py-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
          >
            <FileText size={12} />
            View Resume
          </button>
        </div>
      </motion.div>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default UserProfile;
