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
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router";
import { Slack } from "lucide-react";

const OwnerDetails = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-2">
        <div className="flex justify-center items-center">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Slack />
            </div>
          </div>
        <CardTitle className="text-2xl font-bold">Owner Details</CardTitle>
        <CardDescription>Basic information about the owner</CardDescription>
      </CardHeader>

      <CardContent>
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
              placeholder="info@starmarketing.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              id="contact"
              type="tel"
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="panNumber">PAN Number</Label>
            <Input id="panNumber" placeholder="ABCDE1234F" required />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => {
            navigate("/agency-registration");
          }}
        >
          <HiArrowNarrowLeft /> Previous
        </Button>
        <Button
          onClick={() => {
            navigate("/agency-registration/password");
          }}
        >
          Next <HiArrowNarrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OwnerDetails;
