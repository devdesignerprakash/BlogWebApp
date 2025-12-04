import User from "../models/user.model";

class AuthControllers{
    static register=async(req,res)=>{
        try {
            const {fullName,email,phoneNumber,address,password}=req.body;
            const existUser= await User.findOne({email})

            if(existUser){
                return res.status(400).json({message:"User already exists"})
            }

        } catch (error) {

        }
    }

    
}

export default new AuthControllers();