import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(product.images);

    const handleBuyNow = () => {
        dispatch(addToCart(product));
        alert("Item added to the cart");
    };

    const handleImageClick = (newImage) => {
        setMainImage(newImage);
    };

    useEffect(()=>{
        setMainImage(product?.images[0])
         
     },[product?.images])

    return (
        <>
            <Navbar />
            <div style={{ marginTop: "16%" }}>
                <section id="product-info" className="container mt-5 pe-5" style={{ marginLeft: "-3%" }}>
                    <div className="row">
                        {/* Small Images */}
                        <div className="col-12 col-md-2 d-flex justify-content-center flex-md-column align-items-center ps-5 small-image-container">
    <div className="small-images mb-2 border">
        <img
            src={product?.images[2]}
            alt="Small View 1"
            className="img-container"
            onClick={() => handleImageClick(product?.images[2])}
        />
    </div>
    <div className="small-images mb-2">
        <img
            src={product?.images[1]}
            alt="Small View 2"
            className="img-fluid"
            onClick={() => handleImageClick(product?.images[1])}
        />
    </div>
    <div className="small-images mb-2">
        <img
            src={product?.images[0]}
            alt="Small View 3"
            className="img-fluid"
            onClick={() => handleImageClick(product?.images[0])}
        />
    </div>
</div>


                        {/* Main Image */}
                        <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
                            <div className="item-image-parent text-center">
                                <div className="item-image-main mb-4 rounded">
                                    <img
                                        src={mainImage}
                                        alt="Main Product"
                                        className="img-fluid"
                                        style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="item-info-parent border rounded-2 p-3 w-100">
                                {/* Main Info */}
                                <div className="main-info">
                                    <h6 style={{ color: "#666" }}>{product.title}</h6>
                                    <p className="text-success">
                                        <span id="price" className="fw-bold fs-4 text-dark">
                                            <i className="fa-solid fa-indian-rupee-sign"></i>{product.price}
                                        </span>
                                    </p>
                                </div>

                                {/* Rating */}
                                <div className="rating bg-success rounded-pill text-white mb-5 d-inline-block px-3">
                                    <span>{product.rating}</span>
                                    <span style={{ fontSize: '0.6rem', marginLeft: '3px' }}>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>

                                {/* Free Delivery */}
                                <div className="mt-1">
                                    <span
                                        className="bg-light rounded-pill d-inline-block"
                                        style={{ fontSize: "0.7rem", color: "#666", padding: '5px 10px' }}
                                    >
                                        Free delivery
                                    </span>
                                </div>

                                {/* Size Selection */}
                                <div className="item-info-parent border rounded ps-2 my-3">
                                    <h6>Selecting Size</h6>
                                    <div className="size-buttons d-flex gap-2 mt-2">
                                        <button className="btn btn-outline-dark rounded-pill">S</button>
                                        <button className="btn btn-outline-dark rounded-pill">M</button>
                                        <button className="btn btn-outline-dark rounded-pill">L</button>
                                        <button className="btn btn-outline-dark rounded-pill">XL</button>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="item-info-parent border rounded-2 ps-2 my-3">
                                    <h6>Product Details</h6>
                                    <p className="my-0" style={{ color: "#666" }}>Name: {product.title}</p>
                                    <p className="my-0" style={{ color: "#666" }}>Category: {product.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-3 d-flex justify-content-start justify-content-md-center">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center w-100">
                    <button className="btn btn-primary text-primary bg-white me-md-5 mb-2 mb-md-0" onClick={handleBuyNow}>
                        Add to Cart
                    </button>
                    <Link className="text-decoration-none" to="/cartpage">
                        <button className="btn btn-success bg-primary" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>

            <hr className='horizontal-line my-4' />
        </>
    );
};

export default ProductDetails;
