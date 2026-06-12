"use client";

import { motion } from "framer-motion";
import CloudNode from "./CloudNode";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      <CloudNode name="AWS" x="15%" y="25%" />
      <CloudNode name="Azure" x="75%" y="25%" />
      <CloudNode name="GCP" x="20%" y="70%" />
      <CloudNode name="Kubernetes" x="70%" y="70%" />

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold max-w-5xl"
      >
        Your Clouds Finally Speak
        <br />
        The Same Language
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-400 text-lg max-w-2xl"
      >
        Aggregate infrastructure signals across AWS,
        Azure and Kubernetes into one optimization engine.
      </motion.p>

    </section>
  );
}