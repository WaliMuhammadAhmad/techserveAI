import React from "react";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              cupiditate alias minus incidunt repudiandae animi unde culpa
              quisquam inventore, voluptate, adipisci perspiciatis eius! Facere
              dignissimos praesentium necessitatibus omnis impedit
              reprehenderit..
            </p>
          </div>
        </div>
        <div className={style.caseStudySection}>
          {CaseStudies.map((study) => (
            <div key={study.id} className={style.caseStudy}>
              <div id={`${study.title}`}>
                <h1>{study.title}</h1>
                <h2>Problem Statement</h2>
                <p>{study.problemStatement}</p>
                <h2>Solution</h2>
                <p>{study.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
