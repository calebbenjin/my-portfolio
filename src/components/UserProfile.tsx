"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const UserProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-30 h-30 rounded-full border-4 border-red-400 relative overflow-hidden"
    >
      <Image
        src="/profle.jpg"
        alt="Caleb Benjamin Profile Image"
        width={400}
        height={400}
      />
    </motion.div>
  );
};

export default UserProfile;
