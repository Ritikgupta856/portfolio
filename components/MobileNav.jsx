"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
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

const links = [
  { path: "/", name: "Home" },
  { path: "#experience", name: "Experience" },
  { path: "#education", name: "Education" },
  { path: "#Skills", name: "Skills" },
  { path: "#projects", name: "Projects" },

];

const MobileNav = () => {
  const { setTheme } = useTheme();

  const pathname = usePathname();
  return (
    <div className="flex gap-4 md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-10 justify-center font-semibold text-base items-center">
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
        </SheetContent>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size='icon'>
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
    </div>
  );
};

export default MobileNav;
