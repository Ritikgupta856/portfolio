import { Briefcase } from "lucide-react";
import React from "react";
import Heading from "./Heading";

const Experience = () => {
const experienceData = {
  company: "STARTWITH BASICX PVT. LTD.",
  role: "Associate Software Engineer",
  duration: "May 2024 - Present",
  location: "Jaipur, India",
  achievements: [
    "Built MealMate Scheduler with React/Node.js and payment integration.",
    "Developed Invoice Extractor with drag-and-drop upload and secure auth.",
    "Created full-stack sports management platform on AWS with responsive UI.",
  ],
  techStack:
    "React.js, TypeScript, Node.js, MSSQL, MariaDB, Shadcn UI, Tailwind CSS, AWS EC2/Amplify",
};

  return (
    <section id="experience" className="py-8">
      <Heading heading="Experience" />

      {/* Experience Card */}
      <div className="rounded-2xl shadow-lg border-gray-100 overflow-hidden p-6 bg-white dark:bg-zinc-900">
        {/* Timeline and Company */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-3 space-x-2">
              <Briefcase className="text-black dark:text-white w-6 h-6" />
              <h2 className="text-2xl font-bold text-black dark:text-white">
                {experienceData.company}
              </h2>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {experienceData.role}
            </h3>

            <p className="text-sm text-zinc-500 mb-4">
              {experienceData.duration} | {experienceData.location}
            </p>

            {/* Achievements */}
            <div className="space-y-3 lg:ml-8">
              {experienceData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-violet-500 flex-shrink-0"></div>
                  <p className="leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <p className="text-sm font-medium text-black dark:text-white">
                Tech Stack:{" "}
                <span className="text-zinc-500 dark:text-white">
                  {experienceData.techStack}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
