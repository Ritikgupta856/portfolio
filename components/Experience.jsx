import React from 'react';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaDownload 
} from 'react-icons/fa';
import Link from 'next/link';
import { experienceData } from '@/lib/data';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-8 px-4 sm:py-16 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-10">
         Experience
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative transform hover:-translate-y-2">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-violet-500 flex items-center mb-4 sm:mb-0">
              <FaBriefcase className="mr-3 text-violet-600 dark:text-violet-400" /> 
              {experienceData.company}
            </h3>
            
            <Link 
              href="/resume/ritik_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-violet-600 to-violet-700 text-white px-6 py-2 rounded-full hover:from-violet-700 hover:to-violet-800 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="mr-2" /> 
              <span className="text-sm font-medium">Download Resume</span>
            </Link>
          </div>
          
          <div className="mt-4 text-gray-600 dark:text-gray-400 flex items-center">
            <FaCalendarAlt className="mr-3 text-violet-600 dark:text-violet-400" /> 
            <span>{experienceData.duration}</span>
          </div>
          
          <div className="mt-3 text-gray-600 dark:text-gray-400 flex items-center">
            <FaMapMarkerAlt className="mr-3 text-violet-600 dark:text-violet-400" /> 
            <span>{experienceData.role}, {experienceData.location}</span>
          </div>
          
          <ul className="list-disc list-inside mt-6 space-y-3 text-gray-800 dark:text-gray-300">
            {experienceData.achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
          
          <div className="mt-6 text-gray-800 dark:text-gray-300 flex items-center">
            <FaCode className="mr-3 text-violet-600 dark:text-violet-400" />
            <strong>Tech Stack:</strong> 
            <span className="ml-2">
              {experienceData.techStack}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;