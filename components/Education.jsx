import React from "react";

const Education = () => {
  return (
    <section id="education" className="h-fit md:h-screen py-20 md:py-10">
      <div>
        <div className="text-center text-3xl font-bold mb-10">Education</div>

        <div className="flex flex-col mx-auto w-full gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Bachelor's Degree in Computer Science
            </h3>
            <p className="text-lg">Manipal University, Jaipur</p>
            <p className="text-lg">Year of Graduation: 2024</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
            Class XII
            </h3>
            <p className="text-lg">Central Public Sr. Sec. School, Udaipur</p>
            <p className="text-lg">Year of Graduation: 2020</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
            Class X
            </h3>
            <p className="text-lg">DAV HZL Senior Secondary School, Dariba</p>
            <p className="text-lg">Year of Graduation: 2018</p>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Education;
