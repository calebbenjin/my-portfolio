"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constant";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectSections = () => {
  return (
    <section className="my-10">
      <h2 className="font-bold text-2xl mb-6">
        🟠 What I&apos;ve Built So Far
      </h2>
      <div className="space-y-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ delay: i * 0.2 }}
          >
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-4">
              {project?.proimg?.map((image, idx) => (
                <div
                  key={idx}
                  className="lg:h-70 w-full relative overflow-hidden rouned-lg"
                >
                  <Image
                    src={`${image.url}`}
                    alt="project-image"
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <h2 className="font-bold text-xl my-2">🔥{project?.title}</h2>
            <p>{project?.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              Tech Stack:{" "}
              {project?.stack?.map((stack, i) => (
                <p key={i} className="font-bold">
                  {stack}
                </p>
              ))}
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="border-none text-xl underline">
                  See {project?.achivement}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pl-4">
                  {project.tasks?.map((task, i) => (
                    <p key={i}>{task?.title}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex space-x-10 pt-2">
              <Link href={`/case/${project.slug}`} className="flex">
                <Button className="bg-white text-zinc-900 hover:bg-gray-400">
                  Frontend Case Study
                </Button>
              </Link>
              <Link
                target="_blank"
                href={`${project.siteurl}`}
                className="flex"
              >
                <Button className="bg-white text-zinc-900 hover:bg-gray-400">
                  View Website
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSections;
