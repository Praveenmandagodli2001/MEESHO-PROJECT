import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import SilkSareeSection from '../components/SilkSareeSection'
import { filterSilkSarees } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const SilkSarees = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterSilkSarees());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <SilkSareeSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default SilkSarees
//  dispatch(filterSilkSarees());