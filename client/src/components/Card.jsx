import React from "react";
import style from "./style.module.css";
import FlipX from "./FlipX";

export default function Card(content) {
  return (
    <div>
      <div className={style.card} style={content.prop.style}>
        <h1 className={style.cardHeading}>{content.prop.title}</h1>
        <p className={style.serviceText}>{content.prop.description}</p>
      </div>
      <div className={style.cardBottomContainer}>
        <div className={style.cardIdel} style={content.prop.style}></div>
        <div className={style.cardButtonContainer}>
          <FlipX link={content.prop.link} />
        </div>
      </div>
    </div>
  );
}
