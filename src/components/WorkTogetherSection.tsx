"use client";

import React from "react";
import { Button } from "./ui/button";
import { PiAddressBookLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const WorkTogetherSection = () => {
  return (
    <motion.section
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.h2
        className="font-bold text-2xl mb-6"
        variants={fadeIn}
        custom={0}
      >
        🔥 Let&apos;s Work Together
      </motion.h2>
      <motion.p className="text-zinc-200" variants={fadeIn} custom={1}>
        I am always open to new opportunities and collaborations. If you have a
        project in mind or just want to chat, feel free to reach out!
      </motion.p>
      <div className="flex flex-wrap items-center gap-4 mt-4">
        {[
          {
            icon: <PiAddressBookLight />,
            label: "View Resume",
            link: "https://docs.google.com/document/d/1qvTTISaTxDKUW28W3yrvFIP3QHlZpNW5T7kNXeRh-f0/edit?usp=sharing",
          },
          {
            icon: <TfiEmail />,
            label: "Send a Message",
            link: "mailto:calebbenjin@gmail.com",
          },
          {
            icon: <AiOutlineLinkedin />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/calebbenjin/",
          },
          // {
          //   icon: <FaWhatsapp />,
          //   label: "WhatsApp",
          //   link: "https://wa.link/tyskat",
          // },
        ].map((btn, i) => (
          <motion.div key={i} variants={fadeIn} custom={i + 2}>
            <Link target="_blank" href={btn.link}>
              <Button
                variant="outline"
                className="bg-zinc-800 text-zinc-200 hover:bg-white cursor-pointer flex items-center gap-2"
              >
                {btn.icon} {btn.label}
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkTogetherSection;
