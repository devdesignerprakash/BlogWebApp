import User from "../models/user.model.js"
import AuthServices from "../services/Auth.services.js";

class AuthControllers{
  register=async(req,res)=>{
        try {
            const {email}=req.body;
            const existUser= await User.findOne({email})

            if(existUser){
                next(globalErrorHandler(409,"User already exists"))
            }
            const newUser= await AuthServices.registerUser(req.body)
            newUser.save();
            return res.status(201).json({message:"User registered successfully",newUser})

        } catch (error) {
            next(globalErrorHandler(500,error.message))
            console.log("register controller error",error)
        }
    }
}

export default new AuthControllers();