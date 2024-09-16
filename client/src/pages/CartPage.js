import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../actions/CartActions';
import Navbar from '../components/Navbar';
import { setCurrentProduct } from '../actions/setCurrentProduct';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate('/checkoutPage'); 
  };

  const handleImageClick = (product) => {
    dispatch(setCurrentProduct(product));  
    navigate(`/details/`);    
  };

  const handleIncrement = (id) => {
    console.log("increentingggggggggg",id);
    
    dispatch(incrementQty(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQty(id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <h3 className='border-bottom py-2 mb-3'>Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <h4>No items in the cart</h4>
        ) : (
          <div className="row">
            <div className="col-md-8 border">
              <div className="row border-bottom py-2">
                <div className='col-md-8'>
                  <h6>Product</h6>
                </div>
                <div className='col-md-2 text-end'>
                  <h6>Price</h6>
                </div>
                <div className='col-md-1 text-end'>
                  <h6>Qty</h6>
                </div>
                <div className='col-md-1 text-end'>
                  <h6>Total</h6>
                </div>
              </div>
              {cartItems.map((item) => (
                <div className="row border-bottom py-3 align-items-center" key={item.id}>
                  <div className='col-md-8 d-flex align-items-center'>
                    <div className='d-flex flex-column align-items-start'>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "40px", height: "40px", cursor: "pointer" }}
                        onClick={() => handleImageClick(item)}
                      />
                      <button 
                        onClick={() => handleRemove(item.id)} 
                        className='btn btn-link text-danger p-0 mt-2'
                      >
                        Remove
                      </button>
                    </div>
                    <h6 className='ps-3'>{item.title}</h6>
                  </div>
                  <div className='col-md-2 text-end'>{item.price.toFixed(1)}</div>
                  <div className='col-md-1 text-end'>
                    <div className="d-flex justify-content-center align-items-center">
                      <button 
                        onClick={() => handleDecrement(item.id)} 
                        className="btn btn-outline-secondary btn-sm px-2"
                        disabled={item.qty <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.qty || 1}</span>
                      <button 
                        onClick={() => handleIncrement(item.id)} 
                        className="btn btn-outline-secondary btn-sm px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='col-md-1 text-end'>
                    {(item.price * (item.qty || 1)).toFixed(1)}
                  </div>
                </div>
              ))}
              <div className="row py-3">
                <div className='col-md-12 text-end'>
                  <h5>Total: {totalPrice.toFixed(2)}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shadow p-4">
                <p>Subtotal: {totalPrice.toFixed(2)}</p>
                <p>Delivery Charges: Free</p>
                <p>Total: {totalPrice.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
