import Image from "next/image";

const skills = [
  {
    name: "HTML5",
    icon: "/skills/html.png",
  },
  {
    name: "CSS3",
    icon: "/skills/css.png",
  },

  {
    name: "Javascript",
    icon: "/skills/javascript.png",
  },
  {
    name: "React",
    icon: "/skills/react.png",
  },
  {
    name: "Next",
    icon: "/skills/nextjs.png",
  },
  {
    name: "Node",
    icon: "/skills/nodejs.png",
  },
  {
    name: "Mongodb",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.png",
  },
  {
    name: "C++",
    icon: "/skills/c++.png",
  },
];

const Skills = () => {
  return (
    <div className="h-fit flex flex-col items-center ">
      <div className="text-4xl font-bold">Skills</div>
      <div className="w-16 h-1 border-b-4 border-violet-700"></div>

      <div className="flex flex-wrap justify-center gap-20 mt-16 max-w-screen ">
        {skills.map((skill) => (
          <div key={skill.name} className=" flex flex-col items-center hover:ease-in-out hover:scale-105 transition-all duration-200 cursor-pointer delay-75 shrink-0">
            <Image src={skill.icon} alt={skill.name} width={100} height={100} className="w-[120px] aspect-square" />
            <div className="text-black font-medium dark:text-white">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
