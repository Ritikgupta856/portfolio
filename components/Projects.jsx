"use client";
import React from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { LucideWorkflow } from "lucide-react";

const Projects = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-16">
   <div className="mb-8 flex items-center gap-3">
        <div className="rounded-full bg-emerald-500/15 p-2 ring-1 ring-emerald-500/20">
          <LucideWorkflow className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">Showcasing my work and collaborations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            href={project.href}
            icon={project.icon}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;