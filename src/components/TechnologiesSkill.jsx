
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaDesktop,
  FaServer,
  FaMobileAlt,
  FaWrench,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaLaravel,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { GrReactjs } from "react-icons/gr";
import { SiPhp } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
const categories = [
  {
    title: "Frontend",
    icon: FaDesktop,
    technologies: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#E6B800" },
      { name: "React JS", icon: GrReactjs, color: "#61DAFB" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    technologies: [
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "PHP", icon: SiPhp , color: "#777BB4" },
     { name: "Java", icon: FaJava, color: "#5382A1" },
      { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
      { name: "REST API", icon: FaCode, color: "#4385F5" },
    ],
  },
  {
    title: "Mobile",
    icon: FaMobileAlt,
    technologies: [
      { name: "Flutter", icon: FaFlutter, color: "#54C5F8" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Android", icon: DiAndroid , color: "#3ac277" },
    ],
  },
  {
    title: "Desktop",
    icon: FaDesktop,
    technologies: [
      { name: "C#", icon: FaCode, color: "#68217A" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "WinForms", icon: FaDesktop, color: "#1685E8" },
    ],
  },
  {
    title: "Tools & Others",
    icon: FaWrench,
    technologies: [
      { name: "Figma", icon: FiFigma, color: "#1ABCFE" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#171717" },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Visual Studio",
        icon: DiVisualstudio,
        color: "#7B2FF7",
      },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
  },
];

function TechnologyCard({ name, icon: Icon, color }) {
  return (
    <div className="tech-card">
      <Icon
        className="tech-logo"
        style={{ color }}
        aria-hidden="true"
      />
      <span className="tech-name">{name}</span>
    </div>
  );
}

export default function TechnologiesSkill() {
  return (
    <section className="technologies-section pb-5">
      <div className="technologies-list">
        {categories.map(({ title, icon: CategoryIcon, technologies }) => (
          <div className="tech-row shadow-item rounded-4  gap-4 mt-2" key={title}>
            <div className="tech-category col-12 col-md-3">
              <CategoryIcon className="category-icon" size={24} />
              <span className="fs-6 ms-2">{title}</span>
            </div>
            <div className="tech-items col-12 col-md-9">
              {technologies.map((tech) => (
                <TechnologyCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
