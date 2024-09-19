import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sanitizersection from '../components/SanitizersSection';
import FooterSection from '../components/FooterSection';

const Sanitizers = () => {
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

  // Filter products by subCategory 'sanitizers'
  const filteredSanitizers = productsList.filter(product => product.subCategory === 'sanitizers');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Sanitizers</h5>
        <Sanitizersection products={filteredSanitizers} />
      </div>
      <FooterSection />
    </>
  );
};

export default Sanitizers;
