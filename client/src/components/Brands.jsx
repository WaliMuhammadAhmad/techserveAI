import React from 'react'
import style from './style.module.css';

const imgs = [
    {brandName:"brand",imgPath:"/Logos/AFRM.png",alt: "AFRM logo"},
    {brandName:"brand",imgPath:"/Logos/Overlooked.png",alt: "Overlooked logo"},
    {brandName:"brand",imgPath:"/Logos/PwC.png",alt: "PwC logo"},
    {brandName:"brand",imgPath:"/Logos/SNg.png",alt: "SNg logo"},
];

export default function Brands() {
  return (
    <section className={style.brandsSection}>
        <div className={style.brandsContainer}>
            {imgs.map(img=>(
                <img className={style.brandImg} src={img.imgPath} alt={img.brandName} />
            ))}
        </div>
    </section>
  )
}
