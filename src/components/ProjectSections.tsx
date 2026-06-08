"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constant";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const ProjectSections = () => {
  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-12 border-t border-zinc-200 dark:border-zinc-800/60 pt-10">
        <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium">
          Selected Work
        </p>
        <span className="text-xs text-zinc-400 dark:text-zinc-700">
          {projects.length} case studies
        </span>
      </div>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            {/* Screenshots or typographic placeholder */}
            {project.proimg.length > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.proimg.slice(0, 2).map((image, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/5 bg-zinc-100 dark:bg-zinc-900 aspect-video"
                    >
                      <Image
                        src={image.url}
                        alt={`${project.title} screenshot`}
                        width={720}
                        height={405}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {project.proimg.length > 2 && (
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.proimg.slice(2).map((image, idx) => (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/5 bg-zinc-100 dark:bg-zinc-900 aspect-video"
                      >
                        <Image
                          src={image.url}
                          alt={`${project.title} screenshot`}
                          width={360}
                          height={203}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full aspect-video rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 flex items-end justify-between p-5 mb-6 overflow-hidden relative">
                <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold text-zinc-100 dark:text-zinc-900 select-none pointer-events-none leading-none">
                  {project.title}
                </p>
                <span className="relative text-xs text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full px-2.5 py-1">
                  Pre-launch
                </span>
                <span className="relative text-xs text-zinc-400">
                  Screenshots coming
                </span>
              </div>
            )}

            {/* Number + Category */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-zinc-400 dark:text-zinc-700 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {project.title}
              <span className="text-zinc-400 dark:text-zinc-600 font-normal ml-2 text-base">
                — {project.subtitle}
              </span>
            </h3>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1">
              {project.role}
            </p>

            {/* Challenge */}
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic">
              {project.challenge}
            </p>

            {/* Architecture callout */}
            <div className="mt-4 px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-1.5">
                Architecture
              </p>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-mono leading-relaxed">
                {project.architectureNote}
              </p>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.stack.map((tech, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {project.metrics.map((metric, j) => (
                <div
                  key={j}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 text-center"
                >
                  <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {metric.value}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href={`/case/${project.slug}`}
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
              >
                Read Case Study <ArrowUpRight size={13} />
              </Link>
              {project.siteurl && (
                <Link
                  href={project.siteurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200"
                >
                  Visit Site <ArrowUpRight size={13} />
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectSections;
