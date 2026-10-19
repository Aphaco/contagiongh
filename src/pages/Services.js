import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Services.css";

const services = [
  {
    id: 1,
    title: "Event Management",
    subtitle: "Looking for a full event solution",
    description: `Organising any event requires considerable planning. At Contagion, our work spans the planning process through to execution to ensure that you experience a successful event. Our industry knowledge, design and attention to detail leaves you to relax knowing that your event will be managed to the highest standards.`,
    button: "Read More",
    tag: "Quick & smart",
  },
  {
    id: 2,
    title: "Corporate Branding",
    subtitle: "Quick & smart",
    description: `Our expertise extends beyond simple branding. We advise, manufacture and offer printing services to corporate institutions. Having managed some of the largest brands in Ghana, we provide quality and long term corporate identities.`,
    button: "Read More",
    tag: "Quick & smart",
  },
  {
    id: 3,
    title: "PR",
    subtitle: "Friendly support",
    description: `At Contagion, we use industry knowledge and expertise to create bespoke, inspiring campaigns for clients in the consumer and corporate sectors. This we do to ensure that our clients receive maximum quality exposure and continued relevance.`,
    button: "Read More",
    tag: "Friendly support",
  },
  {
    id: 4,
    title: "Media Relations Management",
    subtitle: "Buzz & Insight",
    description: `We create the buzz by inviting the right people to your event who are newsworthy. Clients trust our passion and 5+ years of experience for offering unparalleled awareness and insight into media relations. We have a record for securing top-tier coverage in both sector-specific and mainstream publications hence we go out of our way to make your brand visible in the right places that are unique to your story and industry.`,
    button: "Read More",
    tag: "Buzz & Insight",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="shape shape1" />
        <div className="shape shape2" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Discover Our Expertise</h1>
          <p>
            From seamless planning to flawless execution, CONTAGION delivers
            world‑class events that leave a lasting impression.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="services-page">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              className="service-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{
                translateY: -10,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            >
              <div className="card-header">
                <span className="tag">{s.tag}</span>
                <h3>{s.title}</h3>
              </div>
              <p className="card-desc">{s.description}</p>
              <button className="card-btn">{s.button}</button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
