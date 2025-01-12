import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../App.css";
import style from "./style.module.css";
import CaseStudy from "./CaseStudy";
import { Link } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import caseStudies from "../../data/caseStudies";

export default function CaseStudySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.section}>
      <div className={style.caseStudyContainer}>
        <div className={style.sectionContainer}>
          <p className='vSlash'>Case Studies</p>
          <h1 className={style.heading}>
            Explore our in-depth case studies showcasing impactful solutions and
            innovative approaches.
          </h1>
        </div>
        <div className={style.carousel}>
          <div className={style.navButton} onClick={prevSlide}>
            <Link className={style.cardButton}>
              <SlArrowLeft />
            </Link>
          </div>
          <motion.div
            animate={{
              transition: { duration: 0.3 },
            }}
            className={style.carouselContainer}>
            {[caseStudies[currentIndex]].map((caseStudy) => (
              <CaseStudy key={caseStudy.id} {...caseStudy} />
            ))}
          </motion.div>
          <div className={style.navButton} onClick={nextSlide}>
            <Link className={style.cardButton}>
              <SlArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
