"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type BugReportCardProps = {
  title: string;
  game: string;
  platform: string;
  severity: string;
  frequency: string;
  description: string;
  expectedResult: string;
  actualResult: string;
  stepsToReproduce: string[];
  status: string;
  evidenceType?: "Video" | "Screenshot" | "Manual Test" | "No evidence";
  evidenceUrl?: string;
};

export default function BugReportCard({
  title,
  game,
  platform,
  severity,
  frequency,
  description,
  expectedResult,
  actualResult,
  stepsToReproduce,
  status,
  evidenceType,
  evidenceUrl,
}: BugReportCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10"
    >
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-sm font-medium text-violet-500">
            {game} • {platform}
          </p>

          <h2 className="max-w-3xl text-2xl font-semibold text-white">
            {title}
          </h2>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3 lg:justify-end">
          <span className="w-fit whitespace-nowrap rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
            {status}
          </span>

          {evidenceType && (
            <span className="w-fit whitespace-nowrap rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-200">
              Evidence: {evidenceType}
            </span>
          )}
        </div>
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
            <div className="mb-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-sm font-semibold text-white">Severity</p>
                <p className="text-zinc-400">{severity}</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-sm font-semibold text-white">Frequency</p>
                <p className="text-zinc-400">{frequency}</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-sm font-semibold text-white">Evidence</p>
                <p className="text-zinc-400">{evidenceType || "No evidence"}</p>
              </div>
            </div>

            {stepsToReproduce && stepsToReproduce.length > 0 && (
              <div>
                <p className="mb-2 font-semibold text-white">
                  Steps to Reproduce
                </p>

                <ol className="list-decimal space-y-2 pl-5 text-zinc-400">
                  {stepsToReproduce.map((step) => (
                    <li key={step} className="leading-7">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="space-y-4 pt-5 text-zinc-300">
              <div>
                <p className="mb-1 font-semibold text-white">Expected Result</p>
                <p className="leading-7 text-zinc-400">{expectedResult}</p>
              </div>

              <div>
                <p className="mb-1 font-semibold text-white">Actual Result</p>
                <p className="leading-7 text-zinc-400">{actualResult}</p>
              </div>
            </div>

            {evidenceType === "Screenshot" && evidenceUrl && (
              <div className="mt-6">
                <p className="mb-3 font-semibold text-white">
                  Screenshot Evidence
                </p>

                <img
                  src={evidenceUrl}
                  alt={`${title} evidence`}
                  className="w-full max-w-3xl rounded-xl border border-white/10 bg-black"
                />
              </div>
            )}

            {evidenceType === "Video" && evidenceUrl && (
              <div className="mt-6">
                <p className="mb-3 font-semibold text-white">Video Evidence</p>

                <video
                  src={evidenceUrl}
                  controls
                  className="w-full max-w-3xl rounded-xl border border-white/10 bg-black"
                >
                  Your browser does not support video playback.
                </video>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
