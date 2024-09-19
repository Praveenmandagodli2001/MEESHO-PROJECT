import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import {  incrementQty, decrementQty } from '../actions/CartActions';
import Navbar from '../components/Navbar';
import { setCurrentProduct } from '../actions/setCurrentProduct';
import {updateCartCount} from "../actions/CartActions"

const CartPage = () => {


  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let handleRemove = (id, size) => {
    fetch('http://localhost:3001/api/cart/removeFromCart',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          userId:JSON.parse(localStorage.getItem('loggedInUser'))._id,
          productId: id,
          size: size
      })
  }).then((res) => res.json())
  .then((data) => {
      if(data.status === 'success'){
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length))
          alert("Item removed from cart")
      }else{
          alert(data.message)
      }
  }).catch((err) => console.log(err))
    // dispatch(removeFromCart(id)); // Dispatch the action to remove the item
  };




  const handleCheckout = () => {
    navigate('/checkoutPage'); 
  };

  const handleImageClick = async (productId) => {                   
    fetch('http://localhost:3001/api/products/getProductById', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId: productId, // This is the actual product ID
        })
    }).then(res => res.json()).then((data) => {
        if(data.success){
            dispatch(setCurrentProduct(data.product));
            navigate(`/details/`); // Navigate to the product details page
        } else {
           alert(data.message);
        }
    }).catch((err) => console.log(err));
  };
  
  

  const handleIncrement = (id) => {
    // dispatch(incrementQty(id));
    fetch('http://localhost:3001/api/cart/incrementItem',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          userId:JSON.parse(localStorage.getItem('loggedInUser'))._id,
          productId: id,
          // size: size
      })
  }).then((res) => res.json())
  .then((data) => {
      if(data.status === 'success'){
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length))
          alert("quantity increased")
      }else{
        alert(data.message)
         
      }
  }).catch((err) => console.log(err))
  };

  const handleDecrement = (id) => {
    // dispatch(decrementQty(id));

    fetch('http://localhost:3001/api/cart/decrementItem',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          userId:JSON.parse(localStorage.getItem('loggedInUser'))._id,
          productId: id,
          // size: size
      })
  }).then((res) => res.json())
  .then((data) => {
      if(data.status === 'success'){
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length))
         alert('quantity decreased')
      }else{
          alert(data.message)
      }
  }).catch((err) => console.log(err))
  };




//fetching data backend to frontend
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  
  // If user is not logged in, redirect to login or handle it
  if (!loggedInUser) {
    alert("User is not logged in");
    navigate('/signin'); // You can redirect to a login page if you have one
    return;
  }

  const userId = JSON.parse(loggedInUser)._id;

  fetch('http://localhost:3001/api/cart/fetchCart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 'success') {
        setCartItems(data.cart.items);
        setTotalPrice(data.cart.totalPrice);
        dispatch(updateCartCount(data.cart.items.length));
      } else {
        alert(data.message);
      }
    })
    .catch((err) => console.log(err));
}, [dispatch, navigate]);



  // const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

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
                <div className="row border-bottom py-3 align-items-center" key={item._id}>
                  <div className='col-md-8 d-flex align-items-center'>
                    <div className='d-flex flex-column align-items-start'>
                      <img
                        src={item.details.image}
                        alt={item.title}
                        style={{ width: "40px", height: "40px", cursor: "pointer" }}
                        onClick={() => handleImageClick(item.productId)}
                      />
                      <button 
                        onClick={() => handleRemove(item.id, item.size)} // Call the remove function on click
                        className='btn btn-link text-danger p-0 mt-2'
                      >
                        Remove
                      </button>
                    </div>
                    <h6 className='ps-3'>{item.details.name}</h6>
                  </div>
                  <div className='col-md-2 text-end'>{item.price.toFixed(1)}</div>
                  <div className='col-md-1 text-end'>
                    <div className="d-flex justify-content-center align-items-center">
                      <button 
                        onClick={() => handleDecrement(item._id)} 
                        className="btn btn-outline-secondary btn-sm px-2"
                        disabled={item.qty <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity || 1}</span>
                      <button 
                        onClick={() => handleIncrement(item._id)} 
                        className="btn btn-outline-secondary btn-sm px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='col-md-1 text-end'>
                    {(item.price * (item.quantity || 1)).toFixed(1)} 
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
