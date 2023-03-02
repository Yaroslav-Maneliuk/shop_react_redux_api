import React from 'react'
import s from "./Banner.module.css"
import bannerImg from "../../images/banner.png"

const Banner = () => {
  return (
    <section className={s.banner}>
      <div className={s.left}>
        <p className={s.content}>new year<span>sale</span></p>   
        <button className={s.more}>See more</button>
      </div>
      <div className={s.right} style={{ backgroundImage: `url(${bannerImg})` }}>
        <p className={s.discount}>save up to <span>50%</span> off</p>
      </div>
    </section>
  )
}

export default Banner