import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <nav className="nav">
            <div className="nav-left">
                <span className="logo">Varaaha Mines</span>
            </div>
        <div className="nav-right">
 <ul className="nav-links">
            {/* <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li> */}
             <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
         
        </nav>
      </div>
    </>
  );
}

export default Header;
