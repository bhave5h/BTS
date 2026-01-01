"use client";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer footer-new">
      <div className="footer-inner container">
        {/* LEFT */}
        <div className="footer-left">
          <div className="phone-art rounded">
            <video
              className="footer-reel"
              src="/videos/1.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Footer reel video"
              title="Reel"
            />
          </div>

          <div className="footer-copy">
            <p className="footer-lead">
              We help brands grow by making remarkable, scroll-stopping creative.
            </p>
            <p className="footer-sub">
              Subscribe for monthly case studies, tips and a peek behind our reels.
            </p>

            <form
              className="footer-newsletter"
              action="/api/newsletter"
              method="post"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <div className="newsletter-row">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email"
                />
                <button className="btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="footer-mid">
          <div className="site-links">
            <h4>Explore</h4>
            <a href="/aboutus">About</a>
            <a href="/services">Services</a>
            <a href="/ourteam">Team</a>
            <a href="/clients">Clients</a>
          </div>

          <div className="work-links">
            <h4>Work</h4>
            <a href="/works">Case Studies</a>
            <a href="/works#featured">Featured</a>
            <a href="/contactus">Contact</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="footer-right">
          <div className="social-vertical" aria-hidden="true">
            <a
              href="https://www.instagram.com/bigtopsocial/"
              className="social"
              aria-label="Instagram"
            >
              <img
                src="/icons/i.png"
                alt="Instagram logo"
                className="social-logo"
              />
            </a>

            <a href="#" className="social" aria-label="X">
              <img
                src="/icons/x.png"
                alt="X logo"
                className="social-logo"
              />
            </a>

            <a href="#" className="social" aria-label="LinkedIn">
              <img
                src="/icons/l.png"
                alt="LinkedIn logo"
                className="social-logo"
              />
            </a>
          </div>
        </aside>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom container">
        <div className="copyright">
          © {new Date().getFullYear()} BigTop Social — Nagpur
        </div>

        <nav className="footer-small">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>

      {/* BACK TO TOP */}
      <a href="#top" className="back-to-top" aria-label="Back to top">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M12 16V8M12 8l-3 3M12 8l3 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </footer>
  );
}
