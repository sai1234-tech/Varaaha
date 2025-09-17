import React from "react";
// import TwitterIcon from "../../Assests/Twitter.png";
import Coal from "../../Assests/coal.jpeg";
import Goald from "../../Assests/goald.jpeg";
import blast from "../../Assests/blast.jpeg";
import Announcement from "../../Assests/announcemnts.jpg";
import "./ArticleSection.css";
function ArticleSection() {
  return (
    <>
     
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Coal} className="d-block w-100" alt="Coal" />
    </div>
    <div className="carousel-item">
      <img src={Goald} className="d-block w-100" alt="Gold" />
    </div>
    <div className="carousel-item">
      <img src={blast} className="d-block w-100" alt="Blast" />
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  {/* Announcements Section */}
      <div className="Announcements_section">
        <div className="left_section">
          <img src={Announcement} alt="Announcement" />
        </div>
        <div className="right_section">
          <div>
            <span>
              We have enriched the OneMine.org knowledge base with 2009 - 2019 RETC Proceedings & 2008 - 2018 NAT Proceedings.
            </span>
          </div>
          <div className="right_section_para">
            As a global collection of mining-based research, OneMine.org is a collaborative effort among multiple societies to gather the world's leading technical information about mining, minerals, and underground construction.
            <br /><br />
            Members of participating societies can view, download, and print documents at no charge. Not a member? You can purchase papers individually.
            <br /><br />
            This comprehensive database includes:
            <ul>
              <li>Technical Documents</li>
              <li>Conference Papers, including late papers</li>
              <li>Articles & Preprints</li>
              <li>Presentations & Case Studies</li>
            </ul>

          </div>
        </div>
        </div>


        <div className="data_section">
          <h3>Recent Mining Trends & Data</h3>
            <ul>
              <li><strong>Gold Production:</strong> In 2023, global gold production reached approximately 3,500 tons, with significant contributions from China, Australia, and Russia.</li>
              <li><strong>Coal Mining:</strong> Surface coal mining remains the most common extraction method, accounting for nearly 70% of total coal production worldwide.</li>
              <li><strong>Technological Innovation:</strong> Advanced sensors, drones, and AI-driven data analytics are improving mining efficiency and safety.</li>
              <li><strong>Environmental Sustainability:</strong> Mining companies are adopting renewable energy, water recycling, and land rehabilitation practices to reduce environmental impact.</li>
              <li><strong>Safety Measures:</strong> Real-time monitoring systems and automated machinery reduce workplace accidents by up to 40% in modern mines.</li>
            </ul>

            <h3>Our Expertise</h3>
            <p>
              Varaaha Mines specializes in sustainable extraction methods, ensuring minimal environmental impact while maximizing productivity. We implement cutting-edge technology in all stages of mining, from exploration to processing, ensuring compliance with global standards.
            </p>
        </div>
      

<div className="data_section">
        <h3>Mining Techniques</h3>
        <ul>
          <li><strong>Open-Pit Mining:</strong> Large-scale surface mining for coal, copper, and gold.</li>
          <li><strong>Underground Mining:</strong> Deep shaft mining for precious metals and minerals.</li>
          <li><strong>Placer Mining:</strong> Using water to extract minerals like gold from riverbeds.</li>
          <li><strong>Drilling & Blasting:</strong> Controlled explosions for breaking rock layers safely.</li>
        </ul>
      </div>

      <div className="data_section">
        <h3>Environmental Practices</h3>
        <ul>
          <li>Land rehabilitation and reforestation of mined areas.</li>
          <li>Water management and treatment of runoff from mining sites.</li>
          <li>Air quality monitoring to reduce dust and emissions.</li>
          <li>Use of renewable energy and eco-friendly machinery.</li>
        </ul>
      </div>

      <div className="data_section">
        <h3>Market Insights</h3>
        <ul>
          <li>Global gold demand is projected to grow 3% annually over the next 5 years.</li>
          <li>Coal consumption is declining in developed countries but rising in Asia.</li>
          <li>Investment in mining technology is expected to double in the next decade.</li>
          <li>Renewable and sustainable mining is a growing trend for investor confidence.</li>
        </ul>
      </div>

      <div className="data_section">
        <h3>Research & Publications</h3>
        <p>
          Our team regularly publishes papers, case studies, and technical documents on mining safety, mineral processing, and sustainable practices. Access to these resources enables informed decision-making for both academic and industrial purposes.
        </p>
      </div>


    </>
  );
}

export default ArticleSection;
