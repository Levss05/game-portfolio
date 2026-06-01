import Link from "next/link";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export default function CustomLink({
  href,
  children,
  variant = "primary",
  external = false,
}: CustomLinkProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 text-center font-semibold transition";

  const variants = {
    primary: "bg-violet-400 text-zinc-950 hover:bg-violet-300",
    secondary:
      "border border-white/15 text-white hover:border-violet-400 hover:text-violet-400",
  };

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
