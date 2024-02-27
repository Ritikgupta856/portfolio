import Image from "next/image";
import Navbar from "./Navbar";

import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className= "sticky top-0 w-full py-2 px-6 md:py-4 md:px-12 flex items-center justify-between border-b z-100">
      <Image src="/logo.svg" alt="logo" width={60} height={60} className="dark:invert" />
      <Navbar />
      <MobileNav/>
    </header>
  );
};

export default Header;
