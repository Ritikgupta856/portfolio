import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 px-8 bg-transparent border-t border-neutral-200 dark:border-gray-800 w-full text-black dark:text-neutral-400 ">
      <div className="flex flex-col items-center  md:flex-row justify-between ">
        <div>&copy; {currentYear} Ritik Gupta. All rights reserved.</div>
        <div className="flex mt-2 md:mt-0 gap-8 text-black dark:text-white cursor-pointer">
          <Link href="https://www.instagram.com/ritik.gupta18" target="_blank">
            <Instagram className="text-[#E1306C]" />
          </Link>
          <Link href="https://www.github.com/ritikgupta856" target="_blank">
            <Github className="text-[#171515] dark:text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ritikgupta856"
            target="_blank"
          >
            <Linkedin className="text-[#0A66C2]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
