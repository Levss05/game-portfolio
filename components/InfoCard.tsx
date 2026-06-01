"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  icon?: ReactNode;
  revealOnHover?: boolean;
};

export default function InfoCard({
  title,
  description,
  href,
  linkLabel = "Acessar",
  external = false,
  icon,
  revealOnHover = false,
}: InfoCardProps) {
  const cardClasses =
    "group block h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10";

  const content = (
    <>
      <div className="mb-3 flex items-center gap-3">
        {icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-xl text-violet-300">
            {icon}
          </span>
        )}

        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>

      {revealOnHover ? (
        <motion.div initial={false} className="overflow-hidden">
          <p className="max-h-0 leading-7 text-zinc-400 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
            {description}
          </p>
        </motion.div>
      ) : (
        <p className="leading-7 text-zinc-400">{description}</p>
      )}

      {href && (
        <p className="mt-4 font-medium text-violet-300 transition group-hover:text-violet-200">
          {linkLabel}
        </p>
      )}
    </>
  );

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={cardClasses}
      >
        {content}
      </motion.a>
    );
  }

  if (href) {
    return (
      <Link href={href} className="h-full">
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={cardClasses}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cardClasses}
    >
      {content}
    </motion.div>
  );
}
