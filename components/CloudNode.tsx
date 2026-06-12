"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  x: string;
  y: string;
};

export default function CloudNode({
  name,
  x,
  y,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute z-10"
      style={{
        left: x,
        top: y,
      }}
    >
      <div
        className="
        bg-white/[0.05]
        backdrop-blur-xl
        border
        border-white/10
        px-5
        py-3
        rounded-xl
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:border-blue-400
        "
      >
        {name}
      </div>
    </motion.div>
  );
}