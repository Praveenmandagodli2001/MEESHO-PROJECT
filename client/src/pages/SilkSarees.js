import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SilkSareeSection from '../components/SilkSareeSection';
import FooterSection from '../components/FooterSection';

const SilkSarees = () => {
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


  // Filter products by subCategory 'silk sarees'
  const filteredSilkSarees = productsList.filter(product => product.subCategory === 'silksaree');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Silk Sarees</h5>
        <SilkSareeSection products={filteredSilkSarees} />
      </div>
      <FooterSection />
    </>
  );
};

export default SilkSarees;
