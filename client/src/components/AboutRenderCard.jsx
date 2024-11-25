import React from "react";
import style from "./style.module.css";

export default function AboutRenderCard({prop}) {
  return (
    <div className={style.aboutRenderCard}>
      <div className={style.sectionGrid}>
        <div className={style.aboutRenderImgSection}>
          <img
            className={style.aboutRenderImg}
            src={prop.imgPath}
            alt={prop.alt}
          />
        </div>
        <div className={style.aboutRenderTextSection}>
          <h1 className={style.heading}>{prop.title}</h1>
          <p className={style.serviceText}>{prop.description1}</p>
          <p className={style.serviceText}>{prop.description2}</p>
        </div>
      </div>
    </div>
  );
}
