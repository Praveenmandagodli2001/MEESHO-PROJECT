import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import { filterSanitizers } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
import Sanitizersection from '../components/SanitizersSection';
const Sanitizers = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterSanitizers());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <Sanitizersection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Sanitizers
//  dispatch(filterSilkSarees());