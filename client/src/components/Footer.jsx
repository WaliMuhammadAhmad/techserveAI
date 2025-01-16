import React from "react";
import style from "./style.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footerContainer}>
        <div className={style.footerText}>
          <h1 className={style.heading}>
            Harnessing Data. Delivering Insights
          </h1>
        </div>
      </div>
      <div className={style.footerBottomContainer}>
        <div className={style.footerBottom}></div>
        <p className={style.footerBottomText}>
          &copy; 2024 Techiserve.ai. All rights reserved.
        </p>
        <div className={style.footerBottom}></div>
      </div>
    </div>
  );
}
