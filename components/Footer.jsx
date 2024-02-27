import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 px-8 bg-transparent border-t-2 w-full text-black dark:text-neutral-400 ">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div>2024 copyright @ Ritik Gupta</div>
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
