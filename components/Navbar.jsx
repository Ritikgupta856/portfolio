"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "#experience", name: "Experience" },
  { path: "#education", name: "Education" },
  { path: "#skills", name: "Skills" },
  { path: "#projects", name: "Projects" },

];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="hidden sm:flex gap-4 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10"
    >
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            className={`${isActive && "text-violet-600 "}`}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}

    </motion.div>
  );
};

export default Navbar;
