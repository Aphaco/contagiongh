import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coffeeHero from "./images/eve2.jpg"; // place a coffee cups image here
import "./styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote: `You guys are super awesome. We cannot opt for a better agency…you did it just our way. 
            Thank you, thank you, thank you! A massive kudos to the rest of your team. 
            You did a great job and everyone is smiling. God bless you!`,
    name: "MTN Ghana",
    company: "Retail Division",
  },
  {
    id: 2,
    quote: `Congrats to the team for a fantastic outing in Senchi. Good rollout, good programme, 
            fantastic MC and the result is elated clients. I thank you all for the effort and we 
            will discuss this at the appropriate time and together how to even do it better in the future.`,
    name: "MTN Ghana",
    company: "Corporate Events",
  },
];

export default function Testimonials() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="testimonials-hero"
        style={{ backgroundImage: `url(${coffeeHero})` }}
      >
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Happy Clients</h1>
          <p>Hear why they choose CONTAGION again and again.</p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-page">
        <motion.div
          className="testimonials-grid"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            >
              <div className="client-pic" />
              <p className="quote">“{t.quote}”</p>
              <h3 className="client-name">{t.name}</h3>
              <p className="client-company">{t.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
