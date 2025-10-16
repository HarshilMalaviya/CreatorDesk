import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";

import CalendarSidebar from "@/components/CalendarSidebar";
import Navbar from "@/components/Navbar";

const CalendarLayout = () => {
  return (
    <SidebarProvider className="flex h-screen">
      <CalendarSidebar />
      <SidebarInset className="flex flex-col w-full">
        <Navbar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default CalendarLayout;
