
let Order = require('../models/orders')


let orderAdd = async (req,res) =>{
    try {
        const { cart, fullname, address, email, city,pincode, modeOfPayment, userId } = req.body;

        
        const existingOrder = await Order.findOne({ cart_id: cart._id });
        // Create a new order document
        
        if(!existingOrder){
            const order = new Order({
                fullname,
                address,
                email,
                city,
                picode,
                modeOfPayment : 'Cash on delivery',
                userId,
                cart_id: cart._id
            });

            await order.save();

        }
        res.status(201).json({ status:'success', message: "Order created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
    
}

let fetchOrderByUserId = async (req,res) =>{
  
  
   
    try {
        let {userId} = req.body
        let order = await Order.findOne({userId})
        
        
    
        if(!order){
            res.status(400).json({message:"order is empty"})
        }else{
            res.status(200).json({ status: 'success', order });
        }   
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' }); 
    }
   
   

}

module.exports = {orderAdd,fetchOrderByUserId}

