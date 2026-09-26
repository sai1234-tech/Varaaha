import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Pickaxe, Menu, X, PhoneCall, ChevronRight, ShieldCheck } from "lucide-react";
import "./Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle sticky header scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Our Quarries", path: "/quarries" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo Brand */}
          <Link to="/" className="brand-logo" aria-label="Varaaha Mines Home">
            <div className="logo-icon-wrapper">
              <Pickaxe className="logo-icon" />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">Varaaha</span>
              <span className="logo-subtitle">Mines & Energy</span>
            </div>
          </Link>

          {/* Live Operational Status Tag (Desktop) */}
          <div className="nav-status-badge d-none-mobile">
            <span className="pulse-dot"></span>
            <span>Site Ops: Operational</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-item ${isActive ? "active" : ""}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/contact" className="nav-cta-btn">
              <PhoneCall size={16} />
              <span>Inquire Now</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? "show" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Navigation Side Menu */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} aria-label="Mobile Navigation">
        <div className="drawer-header">
          <div className="brand-logo">
            <div className="logo-icon-wrapper">
              <Pickaxe className="logo-icon" />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">Varaaha</span>
              <span className="logo-subtitle">Mines & Energy</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="drawer-body">
          <div>
            <div className="mobile-status-badge">
              <ShieldCheck size={16} color="#10b981" />
              <span>ISO 14001 Green Mine Certified</span>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={18} className="chevron" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mobile-drawer-footer">
            <p className="footer-call-label">Direct Trade Desk</p>
            <a
              href="tel:8184980777"
              className="mobile-call-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneCall size={18} />
              <span>+91 81849 80777</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
