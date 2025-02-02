"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#experience", name: "Experience" },
  { path: "#education", name: "Education" },
  { path: "#skills", name: "Skills" },
  { path: "#projects", name: "Projects" },

];

const Navbar = () => {
  const { setTheme } = useTheme();

  const pathname = usePathname();
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="md:flex gap-10 flex-row items-center font-semibold hidden"
    >
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            className={`${isActive && "text-violet-600"}`}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};

export default Navbar;
