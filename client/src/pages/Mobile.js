import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import {filterMobile } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
import MobileSection from '../components/mobileSection';
const Mobile = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterMobile());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <MobileSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Mobile
