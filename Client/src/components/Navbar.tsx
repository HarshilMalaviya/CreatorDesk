import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell } from "lucide-react";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const Navbar = () => {
  const navLinks = [
    { title: "Create", path: "/dashboard/create" },
    { title: "Calendar", path: "/dashboard" },
    { title: "Team", path: "/dashboard/team" },
    { title: "Analytics", path: "/dashboard/analytics" },
  ];

  return (
    <nav className="flex items-center justify-between bg-background px-6 py-3 shadow-sm border-b">

      {/* Navlinks */}
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.path}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link key={link.path} to={link.path}>
                  {link.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <Bell size={20} />
        <Avatar className="h-9 w-9 rounded-lg overflow-hidden">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="User"
            className="object-cover"
          />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
