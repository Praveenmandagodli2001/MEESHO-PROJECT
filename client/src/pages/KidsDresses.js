import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import KidsDressesSection from '../components/KidsDressesSection';
import FooterSection from '../components/FooterSection';

const KidsDresses = () => {
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
  // Filter products by subCategory 'kids dresses'
  const filteredKidsDresses = productsList.filter(product => product.subCategory === 'kidsdress');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Kids Dresses</h5>
        <KidsDressesSection products={filteredKidsDresses} />
      </div>
      <FooterSection />
    </>
  );
};

export default KidsDresses;
