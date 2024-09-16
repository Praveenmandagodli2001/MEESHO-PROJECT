import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import { filterShoes } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
import ShoesSection from '../components/ShoesSection';
const Shoes = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterShoes());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <ShoesSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Shoes
