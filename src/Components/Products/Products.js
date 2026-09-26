import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  X,
  CheckCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Building2,
  Award
} from "lucide-react";
import BlackGalaxy from "../../Assests/black_galaxy.jpg";
import AbsoluteBlack from "../../Assests/absolute_black.jpg";
import BlackPearl from "../../Assests/black_pearl.jpg";
import VizagBlue from "../../Assests/vizag_blue.jpg";
import ChidaWhite from "../../Assests/chida_white.jpg";
import RiverWhite from "../../Assests/river_white.jpg";
import BellaryRed from "../../Assests/bellary_red.jpg";
import SurfGreen from "../../Assests/surf_green.jpg";
import SteelGrey from "../../Assests/steel_grey.jpg";
import "./Products.css";

const productsData = [
  {
    id: "black-galaxy",
    name: "Black Galaxy",
    category: "Dark & Black",
    origin: "Chimakurthy, Andhra Pradesh",
    image: BlackGalaxy,
    shortDesc: "World-renowned deep black granite featuring glittering metallic copper and bronze mineral specks.",
    fullDesc: "Black Galaxy granite is one of the most famous and sought-after natural stones globally. Quarried in Andhra Pradesh, it features a rich black background embedded with sparkling broncite crystals that shimmer under light.",
    specs: {
      density: "2.96 g/cm³",
      waterAbsorption: "0.04%",
      compressiveStrength: "218 MPa",
      flexuralStrength: "18.5 MPa",
      hardness: "6.5 Mohs"
    },
    finishes: ["Polished", "Honed", "Leathered", "Flamed"],
    applications: ["Countertops", "High-Traffic Flooring", "Wall Cladding", "Executive Desks"]
  },
  {
    id: "absolute-black",
    name: "Absolute Black",
    category: "Dark & Black",
    origin: "Khammam, Telangana",
    image: AbsoluteBlack,
    shortDesc: "Ultra-dense, pure jet-black granite with consistent texture and rich deep polish.",
    fullDesc: "Absolute Black is a solid dark granite stone known for its uniform color and minimal variation. Highly preferred for minimalist modern architecture, luxury countertops, and heavy-duty commercial flooring.",
    specs: {
      density: "3.01 g/cm³",
      waterAbsorption: "0.02%",
      compressiveStrength: "245 MPa",
      flexuralStrength: "21.0 MPa",
      hardness: "7.0 Mohs"
    },
    finishes: ["Mirror Polished", "Honed", "Bush-Hammered", "Leathered"],
    applications: ["Luxury Kitchen Islands", "Facade Panels", "Monuments", "Architectural Steps"]
  },
  {
    id: "black-pearl",
    name: "Black Pearl",
    category: "Dark & Black",
    origin: "Ongole, Andhra Pradesh",
    image: BlackPearl,
    shortDesc: "Charcoal black granite filled with subtle silver, graphite, and metallic grey crystalline speckles.",
    fullDesc: "Black Pearl granite combines deep black and semi-dark charcoal shades with metallic flecks of silver and grey. It offers a semi-solid dark aesthetic with sophisticated mineral variation.",
    specs: {
      density: "2.92 g/cm³",
      waterAbsorption: "0.05%",
      compressiveStrength: "205 MPa",
      flexuralStrength: "16.8 MPa",
      hardness: "6.5 Mohs"
    },
    finishes: ["Polished", "Satin Leathered", "Flamed", "Honed"],
    applications: ["Residential Flooring", "Kitchen Counters", "Bath Vanities", "Outdoor Paving"]
  },
  {
    id: "vizag-blue",
    name: "Vizag Blue",
    category: "Blue & Green",
    origin: "Visakhapatnam, Andhra Pradesh",
    image: VizagBlue,
    shortDesc: "Exotic lavender blue granite featuring dynamic wavy navy patterns and rich grey veining.",
    fullDesc: "Vizag Blue is a prized natural granite boasting a captivating blend of deep blue, lavender-grey, and navy veining. Its oceanic wave movement makes each slab a unique piece of natural art.",
    specs: {
      density: "2.84 g/cm³",
      waterAbsorption: "0.08%",
      compressiveStrength: "192 MPa",
      flexuralStrength: "15.2 MPa",
      hardness: "6.0 Mohs"
    },
    finishes: ["High Polish", "Honed", "Lapato"],
    applications: ["Feature Accent Walls", "Hotel Lobbies", "Bar Tops", "Custom Furniture"]
  },
  {
    id: "chida-white",
    name: "Chida White",
    category: "White & Grey",
    origin: "North Karnataka / AP Border",
    image: ChidaWhite,
    shortDesc: "Soft off-white cream granite decorated with delicate charcoal micro-stippling and silver crystals.",
    fullDesc: "Chida White offers a clean, bright, and contemporary aesthetic. Its uniform light backdrop with tiny dark mineral clusters brings warmth and spatial luminosity to any interior or exterior space.",
    specs: {
      density: "2.68 g/cm³",
      waterAbsorption: "0.12%",
      compressiveStrength: "178 MPa",
      flexuralStrength: "14.1 MPa",
      hardness: "6.0 Mohs"
    },
    finishes: ["Polished", "Honed", "Shot-Blasted"],
    applications: ["Commercial Flooring", "Wall Coverings", "Bathroom Vanities", "Staircases"]
  },
  {
    id: "river-white",
    name: "River White",
    category: "White & Grey",
    origin: "Guntur, Andhra Pradesh",
    image: RiverWhite,
    shortDesc: "Elegant white granite with sweeping grey river-like veins and deep burgundy garnet mineral spots.",
    fullDesc: "River White granite features low-variance white and grey canvas with gentle flowing linear veins and striking deep red garnet dots. Ideal for creating airy, spacious luxury environments.",
    specs: {
      density: "2.71 g/cm³",
      waterAbsorption: "0.10%",
      compressiveStrength: "185 MPa",
      flexuralStrength: "14.8 MPa",
      hardness: "6.5 Mohs"
    },
    finishes: ["Polished", "Honed", "Leathered"],
    applications: ["Waterfall Islands", "Residential Interiors", "Cladding Slabs", "Tabletops"]
  },
  {
    id: "bellary-red",
    name: "Bellary Red",
    category: "Exotic & Red",
    origin: "Bellary, Karnataka",
    image: BellaryRed,
    shortDesc: "Striking ruby red granite embedded with rich crimson highlights and black crystalline mineral veins.",
    fullDesc: "Bellary Red is a vibrant granite featuring intense red hues balanced by dark brown and black mineral clusters. Highly valued for prestigious heritage buildings, monuments, and statement architecture.",
    specs: {
      density: "2.88 g/cm³",
      waterAbsorption: "0.06%",
      compressiveStrength: "210 MPa",
      flexuralStrength: "17.5 MPa",
      hardness: "6.5 Mohs"
    },
    finishes: ["Polished", "Flamed", "Bush-Hammered"],
    applications: ["Monumental Masonry", "Building Facades", "Paving Slabs", "Decorative Columns"]
  },
  {
    id: "surf-green",
    name: "Surf Green",
    category: "Blue & Green",
    origin: "Kuppam, Andhra Pradesh",
    image: SurfGreen,
    shortDesc: "Refreshing mint seafoam green granite with subtle grey waves and translucent mineral highlights.",
    fullDesc: "Surf Green granite brings a soothing, organic green palette inspired by ocean foam. Its unique pastel green hue and weather-resistant durability make it a standout choice for eco-conscious designs.",
    specs: {
      density: "2.76 g/cm³",
      waterAbsorption: "0.09%",
      compressiveStrength: "188 MPa",
      flexuralStrength: "15.0 MPa",
      hardness: "6.0 Mohs"
    },
    finishes: ["Polished", "Honed", "Flamed"],
    applications: ["Spa & Wellness Centers", "Landscape Paving", "Exterior Panels", "Pool Surrounds"]
  },
  {
    id: "steel-grey",
    name: "Steel Grey",
    category: "White & Grey",
    origin: "Prakasam, Andhra Pradesh",
    image: SteelGrey,
    shortDesc: "Contemporary slate-grey granite with crystalline silver and dark grey quartz flecks.",
    fullDesc: "Steel Grey granite is a versatile, durable mid-to-dark grey natural stone. Its neutral tone, stain resistance, and high structural integrity make it one of the most popular granite choices for global construction projects.",
    specs: {
      density: "2.89 g/cm³",
      waterAbsorption: "0.05%",
      compressiveStrength: "202 MPa",
      flexuralStrength: "16.4 MPa",
      hardness: "6.5 Mohs"
    },
    finishes: ["Polished", "Leathered", "Lapatto", "Flamed"],
    applications: ["Commercial Plaza Flooring", "Kitchen Worktops", "Lift Walls", "Exterior Facades"]
  }
];

const categories = ["All Products", "Dark & Black", "Blue & Green", "White & Grey", "Exotic & Red"];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Products Hero Banner */}
      <section className="products-hero">
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>Direct Quarry Premium Slabs</span>
          </div>
          <h1>Our Signature Granite Products</h1>
          <p>
            Varaaha Mines operates top-tier granite quarry concessions across South India. Explore our range of premium processed granite slabs, blocks, and customized architectural cuts.
          </p>
          <div className="hero-stats-row">
            <div className="hero-stat-box">
              <Award size={20} className="stat-icon" />
              <div>
                <strong>9 Signature Varieties</strong>
                <span>Direct Quarry Output</span>
              </div>
            </div>
            <div className="hero-stat-box">
              <Building2 size={20} className="stat-icon" />
              <div>
                <strong>Export Grade Slabs</strong>
                <span>Global Shipping Ready</span>
              </div>
            </div>
            <div className="hero-stat-box">
              <ShieldCheck size={20} className="stat-icon" />
              <div>
                <strong>ISO 9001 Certified</strong>
                <span>Quality Tested & Graded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Catalogue Section */}
      <main className="products-container">
        {/* Controls Bar: Filter Tabs & Search */}
        <div className="products-controls-bar">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search granite by name or origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery("")}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="catalogue-info-row">
          <p className="results-text">
            Showing <strong>{filteredProducts.length}</strong> of {productsData.length} Granite Varieties
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-panel product-card"
              onClick={() => setActiveModalProduct(product)}
            >
              <div className="product-image-box">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-category-tag">{product.category}</div>
                <div className="image-hover-overlay">
                  <span>View Technical Specs</span>
                </div>
              </div>

              <div className="product-card-body">
                <div className="product-header">
                  <h3>{product.name}</h3>
                  <span className="product-origin">{product.origin}</span>
                </div>

                <p className="product-desc">{product.shortDesc}</p>

                <div className="product-finishes-chips">
                  {product.finishes.slice(0, 3).map((finish, idx) => (
                    <span key={idx} className="finish-chip">
                      {finish}
                    </span>
                  ))}
                  {product.finishes.length > 3 && (
                    <span className="finish-chip more">+{product.finishes.length - 3}</span>
                  )}
                </div>

                <div className="product-card-footer">
                  <div className="quick-spec">
                    <span className="spec-label">Density:</span>
                    <span className="spec-val">{product.specs.density}</span>
                  </div>
                  <button
                    className="btn-details"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProduct(product);
                    }}
                  >
                    <span>Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Technical Spec Modal */}
        {activeModalProduct && (
          <div className="modal-backdrop" onClick={() => setActiveModalProduct(null)}>
            <div className="glass-panel product-modal animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProduct(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div className="modal-grid">
                <div className="modal-image-col">
                  <img src={activeModalProduct.image} alt={activeModalProduct.name} />
                  <div className="modal-image-caption">
                    <span>Authentic Granite Slab Texture</span>
                  </div>
                </div>

                <div className="modal-content-col">
                  <span className="modal-cat-badge">{activeModalProduct.category}</span>
                  <h2>{activeModalProduct.name}</h2>
                  <p className="modal-origin-text">
                    <strong>Quarry Origin:</strong> {activeModalProduct.origin}
                  </p>

                  <p className="modal-full-desc">{activeModalProduct.fullDesc}</p>

                  <div className="modal-section-box">
                    <h4>Technical Material Specifications</h4>
                    <div className="specs-grid">
                      {Object.entries(activeModalProduct.specs).map(([key, val]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-name">{key.replace(/([A-Z])/g, " $1")}</span>
                          <span className="spec-value">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-section-box">
                    <h4>Available Surface Finishes</h4>
                    <div className="finishes-list">
                      {activeModalProduct.finishes.map((f, i) => (
                        <span key={i} className="modal-finish-pill">
                          <CheckCircle size={14} className="check-icon" />
                          <span>{f}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-section-box">
                    <h4>Recommended Applications</h4>
                    <ul className="apps-list">
                      {activeModalProduct.applications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-action-row">
                    <Link
                      to="/contact"
                      className="btn-primary modal-cta-btn"
                      onClick={() => setActiveModalProduct(null)}
                    >
                      <PhoneCall size={18} />
                      <span>Inquire Bulk Order / Quotation</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Bulk Order CTA Banner */}
        <section className="glass-panel bulk-order-cta">
          <div className="cta-content">
            <h3>Need Custom Sizing, Gangsaw Slabs, or Cut-to-Size Blocks?</h3>
            <p>
              Varaaha Mines provides direct quarry supply, customized gangsaw slab cutting, export packing, and international freight containerization.
            </p>
          </div>
          <Link to="/contact" className="btn-primary cta-btn">
            <span>Contact Commercial Trade Desk</span>
            <ArrowRight size={18} />
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Products;
