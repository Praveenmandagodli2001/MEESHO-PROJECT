import React from 'react'
import "../styles/productscard.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../actions/setCurrentProduct'
const ProductsCard = ({ product }) => {

  let dispatch = useDispatch()
  let handleCurrentProduct = () => {
    dispatch(setCurrentProduct(product))
  }


  return (<>
    <Link className='text-decoration-none' to={{ pathname: "/details/" }} onClick={handleCurrentProduct}>
      <div className="product-card d-flex flex-column p-3" style={{ height: '340px', maxHeight: '350px' }}>
        <div className="product h-50">
          <img src={product.images[0]} alt="" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="flex-grow-1 d-flex flex-column justify-content-between">
          <div className="title pt-2 pb-1" style={{ fontSize: "0.8rem", color: "#777" }}>
            {product.title}
          </div>

          <div className="price fs-5" style={{ color: "black" }}>
            {/* <i className="fa-solid fa-indian-rupee-sign"></i> */}
           Rs {product.price}
            <span style={{ fontSize: "0.6rem", color: "#777", paddingLeft: "4px" }}>onwards</span>
            {product.stock === 0 ? <p className="btn btn-danger text-light btn-sm rounded-pill">sold out</p>:null }
          </div>

          <span
            className="bg-light rounded-pill"
            style={{
              fontSize: "0.7rem",
              color: "#666",
              width: "70px",  // Fixed width
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
            {/* {product.z} */}
            <span className="ps-1">{product.reviews} Reviews</span>
          </span>
        </div>
      </div>
    </Link>


  </>)
}

export default ProductsCard
