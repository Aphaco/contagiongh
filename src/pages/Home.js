import React from "react";
import { motion } from "framer-motion";

import "./styles/Home.css";
import img1 from "./images/eve4.jpg"
import img2 from "./images/eve1.jpg"
// import img3 from "./images/eve3.jpg"
import img4 from "./images/eve11.jpg"
import img6 from "./images/eve10.jpg"
import img8 from "./images/eve8.jpg"
import img5 from "./images/eve4.jpg"
import img7 from "./images/eve12.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
    <Navbar/>
  
    <div className="home-page">
      {/* Hero Section */}
<section className="hero-section">
  <div className="hero-image-container">
    <div className="hero-overlay" />
    <motion.div
      className="hero-text-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Best events in</h2>
      <h1>Ghana</h1>
      <p>
        Looking for things to do in Ghana? Whether you're a local, new in town or just cruising through
        – we've got loads of great tips and events. Explore what's popular, top picks, free stuff... you got this.
      </p>
      <div className="location-button">
        <span className="location-icon">📍</span> Ghana <span className="dropdown-icon">▼</span>
      </div>
    </motion.div>
  </div>
</section>




      {/* About Teaser Section */}
      <section className="about-teaser">
        <div className="about-text">
          <h2>What Makes Us Contagious?</h2>
          <p>
            At CONTAGION, we don't just plan events — we create memories that leave a lasting mark.
            Our team blends expertise, artistry, and bold vision to deliver seamless experiences that truly resonate.
          </p>
        </div>
        <img src= {img1} alt="Team at work" className="about-image" />
      </section>

      {/* Services Teaser */}
      <section className="services-preview">
        <h2>We Bring Your Vision to Life</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={img4} alt="Conference Setup" />
            <h3>Corporate Events</h3>
            <p>Precision-planned experiences that inspire your teams and impress your stakeholders.</p>
          </div>
          <div className="service-card">
            <img src={img2} alt="Luxury Celebration" />
            <h3>Private Celebrations</h3>
            <p>Stylish and intimate events that leave your guests speechless — for all the right reasons.</p>
          </div>
        
          <div className="service-card">
  <img src={img8} alt="Brand Activation" />
  <h3>Brand Activations</h3>
  <p>Bold. Original. Impactful. We turn your ideas into unforgettable live experiences that captivate and convert.</p>
</div>

<div className="service-card">
  <img src={img7} alt="Corporate Events" />
  <h3>Corporate Events</h3>
  <p>We redefine professionalism with elegance. From global summits to executive retreats — all flawlessly executed.</p>
</div>

<div className="service-card">
  <img src={img6} alt="Product Launches" />
  <h3>Product Launches</h3>
  <p>Make your debut unforgettable. We create hype, generate buzz, and ensure your product hits the market with impact.</p>
</div>

<div className="service-card">
  <img src={img5} alt="Experiential Campaigns" />
  <h3>Experiential Campaigns</h3>
  <p>We craft immersive brand stories that break through the noise and forge emotional connections with your audience.</p>
</div>

        </div>
      </section>
      {/* Testimonials Snippet */}
{/* <section className="testimonial-preview">
  <motion.div
    className="testimonial-box"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2>Hear From Our Clients</h2>
    <p>
    You guys are super awesome. We cannot opt for a better agency…you do it just our way. Thank you, thank you, thank you! A massive kudos to the rest of your team. You did a great job and everyone is smiling. God bless you!
    </p>
    <span>- MTN, SOREE</span>
  </motion.div>
</section> */}

    </div>
    <Footer/>
    </>
  );
}

export default Home;
