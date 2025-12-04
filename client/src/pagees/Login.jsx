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
import { RouteSignUp } from "@/RouteNames";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col gap-4 ">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <div className="w-96">
        <Form {...form}>
          <form className="space-y-2 items-center justify-center flex flex-col shadow-md p-6 rounded-lg">
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
