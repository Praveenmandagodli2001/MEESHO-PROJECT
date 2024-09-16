import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import DressesSection from '../components/DressesSection';
import { filterDresses } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const Dresses = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterDresses());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <DressesSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Dresses
//  dispatch(filterSilkSarees());