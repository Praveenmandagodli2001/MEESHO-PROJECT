// src/components/ProductSection.js

import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import ProductsCard from './ProductsCard';
import Products from '../api/data';

const ProductSection = () => {
  const { searchQuery, sortType, selectedGenders,selectedColors } = useSelector((state) => state.products);

  // Filter and sort products based on search query, category filter, and sort type
  let filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
  (selectedGenders.length === 0 || selectedGenders.includes(product.gender)) &&
    (selectedColors.length === 0 || selectedColors.includes(product.color))
  );
 

  if (sortType === 'lowToHigh') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'highToLow') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                    <ProductsCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <h4>No products found</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
