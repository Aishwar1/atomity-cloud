import { motion } from "framer-motion";

const orbs = [
  { x: "8%", y: "12%", size: 600, color: "rgba(79,140,255,0.13)", delay: 0 },
  { x: "72%", y: "6%", size: 500, color: "rgba(6,182,212,0.10)", delay: 1.5 },
  { x: "55%", y: "65%", size: 700, color: "rgba(99,102,241,0.10)", delay: 3 },
  { x: "-5%", y: "70%", size: 450, color: "rgba(79,140,255,0.08)", delay: 2 },
];

export default function Background() {
  return (
    <div className="background-root" aria-hidden="true">
      <div className="grid-overlay" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
