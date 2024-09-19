import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BedSheetsSection from '../components/BedSheetsSection';
import FooterSection from '../components/FooterSection';

const Bedsheets = () => {
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

  // Filter products by subCategory 'bedsheets'
  const filteredBedsheets = productsList.filter(product => product.subCategory === 'bedsheets');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>Bed Sheets</h5>
        <BedSheetsSection products={filteredBedsheets} />
      </div>
      <FooterSection />
    </>
  );
};

export default Bedsheets;
