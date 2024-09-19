import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TopSection from '../components/TopSection';
import FooterSection from '../components/FooterSection';

const Tops = () => {
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
  // Filter products by subCategory 'tops'
  const filteredTops = productsList.filter(product => product.subCategory === 'tops');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Tops</h5>
        <TopSection products={filteredTops} />
      </div>
      <FooterSection />
    </>
  );
};

export default Tops;
