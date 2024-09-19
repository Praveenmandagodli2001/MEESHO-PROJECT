// import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"



function Orders() {



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
                    fetch('http://localhost:3001/api/cart/fetchCartById', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':localStorage.getItem('userToken')
                           
                        },
                        body: JSON.stringify({
                            cartId: data.order.cart_id
                        })
                    }).then((res) => res.json())
                        .then((res) => {
                            if (res.status === 'success') {
                                setCart(res.cart)
                                setCartItems(res.cart.items)
                            }
                            // console.log(cart)
                            // console.log(cartItems);


                        }).catch((err) => console.log(err))
                }
            }).catch((err) => console.log(err))


    }, [])
    console.log("hhhhhhhhh",localStorage.getItem('userToken'));

    return (
        <>
            <Navbar />
            <div className="container mt-4" >
                <div className="row mb-4 py-4 " >
                    {cartItems.map(item => (


                        <div className="row border py-4" key={item._id}>
                            <div className='col-md-5 d-flex'>
                                <img src={item.details.image} alt={item.details.title} style={{ width: "80px", height: "80px" }} />
                                <div>
                                    <h6 className='ps-3'>{item.details.name}</h6>
                                    <h4 className='ms-5 btn-light btn'>quantity : {item.quantity}</h4>
                                    {/* <span>quantity:{item.quantity}</span> */}
                                </div>


                            </div>


                            <div className='col-md-1'>
                                <p className='text-center rounded-pill text-muted'>ready for delivery</p>
                            </div>





                        </div>
                    ))}



                    <hr />
                </div>
            </div>

        </>
    )
}

export default Orders