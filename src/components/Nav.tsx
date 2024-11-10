"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: 'resume',
    path: "/resume",
  },
  {
    name: 'work',
    path: "/work",
  },
  {
    name: 'contact',
    path: "/contact",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();  // pathname will be a string

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
