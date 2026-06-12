export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="nav-logo">
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            </svg>
            Atomity
          </span>
          <p className="footer-tagline">Cloud optimization, unified.</p>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Atomity. All rights reserved.</p>
      </div>
    </footer>
  );
}
