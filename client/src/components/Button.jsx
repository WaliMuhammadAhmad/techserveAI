import React from "react";
import {Link} from "react-router-dom";
import style from "./style.module.css";

export default function Button({text, link}) {
  return (
    <div className={style.buttonContainer}>
      <Link className={style.button} to={link}>
        <div className={style.btnIcon}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height=".7em"
            width=".7em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"></path>
          </svg>
        </div>
        {text}
      </Link>
    </div>
  );
}
