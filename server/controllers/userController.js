const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer=require("nodemailer")
const User = require("../models/userModel")


//signup logicsss
let signup = async (req, res) => {

    const { name, email, password, role } = req.body
    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ message: "user already exists" })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        name,
        email,
        password: hashPassword,
        role
    })
    await newUser.save()
    return res.json({ status: true, message: "record submit successfully" })
}



//signinnn logicsssss
let signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ status: false, message: "User is not registered" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ status: false, message: "Password is incorrect" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.KEY, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });  
    return res.status(200).json({ status: true, message: "Login successful", token });
};


//forgotPssword logicsssss
let forgotPassword=async(req,res)=>{
    const {email}=req.body
    try{
        const user=await User.findOne({email})
        if(!user){
            res.send({message:"user not registered"})
        }
        
        const token=jwt.sign({id:user._id}, process.env.KEY, { expiresIn: "10m" })

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'praveenmandagodli57@gmail.com',
              pass: 'vtud laob vkmp wbcr'
            }
          });
          
          let mailOptions = {
            from: 'praveenmandagodli57@gmail.com',
            to: email,
            subject: 'Reset password',
            text: `http://localhost:3000/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({message:"error sending email"})
            } else {
                return res.json({ status:true,message:"email sent"})
            }
          });


    }catch(err){
        console.log("error",err)
    }
}

let resetPassword=async(req,res)=>{
    const {token}=req.params
    const {password}=req.body
    try{
        const decoded=await jwt.verify(token,process.env.KEY)
        const id=decoded.id
        const hashPassword=await bcrypt.hash(password,10)
        await User.findByIdAndUpdate({_id:id},{password:hashPassword})
        return res.json({status:true,message:"updated password"})
    }catch(err){
        console.log("invalid token")
    }
}




module.exports = { signup, signin, forgotPassword, resetPassword }