import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";


const App = () => {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    
    <div className="landing-container">
      <header className="header">
        <img src="/images/logo.png" alt="Aura Interiors Logo" className="logo-image" style={{width: "120px", height: "120px"}} />
        <p className="tagline" style={{ fontSize: '15px'}}><i>Transforming Spaces, One Interior at a Time! ♥</i></p>
      </header>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>

      <div className="slider-wrapper">
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index} className="slide">
              <div className="overlay"></div>
              <img src={img} alt={`Interior ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
      

      <footer className="footer">
        <p style={{ fontSize: '15px'}}><i>© 2025 Aura Interiors. All Rights Reserved.</i></p>
        <div className="social-links">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
    
  );
};

export default App;