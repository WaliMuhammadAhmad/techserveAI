import React from "react";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CaseStudyCard from "../../components/caseStudy/CaseStudy";
import CaseStudies from "../../data/caseStudies";

export default function CaseStudy() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.caseStudyHeader}>
          <div className={style.heading}>
            <h1>Case Studies</h1>
            <p>
              Explore our in-depth case studies showcasing impactful solutions
              and innovative approaches.
            </p>
          </div>
        </div>
        <div className={style.caseStudySection}>
          {CaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
