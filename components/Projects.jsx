import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const projects = [
  {
    imageSrc: "/projects/project-1.png",
    title: "Airbnb Clone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo ante. Nulla facilisi. Integer in enim non libero faucibus tincidunt.",
    skills: ["Next.js", "React.js", "Prisma","Mongodb"],
    githubLink: "https://github.com/example1",
    liveLink: "https://example1.com",
  },
  {
    imageSrc: "/projects/project-2.png",
    title: "Shopcart",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo ante. Nulla facilisi. Integer in enim non libero faucibus tincidunt.",
    skills: ["React.js", "Node.js","Express.js","Mongodb"],
    githubLink: "https://github.com/Ritikgupta856/shopCart",
    liveLink: "https://shopcart-ecommerce-website.vercel.app",
  },
  {
    imageSrc: "/projects/project-1.png",
    title: "ChatSpark",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo ante. Nulla facilisi. Integer in enim non libero faucibus tincidunt.",
    skills: ["React.js", "Firebase","HTML","CSS"],
    githubLink: "https://github.com/Ritikgupta856/ChatSpark",
    liveLink: "https://chatsparks.vercel.app",
  },
  {
    imageSrc: "/projects/project-1.png",
    title: "ShopCart-Admin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo ante. Nulla facilisi. Integer in enim non libero faucibus tincidunt.",
    skills: ["Next.js", "Shadcn Ui","Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/shopCart-admin",
    liveLink: "https://example1.com",
  },

];

const Projects = () => {
  return (
    <div className="h-fit my-20 px-5 py-10 flex flex-col items-center">
       <div className="text-4xl font-bold">Projects</div>
      <div className="w-28 h-1 border-b-4 border-violet-700"></div>
      <div className="flex flex-wrap justify-center gap-20 mt-16 max-w-screen ">
      {projects.map((project) => (
        <div key={project.name}>
          <Card className="w-[400px] hover:border-violet-500 hover:ease-in-out hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader>
              <Image src={project.imageSrc} width={400} height={400} className="cursor-pointer transition"  />
            </CardHeader>
            <CardContent className="mt-5">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-5">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-5">
              {project.skills.map((skill)=>(
          <Button size="sm" className="">{skill}</Button>
              ))}
              </div>
             
            </CardContent>
            <CardFooter className="flex gap-5 mt-5">
              <Button variant="outline">
                <Link href={project.githubLink}>
                Github
                </Link>
                </Button>
              <Button variant="outline">
              <Link href={project.liveLink}>
                  Link
                </Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
