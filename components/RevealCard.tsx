"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

type RevealCardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
};

export default function RevealCard({
  title,
  description,
  icon,
  children,
}: RevealCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-white">{title}</h2>

          {description && (
            <p className="leading-7 text-zinc-400">{description}</p>
          )}
        </div>

        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-2xl text-violet-300 transition group-hover:scale-110 group-hover:text-violet-200">
            {icon}
          </div>
        )}
      </div>

      <div
        className={`
          mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500
          group-hover:mt-5 group-hover:max-h-96 group-hover:opacity-100
          ${isOpen ? "mt-5 max-h-96 opacity-100" : ""}
        `}
      >
        {children}
      </div>
    </motion.section>
  );
}
