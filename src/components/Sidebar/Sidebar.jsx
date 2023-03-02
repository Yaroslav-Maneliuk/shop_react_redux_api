import React from 'react'
import s from "./Sidebar.module.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories)
  console.log(list)

  return (
    <section className={s.sidebar}>
      <div className={s.title}>
        Categories
      </div>
      <nav>
        <ul className={s.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink to={`/categories/${id}`} className={({ isActive }) =>
                `${s.link} ${isActive ? s.active : ""}`
              }>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={s.footer}>
        <a href="/help" target='_blank' className={s.link}>Help</a>
        <a href="/terms" target='_blank' className={s.link} style={{ textDecoration: "underline" }}>Terms & Conditions</a>
      </div>
    </section>
  )
}

export default Sidebar