import React from "react";
import { ShieldCheck, Lock, FileText, Globe, Eye, CheckCircle2 } from "lucide-react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      {/* Hero Banner */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="section-kicker">
            <ShieldCheck size={16} color="#10b981" />
            <span>Data Protection & Corporate Governance</span>
          </div>
          <h1>Privacy Policy & Data Security</h1>
          <p>
            Varaaha Mines & Energy Enterprise is committed to protecting corporate client data, tender specifications, investor communications, and site telemetry data.
          </p>
          <span className="last-updated">Last Updated: September 2026 • Version 2.4</span>
        </div>
      </section>

      {/* Policy Content Body */}
      <main className="privacy-container">
        <div className="glass-panel privacy-card">
          <div className="policy-section">
            <div className="policy-icon-header">
              <Lock className="p-icon" />
              <h2>1. Information Collection & Corporate Usage</h2>
            </div>
            <p>
              When you interact with our trade desk, tender estimator, or executive inquiry forms, <strong>Varaaha Mines</strong> collects necessary corporate information including company credentials, authorized contact personnel details, target mineral specifications, and order volume preferences.
            </p>
            <ul className="policy-list">
              <li><CheckCircle2 size={16} className="c-icon" /> <strong>Executive Inquiries:</strong> Processing tender quotes for Gold bullion, Coal supplies, and geological contracting.</li>
              <li><CheckCircle2 size={16} className="c-icon" /> <strong>Investor Relations:</strong> Delivering verified ESG compliance audit reports and quarterly yield updates.</li>
              <li><CheckCircle2 size={16} className="c-icon" /> <strong>Vendor Onboarding:</strong> Reviewing heavy equipment specifications and safety compliance credentials.</li>
            </ul>
          </div>

          <div className="policy-divider" />

          <div className="policy-section">
            <div className="policy-icon-header">
              <Globe className="p-icon" />
              <h2>2. OneMine.org Partner & Telemetry Data</h2>
            </div>
            <p>
              As a technical publishing partner with <strong>OneMine.org</strong> and global mining societies (RETC / NAT), Varaaha Mines maintains strict research access protocols. Download logs for technical whitepapers are utilized exclusively for internal technical auditing and research feedback.
            </p>
          </div>

          <div className="policy-divider" />

          <div className="policy-section">
            <div className="policy-icon-header">
              <Eye className="p-icon" />
              <h2>3. Data Protection & Cybersecurity Standards</h2>
            </div>
            <p>
              We implement enterprise-grade AES-256 bit SSL encryption across all digital touchpoints. We strictly adhere to zero-third-party selling policies. Corporate client data is disclosed solely to accredited logistics partners (rail freight operators, port authorities, regulatory bodies like CPCB / DGMS) strictly required to fulfill supply tenders.
            </p>
          </div>

          <div className="policy-divider" />

          <div className="policy-section">
            <div className="policy-icon-header">
              <FileText className="p-icon" />
              <h2>4. Corporate Compliance & Legal Contact</h2>
            </div>
            <p>
              If you have questions regarding data privacy, regulatory ESG audits, or wish to update your corporate representative information, please reach our Data Compliance Desk:
            </p>

            <div className="privacy-contact-box">
              <p><strong>Varaaha Mines Compliance & Legal Desk</strong></p>
              <p>Corporate Office: Hyderabad, Telangana, India</p>
              <p>Direct Phone: <a href="tel:8184980777">+91 81849 80777</a></p>
              <p>Official Email: <a href="mailto:varaahaminesceo@gmail.com">varaahaminesceo@gmail.com</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
