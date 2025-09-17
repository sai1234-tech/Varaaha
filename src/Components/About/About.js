import React from 'react'
import './About.css'
function About() {
  return (
    <div>
         <section className="about" id="about">
      <h2>About Us SAIKIRAN</h2>
      <p>
        Varaaha Mines is dedicated to responsible mining of Gold, Coal, and
        other valuable minerals. Our mission is to extract resources
        sustainably while empowering local communities.
      </p>
      <div className="about-cards">
        <div className="card">Mission: Safe & Responsible Mining</div>
        <div className="card">Vision: Sustainable Future</div>
        <div className="card">Values: Trust, Integrity, Growth</div>
      </div>
    </section>
    </div>
  )
}

export default About