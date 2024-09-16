import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllSarees from "../pages/AllSarees"
import Tops from '../pages/Tops'
import SilkSarees from "../pages/SilkSarees"
import Dresses from "../pages/Dresses"
import Skirts from "../pages/Skirts"
import TShirts from "../pages/TShirts"
import Details from '../pages/Details'
import LandingPage from "../pages/LandingPage"
import Jeans from "../pages/Jeans"
import KidsDresses from "../pages/KidsDresses"
import Watches from "../pages/Watches"
import HomeKitchen from "../pages/HomeKitchen"
import Face from "../pages/Face"
import Bedsheets from "../pages/Bedsheets"
import Sanitizers from "../pages/Sanitizers"
import AllBags from "../pages/AllBags"
import Shoes from "../pages/Shoes"
import Mobile from "../pages/Mobile"
import CartPage from '../pages/CartPage'
import CheckoutPage from "../pages/CheckoutPage"
import BillingPage from '../pages/BillingPage'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from "../pages/ResetPassword"
const AllRouters = () => {
  return (<>
    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
        <Route path='/allSarees' element={<AllSarees />} />
        <Route path='/silkSarees' element={<SilkSarees />} />
        <Route path='/dresses' element={<Dresses />} />
        <Route path='/tops' element={<Tops />} />
        <Route path='/skirts' element={<Skirts />} />
        <Route path='/tShirts' element={<TShirts />} />
        <Route path='/details' element={<Details />} />
        <Route path='/jeans' element={<Jeans />} />
        <Route path='/KidsDresses' element={<KidsDresses />} />
        <Route path='/watches' element={<Watches />} />
        <Route path='/homeKitchen' element={<HomeKitchen />} />
        <Route path='/face' element={<Face />} />
        <Route path='/bedsheets' element={<Bedsheets />} />
        <Route path='/sanitizers' element={<Sanitizers />} />
        <Route path='/allBags' element={<AllBags />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/checkoutPage' element={<CheckoutPage />} />
        <Route path='/billingPage' element={<BillingPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
      </Route>
    </Routes>
  </>)
}

export default AllRouters
