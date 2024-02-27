import Image from "next/image";


import { Github, Instagram, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex h-fit md:h-[calc(90vh-16px)] justify-between items-center flex-col-reverse py-3 px-6 md:py-6 md:px-12 md:flex-row w-full">
      <div className=" flex flex-col py-4 px-4 items-center text-center md:text-left md:items-start md:mt-10">
        <h1 className="text-4xl md:text-6xl mt-5 font-bold">Hi,I'm Ritik Gupta</h1>
        <p className="text-base mt-6 md:mt-4 dark:text-violet-500 uppercase font-bold tracking-wider md:text-2xl">
          Full Stack Web Developer
        </p>

        <p className="flex justify-center mt-5 font-medium  md:mt-10 md:text-lg">
          I am a dedicated Full Stack Software Developer with a strong
          background in building web applications. I specialize in JavaScript,
          React.js, Node.js, and Next.js, alongside a range of other
          cutting-edge technologies and frameworks.
        </p>

        <div className="flex flex-row py-10 gap-10 cursor-pointer ">
          <div className="bg-black w-10 h-10 text-white hover:text-black dark:hover:text-violet-500 transtion delay-100 hover:bg-white border-2 border-black dark:bg-white dark:text-black rounded-full flex items-center justify-center">
            <Instagram />
          </div>
          <div className="bg-black w-10 h-10 text-white  hover:text-black dark:hover:text-violet-500  transtion delay-100 hover:bg-white border-2 border-black dark:bg-white dark:text-black rounded-full flex items-center justify-center">
            <Linkedin />
          </div>
          <div className="bg-black w-10 h-10 text-white  hover:text-black dark:hover:text-violet-500  transtion delay-100 hover:bg-white border-2 border-black dark:bg-white dark:text-black rounded-full flex items-center justify-center">
            <Github />
          </div>
        </div>
      </div>

      <div className="rounded-full border-black border-2 flex-shrink-0">
        <Image
          src="/home.jpg"
          alt="home"
          width={400}
          height={400}
          className="rounded-full w-60 h-60 md:w-full md:h-full "
        />
      </div>
    </section>
  );
};

export default Hero;
