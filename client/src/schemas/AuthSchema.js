import {z} from 'zod'

export const LoginSchema=z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(8,"Password must be at least 8 characters long")
})

export const SignUpSchema=z.object({
    fullName:z.string().min(3,"Name must be at least 3 characters long"),
    email:z.string().email("Invalid email address"),
    phoneNumber:z.string().min(10,"Phone number must be at least 10 characters long").max(10,"Phone number must be at most 10 characters long"),
    address:z.string().min(10,"Address must be at least 10 characters long"),
    password:z.string().min(8,"Password must be at least 8 characters long"),
    confirmPassword:z.string().min(8,"Confirm Password must be at least 8 characters long").refine((val)=>val===password,"Passwords do not match")  
})