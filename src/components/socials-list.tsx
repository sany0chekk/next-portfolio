import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const links = [
  {
    text: "Gmail",
    link: "mailto:veselyy.oleksandr@gmail.com",
    icon: <SiGmail />,
  },
  { text: "GitHub", link: "https://github.com/sany0chekk", icon: <FaGithub /> },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/o-veselyi/",
    icon: <FaLinkedin />,
  },
  {
    text: "Telegram",
    link: "https://t.me/hackingbegin",
    icon: <FaTelegramPlane />,
  },
];

const SocialsList = () => {
  return (
    <ul className="grid grid-cols-2 gap-3 group flex-grow">
      {links.map(({ text, link, icon }) => {
        return (
          <li
            key={text}
            className="transition-opacity group-hover:opacity-50 hover:!opacity-100"
          >
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 bg-gray-200 dark:bg-neutral-800 p-2 rounded-md"
            >
              {icon}
              <p className="text-sm">{text}</p>
              <ArrowUpRight className="ml-auto size-5" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialsList;
