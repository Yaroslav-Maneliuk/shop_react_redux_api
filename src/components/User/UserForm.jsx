import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import s from "./User.module.css"
import UserSignupForm from './UserSignupForm';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';
import UserLoginForm from './UserLoginForm';

const UserForm = () => {
  const dispatch = useDispatch()
  const { showForm, formType } = useSelector(({ user }) => user)

  const closeForm = () => {
    dispatch(toggleForm(false))
  }
  const toggleCurrentFormType = (type) => {
    dispatch(toggleFormType(type))
  }

  return showForm ? (
    <>
      <div className={s.overlay} onClick={closeForm} />
      {formType === "signup" ?
        <UserSignupForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} />
        :
        <UserLoginForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} />}
    </>
  ) : (
    <></>
  )
}

export default UserForm