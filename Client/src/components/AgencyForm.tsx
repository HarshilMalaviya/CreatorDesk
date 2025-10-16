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
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";
import { Slack } from "lucide-react";

const AgencyForm = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-2">
        <div className="flex justify-center items-center">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Slack />
            </div>
          </div>
        <CardTitle className="text-2xl font-bold">
          Register Your Agency
        </CardTitle>
        <CardDescription>
          Join our platform by registering your agency
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="agencyName">Agency Name</Label>
            <Input
              id="agencyName"
              type="text"
              placeholder="Star Marketing Solutions"
              required
            />
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
            <Label htmlFor="cinNumber">CIN Number</Label>
            <Input
              id="cinNumber"
              placeholder="L12345GJ2010PLC012345"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Andheri East, Mumbai, Maharashtra - 400069"
              required
            />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button
          onClick={() => {
            navigate("/agency-registration/owner-details");
          }}
        >
          Next <HiArrowNarrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AgencyForm;
