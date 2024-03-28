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
            <p className="text-gray-600 dark:text-white text-lg text-justify tracking-tighter sm:tracking-tight  mb-8">
              Proficient in full-stack web development, I excel in both frontend
              and backend technologies. With expertise in HTML, CSS, JavaScript,
              React.js, and Next.js, I craft responsive and visually appealing
              user interfaces. On the backend, I specialize in frameworks like
              Node.js and Express.js, along with database management systems
              like MongoDB, MySQL, and Firebase. My comprehensive understanding
              of the web development ecosystem enables me to build robust and
              scalable web applications.
            </p>

            <div className="flex justify-center sm:justify-start">
              <Link href="/resume/ritik_resume.pdf" download>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors duration-300">
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
