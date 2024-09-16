import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import { filterTops } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
import AllBagsSection from '../components/AllBagsSection';
const Tops = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterTops());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <AllBagsSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Tops
//  dispatch(filterSilkSarees());