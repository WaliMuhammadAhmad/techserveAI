import React from "react";
import style from "./style.module.css";
import Card from "./Card";

const cardContent = [
  {
    title: "Procure Pro",
    description:
      "A lightweight procurement management solution designed to streamline vendor management, purchase requisitions, and purchase orders. It features an advanced reporting tool to track and analyze spending and can be integrated with other platforms, allowing you to centralize all your business procurement activities.",
    style: { backgroundColor: "white" },
  },
  {
    title: "Intelligestics",
    description:
      "Our flagship near real-time reporting platform, which collects data from telematics devices to provide real-time insights into fleet performance. It offers live monitoring of key metrics like revenue, trip time, stationary time, fuel consumption, and route planning, keeping you in control of your fleet operations.",
    style: { backgroundColor: "#CED6DC" },
  },
  {
    title: "SmartProp",
    description:
      "A secure, data-driven platform that aggregates information from various property management tools to give you a comprehensive, real-time view of your property portfolio. With SmartProp, you can monitor occupancy, vacancies, leasing, revenue, tenants, and debtors, among other critical aspects of property management.",
    style: { backgroundColor: "black", color: "white" },
  },
];

export default function Products() {
  return (
      <div className={style.sectionContainer}>
        <div className={style.cardGrid}>
          {cardContent.map((card) => (
            <Card key={card.title} prop={card} />
          ))}
        </div>
      </div>
  );
}
