import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-tag">For DevOps &amp; Platform Teams</div>

          <h1 id="hero-heading" className="hero-heading">
            Cloud cost visibility<br />
            you can actually act on
          </h1>

          <p className="hero-subtitle">
            Connect your AWS, Azure, GCP, and Kubernetes clusters.
            Atomity surfaces waste, drift, and savings opportunities
            in a single pane — no scripts required.
          </p>

          <div className="hero-ctas">
            <a href="#" className="btn-primary">
              Start free trial
            </a>
            <a href="#features" className="btn-ghost">See how it works</a>
          </div>

          <div className="hero-proof">
            <span>No credit card required</span>
            <span className="hero-proof-dot" aria-hidden="true" />
            <span>5-minute setup</span>
            <span className="hero-proof-dot" aria-hidden="true" />
            <span>SOC 2 Type II</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-browser">
            <div className="hero-browser-bar">
              <div className="hero-browser-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-browser-address">app.atomity.io/dashboard</div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
              alt="Data center server rack with infrastructure running AWS, Azure and GCP workloads"
              className="hero-screenshot"
              loading="eager"
              width="1400"
              height="900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
