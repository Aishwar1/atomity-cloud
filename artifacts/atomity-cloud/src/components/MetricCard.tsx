import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  value: number;
  color: string;
  glow: string;
  icon: React.ReactNode;
  trend?: number;
  index: number;
};

function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return count;
}

export default function MetricCard({ title, value, color, glow, icon, trend = 0, index }: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(visible ? value : 0, 1200);

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

  const positive = trend >= 0;

  return (
    <motion.div
      ref={ref}
      className="metric-card"
      style={{ "--card-accent": color, "--card-glow": glow } as React.CSSProperties}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="metric-card-header">
        <div className="metric-card-icon" aria-hidden="true">{icon}</div>
        {trend !== 0 && (
          <div className={`metric-card-trend${positive ? " metric-card-trend--up" : " metric-card-trend--down"}`}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d={positive ? "M2 7L5 3l3 4" : "M2 3L5 7l3-4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {Math.abs(trend)}%
          </div>
        )}
      </div>

      <div className="metric-card-value" aria-label={`${title}: ${value} percent`}>
        {count}
        <span className="metric-card-unit">%</span>
      </div>

      <div className="metric-card-title">{title}</div>

      <div className="metric-card-bar-track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <motion.div
          className="metric-card-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: visible ? `${value}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
