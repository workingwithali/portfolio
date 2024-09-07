'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  },
];

const Nav = () => {
  const pathname = usePathname(); // Move this inside the Nav component
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link 
          href={link.path} 
          key={index} 
          className={`${link.path === pathname ? "text-gray-400 border-b-2 border-gray-400" : "hover:text-gray-400"} capitalize font-medium transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
