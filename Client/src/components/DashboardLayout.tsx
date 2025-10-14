import { Outlet } from "react-router";
import { SidebarProvider } from "./ui/sidebar";

import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider className="flex h-screen">
      <AppSidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
