import FadeIn from "@/components/FadeIn";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import RevealCard from "@/components/RevealCard";

export default function AboutPage() {
  return (
    <PageContainer>
      <FadeIn>
        <SectionHeader
          label="Sobre mim"
          title="Construindo minha carreira na indústria de games"
          description="Sou estudante de Análise e Desenvolvimento de Sistemas e estou direcionando minha trajetória profissional para o mercado de jogos."
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid gap-4 md:grid-cols-3">
          <RevealCard title="Base em tecnologia">
            <p className="leading-7 text-zinc-400">
              Minha formação em ADS me ajuda a desenvolver lógica, programação,
              banco de dados, sistemas e visão técnica para atuar na área de
              games.
            </p>
          </RevealCard>

          <RevealCard title="Foco em QA Game Testing">
            <p className="leading-7 text-zinc-400">
              Meu objetivo inicial é atuar com testes de gameplay, identificação
              de bugs, documentação técnica e melhoria da experiência do
              jogador.
            </p>
          </RevealCard>

          <RevealCard title="Evolução para Game Dev">
            <p className="leading-7 text-zinc-400">
              Também tenho interesse em desenvolvimento de jogos e pretendo
              criar projetos práticos para evoluir em programação, game design e
              engines.
            </p>
          </RevealCard>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-400/40 hover:bg-white/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Meu plano de carreira
          </h2>

          <div className="space-y-4 leading-8 text-zinc-300 ">
            <p>
              Meu plano é concluir a faculdade de Análise e Desenvolvimento de
              Sistemas e, enquanto isso, buscar uma oportunidade profissional.
              Caso eu consiga entrar em uma vaga de QA Game Tester ou algo
              relacionado a games, pretendo permanecer e evoluir dentro da área.
            </p>

            <p>
              Também pretendo iniciar uma faculdade de Jogos Digitais para
              aprofundar meus conhecimentos em desenvolvimento, design e
              produção de jogos. Se eu ainda não estiver trabalhando na área,
              meu foco será buscar oportunidades como QA, game tester ou funções
              relacionadas.
            </p>

            <p>
              Caso eu me identifique com programação de jogos, quero investir em
              projetos próprios e, futuramente, procurar vagas como Game
              Developer.
            </p>
          </div>
        </div>
      </FadeIn>
    </PageContainer>
  );
}
