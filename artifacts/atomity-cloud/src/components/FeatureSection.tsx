import { motion } from "framer-motion";
import MetricCard from "./MetricCard";
import { useMetrics } from "../hooks/useMetrics";
import { tokens } from "../tokens";

const metricConfig = [
  {
    key: "cpu" as const,
    title: "CPU Utilization",
    trend: 4,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6.5H5M2 9H5M2 11.5H5M13 6.5H16M13 9H16M13 11.5H16M6.5 2V5M9 2V5M11.5 2V5M6.5 13V16M9 13V16M11.5 13V16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    ...tokens.metrics.cpu,
  },
  {
    key: "memory" as const,
    title: "Memory Usage",
    trend: -2,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 6V4M9 6V4M13 6V4M5 14v2M9 14v2M13 14v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    ...tokens.metrics.memory,
  },
  {
    key: "storage" as const,
    title: "Storage I/O",
    trend: 7,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <ellipse cx="9" cy="5.5" rx="6" ry="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 5.5V12.5C3 13.88 5.686 15 9 15C12.314 15 15 13.88 15 12.5V5.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 9C3 10.38 5.686 11.5 9 11.5C12.314 11.5 15 10.38 15 9" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    ...tokens.metrics.storage,
  },
  {
    key: "network" as const,
    title: "Network Throughput",
    trend: 12,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2C5.13 2 2 5.13 2 9M9 16C12.87 16 16 12.87 16 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 2C7 2 5.5 5.13 5.5 9S7 16 9 16M9 2C11 2 12.5 5.13 12.5 9S11 16 9 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M2 9h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    ...tokens.metrics.network,
  },
];

export default function FeatureSection() {
  const { data, isLoading, isError } = useMetrics();

  return (
    <section id="metrics" className="metrics-section" aria-labelledby="metrics-heading">
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">Real-time Telemetry</div>
          <h2 id="metrics-heading" className="section-heading">
            Live Infrastructure Metrics
          </h2>
          <p className="section-subtext">
            Aggregated signals from all connected providers, updated every 30 seconds.
          </p>
        </motion.div>

        {isError && (
          <div className="metrics-error" role="alert">
            Unable to load metrics. Please check your connection.
          </div>
        )}

        <div className="metrics-container">
          <div className="metrics-grid">
            {metricConfig.map((cfg, i) => (
              <MetricCard
                key={cfg.key}
                title={cfg.title}
                value={isLoading || !data ? 0 : data[cfg.key]}
                color={cfg.color}
                glow={cfg.glow}
                icon={cfg.icon}
                trend={cfg.trend}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
