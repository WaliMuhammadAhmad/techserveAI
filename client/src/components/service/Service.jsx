import React from "react";
import "../../App.css";
import FlipX from "../FlipX";
import style from "./style.module.css";
import service from "../../data/service";
import { useNavigate } from "react-router-dom";

export default function Service() {
  const navigate = useNavigate();
  return (
    <section className={style.sectionContainer}>
      <div className={style.container}>
        <div>
          <h1
            className='vSlash'
            style={{ fontSize: "22px", fontWeight: "600" }}>
            Our Services
          </h1>
          <p className={style.sectionDescription}>
            We are a data analytics and artificial intelligence company
            committed to helping businesses unlock the full potential of their
            data​
          </p>
        </div>
        <div className={style.gridContainer}>
          {service.map((item, index) => (
            <div
              key={index}
              className={style.card}
              style={item.backgroundColor}>
              <div className={style.cardContent}>
                <div className={style.cardImageContainer}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={style.cardImage}
                  />
                  <h1 className={style.cardTitle}>{item.title}</h1>
                </div>
                <div className={style.cardDescription}>
                  <p className={style.cardText}>{item.description}</p>
                  <p className={style.cardText}>{item.text}</p>
                </div>
              </div>
              <div
                onClick={() => navigate("/services")}
                className={style.cardButtonContainer}>
                <FlipX />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
