'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className= "sticky top-0 bg-white dark:bg-inherit w-full py-2 px-6 md:py-4 md:px-12 flex items-center justify-between border-b z-10">
       <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <Image src="/logo.svg" alt="logo" width={60} height={60} className="dark:invert cursor-pointer"/>
    </motion.div>
      <Navbar />
      <MobileNav/>
    </header>
  );
};

export default Header;
