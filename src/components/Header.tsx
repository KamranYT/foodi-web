import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { BsTelephoneOutbound } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-black max-w-screen-xl mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1>
          <Image
  src="/foodi.png"
  alt="Foodi Logo"
  width={120}
  height={10}// Optionally, define a height or use auto if aspect ratio matters
  className="w-[150px]"
/> 
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-80">
          <Nav />
          <Link href="/contact">
            <Button> <span> <BsTelephoneOutbound className="mr-5" /> </span>  Contact</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
