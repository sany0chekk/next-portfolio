import Title from "@/components/ui/title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const skills = [
  { skill: "HTML", icon: <FaHtml5 className="size-16" /> },
  { skill: "CSS", icon: <FaCss3Alt className="size-16" /> },
  { skill: "JavaScript", icon: <FaJsSquare className="size-16" /> },
  { skill: "React", icon: <FaReact className="size-16" /> },
  { skill: "Redux", icon: <SiRedux className="size-16" /> },
  { skill: "Tailwind", icon: <RiTailwindCssFill className="size-16" /> },
  { skill: "Next JS", icon: <RiNextjsFill className="size-16" /> },
];

const AboutPage = () => {
  return (
    <div>
      <div className="mb-20">
        <Title>My skills</Title>
        <ul className="grid gap-6 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 group">
          {skills.map(({ skill, icon }) => {
            return (
              <li
                key={skill}
                className="transition-opacity group-hover:opacity-50 hover:!opacity-100"
              >
                <Card className="p-4 flex flex-col gap-4 items-center justify-center">
                  <CardContent className="m-0 p-0">{icon}</CardContent>
                  <CardFooter className="m-0 p-0">
                    <p className="font-bold text-lg opacity-70">{skill}</p>
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-20">
        <Title>Work</Title>
        <Table>
          <TableBody>
            <TableRow className="bg-muted/50">
              <TableCell className="font-bold">Fullstack Developer</TableCell>
              <TableCell className="opacity-70">Freelance</TableCell>
              <TableCell className="text-right opacity-50">2024-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Title>Study</Title>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">
                Yuriy Fedkovych Chernivtsi National University
              </TableCell>
              <TableCell className="opacity-70">
                {`Master's in Human Resource Management`} <br /> and Labor
                Economics
              </TableCell>
              <TableCell className="text-right opacity-50">2024-2026</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">GoIt Academy</TableCell>
              <TableCell className="opacity-70">Fullstack Developer</TableCell>
              <TableCell className="text-right opacity-50">2023-2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">
                Yuriy Fedkovych Chernivtsi National University
              </TableCell>
              <TableCell className="opacity-70">
                Bachelor of Marketing
              </TableCell>
              <TableCell className="text-right opacity-50">2019-2021</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AboutPage;
