import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HomeKitchenSection from '../components/HomeKitchenSection';
import FooterSection from '../components/FooterSection';

const HomeKitchen = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [loading]);

  // Filter products by subCategory 'home-kitchen'
  const filteredHomeKitchen = productsList.filter(product => product.subCategory === 'homekitchen');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Home & Kitchen</h5>
        <HomeKitchenSection products={filteredHomeKitchen} />
      </div>
      <FooterSection />
    </>
  );
};

export default HomeKitchen;
