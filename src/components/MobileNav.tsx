"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from 'react-icons/ci';
import Image from "next/image";

// Define the type for each link in the links array
interface LinkItem {
  name: string;
  path: string;
}

// Define the links array with typed objects
const links: LinkItem[] = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'Menu',
    path: '/resume',
  },
  {
    name: 'offers',
    path: '/work',
  },
];

const MobileNav: React.FC = () => {
  const pathname = usePathname(); // pathname will be a string

  return (
    
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-black" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 ml-24 text-4xl">
          <Link href="/">
          <h1>
          <Image
  src="/foodi.png" // Path to your image
  alt="Foodi Logo"
  width={200} // Adjust to your desired width
  height={1} // Adjust the height as per the image aspect ratio or set a specific value
/>
          </h1>
        </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-[#39DB4A] border-b-2 border-[#39DB4A]"
            } capitalize font-medium hover:text-[#39DB4A] transition-all `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
