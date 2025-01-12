import React from "react";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";
import ParticlesComponent from "../../components/ParticlesComponent";
import Brands from "../../components/Brands";
import Service from "../../components/service/Service";
import About from "../../components/About";
import CaseStudySection from "../../components/caseStudy/CaseStudySection";
import Products from "../../components/Products";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div id='#' style={{ backgroundColor: "#F0F2F4" }}>
      <Navbar />
      <ParticlesComponent id='particles' />
      <div className={style.landingPage}>
        <div className={style.container}>
          <img
            className={style.bgImage}
            src='Logos/logos/logo_removebg.png'
            alt='techiserve logo'
          />
        </div>
      </div>
      <div style={{ zIndex: 1000 }}>
        <Brands />
        <section id='services'>
          <Service />
        </section>
        <section id='products'>
          <Products />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='caseStudy'>
          <CaseStudySection />
        </section>
        <section id='footer'>
          <Footer />
        </section>
      </div>
    </div>
  );
}
