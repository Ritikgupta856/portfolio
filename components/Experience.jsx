import { Briefcase } from "lucide-react";
import React from "react";

const Experience = () => {
  const experienceData = {
    company: "STARTWITH BASICX PVT. LTD.",
    role: "Associate Software Engineer",
    duration: "May 2024 - Present",
    location: "Jaipur, India",
    achievements: [
      "Developed a new feature that improves the shopping experience",
      "Implemented a recommendation algorithm to suggest products",
      "Enhanced the checkout process making it more intuitive and user-friendly",
      "Built a feature for tracking packages in real-time",
    ],
    techStack:
      "React.js, TypeScript, Node.js, MSSQL, MariaDB, Shadcn UI, Tailwind CSS, AWS EC2/Amplify",
  };

  return (
    <div className="py-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-full bg-violet-500/15 p-2 ring-1 ring-violet-500/20">
          <Briefcase className="h-5 w-5 text-violet-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-muted-foreground">I love building products that impact millions</p>
        </div>
      </div>

      {/* Experience Card */}
      <div className="rounded-2xl shadow-sm border-gray-100 overflow-hidden">
        {/* Timeline and Company */}
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="mb-4 lg:mb-0">
              <p className="text-lg font-medium mb-2">
                {experienceData.duration}
              </p>
            </div>

            <div className="flex-1 lg:ml-12">
              <div className="flex items-center mb-3">
                <h2 className="text-2xl font-bold text-violet-500 mr-4">
                  {experienceData.company}
                </h2>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {experienceData.role}
              </h3>

              <p className="text-md mb-6">
                {experienceData.description}
              </p>

              {/* Achievements */}
              <div className="space-y-4">
                {experienceData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 bg-violet-500 flex-shrink-0"></div>
                    <p className="leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
