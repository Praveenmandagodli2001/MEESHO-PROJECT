import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import HomeKitchenSection from '../components/TopSection';
import { filterHomeKitchen } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const Tops = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterHomeKitchen());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <HomeKitchenSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Tops
//  dispatch(filterSilkSarees());