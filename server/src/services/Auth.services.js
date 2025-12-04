import User from "../models/user.model.js";

class AuthServices {
   static registerUser = async (data) => {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.log("register service error", error);
    }
  };
  static loginUser=async(data)=>{
    try {

    } catch (error) {

    }
  }
}

export default AuthServices;
