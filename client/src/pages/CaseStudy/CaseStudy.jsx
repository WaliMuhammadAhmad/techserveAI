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
            <span className={style.heading}>
              <del>A few of our solutions developed to date.</del>
            </span>
            <img
              className={style.headingSectionImg}
              src='images/caseStudies/caseStudy_home.jpeg'
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
