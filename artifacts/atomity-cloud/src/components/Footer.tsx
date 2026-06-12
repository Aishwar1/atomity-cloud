const cols = [
  {
    heading: "Product",
    links: ["Dashboard", "Cost analysis", "Policies", "Integrations", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API reference", "Status", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="nav-logo footer-logo" aria-label="Atomity home">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="4" fill="currentColor" opacity="0.9" />
                <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              </svg>
              Atomity
            </a>
            <p className="footer-tagline">
              Cloud optimization for infrastructure teams<br />
              who care about where every dollar goes.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading} className="footer-col">
              <h3 className="footer-col-heading">{col.heading}</h3>
              <ul className="footer-col-links" role="list">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="footer-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Atomity, Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
