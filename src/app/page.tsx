import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div>
        <div className="flex justify-center mb-5">
          <span className="p-1.5 border-2 rounded-full">
            <Image
              src="/images/photo.jpg"
              width={200}
              height={200}
              alt="Oleksandr Veselyi photo"
              className="w-18 md:w-40 h-18 md:h-40 bg-neutral-500 rounded-full"
            />
          </span>
        </div>
        <h1 className="opacity-60 font-bold text-xl text-center mb-4">
          Hi! I’m Oleksandr Veselyi
        </h1>
        <div className=" grid gap-2 text-center max-w-[600px] mx-auto">
          <p>
            I’m 23 years old and a Front-end Developer specializing in creating
            modern and efficient web applications. I’m constantly improving my
            skills and always open to new challenges to grow and deliver
            high-quality products.
          </p>
          <p className="opacity-30 text-sm">
            Feel free to check out my projects and get in touch for
            collaboration!
          </p>
        </div>
      </div>
      <div className="pt-32">
        <h2 className="opacity-50 mb-4">Completed Projects</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href="https://sany0chekk.github.io/smartnotes/"
                  target="_blank"
                >
                  <div className="rounded-md overflow-hidden border-2 relative group">
                    <SquareArrowOutUpRight className="absolute top-3 right-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <Image
                      src="/images/smartnotes.png"
                      alt="Smart Notes"
                      width={500}
                      height={500}
                      className="w-full h-48 bg-neutral-500"
                    />
                    <div className="flex items-center justify-between p-4 border-t-2">
                      <p className="">SmartNotes</p>
                      <p className="p-2 border rounded-md text-xs opacity-70">
                        Website
                      </p>
                    </div>
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm mb-4">
                  SmartNotes features a modern design, user-friendly interface,
                  and seamless performance across various platforms. This
                  example demonstrates my ability to develop functional and
                  practical web applications.
                </p>
                <p className="text-xs">
                  Tech. Stack:{" "}
                  <span className="opacity-70 ">
                    HTML, CSS, JavaScript (Libraries: SwiperJS, ScrollReveal,
                    Basiclightbox), Vite JS
                  </span>
                </p>
              </HoverCardContent>
            </HoverCard>
          </li>
          <li>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="" target="_blank">
                  <div className="rounded-md overflow-hidden border-2 relative group">
                    <SquareArrowOutUpRight className="absolute top-3 right-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <Image
                      src="/images/smartnotes.png"
                      alt="Smart Notes"
                      width={500}
                      height={500}
                      className="w-full h-48 bg-neutral-500"
                    />
                    <div className="flex items-center justify-between p-4 border-t-2">
                      <p className="">SmartNotes</p>
                      <p className="p-2 border rounded-md text-xs opacity-70">
                        Website
                      </p>
                    </div>
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm mb-4">
                  SmartNotes features a modern design, user-friendly interface,
                  and seamless performance across various platforms. This
                  example demonstrates my ability to develop functional and
                  practical web applications.
                </p>
                <p className="text-xs">
                  Tech. Stack:{" "}
                  <span className="opacity-70 ">
                    HTML, CSS, JavaScript (Libraries: SwiperJS, ScrollReveal,
                    Basiclightbox), Vite JS
                  </span>
                </p>
              </HoverCardContent>
            </HoverCard>
          </li>
          <li>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="" target="_blank">
                  <div className="rounded-md overflow-hidden border-2 relative group">
                    <SquareArrowOutUpRight className="absolute top-3 right-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <Image
                      src="/images/smartnotes.png"
                      alt="Smart Notes"
                      width={500}
                      height={500}
                      className="w-full h-48 bg-neutral-500"
                    />
                    <div className="flex items-center justify-between p-4 border-t-2">
                      <p className="">SmartNotes</p>
                      <p className="p-2 border rounded-md text-xs opacity-70">
                        Website
                      </p>
                    </div>
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm mb-4">
                  SmartNotes features a modern design, user-friendly interface,
                  and seamless performance across various platforms. This
                  example demonstrates my ability to develop functional and
                  practical web applications.
                </p>
                <p className="text-xs">
                  Tech. Stack:{" "}
                  <span className="opacity-70 ">
                    HTML, CSS, JavaScript (Libraries: SwiperJS, ScrollReveal,
                    Basiclightbox), Vite JS
                  </span>
                </p>
              </HoverCardContent>
            </HoverCard>
          </li>
        </ul>
      </div>
    </div>
  );
}
