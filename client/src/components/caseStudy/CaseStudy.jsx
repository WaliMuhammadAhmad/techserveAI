import React from "react";
import style from "./style.module.css";

export default function CaseStudy({
  id,
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
          <h1>
            <span className={style.caseStudyNumber}>{id}.</span> {title}
          </h1>
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
        <p style={{ whiteSpace: "pre-line" }}>{problemStatement}</p>
        <h3>Solution</h3>
        <p style={{ whiteSpace: "pre-line" }}>{solution}</p>
      </div>
    </div>
  );
}
