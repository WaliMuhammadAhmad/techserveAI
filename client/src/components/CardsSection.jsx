import React from "react";
import style from "./style.module.css";
import Card from "./Card";

const cardContent = [
  {
    title: "Chat",
    description: "KeeyChat AI Chatbot erstellen",
    style: { backgroundColor: "white" },
  },
  {
    title: "Voice",
    description: "KeeyVoice AI Voice integration",
    style: { backgroundColor: "#CED6DC" },
  },
  {
    title: "GPT",
    description: "KeeyGPT AI Content Generation",
    style: { backgroundColor: "black", color: "white", flex: "1" },
  },
];

export default function CardsSection() {
  return (
    <div className={style.section}>
      <div className={style.sectionContainer}>
        <div className={style.cardGrid}>
          {cardContent.map((card) => (
            <Card key={card.title} prop={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
