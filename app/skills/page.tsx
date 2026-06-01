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
    description: "Conceitos e práticas voltadas para testes de jogos.",
    icon: <FaBug />,
    skills: [
      "Bug Reports",
      "Testes exploratórios",
      "Reprodução de bugs",
      "Evidências em vídeo",
      "Severidade e frequência",
      "Test cases",
      "Checklists de teste",
      "Análise de gameplay",
    ],
  },
  {
    title: "Game Development",
    description: "Estudos e práticas relacionados ao desenvolvimento de jogos.",
    icon: <FaGamepad />,
    skills: [
      "Game Logic",
      "Protótipos 2D",
      "Canvas",
      "p5.js",
      "Colisão",
      "Pontuação",
      "Estados de jogo",
      "Pixel Art / Arcade Style",
    ],
  },
  {
    title: "Front-end",
    description:
      "Tecnologias usadas na construção deste portfólio e interfaces.",
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
    title: "Back-end & Banco de Dados",
    description: "Base técnica adquirida durante meus estudos em ADS.",
    icon: <FaDatabase />,
    skills: [
      "Java",
      "Node.js",
      "SQL",
      "Oracle Database",
      "MongoDB",
      "APIs",
      "Spring Boot",
    ],
  },
  {
    title: "Tools",
    description:
      "Ferramentas que utilizo para versionamento, organização e desenvolvimento.",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Trello / Jira",
      "Vercel",
    ],
  },
  {
    title: "Hardware",
    description: "Parte física de todo computador",
    icon: <IoHardwareChip />,
    skills: [
      "Montagem",
      "Desmontagem",
      "Limpeza",
      "Identificação de problemas",
      "Resolução de problemas",
    ],
  },
];

export default function SkillsPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="Skills"
          title="Habilidades e ferramentas"
          description="Tecnologias, conceitos e ferramentas que estou estudando para atuar com QA Game Testing, desenvolvimento web e futuramente desenvolvimento de jogos."
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
