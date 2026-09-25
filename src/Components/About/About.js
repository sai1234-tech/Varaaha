import React from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Leaf,
  Calendar,
  Building2,
  Sparkles
} from "lucide-react";
import Coal from "../../Assests/coal_hd.jpg";
import Gold from "../../Assests/gold_hd.jpg";
import "./About.css";

const milestones = [
  {
    year: "2012",
    title: "Company Founding",
    desc: "Established Varaaha Mines in Hyderabad, India, with a vision for modern, ethical mineral exploration.",
  },
  {
    year: "2016",
    title: "Gold Concession Acquisition",
    desc: "Secured high-grade gold mining leases equipped with zero-cyanide environmentally compliant leaching tech.",
  },
  {
    year: "2020",
    title: "Autonomous Drone Telemetry",
    desc: "Integrated AI-driven LiDAR drone mapping and real-time seismic sensors across all open-pit coal seams.",
  },
  {
    year: "2024",
    title: "ESG & Zero-Carbon Milestone",
    desc: "Achieved 100% closed-loop water treatment and initiated 500+ acres of native forest land rehabilitation.",
  },
];

const leadershipTeam = [
  {
    name: "Rajesh V. Sharma",
    role: "Chief Executive Officer & Founder",
    experience: "24+ Yrs Mining Engineering",
    bio: "Pioneered sustainable shaft excavation methods across South Asia and Europe.",
  },
  {
    name: "Dr. Ananya Reddy",
    role: "Chief Technical Officer",
    experience: "Ph.D. Hydro-Metallurgy",
    bio: "Spearheaded green gold leaching research & automated seismic blast protocols.",
  },
  {
    name: "Vikramaditya Verma",
    role: "VP of Operations & Safety",
    experience: "18+ Yrs Heavy Mining Ops",
    bio: "Maintained an industry-leading zero-accident record across 14 active concessions.",
  },
];

function About() {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>Enterprise Overview</span>
          </div>
          <h1>Pioneering Sustainable Wealth from the Earth</h1>
          <p className="about-hero-sub">
            Varaaha Mines is a premier mineral exploration & production enterprise, dedicated to responsible extraction of Gold, Coal, and key industrial minerals.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="about-container">
        {/* Story Section */}
        <section className="glass-panel story-section">
          <div className="story-grid">
            <div className="story-text">
              <h2>Our Heritage & Commitment</h2>
              <p>
                Founded on the core principle that resource extraction must coexist with ecological integrity, <strong>Varaaha Mines</strong> has transformed traditional mining operations into high-precision, technology-driven ecosystems.
              </p>
              <p>
                From underground gold vein excavation to large-scale surface coal mining, we utilize automated machinery, eco-friendly chemical separation, and continuous land restoration to ensure long-term value for investors and local communities alike.
              </p>

              <div className="story-highlights">
                <div className="highlight-box">
                  <span className="highlight-num">14+</span>
                  <span className="highlight-label">Active Mine Sites</span>
                </div>
                <div className="highlight-box">
                  <span className="highlight-num">2,500+</span>
                  <span className="highlight-label">Workforce & Engineers</span>
                </div>
                <div className="highlight-box">
                  <span className="highlight-num">100%</span>
                  <span className="highlight-label">ESG Regulatory Compliance</span>
                </div>
              </div>
            </div>

            <div className="story-media">
              <div className="media-card card-1">
                <img src={Gold} alt="Gold Ore Refining" />
                <span>Gold Extraction Facility</span>
              </div>
              <div className="media-card card-2">
                <img src={Coal} alt="Coal Seam Operation" />
                <span>Clean Coal Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars (Mission, Vision, Values, Safety) */}
        <section className="about-pillars">
          <div className="section-header center">
            <div className="section-kicker">
              <Award size={16} />
              <span>Foundational Values</span>
            </div>
            <h2>Built on Uncompromising Standards</h2>
          </div>

          <div className="pillars-grid">
            <div className="glass-panel pillar-card">
              <div className="pillar-icon-wrapper">
                <Target size={24} />
              </div>
              <h3>Mission</h3>
              <p>
                To extract Earth's essential minerals safely and efficiently while maintaining clean water, zero-harm environments, and sustainable community empowerment.
              </p>
            </div>

            <div className="glass-panel pillar-card">
              <div className="pillar-icon-wrapper">
                <Eye size={24} />
              </div>
              <h3>Vision</h3>
              <p>
                To set the global benchmark for carbon-neutral mining technology, AI-assisted exploration, and total site land rehabilitation.
              </p>
            </div>

            <div className="glass-panel pillar-card">
              <div className="pillar-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3>Values</h3>
              <p>
                Integrity in reporting, absolute transparency with stakeholders, zero tolerance for safety compromises, and relentless technical innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="timeline-section">
          <div className="section-header center">
            <div className="section-kicker">
              <Calendar size={16} />
              <span>Our Evolution</span>
            </div>
            <h2>Milestones & Growth Journey</h2>
          </div>

          <div className="timeline-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className="glass-panel timeline-card">
                <div className="timeline-year">{m.year}</div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Engineering Team */}
        <section className="leadership-section">
          <div className="section-header center">
            <div className="section-kicker">
              <Users size={16} />
              <span>Executive Leadership</span>
            </div>
            <h2>Engineers & Visionaries</h2>
          </div>

          <div className="leadership-grid">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="glass-panel leader-card">
                <div className="leader-avatar">
                  <Building2 size={32} />
                </div>
                <h3>{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <span className="leader-exp">{leader.experience}</span>
                <p className="leader-bio">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESG Sustainability Banner */}
        <section className="glass-panel esg-banner">
          <div className="esg-icon">
            <Leaf size={36} color="#10b981" />
          </div>
          <div className="esg-content">
            <h3>ESG & Environmental Commitment</h3>
            <p>
              We believe mining must heal the land it touches. Every active concession operates alongside an accredited reforestation program, returning mined land into thriving ecosystems.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;