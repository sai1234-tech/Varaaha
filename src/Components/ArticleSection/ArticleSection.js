import React, { useState } from "react";
import Hero from "../Hero/Hero";
import BenchmarkComparison from "./BenchmarkComparison";
import SupplyCalculator from "./SupplyCalculator";
import ConcessionExplorer from "./ConcessionExplorer";
import EsgDashboard from "./EsgDashboard";
import Announcement from "../../Assests/announcement_hd.jpg";
import Coal from "../../Assests/coal_hd.jpg";
import Gold from "../../Assests/gold_hd.jpg";
import Blast from "../../Assests/blast_hd.jpg";
import {
  TrendingUp,
  FileText,
  CheckCircle2,
  Globe,
  Database,
  ExternalLink,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Download
} from "lucide-react";
import "./ArticleSection.css";

const miningTechniques = [
  {
    id: "open-pit",
    title: "Open-Pit Surface Mining",
    category: "Coal & Heavy Minerals",
    image: Coal,
    description:
      "Large-scale terrace extraction optimized for high-volume coal and mineral seams. Utilizes real-time satellite telemetry and dust suppression misting arrays.",
    specs: ["Max Seam Depth: 350m", "Daily Haul Capacity: 12,000 MT", "Autonomous Fleet Enabled"],
  },
  {
    id: "underground",
    title: "Deep Underground Shaft Mining",
    category: "Precious Gold Ore",
    image: Gold,
    description:
      "High-depth sub-surface tunnel extraction focusing on high-grade gold veins. Equipped with forced air scrubbers, automated hoist shafts, and seismic monitoring.",
    specs: ["Shaft Depth: Up to 1,200m", "Zero-Carbon Electric Hoist", "Real-Time Air Quality Sensors"],
  },
  {
    id: "blast",
    title: "Precision Controlled Blasting",
    category: "Geological Engineering",
    image: Blast,
    description:
      "Sequential millisecond electronic delay detonators engineered to break hard rock formations with zero ground shock propagation outside quarry limits.",
    specs: ["Vibration Suppression: 99.4%", "Electronic Detonator Precision", "Zero Uncontrolled Flyrock"],
  },
];

const researchPapers = [
  {
    title: "RETC 2009-2019 Tunneling Proceedings",
    category: "Sub-Surface Construction",
    size: "4.2 MB PDF",
    downloads: "1,240+",
  },
  {
    title: "NAT 2008-2018 Underground Extraction Standards",
    category: "Safety Protocols",
    size: "6.8 MB PDF",
    downloads: "2,890+",
  },
  {
    title: "Varaaha Gold Mining Hydro-Metallurgical Report",
    category: "Clean Refining",
    size: "3.1 MB PDF",
    downloads: "950+",
  },
];

function ArticleSection() {
  const [activeTab, setActiveTab] = useState("open-pit");
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const selectedTechnique = miningTechniques.find((t) => t.id === activeTab);

  const handleDownload = (paperTitle) => {
    setDownloadSuccess(paperTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <div className="home-page-container">
      {/* Hero Header Carousel Section */}
      <Hero />

      {/* Live Market & Operations Ticker Bar */}
      <section className="live-ticker-section">
        <div className="ticker-wrapper">
          <div className="ticker-item">
            <TrendingUp size={16} className="ticker-icon" />
            <span>Spot Gold (XAU/USD): <strong>$2,740.50/oz (+0.8%)</strong></span>
          </div>
          <div className="ticker-divider" />
          <div className="ticker-item">
            <Layers size={16} className="ticker-icon" />
            <span>High-Grade Coal Benchmark: <strong>$138.20/MT</strong></span>
          </div>
          <div className="ticker-divider" />
          <div className="ticker-item">
            <ShieldCheck size={16} className="ticker-icon green" />
            <span>Safety Record: <strong>1,480 Days LTI Free</strong></span>
          </div>
          <div className="ticker-divider d-none-mobile" />
          <div className="ticker-item d-none-mobile">
            <Globe size={16} className="ticker-icon" />
            <span>Active Mining Licenses: <strong>14 Operations</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="main-content-section" id="article-details">
        {/* Global Natural Stone Exporter Profile Card */}
        <section className="company-intro-banner">
          <div className="glass-panel company-intro-card">
            <div className="intro-badge">
              <Globe size={18} className="intro-icon" />
              <span>India's Leading Global Exporter & Supplier</span>
            </div>
            <h2>M/S Varaaha Mines Pvt Ltd.</h2>
            <p className="intro-lead">
              We are an Indian based exporter & supplier of natural stones such as <strong>Granite raw Blocks, sandstone slabs, limestone tiles, flooring slate stone</strong>, for buyers around the globe.
            </p>
            <p className="intro-body">
              We at <strong>M/S Varaaha Mines Pvt Ltd.</strong> take pleasure in representing ourselves as one of the most reputed suppliers and exporters of natural stone from India. We embarked upon our splendid voyage with a vision to offer natural dimensional building stones and stone carving products within the stipulated time.
            </p>

            <div className="intro-features-grid">
              <div className="feature-pill">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Granite Raw Blocks & Processed Slabs</span>
              </div>
              <div className="feature-pill">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Sandstone Slabs & Limestone Tiles</span>
              </div>
              <div className="feature-pill">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Flooring Slate Stone & Custom Carvings</span>
              </div>
              <div className="feature-pill">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Timely International Export Shipping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base & OneMine Announcement Card */}
        <section className="announcement-banner-wrapper">
          <div className="glass-panel announcement-card">
            <div className="announcement-image-col">
              <img src={Announcement} alt="OneMine Knowledge Base Announcement" />
              <div className="image-badge">
                <Database size={16} />
                <span>Knowledge Repository</span>
              </div>
            </div>

            <div className="announcement-info-col">
              <div className="section-kicker">
                <Sparkles size={16} className="kicker-icon" />
                <span>OneMine.org Technical Partnership</span>
              </div>

              <h2>Global Mining Technical Repository Expanded</h2>
              <p className="announcement-summary">
                We have enriched the <strong>OneMine.org</strong> digital knowledge base with 
                <strong> 2009 - 2019 RETC Proceedings</strong> and <strong>2008 - 2018 NAT Proceedings</strong>.
              </p>

              <div className="announcement-details">
                As a collaborative global collection of mining-based research, OneMine.org brings together leading technical data across extraction, mineral processing, and underground engineering.
              </div>

              <ul className="knowledge-checklist">
                <li><CheckCircle2 size={16} className="check-icon" /> Peer-Reviewed Technical Documents & Case Studies</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Full Conference Papers & Late Proceedings</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Metallurgical Case Studies & Geological Surveys</li>
              </ul>

              <div className="announcement-actions">
                <a
                  href="https://onemine.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Access OneMine Database</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Mining Techniques Explorer */}
        <section className="section-container">
          <div className="section-header center">
            <div className="section-kicker">
              <Layers size={16} />
              <span>Operational Excellence</span>
            </div>
            <h2>Advanced Extraction & Mining Techniques</h2>
            <p className="section-desc">
              Engineered for efficiency, environmental stewardship, and zero-accident work environments.
            </p>
          </div>

          <div className="techniques-explorer">
            {/* Tabs List */}
            <div className="technique-tabs">
              {miningTechniques.map((tech) => (
                <button
                  key={tech.id}
                  className={`technique-tab-btn ${activeTab === tech.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tech.id)}
                >
                  <div className="tab-title">{tech.title}</div>
                  <div className="tab-cat">{tech.category}</div>
                </button>
              ))}
            </div>

            {/* Display Active Technique Card */}
            {selectedTechnique && (
              <div className="glass-panel technique-detail-card animate-fade-in" key={selectedTechnique.id}>
                <div className="technique-img-wrapper">
                  <img src={selectedTechnique.image} alt={selectedTechnique.title} />
                  <div className="tech-badge">{selectedTechnique.category}</div>
                </div>

                <div className="technique-info">
                  <h3>{selectedTechnique.title}</h3>
                  <p className="tech-desc">{selectedTechnique.description}</p>

                  <div className="tech-specs-box">
                    <h4>Technical Specifications</h4>
                    <ul>
                      {selectedTechnique.specs.map((spec, idx) => (
                        <li key={idx}>
                          <ChevronRight size={16} className="bullet-icon" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Mine Site & Concession Explorer */}
        <ConcessionExplorer />

        {/* Real-Time ESG & Environmental Telemetry Dashboard */}
        <EsgDashboard />

        {/* Empirical Benchmarking & Industry Comparison Section */}
        <BenchmarkComparison />

        {/* Interactive Logistics & Supply Estimator */}
        <SupplyCalculator />

        {/* Industry Trends & Insights Grid */}
        <section className="section-container">
          <div className="grid-2-col">
            {/* Trends Card */}
            <div className="glass-panel data-card">
              <div className="card-header-icon">
                <TrendingUp size={24} className="card-icon gold" />
              </div>
              <h3>Global Mining Trends</h3>
              <ul className="custom-data-list">
                <li>
                  <strong>Gold Production Surge:</strong> Global production reached ~3,500 tons with rising demand in technology & clean energy components.
                </li>
                <li>
                  <strong>Surface Coal Efficiency:</strong> Surface mining accounts for 70% of total coal production, emphasizing fast eco-rehabilitation.
                </li>
                <li>
                  <strong>AI & Drone Telemetry:</strong> Autonomous sensor arrays and aerial mapping increase operational efficiency by up to 45%.
                </li>
              </ul>
            </div>

            {/* Eco Practices Card */}
            <div className="glass-panel data-card">
              <div className="card-header-icon">
                <Globe size={24} className="card-icon emerald" />
              </div>
              <h3>Environmental Sustainability</h3>
              <ul className="custom-data-list">
                <li>
                  <strong>Reforestation Protocols:</strong> Active land rehabilitation with indigenous flora planting for every mined acre.
                </li>
                <li>
                  <strong>Zero-Discharge Water Treatment:</strong> 92% of site water is recycled via closed-loop filtration arrays.
                </li>
                <li>
                  <strong>Solar Powered Processing:</strong> Integrating hybrid renewable grids to lower site carbon footprints.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Papers & Publications Section */}
        <section className="section-container">
          <div className="glass-panel publications-box">
            <div className="section-header">
              <div className="section-kicker">
                <FileText size={16} />
                <span>Technical Library</span>
              </div>
              <h2>Research Publications & Whitepapers</h2>
              <p className="section-desc">
                Download verified technical papers and case studies written by Varaaha Mines engineers.
              </p>
            </div>

            {/* Download Notification Toast */}
            {downloadSuccess && (
              <div className="download-toast">
                <CheckCircle2 size={18} />
                <span>Downloading <strong>"{downloadSuccess}"</strong>...</span>
              </div>
            )}

            <div className="publications-grid">
              {researchPapers.map((paper, index) => (
                <div key={index} className="paper-card">
                  <div className="paper-icon-wrapper">
                    <FileText size={22} />
                  </div>
                  <div className="paper-details">
                    <span className="paper-cat">{paper.category}</span>
                    <h4>{paper.title}</h4>
                    <div className="paper-meta">
                      <span className="meta-tag">{paper.size}</span>
                      <span className="meta-sep">•</span>
                      <span className="meta-tag">{paper.downloads} downloads</span>
                    </div>
                  </div>
                  <button
                    className="paper-download-btn"
                    onClick={() => handleDownload(paper.title)}
                    aria-label={`Download ${paper.title}`}
                  >
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ArticleSection;
