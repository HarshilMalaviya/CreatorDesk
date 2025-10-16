import { NavLink } from "react-router";
import { Bell } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const navLinks = [
    { title: "Create", path: "/calendar/create" },
    { title: "Calendar", path: "/calendar" },
    { title: "Team", path: "/calendar/team" },
    { title: "Analytics", path: "/calendar/analytics" },
  ];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height]">
      <nav className="flex items-center justify-between bg-background px-6 py-3 shadow-sm border-b w-full">
        {/* Navlinks */}
        <NavigationMenu>
          <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mx-5 data-[orientation=vertical]:h-5"
            />
          <NavigationMenuList className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <NavLink to={link.path}>{link.title}</NavLink>
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
    </header>
  );
};

export default Navbar;
