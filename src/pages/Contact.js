import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get In Touch</h1>
          <p>
            Whether you have a question or want to plan your next big event,
            we’re here to help. Let’s make something unforgettable.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="contact-content">
        {/* Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>Haatso-Accra, Ghana</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>contact@contagion.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+233 24 567 8901</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </motion.form>
      </section>

      <Footer />
    </>
  );
}
