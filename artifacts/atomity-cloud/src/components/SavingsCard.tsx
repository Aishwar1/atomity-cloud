import { motion } from "framer-motion";

const stats = [
  { value: "31%", label: "average reduction in cloud spend" },
  { value: "< 5 min", label: "to connect your first account" },
  { value: "24 h", label: "to first actionable insight" },
];

export default function SavingsCard() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="section-inner">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-card-inner">
            <div className="cta-left">
              <div className="section-eyebrow">Results</div>
              <h2 id="cta-heading" className="cta-heading">
                Companies cut their cloud bill by an average of 31%
              </h2>
              <p className="cta-subtext">
                Atomity continuously scans for idle resources, oversized instances,
                and unused reservations. Most teams recover their first savings
                within the first week.
              </p>
              <a href="#" className="btn-primary">
                Start your free 14-day trial
              </a>
            </div>

            <div className="cta-stats">
              {stats.map((s) => (
                <div key={s.label} className="cta-stat">
                  <div className="cta-stat-value">{s.value}</div>
                  <div className="cta-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
