import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import FooterSection from '../components/FooterSection';
import TshirtsSection from '../components/TshirtsSection';

const TShirts = () => {
  // State to store fetched products
  const [productsList, setProductsList] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((data) => setProductsList(data.products))
      .catch((err) => console.log(err));
  }, []);

  // Filter products by subCategory 'tshirts'
  const filteredTshirts = productsList.filter(product => product.subCategory === 'tshirts');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <h5 className='ps-4'>T-Shirts</h5>
        <TshirtsSection products={filteredTshirts} />
      </div>
      <FooterSection />
    </>
  );
};

export default TShirts;
