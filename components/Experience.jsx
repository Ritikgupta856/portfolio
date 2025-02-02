import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import { experienceData } from '@/lib/data';

const Experience = () => {
    return (
        <section className="py-8 px-4 sm:py-16 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-900 dark:text-gray-100">
                    Experience
                </h2>
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-violet-500 flex items-center">
                        <FaBriefcase className="mr-2" /> {experienceData.company}
                    </h3>
                    <div className="mt-4 text-gray-600 dark:text-gray-400 flex items-center">
                        <FaCalendarAlt className="mr-2" /> {experienceData.duration}
                    </div>
                    <div className="mt-2 text-gray-600 dark:text-gray-400 flex items-center">
                        <FaMapMarkerAlt className="mr-2" /> {experienceData.role}, {experienceData.location}
                    </div>
                    <ul className="list-disc list-inside mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-gray-800 dark:text-gray-300">
                        {experienceData.achievements.map((achievement, index) => (
                            <li key={index} className="leading-relaxed">
                                {achievement}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 sm:mt-6 text-gray-800 dark:text-gray-300 flex items-center">
                        <FaCode className="mr-2 text-violet-500 dark:text-violet-400" />
                        <strong>Tech Stack:</strong> <span className="ml-1">{experienceData.techStack}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;