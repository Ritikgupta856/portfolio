"use client";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="text-center text-3xl font-bold mb-10">Education</div>

      <div className="py-5">
        <VerticalTimeline lineColor="">
          {education.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              visible={true}
              date={education.duration}
              iconStyle={{ background: "#7C3AED", color: "#fff" }}
              icon={<GraduationCap />}
            >
              <div className=" text-xl dark:text-black font-bold">
                {education.degree}
              </div>
              <div className="dark:text-black font-medium mt-2">
                {education.institution}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
