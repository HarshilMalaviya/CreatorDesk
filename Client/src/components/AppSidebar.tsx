import {
  ChevronRight,
  CirclePlus,
  LayoutDashboard,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

import logo from "../assets/logoipsum-396.svg";

const items = [
  {
    name: "John Doe",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_johndoeinsta" },
      { icon: FaFacebook, username: "_Johndoefacebook" },
      { icon: FaYoutube, username: "_johndoeyoutube"},
      { icon: FaLinkedin, username: "_johndoelinkedin"}
    ],
  },
  {
    name: "Robert Oppenheimer",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_robertinsta" },
      { icon: FaFacebook, username: "_robertfacebook" },
      { icon: FaYoutube, username: "_robertyoutube"},
      { icon: FaLinkedin, username: "_robertlinkedin"}
    ],
  },
  {
    name: "Esther Howard",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_estherinsta" },
      { icon: FaFacebook, username: "_estherfacebook" },
      { icon: FaYoutube, username: "_estheryoutube"},
      { icon: FaLinkedin, username: "_estherlinkedin"}
    ],
  },
  {
    name: "Cameron Williamson",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_cameroninsta" },
      { icon: FaFacebook, username: "_cameronfacebook" },
      { icon: FaYoutube, username: "_cameronyoutube"},
      { icon: FaLinkedin, username: "_cameronlinkedin"}
    ],
  },
  {
    name: "Kenn Williamson",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_kenninsta" },
      { icon: FaFacebook, username: "_kennfacebook" },
      { icon: FaYoutube, username: "_kennyoutube"},
      { icon: FaLinkedin, username: "_kennlinkedin"}
    ],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" width={24} />
          <h1 className="text-xl font-semibold text-primary">CreatorDesk</h1>
        </div>
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full border">
                        <LayoutDashboard size={16} />
                      </div>
                      <span>All brand</span>
                    </div>
                    <SidebarMenuBadge>0</SidebarMenuBadge>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* collapsible submenus */}
              {items.map((item) => (
                <Collapsible key={item.name} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="h-full w-full justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="rounded-full overflow-hidden">
                            <AvatarImage
                              src={item.url}
                              alt="User"
                              className="object-cover"
                            />
                            <AvatarFallback>RA</AvatarFallback>
                          </Avatar>
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {/* Sub Items */}
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.username}>
                            <div className="flex items-center gap-2 py-1.5">
                              {<subItem.icon size={20} />}
                              <span>{subItem.username}</span>
                            </div>
                          </SidebarMenuSubItem>
                        ))}
                        <Button variant="outline" size="sm"><CirclePlus />Add more channels</Button>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4">
        <Button variant="outline" className="w-full flex items-center gap-2">
          <CirclePlus size={18} />
          Add brand
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
