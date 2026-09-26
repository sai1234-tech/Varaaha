import React from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Calendar,
  Building2,
  Sparkles,
  Trophy,
  Globe,
  Cpu,
  Layers
} from "lucide-react";
import Gold from "../../Assests/gold_hd.jpg";
import BlackGalaxy from "../../Assests/black_galaxy.jpg";
import "./About.css";

const milestones = [
  {
    year: "May 9, 1989",
    title: "Establishment as 100% EOU",
    desc: "Founded by Mr. G.V. Pratap Reddy in Hyderabad as a 100% Export Oriented Unit (EOU) dedicated to natural stone extraction and global exports.",
  },
  {
    year: "1990 - 1991",
    title: "National Export Achievement Award",
    desc: "Managing Director Mr. G.V. Pratap Reddy received the prestigious Export Achievement Award from the Minister of Commerce, Govt. of India.",
  },
  {
    year: "Strategic Expansion",
    title: "Group Export Acquisitions",
    desc: "M/S Varaaha Minerals Pvt Ltd expanded its international presence by acquiring two major export firms: M/S Dinesh Granite Exports and Veera Siva Granites & Exports Pvt Ltd.",
  },
  {
    year: "Modern Infrastructure",
    title: "Swedish Tech & Heavy Machinery",
    desc: "Equipped operations with imported Sandvik (Sweden) drilling components, Tamrock, Poclains, Escorts & Derrick cranes, and advanced gangsaw polishing units.",
  },
];

const leadershipTeam = [
  {
    name: "Mr. G.V. Pratap Reddy",
    role: "Founder & Managing Director",
    experience: "Promoter & Visionary (Est. 1989)",
    bio: "Honored with the Export Achievement Award (1990-1991) by the Minister of Commerce, Govt. of India. Built Varaaha Mines into a premier 100% EOU natural stone exporter.",
  },
  {
    name: "Corporate Executive Board",
    role: "Global Export & Quarry Division",
    experience: "Integrated Group Operations",
    bio: "Managing direct quarry extraction and international trade across Varaaha Mines, M/S Dinesh Granite Exports, and Veera Siva Granites & Exports Pvt Ltd.",
  }
];

function About() {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>100% Export Oriented Unit (EOU) • Est. May 9th, 1989</span>
          </div>
          <h1>Our Company Profile & Heritage</h1>
          <p className="about-hero-sub">
            M/S Varaaha Mines Pvt Ltd is one of India's fastest-growing natural stone suppliers and exporters, delivering world-class Black Granite, Black Galaxy, Srikakulam Blue, Tan Brown, Sandstone, Limestone, and Slate Stone to global buyers.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="about-container">
        {/* Core Company Profile Card */}
        <section className="glass-panel profile-banner-card">
          <div className="profile-badge-row">
            <span className="p-badge"><Trophy size={16} /> Award-Winning Exporter</span>
            <span className="p-badge"><Globe size={16} /> 100% EOU Certified</span>
            <span className="p-badge"><Cpu size={16} /> Swedish Sandvik Technology</span>
          </div>

          <h2>About M/S Varaaha Mines Pvt Ltd.</h2>
          
          <div className="profile-body-text">
            <p className="lead-text">
              <strong>M/S Varaaha Mines Pvt Ltd</strong> was established on <strong>May 9th, 1989</strong> as a <strong>100% Export Oriented Unit (EOU)</strong>. The company was promoted by <strong>Mr. G.V. Pratap Reddy</strong> with an objective of conducting the business of mining, excavating, extracting, raising, purifying, and cleaning all types of Granites, Marble Sands, Stones, Ores, and minerals to cut, shape, size, polish, grind, sandblast, and make slabs for export worldwide.
            </p>
            <p>
              Operating from its corporate headquarters in <strong>Hyderabad, India</strong>, the company was built on the motto of providing world-class Indian natural stones at competitive prices throughout the global market. <strong>M/S Varaaha Minerals Pvt Ltd</strong> is recognized as one of the fastest-growing organizations in the natural stone sector.
            </p>
          </div>

          {/* National Award Highlight */}
          <div className="award-highlight-box">
            <div className="award-icon-box">
              <Trophy size={32} />
            </div>
            <div className="award-details">
              <h4>National Export Achievement Award Winner</h4>
              <p>
                Managing Director <strong>Mr. G.V. Pratap Reddy</strong> received the prestigious <strong>Export Achievement Award</strong> from the <strong>Minister of Commerce, Govt. of India (1990-1991)</strong> in recognition of outstanding export performance.
              </p>
            </div>
          </div>
        </section>

        {/* Heavy Equipment & Infrastructure Profile */}
        <section className="glass-panel story-section">
          <div className="story-grid">
            <div className="story-text">
              <h2>World-Class Infrastructure & Swedish Tech</h2>
              <p>
                We have acquired sophisticated imported polishing machines for finishing our granite slabs to international perfection. Our operations deploy state-of-the-art imported <strong>Heavy Earth Moving Machines (HEMM)</strong> including Poclains, Tamrock equipment, Escorts cranes, Derrick cranes, and heavy dumpers.
              </p>
              <p>
                Our drilling rods and precision rock-cutting components are directly imported from <strong>Sandvik</strong>, Sweden's world-leading engineering group. This guarantees high precision, crack-free cuboid slab extraction, and unmatched structural durability.
              </p>

              <div className="story-highlights">
                <div className="highlight-box">
                  <span className="highlight-num">1989</span>
                  <span className="highlight-label">Year Established</span>
                </div>
                <div className="highlight-box">
                  <span className="highlight-num">3 Group</span>
                  <span className="highlight-label">Export Companies</span>
                </div>
                <div className="highlight-box">
                  <span className="highlight-num">Sandvik</span>
                  <span className="highlight-label">Swedish Tools</span>
                </div>
              </div>
            </div>

            <div className="story-media">
              <div className="media-card card-1">
                <img src={BlackGalaxy} alt="Black Galaxy Granite Slabs" />
                <span>Black Galaxy & Premium Slabs</span>
              </div>
              <div className="media-card card-2">
                <img src={Gold} alt="Heavy Extraction Site" />
                <span>HEMM Heavy Machinery Site</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sister Companies / Acquisitions Showcase */}
        <section className="glass-panel acquisitions-card">
          <div className="section-header">
            <div className="section-kicker">
              <Layers size={16} />
              <span>Group Enterprise Expansion</span>
            </div>
            <h2>Export Companies & Group Sister Concerns</h2>
            <p className="section-desc">
              To cater to specific client demands worldwide, M/S Varaaha Minerals Pvt Ltd acquired two reputed export companies:
            </p>
          </div>

          <div className="acquisitions-grid">
            <div className="acq-item">
              <Building2 size={24} className="acq-icon" />
              <div>
                <h4>M/S Dinesh Granite Exports</h4>
                <p>Specialized processing and export of dimensional granite gangsaw slabs.</p>
              </div>
            </div>
            <div className="acq-item">
              <Building2 size={24} className="acq-icon" />
              <div>
                <h4>Veera Siva Granites & Exports Pvt Ltd</h4>
                <p>Direct quarry management and heavy block extraction for global projects.</p>
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
                To offer natural dimensional building stones and stone carving products of international quality within stipulated timeframes at competitive global prices.
              </p>
            </div>

            <div className="glass-panel pillar-card">
              <div className="pillar-icon-wrapper">
                <Eye size={24} />
              </div>
              <h3>Vision</h3>
              <p>
                To maintain our position as one of India's most trusted natural stone exporters by combining Swedish extraction technology with direct quarry ownership.
              </p>
            </div>

            <div className="glass-panel pillar-card">
              <div className="pillar-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3>Values</h3>
              <p>
                Absolute integrity, zero-crack block dressing, environmental responsibility, and long-term client trust across global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="timeline-section">
          <div className="section-header center">
            <div className="section-kicker">
              <Calendar size={16} />
              <span>Our Legacy & Milestones</span>
            </div>
            <h2>35+ Years of Export Excellence</h2>
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

        {/* Leadership & Founders */}
        <section className="leadership-section">
          <div className="section-header center">
            <div className="section-kicker">
              <Users size={16} />
              <span>Leadership & Promoters</span>
            </div>
            <h2>Promoters & Management</h2>
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
      </div>
    </div>
  );
}

export default About;