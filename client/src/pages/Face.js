import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FaceSection from '../components/FaceSection';
import FooterSection from '../components/FooterSection';

const Face = () => {
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

  // Filter products by subCategory 'face'
  const filteredFace = productsList.filter(product => product.subCategory === 'face');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Face Products</h5>
        <FaceSection products={filteredFace} />
      </div>
      <FooterSection />
    </>
  );
};

export default Face;
