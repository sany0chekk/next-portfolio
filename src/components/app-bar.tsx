import Link from "next/link";
import { ThemeChanger } from "./theme-changer";

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
          {`<`}
          <span className="text-neutral-950 dark:text-white">O. Veselyi</span>
          {`/>`}
        </p>
        <ul className="flex items-center gap-6">
          {links.map(({ href, text }) => {
            return (
              <li key={text}>
                <Link
                  href={href}
                  className="transition-opacity font-light text-sm opacity-50 hover:opacity-95"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeChanger />
      </nav>
    </header>
  );
};

export default AppBar;
