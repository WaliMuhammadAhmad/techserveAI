import React from "react";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";
import ParticlesComponent from "../../components/ParticlesComponent";
import Brands from "../../components/Brands";
import Service from "../../components/Service";
import About from "../../components/About";
import CaseStudySection from "../../components/CaseStudySection";
import Products from "../../components/Products";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div id="#" style={{ backgroundColor: "#F0F2F4" }}>
      <Navbar />
      <ParticlesComponent id="particles" />
      <div className={style.landingPage}>
        <div className={style.container}>
          <img
            className={style.bgImage}
            src="img/logos/logo_removebg.png"
            alt="techiserve logo"
          />
          <p className={style.text} style={{ marginTop: "5dvh" }}>
            We are a data analytics and artificial intelligence company
            committed to helping businesses unlock the full potential of their
            data.
          </p>
        </div>
      </div>
      <div style={{ zIndex: 1000 }}>
        <Brands />
        <section id="services">
          <Service />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="caseStudy">
          <CaseStudySection />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}
