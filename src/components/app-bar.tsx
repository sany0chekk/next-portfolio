"use client";

import Link from "next/link";
import { ThemeChanger } from "./theme-changer";
import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contacts", text: "Contacts" },
];

const AppBar = ({}) => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex justify-between items-center gap-4">
        <p className="flex items-center gap-2 font-bold">O. Veselyi</p>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, text }) => {
            return (
              <li key={text}>
                <Link
                  href={href}
                  className={`${
                    pathname === href ? "opacity-95" : ""
                  } transition-opacity text-sm opacity-50 hover:opacity-95`}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeChanger />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
