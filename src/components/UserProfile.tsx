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
      className="lg:w-60 lg:h-60 w-50 h-50 rounded-full border-4 border-white relative overflow-hidden"
    >
      <Image
        src="/caleb benjamin profile image.jpg"
        alt="Caleb Benjamin Profile Image"
        width={600}
        height={600}
      />
    </motion.div>
  );
};

export default UserProfile;
