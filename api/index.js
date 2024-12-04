import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import UserRoute from "./Routes/User.route.js"

const app = express()
dotenv.config()

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    }catch(err){
        throw err
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB is disconnected");
    
})
mongoose.connection.on("connected",()=>{
    console.log("MongoDB is connected");
    
})

//MIDDLEWARE
app.use(express.json())


app.use("/",UserRoute)
app.listen(9000,()=>{
    connect()
    console.log("Connected to Backend");
    
})