import BugReportCard from "@/components/BugReportCard";
import FadeIn from "@/components/FadeIn";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import { bugReports } from "@/data/bugReports";

export default function BugReportsPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="Bug Reports"
          title="Bug Reports"
          description="Bug reports found during gameplay testing, organized with steps to reproduce, expected result, actual result, severity, frequency, and evidence."
        />
      </FadeIn>

      <div className="grid gap-4">
        {bugReports.map((bug, index) => (
          <FadeIn key={bug.title} delay={0.15 * (index + 1)}>
            <BugReportCard
              title={bug.title}
              game={bug.game}
              platform={bug.platform}
              severity={bug.severity}
              frequency={bug.frequency}
              description={bug.description}
              expectedResult={bug.expectedResult}
              actualResult={bug.actualResult}
              stepsToReproduce={bug.stepsToReproduce}
              status={bug.status}
              evidenceType={bug.evidenceType}
              evidenceUrl={bug.evidenceUrl}
            />
          </FadeIn>
        ))}
      </div>
    </PageContainer>
  );
}
