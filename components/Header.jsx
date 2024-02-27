import Image from "next/image";
import Navbar from "./Navbar";

import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className= "sticky top-0 bg-white dark:bg-inherit w-full py-2 px-6 md:py-4 md:px-12 flex items-center justify-between border-b z-10">
      <Image src="/logo.svg" alt="logo" width={60} height={60} className="dark:invert cursor-pointer"/>
      <Navbar />
      <MobileNav/>
    </header>
  );
};

export default Header;
