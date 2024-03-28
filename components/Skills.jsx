'use client'
import { skills } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
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
    <section id="skills" className="min-h-[400px] py-16 bg-gray-100 dark:bg-gray-900">
      <div className="text-3xl text-center font-bold mb-10">Skills</div>
      <div className="mx-auto py-10 container">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              variants={fadeInVariants}
              className="flex flex-col items-center hover:ease-in-out hover:scale-105 transition-all duration-200 cursor-pointer delay-75 shrink-0"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
                className="w-32 aspect-square"
              />
              <div className="text-black font-medium dark:text-white">
                {skill.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;