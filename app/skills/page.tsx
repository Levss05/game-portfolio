import FadeIn from "@/components/FadeIn";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";
import { FaBug, FaCode, FaDatabase, FaGamepad, FaTools } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import RevealCard from "@/components/RevealCard";

const skillCategories = [
  {
    title: "QA Game Testing",
    description: "Concepts and practices focused on game testing.",
    icon: <FaBug />,
    skills: [
      "Bug Reports",
      "Exploratory Testing",
      "Bug Reproduction",
      "Video Evidence",
      "Test Cases",
      "Testing Checklists",
      "Gameplay Analysis",
    ],
  },
  {
    title: "Game",
    description: "Studies and practices related to game development.",
    icon: <FaGamepad />,
    skills: [
      "Game Logic",
      "2D Prototypes",
      "Canvas",
      "p5.js",
      "Collision",
      "Scoring",
      "Game States",
      "Pixel Art / Arcade Style",
      "Game Design",
      "Game Development",
      "Godot / Unity - 2D",
    ],
  },
  {
    title: "Front-end",
    description:
      "Technologies used to build this portfolio and its interfaces.",
    icon: <FaCode />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Back-end & Database",
    description: "Technical foundation acquired during my ADS studies.",
    icon: <FaDatabase />,
    skills: [
      "Java",
      "Node.js",
      "SQL",
      "Oracle Database",
      "MongoDB",
      "APIs",
      "Spring Boot",
      "Python",
      "C",
      "C#",
    ],
  },
  {
    title: "Tools",
    description:
      "Tools I use for version control, organization, and development.",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Postman",
      "Figma",
      "Trello / Jira",
      "Vercel",
      "Godot",
      "Unity",
    ],
  },
  {
    title: "Hardware",
    description: "The physical components of a computer.",
    icon: <IoHardwareChip />,
    skills: [
      "Assembly",
      "Disassembly",
      "Cleaning",
      "Problem Identification",
      "Troubleshooting",
    ],
  },
];

export default function SkillsPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="Skills"
          title="Skills and Tools"
          description="Technologies, concepts, and tools I am studying to work with Game QA Testing, web development, and, in the future, game development."
        />
      </FadeIn>

      <div className="grid gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <FadeIn key={category.title} delay={0.15 * (categoryIndex + 1)}>
            <RevealCard
              title={category.title}
              description={category.description}
              icon={category.icon}
            >
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </RevealCard>
          </FadeIn>
        ))}
      </div>
    </PageContainer>
  );
}
