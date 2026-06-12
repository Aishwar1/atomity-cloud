import { motion } from "framer-motion";

const providers = [
  { name: "Amazon Web Services", abbr: "AWS" },
  { name: "Microsoft Azure", abbr: "Azure" },
  { name: "Google Cloud", abbr: "GCP" },
  { name: "Kubernetes", abbr: "K8s" },
  { name: "Terraform", abbr: "Terraform" },
  { name: "Datadog", abbr: "Datadog" },
];

export default function Logos() {
  return (
    <motion.section
      className="logos-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label="Compatible cloud providers and tools"
    >
      <div className="logos-inner">
        <p className="logos-label">Works with the infrastructure you already run</p>
        <div className="logos-row" role="list">
          {providers.map((p) => (
            <div key={p.name} className="logo-chip" role="listitem" title={p.name}>
              {p.abbr}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
