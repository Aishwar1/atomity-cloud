import { motion } from "framer-motion";
import MetricCard from "./MetricCard";
import { useMetrics } from "../hooks/useMetrics";

export default function FeatureSection() {
  const { data, isLoading } = useMetrics();

  if (isLoading) {
    return (
      <section className="pt-10 pb-20">
        <div className="max-w-7xl mx-auto text-center">Loading metrics...</div>
      </section>
    );
  }

  return (
    <section className="pt-10 pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-14"
      >
        Live Infrastructure Metrics
      </motion.h2>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <MetricCard title="CPU Usage" value={data[0].stock % 100} />
          <MetricCard title="Memory" value={data[1].stock % 100} />
          <MetricCard title="Storage" value={data[2].stock % 100} />
          <MetricCard title="Network" value={data[3].stock % 100} />
        </div>
      </div>
    </section>
  );
}
