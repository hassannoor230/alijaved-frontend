import portrait from "../assets/portrait.jpg";
import { trackResumeDownload } from "../api/analytics.js";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <motion.div initial={{ opacity: 0, x: -32, rotateY: -7 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
          <span className="eyebrow">Meta Ads &amp; Social Media Expert</span>
          <h1 className="display">
            I Help Brands Grow With <span className="grad-red">Meta Ads &amp; Social Media</span>
          </h1>
          <p className="lead">
            I build data-driven ad campaigns and social strategies that raise brand awareness,
            generate qualified leads, and turn ad spend into measurable revenue.
          </p>
          <div className="hero-ctas">
            <a href="#portfolio" className="btn btn-primary">
              View My Work →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me ↗
            </a>
            <a
              href="/resume-placeholder.txt"
              download
              onClick={trackResumeDownload}
              className="btn btn-ghost"
            >
              Download Resume ⭳
            </a>
          </div>
          <div className="badges">
            <div className="badge">
              <div className="badge-icon">M</div>
              <div>
                <b>Meta</b>
                <span className="sub">Business Partner</span>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon">G</div>
              <div>
                <b>Google Ads</b>
                <span className="sub">Certified</span>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon">H</div>
              <div>
                <b>HubSpot</b>
                <span className="sub">Certified</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, y: 36, rotateY: 14, rotateX: -5 }} animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }} transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}>
          <div className="photo-frame">
            <img src={portrait} alt="Portfolio portrait" />
          </div>
          <motion.div className="stat-float stat-1" animate={{ y: [0, -10, 0], rotateZ: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <div className="label">
              ROAS <span className="up">+132%</span>
            </div>
            <div className="val">12.6x</div>
          </motion.div>
          <motion.div className="stat-float stat-2" animate={{ y: [0, 9, 0], rotateZ: [0, -1, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
            <div className="label">
              Conversions <span className="up">+78%</span>
            </div>
            <div className="val">3,248</div>
            <div className="mini-bars">
              {[40, 60, 35, 80, 55, 95, 70].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>
          <motion.div className="stat-float stat-3" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}>
            <div className="label">Ad Spend</div>
            <div className="val">$8,742</div>
          </motion.div>
          <svg className="growth-line" viewBox="0 0 400 80" preserveAspectRatio="none">
            <path
              d="M0,60 C40,55 60,20 100,25 C140,30 160,60 200,55 C240,50 260,15 300,10 C330,7 360,25 400,5"
              fill="none"
              stroke="#ff3b3b"
              strokeWidth="2.5"
            />
            <circle cx="300" cy="10" r="5" fill="#ff3b3b">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
