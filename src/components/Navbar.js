import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react"; // Icons
import logo from "../assets/Logo.png"
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" className="logo-img"/>
        </div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/work" onClick={() => setIsOpen(false)}>Our Work</Link></li>
          <li><Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
