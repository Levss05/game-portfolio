"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  items: string[];
  status: string;
  goal?: string;
  learning?: string;
  link?: string;

  testEnvironment?: string[];
  testScenarios?: string[];
  bugsFound?: string[];
  suggestions?: string[];
  conclusion?: string;
};

export default function ProjectCard({
  title,
  type,
  description,
  items,
  status,
  goal,
  learning,
  link,
  testEnvironment,
  testScenarios,
  bugsFound,
  suggestions,
  conclusion,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasQADetails =
    testEnvironment?.length ||
    testScenarios?.length ||
    bugsFound?.length ||
    suggestions?.length ||
    conclusion;

  return (
    <motion.article
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10"
    >
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-violet-500">{type}</p>

          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>

        <span className="w-fit rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
          {status}
        </span>
      </div>

      <p className="leading-7 text-zinc-400">{description}</p>

      <p className="mt-4 text-sm text-zinc-500">
        {isOpen ? "Click to hide details" : "Click to view details"}
      </p>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 overflow-hidden border-t border-white/10 pt-6"
          >
            <div className="mb-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-5 text-zinc-300">
              {goal && (
                <div>
                  <p className="mb-1 font-semibold text-white">Project goal</p>
                  <p className="leading-7 text-zinc-400">{goal}</p>
                </div>
              )}

              {learning && (
                <div>
                  <p className="mb-1 font-semibold text-white">Key learnings</p>
                  <p className="leading-7 text-zinc-400">{learning}</p>
                </div>
              )}

              {hasQADetails && (
                <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-5">
                  <p className="mb-4 text-lg font-semibold text-white">
                    QA Study Details
                  </p>

                  <div className="space-y-5">
                    {testEnvironment && testEnvironment.length > 0 && (
                      <DetailList
                        title="Test Environment"
                        items={testEnvironment}
                      />
                    )}

                    {testScenarios && testScenarios.length > 0 && (
                      <DetailList
                        title="Test Scenarios"
                        items={testScenarios}
                      />
                    )}

                    {bugsFound && bugsFound.length > 0 && (
                      <DetailList title="Bugs Found" items={bugsFound} />
                    )}

                    {suggestions && suggestions.length > 0 && (
                      <DetailList title="Suggestions" items={suggestions} />
                    )}

                    {conclusion && (
                      <div>
                        <p className="mb-1 font-semibold text-white">
                          Conclusion
                        </p>
                        <p className="leading-7 text-zinc-400">{conclusion}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {link && (
                <div>
                  <p className="mb-1 font-semibold text-white">Link</p>

                  {link.startsWith("/") ? (
                    <Link
                      href={link}
                      onClick={(event) => event.stopPropagation()}
                      className="text-violet-300 transition hover:text-violet-200"
                    >
                      Open project
                    </Link>
                  ) : (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="text-violet-300 transition hover:text-violet-200"
                    >
                      Open project
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

type DetailListProps = {
  title: string;
  items: string[];
};

function DetailList({ title, items }: DetailListProps) {
  return (
    <div>
      <p className="mb-2 font-semibold text-white">{title}</p>

      <ul className="list-disc space-y-2 pl-5 text-zinc-400">
        {items.map((item) => (
          <li key={item} className="leading-7">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
