"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex min-h-[90vh] justify-between items-center flex-col-reverse py-3 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 md:py-6 md:flex-row w-full">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col py-4 px-4 items-center text-center md:text-left md:items-start md:mt-10"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl mt-5 font-bold"
        >
          Hi, I'm Ritik Gupta
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base mt-6 md:mt-4 dark:text-violet-500 uppercase font-bold tracking-wider md:text-2xl"
        >
          Full Stack Web Developer
        </motion.p>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-5 font-medium md:mt-10 sm:text-sm md:text-base lg:text-lg"
        >
          I am a dedicated Full Stack Software Developer with a strong
          background in building web applications. I specialize in JavaScript,
          React.js, Node.js, and Next.js, alongside a range of other
          cutting-edge technologies and frameworks.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-row py-10 gap-5 sm:gap-10 cursor-pointer"
        >
          <Link href="https://www.instagram.com/ritik.gupta18" target="_blank">
            <div className="bg-black w-10 h-10 text-white hover:scale-110 hover:text-black dark:hover:text-violet-500 transition delay-100 hover:bg-white border-2 border-black dark:bg-white dark:text-black rounded-full flex items-center justify-center">
              <Instagram />
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/ritikgupta856" target="_blank">
            <div className="bg-black w-10 h-10 text-white  hover:scale-110 hover:text-black dark:hover:text-violet-500  transition delay-100 hover:bg-white border-2 border-black dark:bg-white dark:text-black rounded-full flex items-center justify-center">
              <Linkedin />
            </div>
          </Link>
          <Link href="https://www.github.com/ritikgupta856" target="_blank">
            <div className="bg-black w-10 h-10 text-white hover:scale-110  hover:text-black dark:hover:text-violet-500  transition delay-100 hover:bg-white border-2 border-black dark:bg-white dark:text-black rounded-full flex items-center justify-center">
              <Github />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="rounded-full border-black border-2 flex-shrink-0"
      >
        <Image
          src="/profile.jpg"
          alt="home"
          width={384}
          height={384}
          className="rounded-full w-60 h-60 md:w-96 md:h-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
