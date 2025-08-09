"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const skills = [
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/js.png" },
  { name: "TypeScript", icon: "/skills/ts.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Next.js", icon: "/skills/next.png" },
  { name: "Node.js", icon: "/skills/node.png" },
  { name: "Express", icon: "/skills/express.png" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "PostgreSQL", icon: "/skills/postgres.png" },
  { name: "Prisma", icon: "/skills/prisma.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
  { name: "Firebase", icon: "/skills/firebase.png" },
  { name: "C++", icon: "/skills/c++.png" },
]

function SkillCard({ s }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-r from-violet-500/60 via-fuchsia-500/60 to-emerald-500/60 opacity-60 blur group-hover:opacity-90" />
      <div className="relative flex items-center gap-3 rounded-2xl border bg-card/80 px-3 py-2 shadow-sm backdrop-blur">
        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md ring-1 ring-black/10">
          <Image src={s.icon || "/placeholder.svg"} alt={s.name} fill className="object-contain" sizes="24px" />
        </div>
        <span className="text-sm">{s.name}</span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <p className="text-muted-foreground">Tools and technologies I use</p>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
        className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
      >
        {skills.map((s) => (
          <motion.li key={s.name} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <SkillCard s={s} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
