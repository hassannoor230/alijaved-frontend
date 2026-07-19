import { useState } from "react";

const links = ["Home", "Services", "Results", "Portfolio", "Testimonials", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav">
        <div className="logo">
          ALI<span className="dot">.</span>ADS
          <span className="logo-sub">SOCIAL MEDIA EXPERT</span>
        </div>
        <div className={`nav-links${open ? " is-open" : ""}`}>
          {links.map((link, i) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={i === 0 ? "active" : ""} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
          Let's Work Together →
        </a>
        <button type="button" className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
