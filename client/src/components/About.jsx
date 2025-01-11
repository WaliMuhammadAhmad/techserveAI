import React, { useState } from "react";
import "../App.css";
import style from "./style.module.css";
import AboutRenderCard from "./AboutRenderCard";
import aboutCardContent from "../data/about";

const aboutContent = {
  title: "About Us",
};

export default function About() {
  const [selectedCardId, setSelectedCardId] = useState(aboutCardContent[0].id);
  const [selectedContent, setSelectedContent] = useState(
    aboutCardContent[0].cardContent
  );

  const handleCardClick = (card) => {
    setSelectedCardId(card.id);
    setSelectedContent(card.cardContent);
  };

  return (
    <div className={style.sectionContainer}>
      <div className={style.aboutContainer}>
        <div className={style.aboutSectionContainer}>
          <div>
            <p className='vSlash' style={{ color: "white" }}>
              {aboutContent.title}
            </p>
            <h1 className={style.heading}>{aboutContent.title}</h1>
          </div>
          <div className={style.aboutCardsContainer}>
            {aboutCardContent.map((card) => (
              <div
                key={card.id}
                className={
                  card.id === selectedCardId
                    ? `${style.aboutNavCards} ${style.selectedCard}`
                    : style.aboutNavCards
                }
                onClick={() => handleCardClick(card)}
                style={{ cursor: "pointer" }}>
                <h1 className={style.aboutCardTitleFont}>{card.cardTitle}</h1>
              </div>
            ))}
          </div>
          <AboutRenderCard prop={selectedContent} />
        </div>
      </div>
    </div>
  );
}
