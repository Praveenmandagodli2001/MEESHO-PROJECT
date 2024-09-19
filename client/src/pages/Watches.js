import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import WatchesSection from '../components/WatchesSection';
import FooterSection from '../components/FooterSection';

const Watches = () => {
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

  // Filter products by subCategory 'watches'
  const filteredWatches = productsList.filter(product => product.subCategory === 'watches');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Watches</h5>
        <WatchesSection products={filteredWatches} />
      </div>
      <FooterSection />
    </>
  );
};

export default Watches;
