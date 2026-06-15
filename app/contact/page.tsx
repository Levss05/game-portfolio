import CustomLink from "@/components/CustomLink";
import FadeIn from "@/components/FadeIn";
import InfoCard from "@/components/InfoCard";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="Contact"
          title="Let's talk?"
          description="I am looking for opportunities to start my career in the games industry, mainly in Game QA Testing, gameplay testing, and related areas."
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            title="Email"
            description="lucas.lailhacar30@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lucas.lailhacar30@gmail.com"
            linkLabel="Send email"
            external
            icon={<SiGmail />}
          />

          <InfoCard
            title="LinkedIn"
            description="Visit my professional profile and follow my growth in technology and games."
            href="https://www.linkedin.com/in/lucasandres30/"
            linkLabel="Visit LinkedIn"
            external
            icon={<FaLinkedin />}
          />

          <InfoCard
            title="GitHub"
            description="Check out my projects, studies, and published code."
            href="https://github.com/Levss05"
            linkLabel="Visit GitHub"
            external
            icon={<FaGithub />}
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-400/40 hover:bg-white/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Open to opportunities
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-zinc-300">
            I am interested in QA Game Tester, Game Tester, Gameplay Tester,
            Localization QA, Game Support, and other opportunities related to
            the games industry.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <CustomLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lucas.lailhacar30@gmail.com"
              external
            >
              Send email
            </CustomLink>

            <CustomLink
              href="/cv/CV-LucasAndres.pdf"
              variant="secondary"
              external
            >
              Resume
            </CustomLink>
          </div>
        </div>
      </FadeIn>
    </PageContainer>
  );
}
