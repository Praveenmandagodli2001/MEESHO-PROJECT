let jwt = require('jsonwebtoken')
let User = require('../models/userModel.js')

let verify_token = async (req,res,next) =>{
   
    let token = req.header('Authorization')
    if(token){
        try{
            let payload = jwt.verify(token, process.env.KEY)
            let user = await User.findById(payload.id)
            req.user = user
            next()
        }
        catch{
            res.send('Invalid Token!!')
        }
    }
} 

module.exports = verify_token