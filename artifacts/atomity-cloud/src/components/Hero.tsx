import { motion } from "framer-motion";
import CloudDiagram from "./CloudDiagram";

const badge = "Cloud Optimization Platform";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-badge-dot" aria-hidden="true" />
            {badge}
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Your Clouds Finally Speak{" "}
            <span className="gradient-text">The Same Language</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Aggregate infrastructure signals across AWS, Azure and Kubernetes
            into one optimization engine. Cut costs, reduce drift, act faster.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a href="#metrics" className="btn-primary">
              See Live Metrics
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className="btn-ghost">Watch Demo</a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            {[
              { val: "3", unit: "clouds", label: "integrated" },
              { val: "43k", unit: "$", label: "avg. monthly savings" },
              { val: "99.9", unit: "%", label: "uptime SLA" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-val">
                  <span className="hero-stat-unit">{s.unit === "$" ? "$" : ""}</span>
                  {s.val}
                  <span className="hero-stat-unit">{s.unit !== "$" ? s.unit : ""}</span>
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-diagram-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <CloudDiagram />
        </motion.div>
      </div>
    </section>
  );
}
