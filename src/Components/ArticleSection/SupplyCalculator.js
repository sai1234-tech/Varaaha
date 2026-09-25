import React, { useState } from "react";
import { Calculator, Truck, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import "./SupplyCalculator.css";

function SupplyCalculator() {
  const [commodity, setCommodity] = useState("coal-thermal");
  const [volume, setVolume] = useState(2500);
  const [delivery, setDelivery] = useState("rail");

  // Calculate realistic estimates based on inputs
  const calculateEstimates = () => {
    let timelineDays = 5;
    let esgScore = "A+ (98/100)";
    let co2Offset = (volume * 0.42).toFixed(1);
    let purity = "Standard Industry Grade";

    if (commodity === "coal-thermal") {
      timelineDays = Math.ceil(volume / 1000) + 3;
      purity = "5,800 kcal/kg (Low Sulfur)";
    } else if (commodity === "coal-coking") {
      timelineDays = Math.ceil(volume / 800) + 4;
      purity = "Prime Hard Coking Coal (CSR > 65)";
    } else if (commodity === "gold-bullion") {
      timelineDays = volume > 500 ? 5 : 2;
      purity = "99.99% Fine Gold (LBMA Standard)";
      co2Offset = (volume * 0.05).toFixed(1);
    } else if (commodity === "gold-ore") {
      timelineDays = Math.ceil(volume / 500) + 3;
      purity = "14.5 g/t High-Grade Vein Ore";
    }

    if (delivery === "port") timelineDays += 2;
    if (delivery === "air") timelineDays = Math.max(1, timelineDays - 2);

    return { timelineDays, esgScore, co2Offset, purity };
  };

  const est = calculateEstimates();

  return (
    <section className="calculator-section">
      <div className="glass-panel calculator-card">
        <div className="calc-header">
          <div className="section-kicker">
            <Calculator size={16} />
            <span>Interactive Supply Estimator</span>
          </div>
          <h2>Estimate Logistics & Delivery Feasibility</h2>
          <p>
            Configure your required mineral volume and logistics preferences to instantly estimate delivery timelines and ESG compliance ratings.
          </p>
        </div>

        <div className="calc-body-grid">
          {/* Controls Column */}
          <div className="calc-controls">
            <div className="control-group">
              <label htmlFor="commodity-select">Select Target Commodity</label>
              <select
                id="commodity-select"
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
              >
                <option value="coal-thermal">Thermal Coal (Power Grids)</option>
                <option value="coal-coking">Prime Hard Coking Coal (Steel Plants)</option>
                <option value="gold-bullion">99.99% Refined Gold Bullion Bars</option>
                <option value="gold-ore">High-Grade Raw Gold Ore Concentrate</option>
              </select>
            </div>

            <div className="control-group">
              <div className="label-with-val">
                <label>Order Volume ({commodity.includes("gold") ? "Kg / MT" : "Metric Tons"})</label>
                <span className="slider-val">{volume.toLocaleString()} {commodity.includes("gold") ? "Units" : "MT"}</span>
              </div>
              <input
                type="range"
                min={commodity.includes("gold") ? 10 : 500}
                max={commodity.includes("gold") ? 2000 : 25000}
                step={commodity.includes("gold") ? 10 : 500}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="range-slider"
              />
            </div>

            <div className="control-group">
              <label>Preferred Delivery Logistics</label>
              <div className="radio-pills">
                <button
                  className={`pill-btn ${delivery === "rail" ? "active" : ""}`}
                  onClick={() => setDelivery("rail")}
                >
                  Dedicated Rail Freight
                </button>
                <button
                  className={`pill-btn ${delivery === "port" ? "active" : ""}`}
                  onClick={() => setDelivery("port")}
                >
                  Port Direct Vessel
                </button>
                <button
                  className={`pill-btn ${delivery === "air" ? "active" : ""}`}
                  onClick={() => setDelivery("air")}
                >
                  Secure Air Transit
                </button>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="calc-results-box">
            <h4>Estimated Feasibility Summary</h4>

            <div className="result-metric-card">
              <Clock className="result-icon gold" />
              <div>
                <span className="res-label">Est. Dispatch & Delivery</span>
                <span className="res-value">{est.timelineDays} Business Days</span>
              </div>
            </div>

            <div className="result-metric-card">
              <ShieldCheck className="result-icon emerald" />
              <div>
                <span className="res-label">Quality & Grade Assurance</span>
                <span className="res-value">{est.purity}</span>
              </div>
            </div>

            <div className="result-metric-card">
              <Truck className="result-icon copper" />
              <div>
                <span className="res-label">ESG Carbon Intensity</span>
                <span className="res-value">{est.co2Offset} MT CO₂e (RO Treatment Included)</span>
              </div>
            </div>

            <a
              href={`/contact?subject=${encodeURIComponent(commodity)}&volume=${volume}`}
              className="btn-primary calc-cta-btn"
            >
              <span>Submit Estimate for Official Tender</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupplyCalculator;
