import React from "react";
import { Link } from "react-router-dom";
import {
  Pickaxe,
  PhoneCall,
  Mail,
  MapPin,
  ArrowUp,
  Send
} from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top-container">
        {/* Column 1: Brand Profile */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-brand" onClick={scrollToTop}>
            <div className="footer-logo-icon">
              <Pickaxe size={24} />
            </div>
            <span className="footer-logo-text">Varaaha Mines</span>
          </Link>
          <p className="footer-brand-desc">
            Pioneering sustainable Gold, Coal, and mineral extraction through AI drone exploration, zero-cyanide refining, and 100% land restoration.
          </p>

          <div className="footer-status-tag">
            <span className="pulse-dot"></span>
            <span>All 14 Concessions Active & Operational</span>
          </div>
        </div>

        {/* Column 2: Navigation Quick Links */}
        <div className="footer-col links-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Our Services</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
            <li><a href="https://onemine.org" target="_blank" rel="noopener noreferrer">OneMine.org Partner Portal</a></li>
          </ul>
        </div>

        {/* Column 3: Executive Contact */}
        <div className="footer-col contact-col">
          <h4>Executive Desk</h4>
          <div className="footer-contact-items">
            <p className="contact-line">
              <MapPin size={18} className="c-icon" />
              <span>Hyderabad, Telangana, India</span>
            </p>
            <p className="contact-line">
              <PhoneCall size={18} className="c-icon" />
              <a href="tel:8184980777">+91 81849 80777</a>
            </p>
            <p className="contact-line">
              <Mail size={18} className="c-icon" />
              <a href="mailto:varaahaminesceo@gmail.com">varaahaminesceo@gmail.com</a>
            </p>
          </div>

          {/* High Visibility Social Buttons */}
          <div className="footer-social-wrapper">
            <span className="social-label">Connect With Us:</span>
            <div className="footer-social-links">
              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-btn linkedin-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Twitter SVG */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="social-btn twitter-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Phone Call */}
              <a
                href="tel:8184980777"
                aria-label="Call Varaaha Mines Desk"
                className="social-btn phone-btn"
              >
                <PhoneCall size={22} />
              </a>

              {/* Mail */}
              <a
                href="mailto:varaahaminesceo@gmail.com"
                aria-label="Email Varaaha Mines"
                className="social-btn mail-btn"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h4>Operations Bulletin</h4>
          <p>Receive quarterly mineral yield reports and sustainability updates directly in your inbox.</p>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter corporate email..." required />
            <button type="submit" aria-label="Subscribe">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Varaaha Mines & Energy Enterprise. All rights reserved.</p>
          <div className="bottom-right-links">
            <Link to="/privacy" onClick={scrollToTop} className="privacy-link">Privacy Policy</Link>
            <span className="dot-sep">•</span>
            <span>ESG Compliance</span>
            <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
