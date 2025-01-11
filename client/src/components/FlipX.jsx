import React from "react";
import { motion } from "framer-motion";
import "./flip.css";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function RevealLinks({ link }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const sectionId = link.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link to={link} className='cardButton' onClick={handleScroll}>
      <motion.span
        initial='initial'
        whileHover='hovered'
        className='container'
        style={{
          lineHeight: 0.75,
        }}>
        <div>
          <motion.span
            variants={{
              initial: {
                x: 0,
              },
              hovered: {
                x: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delax: STAGGER * 0,
            }}
            className='inline-block'>
            <SlArrowRight />
          </motion.span>
        </div>
        <div id='slash' className='absolute'>
          <motion.span
            variants={{
              initial: {
                x: "100%",
              },
              hovered: {
                x: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delax: STAGGER * 0,
            }}
            className='inline-block'>
            <SlArrowRight />
          </motion.span>
        </div>
      </motion.span>
    </Link>
  );
}
