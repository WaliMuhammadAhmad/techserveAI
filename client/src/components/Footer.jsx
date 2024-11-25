import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footerContainer}>
        <div className={style.footerText}>
          <h1 className={style.heading}>
            Harnessing Data. Delivering Insights
          </h1>
          <p className={style.subheading}>
            At Techiserve.ai, we leverage our comprehensive expertise to empower
            businesses with tailored, innovative AI solutions, ensuring
            operational excellence and future-ready growth. Your success is our
            commitment.
          </p>
        </div>
        {/* <div className={style.footerGrid}>
          <div className={style.footerItem}>
            <h4 className={style.subheading}>Socials</h4>
            <p className={style.topContact}>LinkedIn</p>
            <p className={style.topContact}>Instagram</p>
            <p className={style.topContact}>X</p>
          </div>
          <div className={style.footerItem}>
            <h4 className={style.subheading}>Team</h4>
            <p className={style.topContact}>Email</p>
            <p className={style.topContact}>Fax</p>
            <p className={style.topContact}>Tel</p>
          </div>
          <div className={style.footerItem}>
            <h4 className={style.subheading}>Location</h4>
            <div className={style.topContact}>
              <p>Somewhere</p>
              <p>Asia, US</p>
            </div>
          </div>
        </div> */}
        <div className={style.footerNav}>
          <Link to={'/'} className={style.topContact}>Home</Link>
          <Link to={'services'} className={style.topContact}>Services</Link>
          <Link to={'/#about'} className={style.topContact}>About</Link>
          <Link to={'/contact'} className={style.topContact}>Contact</Link>
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
