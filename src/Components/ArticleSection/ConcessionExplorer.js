import React, { useState } from "react";
import { MapPin, Layers, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import GoldHD from "../../Assests/gold_hd.jpg";
import CoalHD from "../../Assests/coal_hd.jpg";
import BlastHD from "../../Assests/blast_hd.jpg";
import "./ConcessionExplorer.css";

const concessionsData = [
  {
    id: "gold-alpha",
    name: "Varaaha Gold Vein Alpha",
    location: "South Mineral Belt, India",
    type: "Underground Deep Shaft",
    image: GoldHD,
    status: "Active Production",
    reserves: "14.8 g/t Proven Grade (3.2M oz Gold)",
    annualYield: "2,200 Kg Pure 99.99% Gold / Year",
    depth: "1,150 Meters Sub-Surface",
    esgRating: "ISO 14001 Green Mine Certified",
    highlights: [
      "Zero-cyanide closed-loop leaching array",
      "Autonomous electric hoist shaft system",
      "Continuous seismic tremor detection sensors"
    ]
  },
  {
    id: "coal-pit3",
    name: "Telangana Terrace Pit-3",
    location: "Central Coal Seams, India",
    type: "Open-Pit Terrace Surface Mining",
    image: CoalHD,
    status: "Active Production",
    reserves: "45 Million MT Thermal Coal Seams",
    annualYield: "2.8 Million Metric Tons / Year",
    depth: "320 Meters Surface Terraces",
    esgRating: "Zero-Discharge RO Water Certified",
    highlights: [
      "5,800 kcal/kg high-calorific clean energy coal",
      "Automated dust suppression fogging towers",
      "Concurrent topsoil reforestation behind pit face"
    ]
  },
  {
    id: "deccan-quartz",
    name: "Deccan Plateau Geological Concession",
    location: "Deccan Mineral Belt, India",
    type: "LiDAR Drone Exploration & Drilling",
    image: BlastHD,
    status: "Advanced Exploration",
    reserves: "12.5 Million MT Rare Earth & Quartz",
    annualYield: "Infill Core Drilling Phase 4",
    depth: "Sub-surface Core Probing",
    esgRating: "Low-Impact Drilling Compliant",
    highlights: [
      "3D LiDAR sub-meter subterranean mapping",
      "Precision electronic blast engineering",
      "JORC & NI 43-101 verified core sample logs"
    ]
  }
];

function ConcessionExplorer() {
  const [selectedId, setSelectedId] = useState("gold-alpha");
  const activeSite = concessionsData.find((c) => c.id === selectedId);

  return (
    <section className="concession-section">
      <div className="glass-panel concession-card">
        <div className="concession-header">
          <div className="section-kicker">
            <Layers size={16} />
            <span>Interactive Mining Assets</span>
          </div>
          <h2>Concession & Active Mine Site Explorer</h2>
          <p className="concession-desc">
            Explore Varaaha Mines' primary operational concessions, verified reserve grades, and real-time environmental metrics.
          </p>
        </div>

        {/* Site Selector Buttons */}
        <div className="site-selector-grid">
          {concessionsData.map((site) => (
            <button
              key={site.id}
              className={`site-select-btn ${selectedId === site.id ? "active" : ""}`}
              onClick={() => setSelectedId(site.id)}
            >
              <div className="btn-top">
                <MapPin size={16} className="pin-icon" />
                <span className="site-status">{site.status}</span>
              </div>
              <h4>{site.name}</h4>
              <span className="site-loc">{site.location}</span>
            </button>
          ))}
        </div>

        {/* Active Site Details Card */}
        {activeSite && (
          <div className="glass-panel site-details-card animate-fade-in" key={activeSite.id}>
            <div className="site-img-col">
              <img src={activeSite.image} alt={activeSite.name} />
              <div className="site-img-overlay">
                <span className="type-badge">{activeSite.type}</span>
              </div>
            </div>

            <div className="site-info-col">
              <div className="info-top-row">
                <h3>{activeSite.name}</h3>
                <span className="esg-tag">
                  <ShieldCheck size={16} />
                  <span>{activeSite.esgRating}</span>
                </span>
              </div>

              <div className="metrics-pill-grid">
                <div className="metric-pill">
                  <span className="m-label">Proven Reserve Grade</span>
                  <strong className="m-val gold">{activeSite.reserves}</strong>
                </div>

                <div className="metric-pill">
                  <span className="m-label">Annual Operating Capacity</span>
                  <strong className="m-val">{activeSite.annualYield}</strong>
                </div>

                <div className="metric-pill">
                  <span className="m-label">Mining Elevation / Depth</span>
                  <strong className="m-val">{activeSite.depth}</strong>
                </div>
              </div>

              <div className="site-highlights-box">
                <h4>Operational & Technological Highlights</h4>
                <ul>
                  {activeSite.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="site-action-row">
                <a href="/contact" className="btn-primary">
                  <span>Inquire Site Operations Tenders</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ConcessionExplorer;
