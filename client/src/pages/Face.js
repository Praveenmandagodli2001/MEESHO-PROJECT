import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import FaceSection from '../components/FaceSection';
import { filterFace } from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const Face = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterFace());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <FaceSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Face
//  dispatch(filterSilkSarees());