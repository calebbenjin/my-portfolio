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

const ProjectSections = () => {
  return (
    <section className="my-8">
      <h2 className="font-bold text-2xl mb-6">🟠 My Best Project</h2>
      {projects.map((project, i) => (
        <div className=" mb-20" key={i}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {project?.proimg?.map((image, i) => (
              <div
                key={i}
                className="h-70 w-full relative overflow-hidden rouned-lg">
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
            <Link target="_blank" href={`${project.siteurl}`} className="flex">
              <Button className="bg-white text-zinc-900 hover:bg-gray-400">
                View Website
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSections;
