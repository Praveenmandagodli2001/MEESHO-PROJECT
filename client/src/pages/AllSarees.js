import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSarees } from '../actions/productActions';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const AllSarees = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterSarees());
  }, [dispatch]);

  return (
    <>
      <Navbar/>
      
      <div style={{ marginTop: "150px" }}>
      <h5 className='ps-4'>All Sarees</h5>
        <ProductList products={filteredProducts} />
      </div>
      <FooterSection/>
    </>
  );
};

export default AllSarees;
