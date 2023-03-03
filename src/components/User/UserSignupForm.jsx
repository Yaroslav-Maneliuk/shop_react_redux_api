import React from 'react'
import s from "./User.module.css"

const UserSignupForm = ({ closeForm }) => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className={s.wrapper}>
      <div className={s.close} onClick={closeForm}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={s.title}>
        Sign Up
      </div>

      <form className={s.form}>
        <div className={s.group}>
          <input
            placeholder='Your email'
            type="email"
            name="email"
            vlaue={values.email}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.group}>
          <input
            placeholder='Your name'
            type="name "
            name="name"
            vlaue={values.name}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.group}>
          <input
            placeholder='Your password'
            type="password"
            name="password"
            vlaue={values.password}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.group}>
          <input
            placeholder='Your avatar'
            type="avatar"
            name="avatar"
            vlaue={values.avatar}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.link}>I already heave an account</div>

        <button type='submit' className={s.submit}>Create an account</button>
      </form>
    </div>
  )
}

export default UserSignupForm