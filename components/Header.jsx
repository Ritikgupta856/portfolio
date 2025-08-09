"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
  
      <header className="sticky-nav flex justify-between items-center max-w-4xl py-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white dark:bg-inherit bg-opacity-60">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
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
        
        <Navbar />
        <MobileNav />
      </header>
    </>
  );
};

export default Header;