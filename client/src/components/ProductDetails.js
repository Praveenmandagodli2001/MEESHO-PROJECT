import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartCount } from '../actions/CartActions';
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(product.images);
    let [selectedSize, setSelectedSize] = useState('')
    let navigate=useNavigate()

    const handleBuyNow = async() => {
        if (!selectedSize) {
            alert("Please select a size before adding to the cart")
            return;
        }

        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if(loggedInUser){

             // dispatch(AddToCart({ ...product, selectedSize }));
        fetch('http://localhost:3001/api/cart/cartAdd',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId: loggedInUser._id,
                productId: product._id,
                quantity:1,
                size:selectedSize,
                product,
                price:product.price
            })
        }).then(res=> res.json()).then((data) => {
            if(data.status === 'success'){
                alert(data.message)
                dispatch(updateCartCount(data.cart.items.length))
            }else{
                alert(data.message)
            }
        })

        }else{
            navigate('/signin')
        }

        dispatch(addToCart(product));
        alert("Item added to the cart");
    };



    let handleSizeSelection = (size) => {
        setSelectedSize(size)
    }
    const handleImageClick = (newImage) => {
        setMainImage(newImage);
    };

    useEffect(() => {
        setMainImage(product?.images[0])

    }, [product?.images])


    

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
                                            Rs{product.price}
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
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h3 className="card-title">Select Size</h3>
                                        {product.sizes.map((el, i) => (
                                            <span
                                                key={i}
                                                className={`btn rounded-btn m-2 ${el === selectedSize ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                                style={{ borderRadius: "40px" }}
                                                onClick={() => handleSizeSelection(el)}
                                            >
                                                {el}
                                            </span>
                                        ))}
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
