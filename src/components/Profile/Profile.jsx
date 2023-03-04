import React from 'react'
import s from "./Profile.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(({ user }) => user)

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  })

  React.useEffect(() => {
    if (!currentUser) return
    setValues(currentUser)
    console.log(currentUser)
  }, [currentUser])

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  };
  return (
    <section className={s.profile}>
      {!currentUser ? (<span></span>)
        : (
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
            <button type='submit' className={s.submit}>Update</button>
          </form>
        )}
    </section>
  )
}

export default Profile