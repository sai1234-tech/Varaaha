import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building,
  Sparkles,
  FileText,
  Info
} from "lucide-react";
import "./Contact.css";

const faqs = [
  {
    q: "How can enterprise buyers request bulk Gold or Coal tenders?",
    a: "Select 'Gold Sales' or 'Coal Supply' in the inquiry form below, or reach our direct trade desk at +91 81849 80777 or via email at varaahaminesceo@gmail.com.",
  },
  {
    q: "What safety protocols and environmental certifications are active?",
    a: "All Varaaha Mines concessions operate under ISO 14001 Environmental & ISO 45001 Occupational Safety standards with 100% closed-loop water treatment.",
  },
  {
    q: "How do vendors and heavy equipment contractors partner with Varaaha?",
    a: "Please submit your company prospectus and equipment specs via the contact form under 'Vendor / Contracting Onboarding'.",
  },
  {
    q: "Where are the primary mining sites located?",
    a: "Our corporate headquarters is in Hyderabad, Telangana, with active surface and underground operations across South and Central India mineral belts.",
  },
];

function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    department: "General Inquiry",
    targetGrade: "Standard Commercial Grade",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileTab, setMobileTab] = useState("form"); // 'form' or 'info'

  // Pre-fill fields if coming from Supply Estimator
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get("subject");
    const volumeParam = params.get("volume");

    if (subjectParam || volumeParam) {
      let deptName = "General Inquiry";
      if (subjectParam?.includes("coal")) deptName = "Coal Supply";
      if (subjectParam?.includes("gold")) deptName = "Gold Sales";

      setFormData((prev) => ({
        ...prev,
        department: deptName,
        message: volumeParam
          ? `Official Tender Estimate Request for ${volumeParam} units of ${subjectParam}. Target dispatch within requested schedule.`
          : prev.message,
      }));
      setMobileTab("form");
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>Connect With Us</span>
          </div>
          <h1>Get in Touch with Varaaha Mines</h1>
          <p>
            Whether you are an investor, bulk buyer, prospective partner, or technical researcher, our executive desk is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Container */}
      <main className="contact-container">
        {/* Mobile View Tab Switcher (< 768px) */}
        <div className="mobile-contact-tabs">
          <button
            type="button"
            className={`contact-tab-btn ${mobileTab === "form" ? "active" : ""}`}
            onClick={() => setMobileTab("form")}
          >
            <FileText size={16} />
            <span>Send Direct Inquiry</span>
          </button>

          <button
            type="button"
            className={`contact-tab-btn ${mobileTab === "info" ? "active" : ""}`}
            onClick={() => setMobileTab("info")}
          >
            <Info size={16} />
            <span>Corporate HQ & Hubs</span>
          </button>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Site Operation Hubs */}
          <div className={`contact-info-column ${mobileTab === "info" ? "show-mobile" : "hide-mobile"}`}>
            {/* Corporate Headquarters */}
            <div className="glass-panel info-card">
              <h3>Corporate Headquarters</h3>
              <p className="info-sub">Operating across India's mineral-rich belts</p>

              <div className="contact-methods-list">
                <div className="method-item">
                  <div className="method-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong>Head Office</strong>
                    <p>Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <strong>Direct Phone Line</strong>
                    <a href="tel:8184980777">+91 81849 80777</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong>Official Email</strong>
                    <a href="mailto:varaahaminesceo@gmail.com">varaahaminesceo@gmail.com</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong>Desk Operational Hours</strong>
                    <p>Mon - Sat: 9:00 AM - 6:30 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="live-support-badge">
                <span className="pulse-dot"></span>
                <span>Executive Desk Online & Accepting Tenders</span>
              </div>
            </div>

            {/* Site Operation Hubs Card */}
            <div className="glass-panel location-hub-card">
              <div className="hub-header">
                <Building size={20} className="hub-icon" />
                <h4>Site Operation Hubs</h4>
              </div>
              <ul className="hub-list">
                <li>
                  <MapPin size={16} color="#f4c542" className="hub-pin" />
                  <span><strong>Hyderabad Central:</strong> HQ & Global Trade Desk</span>
                </li>
                <li>
                  <MapPin size={16} color="#10b981" className="hub-pin" />
                  <span><strong>Telangana Seams:</strong> Open-Pit Coal Terrace Site</span>
                </li>
                <li>
                  <MapPin size={16} color="#f97316" className="hub-pin" />
                  <span><strong>South Mineral Belt:</strong> Gold Exploration & Refining</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Send a Direct Inquiry Form */}
          <div className={`contact-form-column ${mobileTab === "form" ? "show-mobile" : "hide-mobile"}`}>
            <div className="glass-panel form-card">
              <h3>Send a Direct Inquiry</h3>
              <p className="form-sub">Fill out the details below and an operations officer will respond within 24 hours.</p>

              {formSubmitted ? (
                <div className="form-success-box animate-fade-in">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} color="#10b981" />
                  </div>
                  <h4>Inquiry Received Successfully!</h4>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Reference ID: <strong>#VARA-{(Math.floor(Math.random() * 90000) + 10000)}</strong>. Our trade desk will get in touch shortly.
                  </p>
                  <button className="btn-secondary" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="actual-contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Vikram Sharma"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Business Email *</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="company">Company / Organization</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. Global Energy Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="department">Inquiry Subject *</label>
                      <select
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Gold Sales">Gold Bullion & Sales</option>
                        <option value="Coal Supply">Bulk Coal Supply Tenders</option>
                        <option value="Investor Relations">Investor Relations</option>
                        <option value="Vendor Onboarding">Vendor & Heavy Contracting</option>
                        <option value="Careers">Careers & Engineering</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="targetGrade">Required Commodity Spec</label>
                      <select
                        id="targetGrade"
                        value={formData.targetGrade}
                        onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                      >
                        <option value="Standard Commercial Grade">Standard Commercial Grade</option>
                        <option value="99.99% Fine Gold Bars">99.99% Fine Gold Bars (LBMA)</option>
                        <option value="Thermal Coal (5,800 kcal/kg)">Thermal Coal (5,800 kcal/kg)</option>
                        <option value="Prime Hard Coking Coal">Prime Hard Coking Coal (CSR > 65)</option>
                        <option value="Custom Technical Audit">Custom Technical Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message / Specifications *</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Please detail your quantity, delivery timeline, or technical requirements..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary submit-btn">
                    <span>Submit Executive Inquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <section className="glass-panel faq-section">
          <div className="faq-header">
            <HelpCircle size={24} className="faq-icon" />
            <div>
              <h3>Frequently Asked Questions</h3>
              <p>Quick answers regarding operations, tenders, and partnerships.</p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-question-btn" onClick={() => setOpenFaq(isOpen ? null : index)}>
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className="faq-chevron" />
                  </button>
                  {isOpen && <div className="faq-answer animate-fade-in"><p>{faq.a}</p></div>}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;