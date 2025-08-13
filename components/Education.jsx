"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "./ui/card"
import Heading from "./Heading"

const schools= [
  {
    title: "Bachelor's Degree in Computer Science",
    org: "Manipal University, Jaipur",
    period: "2020 — 2024",
    icon: "grad",
  },
  { title: "Class XII", org: "Central Public Sr. Sec. School, Udaipur", period: "2020", icon: "school" },
  { title: "Class X", org: "DAV HZL Senior Secondary School, Dariba", period: "2018", icon: "school" },
]

export default function Education() {
  return (
    <section id="education" className="py-8">
      <Heading heading="Education" />

      <ol className="relative space-y-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-border/80 md:space-y-8">
        {schools.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative pl-14"
          >
            <span
              aria-hidden
              className="absolute left-4 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background ring-2 ring-violet-500/40"
            >
              {s.icon === "grad" ? (
                <GraduationCap className="h-4 w-4 text-violet-500" />
              ) : (
                <School className="h-4 w-4 text-violet-500" />
              )}
            </span>

            <Card className="rounded-2xl p-5 w-full">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.org}</p>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {s.period}
                </Badge>
              </div>

            </Card>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
