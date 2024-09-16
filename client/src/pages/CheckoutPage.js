import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { setCurrentProduct } from '../actions/setCurrentProduct';
const CheckoutPage = () => {
 let dispatch=useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate('/billingPage');
  };


  let handleImageClick=(product)=>{
    dispatch(setCurrentProduct(product));  
    navigate(`/details/`);
  }
  return (
    <div className="container mt-5">
      <Navbar />
      <h3 className="border-bottom py-2 mb-3">Checkout Details</h3>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-8">
          <h4>Your Items</h4>
          {cartItems.map((item) => (
            <div className="row border-bottom py-3" key={item.id}>
              <div className="col-md-9 d-flex">
                <img src={item.image} alt={item.title} style={{ width: "40px", height: "40px",cursor:"pointer" }} 
                 onClick={() => handleImageClick(item)}/>
                <h6 className="ps-3">{item.title}</h6>
              </div>
              <div className="col-md-1 text-end">{item.price.toFixed(1)}</div>
              <div className="col-md-1 text-end">{item.qty || 1}</div>
              <div className="col-md-1 text-end">{(item.price * (item.qty || 1)).toFixed(1)}</div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="shadow p-4">
            <h4>Order Summary</h4>
            <p>Subtotal: {totalPrice.toFixed(2)}</p>
            <p>Delivery Charges: Free</p>
            <h5>Total: {totalPrice.toFixed(2)}</h5>
            <button className="btn btn-primary"onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
