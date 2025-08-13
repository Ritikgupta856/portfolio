"use client";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
      
      {/* Text Section */}
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-wide mb-5 text-black dark:text-white">
          Ritik Gupta
        </h1>

        <p className="relative leading-7 flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
          Hey there! I’m a full-stack developer who loves building web apps and products that can actually make a difference. I enjoy turning tricky problems into smooth, simple experiences that people enjoy using.
        </p>

        <p className="text-zinc-600 dark:text-zinc-500">
          I focus on making apps that look great, perform well, and just feel right. Always learning, always experimenting, always creating.
        </p>


      </div>

      {/* Avatar Section - original design preserved */}
      <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <Link
          href="https://www.linkedin.com/in/ritikgupta856"
          target="_blank"
          rel="noopener noreferrer"
          className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
        >
          <Image
            alt="Ritik Gupta"
            fill
            className="bg-gray-100 object-cover"
            src="/avatar.jpg"
          />
        </Link>
        <div className="z-0">
          <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
