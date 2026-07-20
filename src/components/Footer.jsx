export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="logo" style={{ fontSize: "16px" }}>
          ALI<span className="dot">.</span>ECOM
        </div>
        <span>© 2026 All Rights Reserved.</span>
        <div className="foot-socials">
          <a href="https://www.facebook.com/profile.php?id=61591699376658" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i>f</i>
          </a>
          <a href="https://www.instagram.com/ali.ecom0?igsh=MWN5MjJka2t5eWN0MQ==" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i>◎</i>
          </a>
          <a href="https://wa.me/923367539071" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i>W</i>
          </a>
          <a href="mailto:info.aliecom@gmail.com" aria-label="Email">
            <i>✉</i>
          </a>
        </div>
      </div>
    </footer>
  );
}
