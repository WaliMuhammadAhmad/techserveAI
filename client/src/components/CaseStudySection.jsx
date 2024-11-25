import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import style from "./style.module.css";
import CaseStudy from "./CaseStudy";
import { Link } from "react-router-dom";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl";

const caseStudies = [
  {
    index: 1,
    title: "Education",
    problemStatement:
      "A leading online educational institute experienced rapid and substantial growth over a short period. This expansion placed significant strain on their existing back-office infrastructure, which was not equipped to handle the surge in operational demands. The institution required a comprehensive digital transformation to ensure its infrastructure could effectively support both current needs and future growth, while maintaining operational efficiency and student satisfaction.",
    solution:
      "Techiserve.ai developed a comprehensive business optimization and digitization strategy for the institute's back-office support functions. Following the strategic development, Techiserve.ai successfully implemented the solution, which resulted in automated workflows, near real-time reporting, seamless system integration, and the establishment of standard operating procedures to enhance overall efficiency and scalability.",
  },
  {
    index: 2,
    title: "Mining",
    problemStatement:
      "A Johannesburg Stock Exchange (JSE)-listed mining operation required a comprehensive operational performance reporting system that would cover the entire value chain. The system needed to enable seamless data capture across various operations and ensure daily production reconciliation, providing accurate and real-time insights to improve decision-making and operational efficiency.",
    solution:
      "Techiserve.ai implemented a mobile application designed to capture production data on a per-shift basis. This data was then consolidated and displayed through an interactive dashboard and reporting system, providing a comprehensive, real-time view of business performance across multiple metrics and time intervals. This solution enhanced visibility and enabled more informed decision-making throughout the operation.",
  },
  {
    index: 3,
    title: "Property Management",
    problemStatement:
      "A large property management entity required a secured data pipeline to be constructed, enabling seamless ingestion of data from their existing management tool. This data needed to be utilized to create a data analytics control room, providing near real-time insights to manage various property portfolios at strategic, operational, and tactical levels. The solution needed to ensure data security while enabling informed decision-making across the organization, improving overall efficiency and responsiveness.",
    solution:
      "Techiserve.ai designed and implemented a robust, secured cloud data pipeline to seamlessly ingest data from the client’s property management tool. By ensuring end-to-end encryption and compliance with data privacy standards, we provided a secure foundation for handling sensitive information. Once the data was ingested, Techiserve.ai restructured and optimized it, ensuring it was ready for advanced analysis and reporting. Our team then applied advanced analytics to transform the raw data into actionable insights, enabling the creation of near real-time reporting that covered key operational, financial, and investor metrics. This allowed the property management entity to monitor everything from tenant performance and lease renewals to maintenance costs and financial returns with unprecedented speed and accuracy.",
  },
  {
    index: 4,
    title: "Generative AI in Property Management",
    problemStatement:
      "Our client required quick and easy access to their data, allowing management to retrieve specific elements of their property portfolio without the need to log into any system or platform. The solution needed to streamline data access, enabling decision-makers to view key information on demand, improving efficiency and reducing reliance on traditional system interfaces.",
    solution:
      "Techiserve.ai developed an innovative solution by leveraging a Large Language Model (LLM), specifically trained on the client’s data. This model was integrated with WhatsApp, enabling the client to interact with the system using their preferred choice of text. Through simple text-based conversations, the client’s management team could quickly access specific elements of their portfolio without needing to log into any system or platform, providing an efficient and user-friendly way to retrieve critical information in real-time.",
  },
];

export default function CaseStudySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.section}>
      <div className={style.caseStudyContainer}>
        <div className={style.sectionContainer}>
          <p className="vSlash">Case Studies</p>
          <h1 className={style.heading}>
            Explore our in-depth case studies showcasing impactful solutions and
            innovative approaches.
          </h1>
        </div>
        <div className={style.carousel}>
          <button className={style.navButton} onClick={prevSlide}>
          <Link className={style.cardButton}><SlArrowLeft /></Link>
          </button>
          <motion.div
            animate={{
              transition: { duration: 0.3 },
            }}
            className={style.carouselContainer}
          >
            {[
              caseStudies[currentIndex],
              caseStudies[(currentIndex + 1) % caseStudies.length],
            ].map((caseStudy) => (
              <CaseStudy key={caseStudy.index} {...caseStudy} />
            ))}
          </motion.div>
          <button className={style.navButton} onClick={nextSlide}>
          <Link className={style.cardButton}><SlArrowRight /></Link>
          </button>
        </div>
      </div>
    </div>
  );
}
