import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Navbar from "../../components/Navbar";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className={style.container}>
        <div className={style.errorContainer}>
          <div className='row'>
            <div className={style.errorText}>
              <div className={style.errorCode}>404</div>
              <h1>The page your are looking for doesnt exists</h1>
              <button className={style.button} onClick={() => navigate(-1)}>
                Go back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
