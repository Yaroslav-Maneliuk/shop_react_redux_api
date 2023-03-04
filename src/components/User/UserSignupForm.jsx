import React from 'react'
import s from "./User.module.css"
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';

const UserSignupForm = ({ closeForm,toggleCurrentFormType }) => {
  const dispatch = useDispatch()
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };

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

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.group}>
          <input
            placeholder='Your email'
            type="email"
            name="email"
            value={values.email}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.group}>
          <input
            placeholder='Your name'
            type="name "
            name="name"
            value={values.name}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.group}>
          <input
            placeholder='Your password'
            type="password"
            name="password"
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.group}>
          <input
            placeholder='Your avatar'
            type="avatar"
            name="avatar"
            value={values.avatar}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.link} onClick={()=>toggleCurrentFormType("login")}>I already heave an account</div>

        <button type='submit' className={s.submit}>Create an account</button>
      </form>
    </div>
  )
}

export default UserSignupForm