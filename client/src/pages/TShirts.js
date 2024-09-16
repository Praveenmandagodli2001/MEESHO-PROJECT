import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import { filterTshirts } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
import TshirtsSection from '../components/TshirtsSection';
const TShirts = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterTshirts());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <TshirtsSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default TShirts
