import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 px-8 bg-transparent border-t border-neutral-200 dark:border-gray-800 w-full text-black dark:text-neutral-400 ">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div>&copy; {currentYear} Ritik Gupta. All rights reserved.</div>
        <div className="flex gap-8 text-black dark:text-white cursor-pointer">
          <Instagram />
          <Github />
          <Linkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
