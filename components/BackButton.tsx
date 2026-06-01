"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

type BackButtonProps = {
  variant?: "default" | "inline";
};

export default function BackButton({ variant = "default" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/game-projects");
  };

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleBack}
        aria-label="Voltar para projetos de jogos"
        className="mr-3 inline-flex cursor-pointer items-center justify-center text-violet-400 transition hover:-translate-x-1 hover:text-violet-300"
      >
        <FaArrowLeft className="text-sm" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="mb-8 flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/40 hover:bg-white/10 hover:text-violet-300"
    >
      <FaArrowLeft />
      Voltar
    </button>
  );
}
