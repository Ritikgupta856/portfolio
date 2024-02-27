import Image from "next/image";
import React from "react";

const About = () => {
  return (

    <section id="about" className="h-fit md:h-screen flex flex-col items-center w-full">
      <div className="text-3xl font-bold">About Me</div>

      <div className="flex flex-col items-center justify-center md:flex-row md:my-auto gap-10 px-10  mt-10">
        <Image
          src="/profile.jpg"
          alt="home"
          width={400}
          height={400}
          className="rounded-2xl w-60 h-60 md:w-[350px] md:h-full "
        />

        <div className="flex items-center w-3.5/4 md:w-2/4 text-neutral-400 text-center text-lg">
          Proficient in full-stack web development, I excel in both frontend and
          backend technologies. With expertise in JavaScript, HTML, and CSS, I
          craft responsive and visually appealing user interfaces. On the
          backend, I specialize in frameworks like Node.js and Express.js, along
          with database management systems like MongoDB and MySQL. My
          comprehensive understanding of the web development ecosystem enables
          me to build robust and scalable web applications.
        </div>
      </div>
    </section>
  );
};

export default About;
