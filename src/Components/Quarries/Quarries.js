import React from "react";
import { Link } from "react-router-dom";
import {
  Pickaxe,
  MapPin,
  Sparkles,
  Zap,
  ArrowRight,
  PhoneCall,
  Clock,
  CheckCircle
} from "lucide-react";
import BlackGalaxy from "../../Assests/black_galaxy.jpg";
import AbsoluteBlack from "../../Assests/absolute_black.jpg";
import VizagBlue from "../../Assests/vizag_blue.jpg";
import BellaryRed from "../../Assests/bellary_red.jpg";
import ChidaWhite from "../../Assests/chida_white.jpg";
import SteelGrey from "../../Assests/steel_grey.jpg";
import Blast from "../../Assests/blast_hd.jpg";
import "./Quarries.css";

const quarryStatesData = [
  {
    state: "Andhra Pradesh",
    code: "AP",
    quarryCount: "8 Active Pits",
    description: "Home to world-famous Black Galaxy, Black Pearl, Vizag Blue, River White, Surf Green, and Steel Grey quarries.",
    locations: [
      { name: "Chimakurthy Quarry", stone: "Black Galaxy", image: BlackGalaxy, specs: "High-density golden glitter broncite seams" },
      { name: "Visakhapatnam Quarry", stone: "Vizag Blue", image: VizagBlue, specs: "Exotic lavender blue & navy wave veining" },
      { name: "Prakasam Quarry", stone: "Steel Grey", image: SteelGrey, specs: "Medium slate grey with silver quartz flecks" }
    ]
  },
  {
    state: "Telangana",
    code: "TG",
    quarryCount: "4 Active Pits",
    description: "Deep-layer quarries producing ultra-dense Absolute Black, Tan Brown, and high-strength dark granites.",
    locations: [
      { name: "Khammam Quarry", stone: "Absolute Black", image: AbsoluteBlack, specs: "Pure jet-black uniform structural stone" }
    ]
  },
  {
    state: "Karnataka",
    code: "KA",
    quarryCount: "5 Active Pits",
    description: "Vibrant multi-color granite quarries including Bellary Red and luminous Chida White reserves.",
    locations: [
      { name: "Bellary Quarry", stone: "Bellary Red", image: BellaryRed, specs: "Rich crimson red stone with black crystal specks" },
      { name: "North Karnataka Quarry", stone: "Chida White", image: ChidaWhite, specs: "Creamy white stone with subtle charcoal stippling" }
    ]
  }
];

function Quarries() {
  return (
    <div className="quarries-page">
      {/* Quarries Hero Banner */}
      <section className="quarries-hero">
        <div className="quarries-hero-content">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>Direct Quarry Ownership & Mining Reserves</span>
          </div>
          <h1>Our Quarries & Mining Reserves</h1>
          <p>
            Varaaha Mines' main root of supply is its own quarries across Andhra Pradesh, Telangana, and Karnataka, guaranteeing uninterrupted supply of strategic natural materials for instant and wholesale global delivery.
          </p>
        </div>
      </section>

      {/* Main Quarries Overview Container */}
      <main className="quarries-container">
        {/* User Official Profile Copy Banner */}
        <section className="glass-panel quarry-intro-card">
          <div className="intro-badge-tag">
            <Pickaxe size={18} />
            <span>Multi-State Quarry Assets</span>
          </div>

          <h2>Strategic Quarry Network & Capacity</h2>

          <div className="quarry-intro-text">
            <p className="lead-paragraph">
              We have so many quarries across all over <strong>Andhra Pradesh, Telangana, and Karnataka States</strong>, producing different coloured granites of international export quality.
            </p>
            <p>
              We have the ability to extract the maximum quantity of our regular requirements from our <strong>well-developed and accessible pits</strong> situated in different provinces of the states. They are our true assets in all respects.
            </p>
            <p>
              All of our mines are well equipped with the <strong>latest and most required techniques of mining and operation</strong>. We can deliver demands of any quantity without any problem. We have enough resources and facilities for large-scale quarrying for <strong>instant and wholesale delivery</strong>.
            </p>
          </div>

          <div className="quarry-stats-grid">
            <div className="q-stat-item">
              <span className="q-stat-num">3 States</span>
              <span className="q-stat-lbl">AP, Telangana & Karnataka</span>
            </div>
            <div className="q-stat-item">
              <span className="q-stat-num">100% Own</span>
              <span className="q-stat-lbl">Direct Quarry Control</span>
            </div>
            <div className="q-stat-item">
              <span className="q-stat-num">Wholesale</span>
              <span className="q-stat-lbl">Instant Bulk Capacity</span>
            </div>
          </div>
        </section>

        {/* State-by-State Quarry Network */}
        <section className="section-container">
          <div className="section-header center">
            <div className="section-kicker">
              <MapPin size={16} />
              <span>Regional Distribution</span>
            </div>
            <h2>Quarry Reserves Across India</h2>
            <p className="section-desc">
              Explore our strategic quarry pits operating with Swedish Sandvik drilling equipment and heavy earth moving machinery.
            </p>
          </div>

          <div className="state-cards-grid">
            {quarryStatesData.map((stateItem) => (
              <div key={stateItem.state} className="glass-panel state-quarry-card">
                <div className="state-card-header">
                  <div className="state-badge">{stateItem.code}</div>
                  <div>
                    <h3>{stateItem.state} Quarries</h3>
                    <span className="pit-count">{stateItem.quarryCount}</span>
                  </div>
                </div>

                <p className="state-desc">{stateItem.description}</p>

                <div className="location-pits-list">
                  {stateItem.locations.map((loc, idx) => (
                    <div key={idx} className="pit-item">
                      <div className="pit-img">
                        <img src={loc.image} alt={loc.name} />
                      </div>
                      <div className="pit-details">
                        <h4>{loc.name}</h4>
                        <span className="stone-type">{loc.stone}</span>
                        <p className="pit-specs">{loc.specs}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extraction Facilities Banner */}
        <section className="glass-panel machinery-banner">
          <div className="machinery-grid">
            <div className="machinery-text">
              <div className="section-kicker">
                <Zap size={16} />
                <span>Heavy Extraction Infrastructure</span>
              </div>
              <h2>Advanced Quarrying Technology</h2>
              <p>
                Our mines deploy imported <strong>Swedish Sandvik drill rods</strong>, high-pressure compressors, Poclains, Tamrock equipment, Escorts cranes, Derrick cranes, and heavy-duty dumpers.
              </p>
              <ul className="machinery-checklist">
                <li><CheckCircle size={16} className="chk-icon" /> Diamond Wire Rope Saws for crack-free cuboid block dressing</li>
                <li><CheckCircle size={16} className="chk-icon" /> High-volume extraction capability for rapid container fulfillment</li>
                <li><CheckCircle size={16} className="chk-icon" /> Continuous year-round operations with zero supply disruption</li>
              </ul>
            </div>

            <div className="machinery-image">
              <img src={Blast} alt="Heavy Earth Moving Machinery at Varaaha Mine Site" />
              <div className="img-overlay-label">
                <span>HEMM & Wire Saw Extraction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Working Hours Info Box */}
        <section className="glass-panel contact-hours-bar">
          <div className="hours-col">
            <div className="hours-icon-box">
              <PhoneCall size={26} />
            </div>
            <div>
              <span className="h-label">Direct Trade Desk</span>
              <h3>24/7 Free Call Us</h3>
              <a href="tel:8184980777" className="phone-link">+91 81849 80777</a>
            </div>
          </div>

          <div className="hours-divider" />

          <div className="hours-col">
            <div className="hours-icon-box blue">
              <Clock size={26} />
            </div>
            <div>
              <span className="h-label">Office & Dispatch Hours</span>
              <h3>Working Hours</h3>
              <p className="hours-time">Mon to Fri: <strong>10.00 AM - 06.00 PM</strong></p>
            </div>
          </div>

          <div className="hours-action">
            <Link to="/contact" className="btn-primary">
              <span>Send Inquiry</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Quarries;
