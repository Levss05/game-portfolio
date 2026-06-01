import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";

export default function SnakePlayPage() {
  return (
    <PageContainer>
      <SectionHeader
        label="Play Game"
        title="Snake Game"
        description="Clique dentro da área do jogo antes de usar as setas do teclado."
        showBackButton
      />

      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          src="/games/snake-game/index.html"
          title="Snake Game"
          className="h-[520px] w-full border-0 md:h-[620px]"
        />
      </div>
    </PageContainer>
  );
}
