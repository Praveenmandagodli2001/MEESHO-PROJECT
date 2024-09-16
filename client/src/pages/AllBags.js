import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../components/Navbar"
import TopSection from '../components/TopSection';
import { filterAllBags} from '../actions/productActions';
import FooterSection from '../components/FooterSection';
const AllBags = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterAllBags());
  }, [dispatch]);

  return (<>
  <Navbar/>
    <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>Silk Sarees</h5>
       
        <TopSection products={filteredProducts}/>
      </div>
      <FooterSection/>
  </> )}

export default AllBags
