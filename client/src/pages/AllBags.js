import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import AllBagsSection from '../components/AllBagsSection';
import FooterSection from '../components/FooterSection';

const AllBags = () => {
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

  // Filter products by category 'all bags'
  const filteredAllBags = productsList.filter(product => product.subCategory === 'allbags');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>All Bags</h5>
        <AllBagsSection products={filteredAllBags} />
      </div>
      <FooterSection />
    </>
  );
};

export default AllBags;
