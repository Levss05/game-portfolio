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
          label="Contato"
          title="Vamos conversar?"
          description="Estou buscando oportunidades para iniciar minha carreira na indústria de games, principalmente em QA Game Testing, testes de gameplay e áreas relacionadas."
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            title="E-mail"
            description="lucas.lailhacar30@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lucas.lailhacar30@gmail.com"
            linkLabel="Enviar e-mail"
            external
            icon={<SiGmail />}
          />

          <InfoCard
            title="LinkedIn"
            description="Acesse meu perfil profissional e acompanhe minha evolução na área de tecnologia e games."
            href="https://www.linkedin.com/in/lucasandres30/"
            linkLabel="Acessar LinkedIn"
            external
            icon={<FaLinkedin />}
          />

          <InfoCard
            title="GitHub"
            description="Veja meus projetos, estudos e códigos publicados."
            href="https://github.com/Levss05"
            linkLabel="Acessar GitHub"
            external
            icon={<FaGithub />}
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-400/40 hover:bg-white/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Aberto a oportunidades
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-zinc-300">
            Tenho interesse em vagas de QA Game Tester, Game Tester, Gameplay
            Tester, Localization QA, Game Support e oportunidades relacionadas à
            indústria de jogos.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <CustomLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lucas.lailhacar30@gmail.com"
              external
            >
              Enviar e-mail
            </CustomLink>

            <CustomLink
              href="/cv/CV-LucasAndres.pdf"
              variant="secondary"
              external
            >
              Currículo
            </CustomLink>
          </div>
        </div>
      </FadeIn>
    </PageContainer>
  );
}
