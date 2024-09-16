import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ProductsCard from './ProductsCard';
import Sidebar from './Sidebar';


const Sanitizersection = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(fetchProducts()); // First fetch all products
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          {/* Sidebar on the left */}
          <div className="col-md-3">
            <Sidebar />
          </div>

          {/* Silk Saree Product Grid on the right */}
          <div className="col-md-9">
            <div className="row">
              {filteredProducts.map(product => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                  <ProductsCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sanitizersection;
