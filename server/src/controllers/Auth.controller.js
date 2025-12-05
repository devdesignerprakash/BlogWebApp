import User from "../models/user.model.js"
import AuthServices from "../services/Auth.services.js";
import { generateToken } from "../utils/generateToken.js";
import { globalErrorHandler } from "../utils/globalErrorHandler.js";

class AuthControllers {
    register = async (req, res, next) => {
        try {
            const { email, phoneNumber } = req.body;
            const existUser = await User.findOne({ $or: [{ email }, { phoneNumber }] })

            if (existUser) {
                return next(globalErrorHandler(409, "User already exists"))
            }
            const newUser = await AuthServices.registerUser(req.body)
            return res.status(201).json({ message: "User registered successfully", newUser })

        } catch (error) {
            next(globalErrorHandler(500, error.message))
            console.log("register controller error", error)
        }
    }
    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const existUser = await User.findOne({ email })
            if (!existUser) {
                return next(globalErrorHandler(404, "User not found"))
            }
            const passwordMatch = await AuthServices.comparePassword(password, existUser)
            if (!passwordMatch) {
                return next(globalErrorHandler(401, "Invalid credentials"))
            }
            const token = generateToken(existUser._id, existUser.role)
            res.cookie("token", token, {
                httpOnly: true,      // JS cannot read it → safer
                secure: process.env.NODE_ENV === "production", // HTTPS only in prod
                sameSite: "strict",  // block cross-site cookie sending
                path: "/",           // cookie available to the whole site
                maxAge: 24 * 60 * 60 * 1000, // 7 days
            });
            const { password: _, ...safeUser } = existUser.toObject();

            return res.status(200).json({ message: "User logged in successfully", user: safeUser })
        } catch (error) {
            console.log("login controller error", error)
            return next(globalErrorHandler(500, error.message))

        }
    }
}

export default new AuthControllers();