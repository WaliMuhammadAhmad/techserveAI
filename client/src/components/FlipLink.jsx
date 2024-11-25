import React from "react";
import { motion } from "framer-motion";
import "./flip.css";
import { Link } from "react-router-dom";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function RevealLinks({ name, link }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const sectionId = link.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link to={link} onClick={handleScroll}>
      <motion.span
        initial="initial"
        whileHover="hovered"
        className="container"
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * 0,
            }}
            className="inline-block"
          >
            {name}
          </motion.span>
        </div>
        <div className="absolute">
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * 0,
            }}
            className="inline-block"
          >
            {name}
          </motion.span>
        </div>
      </motion.span>
    </Link>
  );
}
