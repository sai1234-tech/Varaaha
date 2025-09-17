import React from "react";
import "./Footer.css";
import LinkedIn from '../../Assests/Linkedin.png';
import Twitter from '../../Assests/Twitter.png';
import Mail from '../../Assests/Mail.png';
import Call from '../../Assests/Call.png';
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-sections">
        <div className="footer-section1">
            <span className="logo">Varaaha Mines</span>
        </div>
        <div className="footer-section2">
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Twitter} alt="Twitter" /> 
            <img src={Mail} alt="Mail" />   
            <img src={Call} alt="Call"/>
        </div>
        <div className="footer-section3">
             <span>Location</span>
             <p>Hyderabad,TG India</p>
        </div>

        </div>
        
        <div className="footer-copyright">
          <span className="footer_allrights">
            © 2024 varaaha mines. All rights reserved.
          </span>
          <span className="footer_privacy">Privacy</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
