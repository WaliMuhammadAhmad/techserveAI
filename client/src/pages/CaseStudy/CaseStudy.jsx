import React from "react";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CaseStudyCard from "../../components/caseStudy/CaseStudy";
import CaseStudies from "../../data/caseStudies";

export default function CaseStudy() {
  return (
    <div style={{ background: "#f0f2f4" }}>
      <Navbar />
      <div className={style.container}>
        <div className={style.caseStudyHeader}>
          <div className={style.headingSection}>
            <h1 className={style.heading}>
              A few of our solutions developed to date.
            </h1>
            <img
              className={style.headingSectionImg}
              src='images/about/1731659208.jpg'
              alt='case study header section'
            />
          </div>
        </div>
        <div className={style.caseStudySection}>
          {CaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
