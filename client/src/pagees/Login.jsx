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
import {useNavigate} from 'react-router-dom'
import { use } from "react";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate=useNavigate()
  const onSubmit = async(data) => {
    try{
      const response= await axios.post('http://localhost:5000/api/auth/login',data,{withCredentials:true})
      console.log(response)
      if(response.status===200){
        toast.success(response.data.message)
        navigate(RouteHome)
      }
    }catch(error){
      toast.error(error.response.data.message)
      console.log('login error', error)
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col gap-4 ">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <div className="w-96">
        <Form {...form}>
          <form className="space-y-2 items-center justify-center flex flex-col shadow-md p-6 rounded-lg" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your Email"
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
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your password"
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
            <div className="flex justify-center items-center gap-2">
              <p>Don't have an account?</p>
              <Link to={RouteSignUp} className="text-blue-500">
                Sign Up
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
