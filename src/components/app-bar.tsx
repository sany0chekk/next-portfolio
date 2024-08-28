import Link from "next/link";
import { ThemeChanger } from "./theme-changer";
import MobileMenu from "./mobile-menu";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contacts", text: "Contacts" },
];

const AppBar = ({}) => {
  return (
    <header>
      <nav className="flex justify-between items-center gap-4">
        <p className="flex items-center gap-2 font-medium text-neutral-600">
          Logo
        </p>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, text }) => {
            return (
              <li key={text}>
                <Link
                  href={href}
                  className="transition-opacity text-sm opacity-50 hover:opacity-95"
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
