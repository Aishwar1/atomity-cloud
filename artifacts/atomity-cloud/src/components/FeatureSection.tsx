import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "One view across every cloud",
    body: "Aggregate billing data from AWS, Azure, and GCP into a single dashboard. Drill from org-level spend down to the individual resource — no spreadsheets or custom scripts.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Catch waste before it compounds",
    body: "Atomity flags idle compute, oversized reservations, and zombie storage buckets the moment they appear — not at the end of the month when it's too late.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Policies, not just alerts",
    body: "Define a remediation policy and Atomity acts automatically — rightsizes instances, removes orphaned snapshots, and files a pull request for your team to review.",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="features-section" aria-labelledby="features-heading">
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">How it works</div>
          <h2 id="features-heading" className="section-heading">
            From noisy bills to confident decisions
          </h2>
        </motion.div>

        <div className="feature-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
