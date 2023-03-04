import React from 'react'
import s from "./User.module.css"
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';

const UserLoginForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch()
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(loginUser(values));
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
        Log In
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
            placeholder='Your password'
            type="password"
            name="password"
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
            required />
        </div>

        <div className={s.link} onClick={() => toggleCurrentFormType("signup")}>Create an account</div>

        <button type='submit' className={s.submit}>Login</button>
      </form>
    </div>
  )
}

export default UserLoginForm