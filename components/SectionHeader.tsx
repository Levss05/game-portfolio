import BackButton from "./BackButton";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  showBackButton?: boolean;
};

export default function SectionHeader({
  label,
  title,
  description,
  showBackButton = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
        {showBackButton && <BackButton variant="inline" />}
        <span>{label}</span>
      </div>

      <h1 className="mb-6 text-4xl font-bold text-white">{title}</h1>

      {description && (
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          {description}
        </p>
      )}
    </div>
  );
}
