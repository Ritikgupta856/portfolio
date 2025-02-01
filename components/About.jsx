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
      className="min-h-[400px] py-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40"
    >
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto container"
      >
        <div className="text-3xl text-center mb-10 font-bold ">About Me</div>

        <div className="flex flex-col md:flex-row items-center py-10 gap-12 md:gap-20">
          <Image
            src="/about.jpg"
            alt="home"
            width={480}
            height={480}
            className="rounded-lg shadow-lg max-w-full"
          />

          <div className="w-full md:w-1/2 lg:w-4/5">
            <p className="text-gray-800 dark:text-gray-300 text-lg text-justify font-medium tracking-tighter sm:tracking-tight mb-8">
              Hello there! I'm a full-stack web developer, which means I build
              complete websites and web applications from start to finish. On
              the front-end side, I use languages like HTML, CSS, JavaScript,
              React.js, and Next.js to create the parts of the website that
              users can see and interact with. I make sure these user interfaces
              look great and are easy to use. But my skills don't stop there!
              I also work on the back-end, which is the behind-the-scenes part
              of a website or application. Using tools like Node.js, Express.js,
              and databases like MongoDB, MySQL, and Firebase, I develop the
              systems that make everything work smoothly and efficiently.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href="/resume/ritik_resume.pdf" download>
                <Button
                  size="lg"
                  className="bg-indigo-600  hover:bg-indigo-700 text-white font-bold transition-colors duration-300"
                >
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
