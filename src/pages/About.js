import React from "react";
import { motion } from "framer-motion";
import "./styles/About.css";
import aboutImage from "./images/eve3.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">

        {/* Hero Banner */}
        <section className="about-hero">
          <motion.div
            className="about-hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>We Don’t Just Host Events. We Create Movements.</h1>
            <p>
              At CONTAGION, every detail is intentional. Every moment is curated.
              Every experience is unforgettable.
            </p>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section className="about-vision">
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Contagion Vision" />
          </div>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Our Vision</h2>
            <p>
              To redefine the art of experience through boundary-pushing creativity
              and precision-perfect execution. From elite corporate affairs to
              unforgettable brand activations, we bring visions to life with
              style, soul, and substance.
            </p>
          </motion.div>
        </section>

        {/* Signature Style Section */}
        <section className="about-style">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Signature CONTAGION Style
          </motion.h2>
          <div className="style-grid">
            <motion.div className="style-box" whileHover={{ scale: 1.05 }}>
              <h3>Strategic Storytelling</h3>
              <p>
                We create immersive narratives that elevate your brand beyond the moment.
              </p>
            </motion.div>
            <motion.div className="style-box" whileHover={{ scale: 1.05 }}>
              <h3>Avant-Garde Aesthetics</h3>
              <p>
                Our visuals are bold, our designs are clean — always ahead of the curve.
              </p>
            </motion.div>
            <motion.div className="style-box" whileHover={{ scale: 1.05 }}>
              <h3>Flawless Execution</h3>
              <p>
                Details matter. Our process ensures that perfection is not a promise —
                it's a guarantee.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services + Skills Section (from screenshot) */}
        <section className="about-services">
          <div className="services-left">
            <div className="service-box">
              <i className="fa-solid fa-video"></i>
              <h3>Events</h3>
              <p>
                Managing your event from concept generation to execution and every event is created to match its intent.
              </p>
            </div>
            <div className="service-box">
              <i className="fa-regular fa-face-smile"></i>
              <h3>Brands</h3>
              <p>
                All technical aspects are coordinated to give the best and we coordinate all technical aspects to give the best.
              </p>
            </div>
            <div className="service-box">
              <i className="fa-solid fa-film"></i>
              <h3>Media Relations</h3>
              <p>
                We create the buzz by inviting the right people to your event who are newsworthy as well as creating memorable experiences.
              </p>
            </div>
            <div className="service-box">
              <i className="fa-solid fa-user-group"></i>
              <h3>PR</h3>
              <p>
                At Contagion, we use industry knowledge and expertise to create bespoke, inspiring campaigns for clients in the consumer and corporate sectors!
              </p>
            </div>
          </div>
          <div className="services-right">
            <h2>
              <em>Imagine & Create,</em><br />
              <strong>We make it so simple!</strong>
            </h2>
            <p>
              We are Whole business, our strategists will help you set an objective and choose your tools, developing a plan that is custom built for your business.
            </p>

            <div className="progress-bar">
              <span>EVENT MANAGEMENT</span>
              <div><div style={{ width: "95%" }}></div><span>95%</span></div>
            </div>
            <div className="progress-bar">
              <span>CORPORATE BRANDING</span>
              <div><div style={{ width: "87%" }}></div><span>87%</span></div>
            </div>
            <div className="progress-bar">
              <span>MEDIA RELATIONS MANAGEMENT</span>
              <div><div style={{ width: "81%" }}></div><span>81%</span></div>
            </div>
            <div className="progress-bar">
              <span>PUBLIC RELATIONS</span>
              <div><div style={{ width: "70%" }}></div><span>70%</span></div>
            </div>
          </div>
        </section>

        {/* Immersive Gallery Section */}
        <section className="about-gallery">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Moments That Made Us
          </motion.h2>
          <div className="gallery-grid">
            {[1, 2, 3, 9, 5, 6, 7].map((n) => (
              <motion.div
                className="gallery-item"
                key={n}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: n * 0.1 }}
              >
                <img src={require(`./images/eve${n}.jpg`)} alt={`Event ${n}`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <motion.div
            className="cta-box"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Let’s Create Something Unforgettable</h2>
            <p>
              Whether it's a luxury celebration or a global conference, we’re here to
              craft what only CONTAGION can.
            </p>
            <button>Start Your Journey</button>
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default About;
