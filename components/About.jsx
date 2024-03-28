"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
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
    <section
      id="about"
      className="min-h-screen py-16 bg-gray-100 dark:bg-gray-900"
    >
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto container px-10"
      >
        <div className="text-3xl text-center mb-10 font-bold ">About Me</div>

        <div className="flex flex-col md:flex-row items-center py-10 gap-12 md:gap-20">
          <Image
            src="/about.jpg"
            alt="home"
            width={450}
            height={450}
            className="rounded-lg shadow-lg"
          />

          <div className="w-full md:w-1/2 lg:w-4/5">
            <p className="text-gray-800 dark:text-white text-lg text-justify font-medium tracking-tighter sm:tracking-tight  mb-8">
              As a skilled full-stack web developer, I excel in creating
              visually appealing and functional web applications. With expertise
              in front-end technologies like HTML, CSS, JavaScript, React.js,
              and Next.js, I build responsive and user-friendly interfaces. On
              the back-end, I leverage frameworks such as Node.js and
              Express.js, along with databases like MongoDB , MySQL and Firebase
              to develop robust and scalable solutions. What really gets me
              going is writing clean, maintainable code that stands the test of
              time. I stay up-to-date with the latest web dev trends and
              technologies, always ready to level up my skills.
            </p>

            <div className="flex justify-center sm:justify-start">
              <Link href="/resume/ritik_resume.pdf" download>
                <Button size="lg" className="bg-indigo-600  hover:bg-indigo-700 text-white font-bold transition-colors duration-300">
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
