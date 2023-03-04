import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../components/Home/Home';
import { ROUTES } from '../routes';
import SingleProduct from '../../components/Products/SingleProduct';
import Profile from '../../components/Profile/Profile';


const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes