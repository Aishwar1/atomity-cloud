import { motion } from "framer-motion";

export default function SavingsCard() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
      className="py-40 flex justify-center"
    >
      <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-12 text-center max-w-xl w-full">
        <p className="text-green-400 text-lg">Potential Monthly Savings</p>
        <h2 className="text-7xl font-bold mt-4">$43k</h2>
        <p className="text-gray-400 mt-4">
          Continuous optimization across all cloud providers.
        </p>
      </div>
    </motion.section>
  );
}
