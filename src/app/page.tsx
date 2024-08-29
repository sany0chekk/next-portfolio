import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center mb-5">
          <span className="p-1.5 border-2 rounded-full">
            <Avatar className="w-32 md:w-36 h-32 md:h-36">
              <AvatarImage src="/images/photo.jpg" />
              <AvatarFallback>Oleksandr Veselyi</AvatarFallback>
            </Avatar>
          </span>
        </div>
        <h1 className="opacity-60 font-bold text-xl text-center mb-4">
          Hi! I’m Oleksandr Veselyi
        </h1>
        <div className=" grid gap-2 text-center max-w-[600px] mx-auto">
          <p>
            I’m a Front-end Developer who creates modern and efficient web
            applications with a focus on usability and performance. I’m
            constantly improving my skills, experimenting with new technologies,
            and always open to challenges to deliver the best solutions for my
            clients.
          </p>
          <p className="opacity-30 text-sm mb-6">
            Feel free to check out my projects and get in touch for
            collaboration!
          </p>

          <Button className="inline mx-auto mb-4">
            <a
              href="/Oleksandr_Veselyi_Frontend-Dev.pdf"
              className="flex items-center justify-center gap-2"
            >
              <Download size={20} />
              <span className="text-sm">Download CV</span>
            </a>
          </Button>
        </div>
      </div>
      <div className="pt-32">
        <Title>Latest Projects</Title>
        <ProjectList />
      </div>
    </div>
  );
}
