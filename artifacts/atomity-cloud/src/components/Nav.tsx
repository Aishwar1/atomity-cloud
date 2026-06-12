import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Platform", "Integrations", "Pricing", "Docs"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`nav-root${scrolled ? " nav-scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Atomity home">
          <span className="nav-logo-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeDasharray="3 2" />
            </svg>
          </span>
          Atomity
        </a>

        <ul className="nav-links" role="list">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="nav-link">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#" className="nav-btn-ghost">Sign in</a>
          <a href="#" className="nav-btn-primary">Get Started</a>
        </div>
      </div>
    </motion.nav>
  );
}
