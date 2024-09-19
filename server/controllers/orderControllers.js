
let Order = require('../models/orders')

let orderAdd = async (req,res) =>{
    try {
        const { fullname, address, email, city, modeOfPayment,pincode, userId } = req.body;

        // Basic validation
        if (!fullname || !address || !email || !city || !modeOfPayment ||! pincode ||!userId) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new order document
        const order = new Order({
            fullname,
            address,
            email,
            city,
            pincode,
            modeOfPayment,
            userId
        });

        // Save the order to the database
        await order.save();

        // Send success response
        res.status(201).json({ status:'success', message: "Order created successfully", order });
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