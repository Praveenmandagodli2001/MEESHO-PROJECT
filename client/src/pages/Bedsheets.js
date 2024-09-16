import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import { filterbedsheets} from '../actions/productActions';
import FooterSection from '../components/FooterSection';
import BedSheetsSection from '../components/BedSheetsSection';
const Bedsheets = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterbedsheets());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <BedSheetsSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default Bedsheets
