import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

class AuthServices {
   static registerUser = async (data) => {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.log("register service error", error);
    }
  };
  static comparePassword=async(password,user)=>{
    try {
      const isMatch=await bcrypt.compare(password,user.password)
      return isMatch
    } catch (error) {
      console.log("compare password service error",error)
    }
  }
}

export default AuthServices;
