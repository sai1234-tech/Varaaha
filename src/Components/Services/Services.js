import React, { useState } from "react";
import {
  Pickaxe,
  Flame,
  Compass,
  Leaf,
  Layers,
  Cpu,
  ArrowRight,
  X,
  CheckCircle,
  Sparkles
} from "lucide-react";
import Gold from "../../Assests/gold_hd.jpg";
import Coal from "../../Assests/coal_hd.jpg";
import Blast from "../../Assests/blast_hd.jpg";
import "./Services.css";

const servicesData = [
  {
    id: "gold",
    title: "Gold Mining & Metallurgical Refining",
    category: "Precious Metals",
    icon: Pickaxe,
    image: Gold,
    shortDesc: "High-grade gold ore extraction with zero-cyanide environmentally certified leaching and refining.",
    fullDesc: "Our gold operations span underground shaft excavation and alluvial recovery. Utilizing eco-friendly gravity separation and intensive leaching, we achieve 99.9% gold recovery purity without toxic runoff.",
    capabilities: [
      "Sub-surface vein extraction up to 1,200m depth",
      "Zero-cyanide closed-loop leaching system",
      "On-site bullion assaying & refinery integration",
      "Continuous tailings monitoring & safe containment"
    ],
    stats: { capacity: "3,500 Tons/Yr", compliance: "ISO 9001:2015", tech: "Gravity Separation" }
  },
  {
    id: "coal",
    title: "Clean Coal Mining & Bulk Logistics",
    category: "Energy Resources",
    icon: Flame,
    image: Coal,
    shortDesc: "High-calorific thermal and coking coal surface extraction supplied to major power and industrial grids.",
    fullDesc: "Varaaha Mines operates automated surface terrace mining equipped with real-time quality grading and dust suppression foggers. We ensure predictable calorific value for energy generation.",
    capabilities: [
      "Open-pit continuous terrace extraction",
      "Calorific grading and magnetic washeries",
      "Dedicated rail head & bulk logistics setup",
      "Active dust suppression misting towers"
    ],
    stats: { capacity: "12,000 MT/Day", compliance: "DGMS Certified", tech: "Automated Terracing" }
  },
  {
    id: "exploration",
    title: "Geological Survey & Drone Exploration",
    category: "Tech & Analytics",
    icon: Compass,
    image: Blast,
    shortDesc: "LiDAR aerial surveying, 3D ore-body modeling, and diamond core drilling for resource estimation.",
    fullDesc: "Our exploration division deploys autonomous drones equipped with magnetic anomaly sensors and subterranean LiDAR to generate sub-meter accuracy 3D deposit maps.",
    capabilities: [
      "Autonomous LiDAR drone mapping arrays",
      "3D ore-body volumetric modeling",
      "Deep core diamond drilling & soil testing",
      "JORC & NI 43-101 compliant reserve reports"
    ],
    stats: { accuracy: "Sub-Meter (99.2%)", compliance: "JORC Standard", tech: "LiDAR & AI Modeling" }
  },
  {
    id: "remediation",
    title: "Environmental Remediation & Mine Closure",
    category: "Sustainability",
    icon: Leaf,
    image: Coal,
    shortDesc: "Comprehensive site rehabilitation, water recycling, and indigenous flora reforestation.",
    fullDesc: "We ensure every mined area is transformed into productive ecological preserves. Our environmental division manages water runoff treatment and soil re-vegetation.",
    capabilities: [
      "Active topsoil preservation and re-spreading",
      "Indigenous flora nurseries & reforestation",
      "Zero-discharge mine water treatment plants",
      "Post-closure environmental impact monitoring"
    ],
    stats: { waterRecycled: "92%", treesPlanted: "150,000+", compliance: "EPA / CPCB Standards" }
  },
  {
    id: "blasting",
    title: "Precision Controlled Blasting Engineering",
    category: "Engineering",
    icon: Layers,
    image: Blast,
    shortDesc: "Electronic delay blast design engineered to minimize vibration, noise, and flyrock.",
    fullDesc: "Precision blast engineering utilizing electronic digital detonators and vibration sensors to shatter hard rock layers safely while protecting surrounding structures.",
    capabilities: [
      "3D face laser profiling & blast modeling",
      "Electronic programmable digital detonators",
      "Seismic ground vibration monitoring",
      "Zero-uncontrolled flyrock guarantee"
    ],
    stats: { vibrationDrop: "-85%", precision: "±1 Millisecond", tech: "Electronic Detonation" }
  },
  {
    id: "automation",
    title: "Autonomous Fleet & Smart Operations",
    category: "Smart Mining",
    icon: Cpu,
    image: Gold,
    shortDesc: "Telemetry-guided haulage trucks, automated telemetry, and AI safety monitoring.",
    fullDesc: "Modernizing mine sites with autonomous haulage routes, IoT machine health telemetry, and fatigue-monitoring AI cameras to maximize uptime and eliminate operator hazards.",
    capabilities: [
      "IoT telemetry on all heavy haulers",
      "Driver fatigue & obstacle detection AI",
      "Centralized operations command console",
      "Predictive machinery maintenance algorithms"
    ],
    stats: { uptime: "98.4%", safetyIndex: "Zero LTI", tech: "AI IoT Telemetry" }
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-hero">
        <div className="services-hero-content">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>Operational Capabilities</span>
          </div>
          <h1>End-to-End Mineral & Energy Solutions</h1>
          <p>
            From initial drone exploration to high-purity gold refining and eco-rehabilitation, Varaaha Mines offers industry-leading technical services.
          </p>
        </div>
      </section>

      {/* Main Services Grid Container */}
      <main className="services-container">
        <div className="services-grid">
          {servicesData.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="glass-panel service-card"
                onClick={() => setSelectedService(svc)}
              >
                <div className="card-top">
                  <div className="service-icon-box">
                    <Icon size={26} />
                  </div>
                  <span className="service-cat">{svc.category}</span>
                </div>

                <h3>{svc.title}</h3>
                <p>{svc.shortDesc}</p>

                <div className="card-footer-action">
                  <span>View Specifications</span>
                  <ArrowRight size={16} className="arrow" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Specs Modal */}
        {selectedService && (
          <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
            <div className="glass-panel service-modal animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
                <X size={22} />
              </button>

              <div className="modal-header">
                <span className="modal-cat">{selectedService.category}</span>
                <h2>{selectedService.title}</h2>
              </div>

              <div className="modal-body">
                <div className="modal-img-wrapper">
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>

                <p className="modal-desc">{selectedService.fullDesc}</p>

                <div className="modal-caps">
                  <h4>Core Capabilities & Features</h4>
                  <ul>
                    {selectedService.capabilities.map((cap, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} className="check-icon" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-stats-grid">
                  {Object.entries(selectedService.stats).map(([k, v], idx) => (
                    <div key={idx} className="stat-pill">
                      <span className="stat-key">{k}</span>
                      <span className="stat-val">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href="/contact" className="btn-primary">
                    <span>Request Service Proposal</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Bar */}
        <section className="glass-panel service-cta-bar">
          <div>
            <h3>Need Custom Mining Logistics or Contracting?</h3>
            <p>Our engineering team delivers tailored site operations, equipment leasing, and environmental audits.</p>
          </div>
          <a href="/contact" className="btn-primary">
            <span>Contact Engineering Team</span>
            <ArrowRight size={18} />
          </a>
        </section>
      </main>
    </div>
  );
}

export default Services;