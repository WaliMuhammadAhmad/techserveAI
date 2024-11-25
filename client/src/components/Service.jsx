import React from "react";
import "../App.css";
import Button from "./Button";
import style from "./style.module.css";

const service = {
  title1: "Data Mining & Engineering",
  subtitle: "Empowering Businesses with AI-Driven Insights",
  description1:
    "Our data engineering solutions are designed to build reliable, scalable infrastructures that support your data-driven initiatives, ensuring you get the insights you need when you need them",
  title2: "Artificial Intelligence & Machine Learning",
  description2:
    "From automating processes to predictive analytics, we build machine learning models that provide actionable insights and deliver measurable impact",
  title3: "Advanced Analytics & Business Intelligence",
  description3:
    "Whether it's uncovering patterns in customer behavior, identifying operational inefficiencies, or tracking market trends, our team provides real-time data analytics and dashboards that turn information into strategic actions.",
  title4: "Business Application Development",
  description4:
    "We design and develop custom business applications tailored to your operational needs. Whether you require specialized internal tools or client-facing platforms, our applications are built to integrate seamlessly with your data infrastructure, improving efficiency and user experiences.",
};

export default function Service() {
  return (
    <section
      className={style.sectionContainer}
      style={{ backgroundColor: "white" }}
    >
      <div className={style.serviceContainer}>
        <div className={style.serviceGrid}>
          <div className={style.serviceTitle}>
            <div>
              <p className="vSlash">Service</p>
              <h1 className={style.heading}>
                We deliver tailored AI and data analytic solutions that address
                real-world challenges
              </h1>
            </div>
            <img
              className={style.serviceImg}
              src="img/logos/logo_removebg.png"
              alt="techiserver logo"
            />
          </div>
          <div className={style.serviceTextSection}>
            {/* <h3 className={style.subheading}>{service.subtitle}</h3> */}
            <h1 className={style.heading}>{service.title1}</h1>
            <p className={style.serviceText}>{service.description1}</p>
            <h1 className={style.heading}>{service.title2}</h1>
            <p className={style.serviceText}>{service.description2}</p>
            <h1 className={style.heading}>{service.title3}</h1>
            <p className={style.serviceText}>{service.description3}</p>
            <h1 className={style.heading}>{service.title4}</h1>
            <p className={style.serviceText}>{service.description4}</p>
            <Button text="Service" link="/services" />
          </div>
        </div>
      </div>
    </section>
  );
}
