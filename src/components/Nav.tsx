import { useState } from 'react';
import { siteData } from '../data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { writingImage, socialLinks } = siteData.nav;

  return (
    <>
      <nav className="site-nav desktop-nav">
        <a href="/" className="nav-logo" aria-label="Home">
          <img src="/headings/logo.svg" alt="Logo" />
        </a>

        <a href="/writing" aria-label="Writing">
          <img src={writingImage} alt="Writing" />
        </a>

        <div className="nav-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="social-icon-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <img src={link.icon} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>

      <div className="mobile-nav">
        <div className="mobile-nav-bar">
          <a href="/" className="nav-logo" aria-label="Home">
            <img src="/headings/logo.svg" alt="Logo" />
          </a>

          <div className="mobile-nav-actions">
            <div className="mobile-nav-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="social-icon-link"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <img src={link.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>

            <button
              className="hamburger-button"
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div className={`mobile-drawer ${open ? 'open' : ''}`}>
          <div className="mobile-drawer-top">
            <button
              className="hamburger-button drawer-close-button"
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <a href="/writing" onClick={() => setOpen(false)}>
            <img src={writingImage} alt="Writing" />
          </a>

        </div>
      </div>
    </>
  );
}
