import FadeIn from "@/components/FadeIn";
import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { qaProjects } from "@/data/qaProjects";

export default function QAProjectsPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="QA Projects"
          title="QA Game Testing Projects"
          description="Practical game testing studies focused on gameplay analysis, issue documentation, evidence collection, and improvement suggestions."
        />
      </FadeIn>

      <div className="grid gap-4">
        {qaProjects.map((project, index) => (
          <FadeIn key={project.title} delay={0.15 * (index + 1)}>
            <ProjectCard
              title={project.title}
              type={project.type}
              description={project.description}
              items={project.tools}
              status={project.status}
              goal={project.goal}
              learning={project.learning}
              testEnvironment={project.testEnvironment}
              testScenarios={project.testScenarios}
              bugsFound={project.bugsFound}
              suggestions={project.suggestions}
              conclusion={project.conclusion}
            />
          </FadeIn>
        ))}
      </div>
    </PageContainer>
  );
}
