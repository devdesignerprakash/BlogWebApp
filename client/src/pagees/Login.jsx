import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/AuthSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RouteHome, RouteSignUp } from "@/RouteNames";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/config/configFirebase";


const Login = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, data, { withCredentials: true })
      console.log(response)
      if (response.status === 200) {
        toast.success(response.data.message)
        navigate(RouteHome)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.log('login error', error)
    }
  };
  //google login
  const googleLogin=async()=>{
    const googleResponse= await signInWithPopup(auth,provider)
   
    const {email,displayName,photoURL}=googleResponse.user
    const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/google-login`,{email,fullName:displayName,profileImage:photoURL},{withCredentials:true})
    if(response.status===200){
      toast.success(response.data.message)
      navigate(RouteHome)
    }
  }
  return (
     <div className="flex justify-center items-center h-screen w-screen bg-gray-50">
    <div className="w-96 bg-white p-8 rounded-xl shadow-md space-y-6">
      
      <h1 className="text-2xl font-bold text-center">Login</h1>

      {/* Google Login Button */}
      <Button
        variant="ghost"
        className="w-full flex items-center justify-center gap-3 border rounded-full py-2 hover:bg-gray-100"
        onClick={()=>googleLogin()}
      >
        <FcGoogle size={28} />
        <span className="text-base font-medium text-gray-600">
          Login with Google
        </span>
      </Button>

      {/* Divider */}
      <div className="flex items-center justify-center gap-2">
        <hr className="w-1/3 border-gray-300" />
        <span className="text-gray-500 text-sm">OR</span>
        <hr className="w-1/3 border-gray-300" />
      </div>

      {/* Email/Password Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Don’t have an account?</span>{" "}
        <Link to={RouteSignUp} className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Login;
