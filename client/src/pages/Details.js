import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import ProductsCard from '../components/ProductsCard';
import Products from '../api/data'; 
import FooterSection from '../components/FooterSection';

const Details = () => {
  const product = useSelector((state) => state.currentProduct.product);

  
  const similarProducts = Products.filter(
    (item) =>
      item.id !== product.id && 
      item.gender === product.gender && 
      item.category === product.category 
  );

  return (
    <>
      <ProductDetails product={product} />
      
      <div className="container my-4">
        <h4 className='my-2'>Similar Products</h4>
        <div className="row">
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4 my-4" key={item.id}>
                <ProductsCard product={item} />
              </div>
            ))
          ) : (
            <p>No similar products found</p>
          )}
        </div>
      </div>
      <FooterSection/>
    </>
  );
};

export default Details;
