import React from "react";
import "./Footer.css"; // Make sure path is correct
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <h2>CONTAGION</h2>
          <p>
            Crafting unforgettable moments, one extraordinary experience at a time.
          </p>
        </div>

        {/* Links Column */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/our-work">Our Work</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Get in Touch</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>Email: info@contagion.com</p>
          <p>Phone: +233 234 567 890</p>
          <p>Location: MADINA, AWW</p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} CONTAGION. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
