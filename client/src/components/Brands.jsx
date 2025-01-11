import React from "react";
import style from "./style.module.css";
import brands from "../data/brands";

export default function Brands() {
  return (
    <section className={style.brandsSection}>
      <div className={style.brandsContainer}>
        {brands.map((img) => (
          <img
            className={style.brandImg}
            src={img.imgPath}
            alt={img.brandName}
          />
        ))}
      </div>
    </section>
  );
}
