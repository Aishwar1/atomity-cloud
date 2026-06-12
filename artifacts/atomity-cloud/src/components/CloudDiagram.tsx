import { motion } from "framer-motion";
import { tokens } from "../tokens";

type ProviderCfg = {
  name: string;
  abbr: string;
  color: string;
  cx: number;
  cy: number;
  delay: number;
};

const providers: ProviderCfg[] = [
  { name: "AWS",        abbr: "AWS", color: tokens.clouds.aws,   cx: 18,  cy: 18, delay: 0.2 },
  { name: "Azure",      abbr: "AZ",  color: tokens.clouds.azure,  cx: 76,  cy: 18, delay: 0.35 },
  { name: "GCP",        abbr: "GCP", color: tokens.clouds.gcp,    cx: 18,  cy: 75, delay: 0.5 },
  { name: "Kubernetes", abbr: "K8s", color: tokens.clouds.k8s,    cx: 76,  cy: 75, delay: 0.65 },
];

const HUB = { cx: 47, cy: 47 };

export default function CloudDiagram() {
  return (
    <div className="cloud-diagram" role="img" aria-label="Cloud providers connected to Atomity">
      <svg
        className="connection-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {providers.map((p, i) => (
          <motion.path
            key={p.name}
            d={`M ${p.cx} ${p.cy} L ${HUB.cx} ${HUB.cy}`}
            stroke={`color-mix(in srgb, ${p.color} 50%, rgba(79,140,255,0.4))`}
            strokeWidth="0.35"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease: "easeOut" }}
          />
        ))}

        <motion.circle
          cx={HUB.cx} cy={HUB.cy} r="10"
          stroke="rgba(79,140,255,0.12)"
          strokeWidth="0.5"
          fill="none"
          animate={{ r: [10, 13, 10], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>

      {providers.map((p) => (
        <motion.div
          key={p.name}
          className="cloud-provider"
          style={{
            left: `calc(${p.cx}% - 44px)`,
            top: `calc(${p.cy}% - 24px)`,
            "--provider-color": p.color,
          } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: p.delay, duration: 0.4, type: "spring", stiffness: 180, damping: 14 }}
        >
          <motion.div
            className="cloud-provider-inner"
            animate={{ y: [0, -7, 0] }}
            transition={{ delay: p.delay + 0.5, duration: 4 + p.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="cloud-provider-abbr">{p.abbr}</span>
            <span className="cloud-provider-name">{p.name}</span>
          </motion.div>
          <div className="cloud-provider-glow" />
        </motion.div>
      ))}

      <motion.div
        className="diagram-center"
        style={{ left: `${HUB.cx}%`, top: `${HUB.cy}%` }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 180, damping: 15 }}
      >
        <div className="diagram-center-ring diagram-center-ring--1" />
        <div className="diagram-center-ring diagram-center-ring--2" />
        <div className="diagram-center-core">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="3.5" fill="white" />
            <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.2" opacity="0.45" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
