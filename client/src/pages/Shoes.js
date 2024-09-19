import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ShoesSection from '../components/ShoesSection';
import FooterSection from '../components/FooterSection';

const Shoes = () => {
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

  // Filter products by category 'shoes'
  const filteredShoes = productsList.filter(product => product.subCategory === 'shoes');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Shoes</h5>
        <ShoesSection products={filteredShoes} />
      </div>
      <FooterSection />
    </>
  );
};

export default Shoes;
