export const tokens = {
  colors: {
    bgPrimary: "var(--color-bg-primary)",
    bgCard: "var(--color-bg-card)",
    bgCardHover: "var(--color-bg-card-hover)",
    textPrimary: "var(--color-text-primary)",
    textMuted: "var(--color-text-muted)",
    accentBlue: "var(--color-accent-blue)",
    accentCyan: "var(--color-accent-cyan)",
    accentGreen: "var(--color-accent-green)",
    accentPurple: "var(--color-accent-purple)",
    border: "var(--color-border)",
    borderStrong: "var(--color-border-strong)",
  },
  metrics: {
    cpu: { color: "var(--color-accent-blue)", glow: "rgba(79,140,255,0.35)" },
    memory: { color: "var(--color-accent-cyan)", glow: "rgba(6,182,212,0.35)" },
    storage: { color: "var(--color-accent-purple)", glow: "rgba(139,92,246,0.35)" },
    network: { color: "var(--color-accent-green)", glow: "rgba(16,185,129,0.35)" },
  },
  clouds: {
    aws: "#FF9900",
    azure: "#0078D4",
    gcp: "#34A853",
    k8s: "#326CE5",
  },
} as const;
