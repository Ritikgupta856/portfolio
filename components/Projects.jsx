"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

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
    <section id="projects" className="min-h-screen py-16 md:py-20">
      <div className="text-3xl font-bold text-center mb-20">Projects</div>

      <div className="container flex justify-center px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="w-full md:w-[500px] hover:border-violet-500 transition cursor-pointer z-1 ">
                <CardHeader>
                  <Image
                    src={project.imageSrc}
                    width={450}
                    height={450}
                    className="cursor-pointer transition  aspect-[6/3]"
                  />
                </CardHeader>
                <CardContent className="mt-5">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-5">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.skills.map((skill,index) => (
                      <div key={index}>
                      <Button size="sm">{skill}</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-5 mt-5">
                  <Button variant="outline">
                    <Link href={project.githubLink}>Github</Link>
                  </Button>

                  {project.liveLink && (
                    <Button variant="outline">
                      <Link href={project.liveLink}>Link</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
