"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/about", label: "Sobre" },
  { href: "/qa-projects", label: "QA Projects" },
  { href: "/bug-reports", label: "Bug Reports" },
  { href: "/game-projects", label: "Game Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contato" },
];

export default function Navbar() {
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onMouseEnter={() => setIsLogoOpen(true)}
          onMouseLeave={() => setIsLogoOpen(false)}
          className="hidden items-center md:flex"
        >
          <motion.div
            layout
            transition={{
              layout: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="flex items-center overflow-hidden text-lg font-bold"
          >
            <span className="text-white">L</span>

            <AnimatePresence>
              {isLogoOpen && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden whitespace-nowrap text-white"
                >
                  ucas
                </motion.span>
              )}
            </AnimatePresence>

            <span className="text-violet-500">.</span>

            <span className="text-violet-500">G</span>

            <AnimatePresence>
              {isLogoOpen && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden whitespace-nowrap text-violet-500"
                >
                  ames
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="block h-0.5 w-7 rounded-full bg-white" />
          <span className="block h-0.5 w-7 rounded-full bg-violet-500" />
          <span className="block h-0.5 w-7 rounded-full bg-white" />
        </button>

        <Link href="/" className="text-lg font-bold md:hidden">
          <span className="text-white">L</span>
          <span className="text-violet-500">.G</span>
        </Link>

        <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-violet-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 md:hidden"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 bg-zinc-950 p-6 shadow-2xl md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold"
                >
                  <span className="text-white">Lucas</span>
                  <span className="text-violet-500">.Games</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:border-violet-400/40 hover:text-violet-300"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
