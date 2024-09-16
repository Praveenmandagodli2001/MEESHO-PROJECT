import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import KidsDressesSection from '../components/KidsDressesSection';
import { filterKidsDresses } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const Tops = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterKidsDresses());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <KidsDressesSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Tops
//  dispatch(filterSilkSarees());