"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const competencies = [
  {
    area: "Architecture",
    detail:
      "SSR/SSG hybrid rendering, micro-frontend patterns, multi-role RBAC systems, scalable state management",
  },
  {
    area: "Performance",
    detail:
      "Core Web Vitals, code splitting, lazy loading, server-side caching, sub-1.5s load targets",
  },
  {
    area: "Product Thinking",
    detail:
      "MVP to production, Figma-to-code, founder collaboration, user-first decision making at speed",
  },
  {
    area: "Integrations",
    detail:
      "REST APIs, Firebase real-time sync, payment gateways, geolocation APIs, GPS tracking systems",
  },
];

const aiTools = [
  {
    category: "Development",
    tools: [
      {
        name: "Claude (Anthropic)",
        desc: "Architecture decisions, deep code review, complex debugging, and technical writing",
      },
      {
        name: "ChatGPT / GPT-4",
        desc: "Documentation drafting, edge-case exploration, and API design brainstorming",
      },
    ],
  },

  {
    category: "Production AI",
    tools: [
      {
        name: "Vercel AI SDK",
        desc: "Streaming AI responses, multi-step agents, and AI-powered UI features",
      },
      {
        name: "Claude API",
        desc: "Embedding AI reasoning into product features — summarisation, classification, Q&A",
      },
    ],
  },
];

const IntroSection = () => {
  return (
    <motion.section
      className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      {/* Headline */}
      <motion.p
        className="text-2xl font-bold text-zinc-900 dark:text-white leading-snug"
        variants={fadeIn}
        custom={0}
      >
        I'm passionate about understanding how things work and using technology
        to solve meaningful problems.
      </motion.p>

      {/* Bio */}
      <motion.div
        className="mt-7 space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm"
        variants={fadeIn}
        custom={1}
      >
        <p>
          Beyond writing code, I help non-technical founders transform ambitious
          ideas into scalable SaaS products, from strategy and architecture to
          launch at{" "}
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
            EachBlock
          </span>
          , while they focus on distribution & marketing.
        </p>
        <p>
          When I'm not building for founders, I'm creating SaaS products of my
          own with the goal of building a portfolio of businesses that generate
          over $100K in MRR. 🎯{" "}
          <Link href="/my-saas-projects">
            <span className="text-zinc-600 font-bold underline dark:text-zinc-400 text-sm">
              You can find them here.
            </span>
          </Link>
        </p>

        {/* <p>
          Senior Frontend Engineer with 6+ years of experience shipping
          production-grade applications across fintech, logistics, agritech, and
          SaaS. I founded{" "}
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
            EachBlock
          </span>
          , a development studio where I&apos;ve led MVP builds and full-scale
          products for startups across Nigeria, Canada, the US, and Europe.
        </p> */}

        <p>
          I work directly with CTOs and founders to make fast, high-quality
          architectural decisions — from choosing the right rendering strategy
          to designing component systems that scale across multiple apps and
          user roles.
        </p>
      </motion.div>

      {/* Core Competencies */}
      <motion.div className="mt-8" variants={fadeIn} custom={2}>
        <p className="text-xs text-zinc-800 dark:text-zinc-400 font-semibold uppercase tracking-widest mb-4">
          Core Competencies
        </p>
        <div className="grid grid-cols-2 gap-3">
          {competencies.map((item, i) => (
            <motion.div
              key={i}
              className="border border-zinc-200 dark:border-zinc-500 rounded-xl p-4 hover:border-zinc-300 dark:hover:border-zinc-500 transition-colors duration-200"
              variants={fadeIn}
              custom={3 + i}
            >
              <p className="text-xs text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold mb-1.5">
                {item.area}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Workflow */}
      {/* <motion.div
        className="mt-10 pt-8 border-t border-zinc-400 dark:border-zinc-600"
        variants={fadeIn}
        custom={7}
      >
        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold uppercase tracking-widest mb-5">
          AI-Augmented Workflow
        </p>
        <div className="space-y-6">
          {aiTools.map((group, gi) => (
            <div key={gi}>
              <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                {group.category}
              </p>
              <div className="space-y-2">
                {group.tools.map((tool, ti) => (
                  <div
                    key={ti}
                    className="flex gap-3 px-3 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80"
                  >
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 min-w-[160px] flex-shrink-0 pt-px">
                      {tool.name}
                    </span>
                    <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {tool.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div> */}
    </motion.section>
  );
};

export default IntroSection;
