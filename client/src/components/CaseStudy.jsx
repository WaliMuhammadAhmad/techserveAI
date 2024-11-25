import React from "react";
import style from "./style.module.css";
import Button from "./Button";

export default function CaseStudy({ index, title, problemStatement }) {
  return (
    <div className={style.caseStudyGrid}>
      <p className={style.caseStudyNumber}>0{index}</p>
      <div>
        <h1>{title}</h1>
        <p style={{ marginBottom: "2rem" }}>{problemStatement}</p>
        <div className={style.caseStudyButton}>
        <Button text="Read More" link="/caseStudy" />
        </div>
      </div>
    </div>
  );
}
