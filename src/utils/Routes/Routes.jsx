import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../routes';
import Home from '../../components/Home/Home';
import SingleProduct from '../../components/Products/SingleProduct';
import Profile from '../../components/Profile/Profile';
import SinglrCategory from '../../components/Categories/SinglrCategory';
import Cart from '../../components/Cart/Cart';


const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SinglrCategory />} />
      <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  )
}

export default AppRoutes