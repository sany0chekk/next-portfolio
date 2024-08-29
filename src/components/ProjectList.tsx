import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SquareArrowOutUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import projects from "@/api/projects.json";

const displayedProjects = projects.slice(-4);

const ProjectList = () => {
  return (
    <ul className="grid md:grid-cols-2 gap-6">
      {displayedProjects.map(({ name, image, link, type, content, stack }) => {
        return (
          <li key={name}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={link} target="_blank">
                  <div className="rounded-md overflow-hidden border-2 relative group">
                    <SquareArrowOutUpRight className="z-10 absolute top-3 right-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <Image
                      src={image}
                      alt={name}
                      width={500}
                      height={500}
                      className="w-full h-48 bg-neutral-500 opacity-70"
                    />
                    <div className="flex items-center justify-between p-4 border-t-2">
                      <p className="">{name}</p>
                      <p className="p-2 border rounded-md text-xs opacity-70">
                        {type}
                      </p>
                    </div>
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm mb-4">{content}</p>
                <p className="text-xs">
                  Tech. Stack: <span className="opacity-70 ">{stack}</span>
                </p>
              </HoverCardContent>
            </HoverCard>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
