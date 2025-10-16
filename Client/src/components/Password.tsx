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
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router";
import { Slack } from "lucide-react";

const Password = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-2">
        <div className="flex justify-center items-center">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Slack />
            </div>
          </div>
        <CardTitle className="text-2xl font-bold">Password</CardTitle>
        <CardDescription>
          Enter password to keep your account safe
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
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

      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => {
            navigate("/agency-registration/owner-details");
          }}
        >
          <HiArrowNarrowLeft /> Previous
        </Button>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default Password;
