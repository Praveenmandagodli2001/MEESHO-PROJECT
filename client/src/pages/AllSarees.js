import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import ProductList from '../components/ProductList';

const AllSarees = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((data) => setProductsList(data.products))
      .catch((err) => console.log(err));
  }, []);
  

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 400);
  },[loading])
  // Filter products by subCategory 'sarees'
  const filteredSarees = productsList.filter(product => product.subCategory === 'sarees')
  

  return (
    <>
      <Navbar />
      
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>All Sarees</h5>
        <ProductList products={filteredSarees} />
      </div>
      
      <FooterSection />
    </>
  );
};

export default AllSarees;
