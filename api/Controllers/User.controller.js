import bcrypt from "bcryptjs"
import User from "../Models/User.model.js"
// import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            ...req.body,
            password:hash
        })

        await newUser.save()
        res.status(200).send("User has been created")
    } catch (error) {
        console.log(error);
        
    }
}

export const login = async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return console.log("User not Found!!");
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect){
            return console.log("Password is Wrong!!");
        }
        // const token = jwt.sign({id:user._id},process.env.JWT)
        const {password, ...otherdetails}= user._doc
        res.status(200).json({details:{...otherdetails}})
    } catch (error) {
        console.log(error);
        
    }
}