import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldAlert, Award, Compass, Zap, Play, Pause } from "lucide-react";
import Coal from "../../Assests/coal_hd.jpg";
import Gold from "../../Assests/gold_hd.jpg";
import Blast from "../../Assests/blast_hd.jpg";
import "./Hero.css";

const heroSlides = [
  {
    id: 1,
    image: Gold,
    tag: "Precious Metals & Refining",
    title: "Pioneering Sustainable Gold Extraction",
    description:
      "Varaaha Mines leverages AI-driven geological surveying and zero-cyanide leaching technologies to deliver world-class purity while safeguarding surrounding ecosystems.",
    statNumber: "3,500+",
    statLabel: "Metric Tons Annual Capacity",
  },
  {
    id: 2,
    image: Coal,
    tag: "Clean Energy Coal Supply",
    title: "High-Calorific Clean Surface Mining",
    description:
      "Modern open-pit operations supplying crucial energy sector demands with active land rehabilitation and real-time dust suppression arrays.",
    statNumber: "70%",
    statLabel: "Surface Extraction Efficiency",
  },
  {
    id: 3,
    image: Blast,
    tag: "Advanced Engineering & Safety",
    title: "Precision Drilling & Controlled Blasting",
    description:
      "State-of-the-art seismic monitoring and autonomous blast engineering ensuring zero structural impact and maximal safety standard compliance.",
    statNumber: "99.8%",
    statLabel: "Workplace Safety Metric",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="hero-container">
      {/* Background Image Carousel Slider */}
      <div className="hero-slider-bg">
        {heroSlides.map((s, idx) => (
          <div
            key={s.id}
            className={`slide-bg-item ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero-overlay-gradient" />
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-left-content animate-fade-in" key={slide.id}>
          {/* Tagline Badge */}
          <div className="hero-badge">
            <Zap size={15} className="badge-icon" />
            <span>{slide.tag}</span>
          </div>

          <h1 className="hero-headline">
            {slide.title.split(" ").map((word, i) =>
              i % 3 === 2 ? (
                <span key={i} className="gold-gradient-text">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>

          <p className="hero-subtext">{slide.description}</p>

          <div className="hero-action-buttons">
            <a href="#article-details" className="btn-primary">
              <span>Explore Operations</span>
              <ArrowRight size={18} />
            </a>
            <a href="/contact" className="btn-secondary">
              <Compass size={18} />
              <span>Investor Portal</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stat-card">
            <div className="stat-value">{slide.statNumber}</div>
            <div className="stat-label">{slide.statLabel}</div>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="hero-controls">
          <button
            className="play-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause slide rotation" : "Play slide rotation"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <div className="slide-indicators">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`indicator-dot ${idx === currentSlide ? "active" : ""}`}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsPlaying(false);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust Highlight Cards Footer inside Hero */}
      <div className="hero-trust-bar">
        <div className="trust-item">
          <ShieldAlert className="trust-icon" />
          <div>
            <strong>Zero-Harm Safety</strong>
            <p>Automated hazard prevention</p>
          </div>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Award className="trust-icon" />
          <div>
            <strong>Global Standards</strong>
            <p>ISO & ESG Environment Compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;