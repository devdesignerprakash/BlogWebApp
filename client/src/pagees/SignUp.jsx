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
import { SignUpSchema } from "@/schemas/AuthSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RouteLogin } from "@/RouteNames";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/config/configFirebase";

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate()
  async function onSubmit(values) {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, values, { withCredentials: true })
      if (response.status === 201) {
        toast.success(response.data.message)
      }
      navigate(RouteLogin)

    } catch (error) {
      toast.error(error.response.data.message)
      console.log("signup form submit error", error)
    };
  }
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

        <h1 className="text-2xl font-bold text-center">Create an Account</h1>

        {/* Google Auth Button */}
        <Button
          variant="ghost"
          className="w-full flex items-center justify-center gap-3 border rounded-full py-2 hover:bg-gray-100"
          onClick={googleLogin}
        >
          <FcGoogle size={28} />
          <span className="text-base font-medium text-gray-600">
            Sign up with Google
          </span>
        </Button>

        {/* OR Divider */}
        <div className="flex items-center justify-center gap-2">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your address"
                      {...field}
                      type="text"
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account?</span>{" "}
          <Link to={RouteLogin} className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
