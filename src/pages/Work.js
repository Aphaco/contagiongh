import React from "react";
import { motion } from "framer-motion";
import "./styles/Work.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Replace these with your real project images
const projects = [
  {
    id: 1,
    title: "Brand Activation Gala",
    description: "An immersive brand activation across multiple venues.",
    image: require("./images/eve7.jpg"),
  },
  {
    id: 2,
    title: "Luxury Product Launch",
    description: "Exclusive launch event for a high‑end tech product.",
    image: require("./images/eve8.jpg"),
  },
  {
    id: 3,
    title: "Corporate Summit 2024",
    description: "A large‑scale summit bringing together industry leaders.",
    image: require("./images/eve9.jpg"),
  },
  {
    id: 4,
    title: "Music Festival Experience",
    description: "Curated stages and immersive installations.",
    image: require("./images/eve5.jpg"),
  },
  {
    id: 5,
    title: "Art & Culture Fair",
    description: "A celebration of contemporary art and live performances.",
    image: require("./images/eve8.jpg"),
  },
  {
    id: 6,
    title: "Charity Gala Dinner",
    description: "Elegant evening to raise funds for global causes.",
    image: require("./images/eve2.jpg"),
  },
];

function Work() {
  
  return (
    <>
    <Navbar/>
    <div className="work-container">
      <div className="work-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Check out some of our most impactful projects.
        </motion.p>
      </div>

      <motion.div
        className="work-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            className="work-card"
            whileHover={{ scale: 1.03 }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
          >
            <img src={proj.image} alt={proj.title} />
            <div className="overlay" />
            <div className="card-text">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <Footer/>
    </>
  );

}

export default Work;
