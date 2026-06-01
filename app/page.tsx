import CustomLink from "@/components/CustomLink";
import InfoCard from "@/components/InfoCard";
import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/ProjectCard";
import BugReportCard from "@/components/BugReportCard";
import { qaProjects } from "@/data/qaProjects";
import { gameProjects } from "@/data/gameProjects";
import { bugReports } from "@/data/bugReports";
import FadeIn from "@/components/FadeIn";
import HeroVisual from "@/components/HeroVisual";

export default function Home() {
  const featuredQAProject = qaProjects[0];
  const featuredGameProject = gameProjects[0];
  const featuredBugReport = bugReports[0];

  return (
    <PageContainer className="flex min-h-[calc(100vh-5rem)] flex-col justify-center">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
              Game QA Portfolio
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Lucas Levasseur
              <span className="block text-violet-400">
                QA Game Tester em formação
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
              Estudante de Análise e Desenvolvimento de Sistemas construindo
              carreira na indústria de games, com foco em QA Game Testing,
              análise de bugs, testes de gameplay e futuramente desenvolvimento
              de jogos digitais.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <CustomLink href="/qa-projects">Ver projetos de QA</CustomLink>

              <CustomLink href="/bug-reports" variant="secondary">
                Ver bug reports
              </CustomLink>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <InfoCard
            title="QA Testing"
            description="Testes exploratórios, bug reports, evidências, reprodução de bugs e análise de gameplay."
          />

          <InfoCard
            title="Game Projects"
            description="Protótipos, estudos de mecânicas, mini games e projetos feitos com foco em aprendizado."
          />

          <InfoCard
            title="Career Goal"
            description="Entrar na área de games por QA e evoluir tecnicamente para desenvolvimento de jogos."
          />
        </div>

        <div className="mt-20">
          <div className="mb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
              Featured Projects
            </p>

            <h2 className="mb-4 text-3xl font-bold text-white">
              Destaques do portfólio
            </h2>

            <p className="max-w-3xl leading-8 text-zinc-300">
              Alguns dos principais estudos e registros que demonstram minha
              evolução em QA Game Testing, análise de bugs e desenvolvimento de
              projetos voltados para games.
            </p>
          </div>

          <div className="grid gap-4">
            <ProjectCard
              title={featuredQAProject.title}
              type={featuredQAProject.type}
              description={featuredQAProject.description}
              items={featuredQAProject.tools}
              status={featuredQAProject.status}
              goal={featuredQAProject.goal}
              learning={featuredQAProject.learning}
            />

            <BugReportCard
              title={featuredBugReport.title}
              game={featuredBugReport.game}
              platform={featuredBugReport.platform}
              severity={featuredBugReport.severity}
              frequency={featuredBugReport.frequency}
              description={featuredBugReport.description}
              expectedResult={featuredBugReport.expectedResult}
              actualResult={featuredBugReport.actualResult}
              stepsToReproduce={featuredBugReport.stepsToReproduce}
              status={featuredBugReport.status}
              evidenceType={featuredBugReport.evidenceType}
              evidenceUrl={featuredBugReport.evidenceUrl}
            />

            <ProjectCard
              title={featuredGameProject.title}
              type={featuredGameProject.type}
              description={featuredGameProject.description}
              items={featuredGameProject.technologies}
              status={featuredGameProject.status}
              goal={featuredGameProject.goal}
              learning={featuredGameProject.learning}
              link={featuredGameProject.link}
            />
          </div>
        </div>
      </FadeIn>
    </PageContainer>
  );
}
