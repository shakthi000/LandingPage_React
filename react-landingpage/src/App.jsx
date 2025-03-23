import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

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
        <h1 className="logo">Aura Interiors</h1>
        <p className="tagline" style={{ fontSize: '15px'}}><i>Transforming Spaces, One Interior at a Time! ♥</i></p>
      </header>

      {/* ADD NAVBAR HERE */}

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
