const links = ["Home", "Services", "Results", "Portfolio", "Testimonials", "Contact"];

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          ALI<span className="dot">.</span>ADS
          <span className="logo-sub">SOCIAL MEDIA EXPERT</span>
        </div>
        <div className="nav-links">
          {links.map((link, i) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={i === 0 ? "active" : ""}>
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary">
          Let's Work Together →
        </a>
      </nav>
    </header>
  );
}
