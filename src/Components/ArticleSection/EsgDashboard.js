import React from "react";
import { Leaf, Droplets, Sun, Wind, ShieldCheck, TreePine } from "lucide-react";
import "./EsgDashboard.css";

function EsgDashboard() {
  return (
    <section className="esg-dashboard-section">
      <div className="glass-panel esg-dashboard-card">
        <div className="esg-dashboard-header">
          <div className="section-kicker">
            <Leaf size={16} color="#10b981" />
            <span>Real-Time Ecological Telemetry</span>
          </div>
          <h2>ESG & Environmental Sustainability Dashboard</h2>
          <p className="esg-dashboard-desc">
            Varaaha Mines operates under strict ISO 14001 zero-harm environmental protocols with continuous sensor reporting.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="esg-metrics-grid">
          {/* Card 1: Air Quality */}
          <div className="esg-stat-card">
            <div className="stat-card-icon green">
              <Wind size={24} />
            </div>
            <div className="stat-card-body">
              <span className="card-label">Mine Perimeter Air Quality</span>
              <strong className="card-num green">42 AQI</strong>
              <span className="card-sub">Supported by continuous misting towers</span>
            </div>
          </div>

          {/* Card 2: Water Recycling */}
          <div className="esg-stat-card">
            <div className="stat-card-icon blue">
              <Droplets size={24} />
            </div>
            <div className="stat-card-body">
              <span className="card-label">Process Water Recycled</span>
              <strong className="card-num blue">92.4%</strong>
              <span className="card-sub">14,850 Kiloliters / Day Closed-Loop</span>
            </div>
          </div>

          {/* Card 3: Reforestation */}
          <div className="esg-stat-card">
            <div className="stat-card-icon emerald">
              <TreePine size={24} />
            </div>
            <div className="stat-card-body">
              <span className="card-label">Restored Native Habitats</span>
              <strong className="card-num emerald">520 Acres</strong>
              <span className="card-sub">18,400 Native Flora Trees Planted</span>
            </div>
          </div>

          {/* Card 4: Hybrid Solar Energy */}
          <div className="esg-stat-card">
            <div className="stat-card-icon gold">
              <Sun size={24} />
            </div>
            <div className="stat-card-body">
              <span className="card-label">Hybrid Solar Power Array</span>
              <strong className="card-num gold">4.2 MW</strong>
              <span className="card-sub">Powering site hoist & pump systems</span>
            </div>
          </div>
        </div>

        {/* Accreditation Banner */}
        <div className="esg-accreditation-bar">
          <ShieldCheck size={24} className="shield-icon" />
          <div className="accred-text">
            <strong>Certified Carbon Offset & Land Rehabilitation Standard (ISO 14001 / CPCB)</strong>
            <p>100% of surface open-pit mine cuts are backfilled with topsoil within 12 months of extraction completion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EsgDashboard;
