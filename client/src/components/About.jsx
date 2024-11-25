import React, { useState } from "react";
import "../App.css";
import style from "./style.module.css";
import AboutRenderCard from "./AboutRenderCard";

const aboutContent = {
  title: "About Us",
};

const aboutCardContent = [
  {
    id: 1,
    cardTitle: "Who we are",
    cardContent: {
      title: "Who we are",
      description1:
        "We are a team of data scientists, engineers, and AI experts committed to to helping organizations turn raw data into strategic assets through innovative AI and analytics solutions.",
      description2: "What sets Techiserve.ai apart is our ability to blend business acumen with advanced data science. We don't just focus on numbers or algorithms; we focus on how they translate into real-world impact for your business",
      imgPath: "/img/about/file.png",
      alt: "Who we are Image",
    },
  },
  {
    id: 2,
    cardTitle: "Why our clients choose us",
    cardContent: {
      title: "Why our clients choose us",
      description1:
        "Since our founding in 2022, Techiserve.ai has earned the trust of businesses by delivering tailored AI and data analytics solutions that address real-world challenges. ",
        description2: "Our clients value us for our ability to combine deep technical expertise with a personalized approach, ensuring that each solution is customized to their specific needs. From data mining to business application development, we offer comprehensive solutions that help businesses turn data into a strategic asset.",
      imgPath: "/img/about/file2.png",
      alt: "Why our clients choose us Image",
    },
  },
  {
    id: 3,
    cardTitle: "Our team and delivery capability",
    cardContent: {
      title: "Our team and delivery capability",
      description1:
        "At Techiserve.ai, our team is a blend of diverse expertise, bringing together strengths in chartered accountancy, electrical engineering, chemical engineering, mechatronics engineering, and computer science.",
        description2: "This unique combination allows us to approach problems from multiple angles, offering you comprehensive value.",
      imgPath: "/img/about/file3.png",
      alt: "Our team and delivery capability Image",
    },
  },
];

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
            <p className="vSlash" style={{ color: "white" }}>
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
                style={{ cursor: "pointer" }}
              >
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