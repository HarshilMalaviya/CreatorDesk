import { CirclePlus, Slack } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";

import CalendarNavMain from "./CalendarNavMain";

const items = [
  {
    name: "John Doe",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_johndoeinsta" },
      { icon: FaFacebook, username: "_Johndoefacebook" },
      { icon: FaYoutube, username: "_johndoeyoutube" },
      { icon: FaLinkedin, username: "_johndoelinkedin" },
    ],
  },
  {
    name: "Robert Oppenheimer",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_robertinsta" },
      { icon: FaFacebook, username: "_robertfacebook" },
      { icon: FaYoutube, username: "_robertyoutube" },
      { icon: FaLinkedin, username: "_robertlinkedin" },
    ],
  },
  {
    name: "Esther Howard",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_estherinsta" },
      { icon: FaFacebook, username: "_estherfacebook" },
      { icon: FaYoutube, username: "_estheryoutube" },
      { icon: FaLinkedin, username: "_estherlinkedin" },
    ],
  },
  {
    name: "Cameron Williamson",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_cameroninsta" },
      { icon: FaFacebook, username: "_cameronfacebook" },
      { icon: FaYoutube, username: "_cameronyoutube" },
      { icon: FaLinkedin, username: "_cameronlinkedin" },
    ],
  },
  {
    name: "Kenn Williamson",
    url: "https://github.com/evilrabbit.png",
    subItems: [
      { icon: FaInstagram, username: "_kenninsta" },
      { icon: FaFacebook, username: "_kennfacebook" },
      { icon: FaYoutube, username: "_kennyoutube" },
      { icon: FaLinkedin, username: "_kennlinkedin" },
    ],
  },
];

const CalendarSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Slack />
              </div>
              <span className="truncate font-medium text-lg">CreatorDesk</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent>
        <CalendarNavMain items={items} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <Button variant="outline" size="sm">
          <CirclePlus />
          <span className="group-data-[collapsible=icon]:hidden">
            Add brand
          </span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CalendarSidebar;
