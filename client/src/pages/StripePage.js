import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect, useState} from "react";




const stripePromise = loadStripe('pk_test_51Q0ntfP0jyLCZMlRauw4yadK6gl63OiS6mu2sNWxbgvBRHElosmxyd4nHrqeYJSJUnWUxu8fV0tT8DWcmz8ViprD0079zBOeF5');


function StripePage({fullname,email,address,city, pincode}) {

 
  const [cart,setCart] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3001/api/cart/fetchCart',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            userId:JSON.parse(localStorage.getItem('loggedInUser'))._id
        })
    }).then((res) => res.json())
    .then((data) => {
        if(data.status === 'success'){
         
            setCart(data.cart)
          
            
        }else{
            alert(data.message)
        }
    }).catch((err) => console.log(err))
 
},[])

  const handleCheckout = async () => {
    const stripe = await stripePromise;

  
    const response = await fetch('http://localhost:3001/api/cart/makePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        cart:cart

      }) 
    });

    const { id: sessionId } = await response.json();

    
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
    }
  };



  return (
    <button onClick={handleCheckout} disabled={!fullname || !email || !address || !city || !pincode} className='btn btn-primary w-100 m-2'>
      Checkout with Stripe
    </button>
  );
}
 
export default StripePage;