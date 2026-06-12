import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);
  return count;
}

const highlights = [
  { label: "Wasted resources identified", value: "31%", color: "var(--color-accent-blue)" },
  { label: "Providers optimized", value: "3", color: "var(--color-accent-cyan)" },
  { label: "Avg. optimization cycle", value: "24h", color: "var(--color-accent-purple)" },
];

export default function SavingsCard() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(visible ? 43 : 0, 1800);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="savings-section" aria-labelledby="savings-heading">
      <div className="section-inner">
        <motion.div
          ref={ref}
          className="savings-card"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        >
          <div className="savings-card-glow" aria-hidden="true" />

          <div className="savings-content">
            <div className="savings-left">
              <div className="section-eyebrow">Cost Intelligence</div>
              <h2 id="savings-heading" className="savings-heading">
                Potential Monthly Savings
              </h2>
              <p className="savings-subtext">
                Atomity's engine continuously scans for idle resources, oversized instances,
                and unused reservations — then acts on them automatically.
              </p>

              <div className="savings-highlights">
                {highlights.map((h) => (
                  <motion.div
                    key={h.label}
                    className="savings-highlight"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="savings-highlight-val" style={{ color: h.color }}>
                      {h.value}
                    </span>
                    <span className="savings-highlight-label">{h.label}</span>
                  </motion.div>
                ))}
              </div>

              <a href="#" className="btn-primary btn-primary--green">
                Start Optimizing
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="savings-right">
              <div className="savings-number-wrap" aria-label={`$${count}k potential monthly savings`}>
                <div className="savings-number">
                  <span className="savings-dollar">$</span>
                  {count}
                  <span className="savings-k">k</span>
                </div>
                <div className="savings-per-month">per month</div>
                <div className="savings-ring" aria-hidden="true">
                  <svg viewBox="0 0 120 120" className="savings-ring-svg">
                    <circle cx="60" cy="60" r="54" stroke="rgba(16,185,129,0.12)" strokeWidth="6" fill="none" />
                    <motion.circle
                      cx="60" cy="60" r="54"
                      stroke="rgba(16,185,129,0.55)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="339.3"
                      initial={{ strokeDashoffset: 339.3 }}
                      animate={{ strokeDashoffset: visible ? 339.3 * (1 - 0.72) : 339.3 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
