import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Award
} from "lucide-react";
import "./BenchmarkComparison.css";

const benchmarkData = [
  {
    category: "Safety",
    title: "Workplace LTI-Free Safety Record",
    varahaValue: "1,480 Days",
    varahaNum: 98,
    industryValue: "320 Days",
    industryNum: 35,
    unit: "Days Without Lost Time Injury",
    difference: "+362.5% Safer",
    isBetter: true,
    desc: "Varaaha Mines utilizes AI fatigue sensors, remote tele-op machinery, and real-time seismic monitoring to maintain industry-leading safety.",
  },
  {
    category: "Environment",
    title: "Closed-Loop Water Recycling Rate",
    varahaValue: "92.4%",
    varahaNum: 92,
    industryValue: "45.0%",
    industryNum: 45,
    unit: "Percentage of Process Water Recycled",
    difference: "+105.3% Cleaner",
    isBetter: true,
    desc: "Zero-discharge reverse osmosis and heavy-sediment settling basins return purified water back into site operations continuously.",
  },
  {
    category: "Tech",
    title: "Geological Survey Turnaround Time",
    varahaValue: "24 Hours",
    varahaNum: 95,
    industryValue: "30 Days",
    industryNum: 20,
    unit: "3D LiDAR Ore Body Mapping Speed",
    difference: "30x Faster Delivery",
    isBetter: true,
    desc: "Autonomous drone telemetry and subterranean magnetic sensors generate sub-meter accuracy 3D deposit maps within a single day.",
  },
  {
    category: "Environment",
    title: "Carbon Intensity Per Ton Extracted",
    varahaValue: "0.42 tCO₂e",
    varahaNum: 85,
    industryValue: "1.15 tCO₂e",
    industryNum: 30,
    unit: "Metric Tons of CO₂ per Ton of Ore",
    difference: "-63.5% Lower Carbon",
    isBetter: true,
    desc: "Electric hoist shafts and hybrid solar-diesel mine grids dramatically reduce greenhouse gas emissions across all sites.",
  },
  {
    category: "Yield & Tech",
    title: "Gold Extraction Recovery Rate",
    varahaValue: "99.2%",
    varahaNum: 99,
    industryValue: "84.5%",
    industryNum: 84,
    unit: "Gold Purity & Ore Recovery Ratio",
    difference: "+17.4% Higher Yield",
    isBetter: true,
    desc: "Zero-cyanide eco-leaching combined with multi-stage centrifugal gravity concentration maximizes metal recovery from lower grade ores.",
  },
  {
    category: "Environment",
    title: "Post-Mining Land Reforestation",
    varahaValue: "100% Within 12 Mos",
    varahaNum: 100,
    industryValue: "35% (Delayed)",
    industryNum: 35,
    unit: "Mined Terrace Reforestation Rate",
    difference: "Guaranteed Full Restoration",
    isBetter: true,
    desc: "Topsoil preservation and native flora nurseries ensure every mined terrace is restored into self-sustaining green habitats.",
  }
];

function BenchmarkComparison() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Safety", "Environment", "Tech", "Yield & Tech"];

  const filteredData =
    activeFilter === "All"
      ? benchmarkData
      : benchmarkData.filter((item) => item.category.includes(activeFilter));

  return (
    <section className="benchmark-section">
      <div className="glass-panel benchmark-card">
        <div className="benchmark-header">
          <div className="section-kicker">
            <BarChart3 size={16} />
            <span>Empirical Benchmarking</span>
          </div>
          <h2>Varaaha Performance vs. Industry Standards</h2>
          <p className="benchmark-desc">
            Comparing our active operational data, safety compliance, and environmental metrics against global mining averages.
          </p>

          {/* Filter Pills */}
          <div className="benchmark-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="comparison-grid">
          {filteredData.map((item, idx) => (
            <div key={idx} className="comparison-item-card animate-fade-in">
              <div className="item-top">
                <span className="category-tag">{item.category}</span>
                <span className="badge-difference">
                  <TrendingUp size={14} />
                  <span>{item.difference}</span>
                </span>
              </div>

              <h3>{item.title}</h3>
              <p className="item-unit">{item.unit}</p>

              {/* Progress Bars Comparison */}
              <div className="bars-container">
                {/* Varaaha Bar */}
                <div className="bar-row varaha-row">
                  <div className="bar-label-group">
                    <span className="brand-name">Varaaha Mines</span>
                    <span className="val-text gold">{item.varahaValue}</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill varaha-fill"
                      style={{ width: `${item.varahaNum}%` }}
                    />
                  </div>
                </div>

                {/* Industry Average Bar */}
                <div className="bar-row industry-row">
                  <div className="bar-label-group">
                    <span className="brand-name">Global Industry Avg</span>
                    <span className="val-text muted">{item.industryValue}</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill industry-fill"
                      style={{ width: `${item.industryNum}%` }}
                    />
                  </div>
                </div>
              </div>

              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="benchmark-footer-note">
          <Award size={18} className="award-icon" />
          <span>Verified against 2024 Global Mining ESG & Safety Audit Benchmarks (ISO 14001 / DGMS).</span>
        </div>
      </div>
    </section>
  );
}

export default BenchmarkComparison;
