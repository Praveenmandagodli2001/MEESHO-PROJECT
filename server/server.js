const express= require("express")
const dotenv=require("dotenv")
const cors=require("cors") 
const cookieParser=require("cookie-parser")
const userRoutes=require("./routes/userRoutes")
const sellerRoutes = require('./routes/sellerRoutes.js');
const connectDb=require("./config/database")
const app=express()
app.use(express.json())
dotenv.config()
connectDb()



app.use(cors({
    origin:process.env.FRONTEND_URI,
    credentials:true,
}))

app.use(cookieParser())



app.use("/user",userRoutes)
app.use('/seller', sellerRoutes);


app.listen(process.env.PORT,()=>console.log(`port is running on ${process.env.PORT}`))