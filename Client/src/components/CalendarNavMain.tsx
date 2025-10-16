import { ChevronRight, CirclePlus, LayoutDashboard } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface SocialItem {
  icon: React.ComponentType<{ size?: number }>;
  username: string;
}

interface SidebarItem {
  name: string;
  url: string;
  subItems: SocialItem[];
}

interface NavMainProps {
  items: SidebarItem[];
}

const CalendarNavMain = ({ items }: NavMainProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="group-data-[collapsible=icon]:space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-full">
              <div className="flex items-center group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full border">
                    <LayoutDashboard size={15} />
                  </div>
                  <span className="group-data-[collapsible=icon]:hidden font-medium">All brand</span>
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
                  <SidebarMenuButton className="h-full">
                    <div className="flex items-center gap-2 group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
                      <Avatar className="rounded-full overflow-hidden">
                        <AvatarImage
                          src={item.url}
                          alt="User"
                          className="object-cover"
                        />
                        <AvatarFallback>RA</AvatarFallback>
                      </Avatar>
                      <span className="group-data-[collapsible=icon]:hidden truncate font-medium">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {/* Sub Items */}
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.username}>
                        <div className="flex items-center gap-2 py-1.5 pl-2">
                          {<subItem.icon size={18} />}
                          <span className="truncate text-xs">{subItem.username}</span>
                        </div>
                      </SidebarMenuSubItem>
                    ))}
                    <Button variant="outline" size="sm">
                      <CirclePlus />
                      Add more channels
                    </Button>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default CalendarNavMain;
