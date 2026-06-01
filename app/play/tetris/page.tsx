import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";

export default function TetrisPlayPage() {
  return (
    <PageContainer>
      <SectionHeader
        label="Play Game"
        title="Tetris"
        description="Use as setas para mover e girar as peças. Pressione espaço para jogar a peça diretamente no fundo."
        showBackButton
      />

      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          src="/games/tetris/index.html"
          title="Tetris"
          className="h-[620px] w-full border-0 md:h-[650px]"
        />
      </div>
    </PageContainer>
  );
}
