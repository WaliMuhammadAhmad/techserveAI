import React from "react";
import style from "./style.module.css";

export default function CaseStudy({
  title,
  subtitle,
  problemStatement,
  solution,
  image,
  gradient,
}) {
  return (
    <div className={style.caseStudyGrid}>
      <div
        className={style.caseStudyImgBox}
        style={{
          backgroundImage: `linear-gradient(to bottom, #f1f4f6, ${gradient}`,
        }}>
        <div className={style.caseStudyTitle}>
          <h1>{title}:</h1>
          <h2 style={{ fontWeight: "500" }}>{subtitle}</h2>
        </div>
        <img className={style.caseStudyImg} src={image} alt={title} />
      </div>
      <div
        className={style.caseStudyContent}
        style={{
          backgroundImage: `linear-gradient(to bottom, #141414 90%, ${gradient} 100%)`,
        }}>
        <h3>Problem Statement</h3>
        <p>{problemStatement}</p>
        <h3>Solution</h3>
        <p>{solution}</p>
      </div>
    </div>
  );
}
