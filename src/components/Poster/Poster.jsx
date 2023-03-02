import React from 'react'
import s from "./Poster.module.css"
import BG from "../../images/computer.png"

const Poster = () => {
  return (
    <section className={s.home}>
      <div className={s.title}>big sale 20%</div>
      <div className={s.product}>
        <div className={s.text}>
          <div className={s.subtitle}>the bestseller of 2022</div>
          <h1 className={s.head}>lennon r2d2 with nvidia 5090 ti</h1>
          <button className={s.button}>Shop Now</button>
        </div>
         <div className={s.image}>
          <img src={BG} alt="bg" />
         </div>
      </div>
    </section>
  )
}

export default Poster