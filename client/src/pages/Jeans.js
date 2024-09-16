import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import JeansSections from '../components/JeansSections';
import { filterJeans } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const Jeans = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterJeans());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <JeansSections products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Jeans
//  dispatch(filterSilkSarees());