"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
  { name: "Tailwind CSS" },
  { name: "Firebase" },
  { name: "Supabase" },
  { name: "Zustand" },
  { name: "C++" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-8 mb-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <p className="text-muted-foreground">Tools and technologies I use</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="mx-auto max-w-4xl"
      >
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-block"
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-3 py-1.5 font-medium transition-all duration-200 hover:shadow-md"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
