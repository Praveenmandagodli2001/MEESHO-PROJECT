import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MobileSection from '../components/MobileSection';
import FooterSection from '../components/FooterSection';

const Mobile = () => {
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

  // Filter products by category 'mobile'
  const filteredMobiles = productsList.filter(product => product.subCategory === 'mobile');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Mobile Phones</h5>
        <MobileSection products={filteredMobiles} />
      </div>
      <FooterSection />
    </>
  );
};

export default Mobile;
