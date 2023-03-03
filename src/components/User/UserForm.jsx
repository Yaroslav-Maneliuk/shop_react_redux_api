import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import s from "./User.module.css"
import UserSignupForm from './UserSignupForm';
import { toggleForm } from '../../features/user/userSlice';

const UserForm = () => {
  const dispatch = useDispatch()
  const { showForm } = useSelector(({ user }) => user)

  const closeForm = () => {
    dispatch(toggleForm(false))
  }

  return showForm ? (
    <>
      <div className={s.overlay} onClick={closeForm} />
      <UserSignupForm closeForm={closeForm} />
    </>
  ) : (
    <></>
  )
}

export default UserForm