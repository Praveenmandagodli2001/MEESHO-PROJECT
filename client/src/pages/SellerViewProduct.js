import React, { useState, useEffect } from 'react';
import "../styles/productscard.css";
import SellerNavbar1 from '../components/SellerNavbar1';
import FooterSection from '../components/FooterSection';

const SellerViewProduct = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProductsOfSeller', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) })
    })
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SellerNavbar1 />

      <div className="d-flex flex-wrap justify-content-center">
        {data.map((product) => (
          <div key={product._id} className="product-card d-flex flex-column p-3 my-4 mx-3" style={{ height: '340px', maxWidth: '250px', maxHeight: '350px' }}>
            <div className="product h-50">
              <img src={product.images[0]} alt={product.title} className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="flex-grow-1 d-flex flex-column justify-content-between">
              <div className="title pt-2 pb-1" style={{ fontSize: "0.8rem", color: "#777" }}>
                {product.title}
              </div>

              <div className="price fs-5" style={{ color: "black" }}>
                <i className="fa-solid fa-indian-rupee-sign"></i> {product.price}
                <span style={{ fontSize: "0.6rem", color: "#777", paddingLeft: "4px" }}>onwards</span>
              </div>

              <span
                className="bg-light rounded-pill"
                style={{
                  fontSize: "0.7rem",
                  color: "#666",
                  width: "70px",
                  display: "inline-block",
                }}
              >
                Free delivery
              </span>

              <div className="rating bg-success rounded-pill text-white w-25 my-2">
                <span className="ps-1">{product.rating}</span>
                <span style={{ fontSize: "0.5rem", marginRight: "-10px" }}>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>

              <span style={{ fontSize: "0.7rem", color: "#666" }}>
                {product.reviews} <span className="ps-1">Reviews</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </>
  );
}

export default SellerViewProduct;
