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

import loginImage from "../assets/undraw_real-time-sync_ro77.svg";
import logo from "../assets/logoipsum-396.svg";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen space-x-24 px-5">
      {/* Left side image */}
      <div className="hidden lg:block">
        <img src={loginImage} alt="Login Illustration" width={500} />
      </div>

      {/* Signup Card */}
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Create your account
          </CardTitle>
          <CardDescription>
            Join us today! Enter your details to sign up.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Buttons */}
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

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" placeholder="John" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Doe" required />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-4">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button
              variant="link"
              className="px-1"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </Button>
          </p>
          <p className="text-sm text-muted-foreground">
            Want to register as an agency?{" "}
            <Button
              variant="link"
              className="px-1"
              onClick={() => {
                navigate("/agency-registration");
              }}
            >
              Register here
            </Button>
          </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
