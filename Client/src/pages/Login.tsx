import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router";

import loginImage from "../assets/undraw_secure-login_m11a.svg";
import logo from "../assets/logoipsum-396.svg";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen space-x-24 px-5">
      {/* Login Card */}
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Welcome back! Enter your details below.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Login */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <FcGoogle /> Google
            </Button>
            <Button variant="outline" className="flex-1">
              <FaApple /> Apple
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2">
            <hr className="w-full" />
            <span className="text-muted-foreground text-xs">OR</span>
            <hr className="w-full" />
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <Button
                variant="link"
                className="px-1 h-auto"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </p>
            <p className="text-sm text-muted-foreground">
              Want to register as an agency?{" "}
              <Button variant="link" className="px-1" onClick={() => {
                navigate("/agency-registration");
              }}>
                Register here
              </Button>
            </p>
          </div>
        </CardFooter>
      </Card>

      {/* Side Image (hidden on mobile) */}
      <div className="hidden lg:block ml-12">
        <img src={loginImage} alt="Login Illustration" width={500} />
      </div>
    </div>
  );
};

export default Login;
