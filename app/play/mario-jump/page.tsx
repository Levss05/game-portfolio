import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";

export default function MarioJumpPlayPage() {
  return (
    <PageContainer>
      <SectionHeader
        label="Play Game"
        title="Mario Jump"
        description="Pressione espaço ou clique dentro do jogo para pular."
        showBackButton
      />

      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          src="/games/mario-jump/index.html"
          title="Mario Jump"
          className="h-[420px] w-full border-0 md:h-[560px]"
        />
      </div>
    </PageContainer>
  );
}
