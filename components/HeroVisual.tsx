"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stars = [
  { id: 1, top: "15%", left: "50%", size: 4, delay: 0.2, duration: 1.8 },
  { id: 2, top: "15%", left: "75%", size: 3, delay: 0.6, duration: 2.1 },
  { id: 3, top: "30%", left: "20%", size: 5, delay: 1.1, duration: 1.6 },
  { id: 4, top: "30%", left: "80%", size: 4, delay: 0.4, duration: 2.4 },
  { id: 5, top: "58%", left: "14%", size: 3, delay: 1.5, duration: 1.9 },
  { id: 6, top: "72%", left: "82%", size: 5, delay: 0.9, duration: 2.2 },
  { id: 7, top: "84%", left: "28%", size: 4, delay: 1.8, duration: 1.7 },
  { id: 8, top: "50%", left: "75%", size: 3, delay: 0.3, duration: 2.3 },
  { id: 9, top: "90%", left: "55%", size: 4, delay: 1.2, duration: 1.8 },
  { id: 10, top: "50%", left: "25%", size: 3, delay: 0.7, duration: 2.5 },
  { id: 11, top: "22%", left: "35%", size: 3, delay: 0.5, duration: 1.9 },
];

export default function HeroVisual() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden">
      <div className="absolute h-64 w-64 rounded-full bg-violet-500/15 blur-2xl" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
          animate={{
            opacity: [0.2, 1, 0.3, 1, 0.2],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <Image
          src="/images/SpaceShip.png"
          alt="Nave arcade pixel art"
          width={280}
          height={280}
          unoptimized
          className="drop-shadow-[0_0_20px_rgba(168,85,247,0.25)] [image-rendering:pixelated]"
        />
      </motion.div>
    </div>
  );
}
