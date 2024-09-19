import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import DressesSection from '../components/DressesSection';
import FooterSection from '../components/FooterSection';

const Dresses = () => {
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
  // Filter products by subCategory 'dresses'
  const filteredDresses = productsList.filter(product => product.subCategory === 'dresses');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Dresses</h5>
        <DressesSection products={filteredDresses} />
      </div>
      <FooterSection />
    </>
  );
};

export default Dresses;
