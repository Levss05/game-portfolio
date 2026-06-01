import FadeIn from "@/components/FadeIn";
import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { gameProjects } from "@/data/gameProjects";

export default function GameProjectsPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="Game Projects"
          title="Game Projects"
          description="Prototypes, mini games, mechanics studies, and projects created to develop game programming skills."
        />
      </FadeIn>

      <div className="grid gap-4">
        {gameProjects.map((project, index) => (
          <FadeIn key={project.title} delay={0.15 * (index + 1)}>
            <ProjectCard
              key={project.title}
              title={project.title}
              type={project.type}
              description={project.description}
              items={project.technologies}
              status={project.status}
              goal={project.goal}
              learning={project.learning}
              link={project.link}
            />
          </FadeIn>
        ))}
      </div>
    </PageContainer>
  );
}
