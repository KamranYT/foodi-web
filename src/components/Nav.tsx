"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { BsTelephoneOutbound } from "react-icons/bs";

// Define the type for each link in the links array
interface LinkItem {
  name: string;
  path: string;
}

// Define the links array with typed objects
const links: LinkItem[] = [
  {
    name: 'home',
    path: "/",
  },
  {
    name: 'services',
    path: "/services",
  },
  {
    name: 'menu',
    path: "/resume",
  },
  {
    name: 'offers',
    path: "/work",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();  // pathname will be a string

  return (
    <nav className="flex gap-20 font-medium">
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
  );
};

export default Nav;
