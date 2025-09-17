import React from 'react'
import ArticleSection from './Components/ArticleSection/ArticleSection'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
function App() {
  return (
    <div>
      {/* <Header/>
      <Hero/>
      <ArticleSection/>
      <Services/>
        <Footer/> */}



      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App