import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Aura Interiors Logo" onClick={() => window.location.href = "/"} style={{cursor: "pointer"}}/> 
        <h1>Aura Interiors</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="sign-in-btn">
        <Link to="/signin" className="btn-link">Sign In</Link>
      </button>
    </nav>
  );
};

export default Navbar;