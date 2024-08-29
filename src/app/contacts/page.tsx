import ContactForm from "@/components/contact-form";
import Title from "@/components/ui/title";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const links = [
  { text: "Gmail", link: "", icon: <SiGmail /> },
  { text: "GitHub", link: "", icon: <FaGithub /> },
  { text: "LinkedIn", link: "", icon: <FaLinkedin /> },
  { text: "Telegram", link: "", icon: <FaTelegramPlane /> },
];

const ContactPage = () => {
  return (
    <div>
      <p className="mb-20 flex flex-col md:flex-row items-start md:gap-20">
        <Title>Have a Question?</Title>
        <p className="max-md:text-sm">
          If you have any questions, feedback, or if you’re interested in
          discussing a potential collaboration, please feel free to use the
          contact form below. Alternatively, you can connect with me through the
          social media links provided.
        </p>
      </p>
      <div className="mb-24 flex flex-col md:flex-row md:items-start md:gap-20">
        <Title>Connect</Title>
        <ul className="grid grid-cols-2 gap-3 group flex-grow">
          {links.map(({ text, link, icon }) => {
            return (
              <li
                key={text}
                className="transition-opacity group-hover:opacity-50 hover:!opacity-100"
              >
                <Link
                  href={link}
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
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
