type SkillBadgeProps = {
  name: string;
};

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="rounded-full border border-violet-500 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
      {name}
    </span>
  );
};

export default SkillBadge;
