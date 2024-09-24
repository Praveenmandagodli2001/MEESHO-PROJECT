import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"

function CheckoutPage() {

    let [cart, setCart] = useState()
    let [cartItems, setCartItems] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/api/order/fetchOrderByUserId', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('userToken')
            },
            body: JSON.stringify({
                userId: JSON.parse(localStorage.getItem('loggedInUser'))._id
            })
        }).then((res) => res.json())
            .then((data) => {
                if (data.status === 'success') {
                    console.log(data.order);
                    
                    let cartIds = data.order.map((order)=>order.cart_id)
                    fetch('http://localhost:3001/api/cart/fetchCartById', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':localStorage.getItem('userToken')
                        },
                        body: JSON.stringify({
                            cartId: cartIds
                        })
                    }).then((res) => res.json())
                        .then((res) => {
                            if (res.status === 'success') {
                                // setCart(res.cart)
                                let items = []
                                res.cart.forEach((cart) => {
                                    items=[...items, ...cart.items]
                                });
                                setCartItems(items)
                            }
                            // console.log(cart)
                            // console.log(cartItems);


                        }).catch((err) => console.log(err))
                }
            }).catch((err) => console.log(err))


    }, [])
    console.log('Authorization Token:', localStorage.getItem('userToken'))

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row mb-4 py-4" style={{ marginTop: "150px" }}>
                    {cartItems.map(item => (
                        <div className="row border py-3 mb-4 shadow-sm rounded" key={item._id} style={{ backgroundColor: '#f9f9f9' }}>
                            <div className='col-md-5 d-flex align-items-center'>
                                <img src={item.details.image} alt={item.details.title} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} />
                                <div className="ps-4">
                                    <h6 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333' }}>{item.details.name}</h6>
                                    <h5 className='btn btn-light' style={{ padding: '5px 15px', fontSize: '1rem', backgroundColor: '#ffe0e6', color: '#d12d43', border: 'none', marginTop: '10px' }}>Quantity: {item.quantity}</h5>
                                </div>
                            </div>
                            <div className='col-md-3 d-flex align-items-center'>
                                <p className='text-center rounded-pill text-success' style={{ backgroundColor: '#e8f5e9', padding: '5px 15px', fontSize: '1rem' }}>Ready for delivery</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CheckoutPage
