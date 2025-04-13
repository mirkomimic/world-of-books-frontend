import DashboardHeader from "@/components/custom/DashboardHeader";
import DashboardSidebar from "@/components/custom/DashboardSidebar";
import ThemeToggle from "@/components/custom/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { BookOpenText } from "lucide-react";
import { Link } from "react-router";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Toaster richColors position="top-right" />
        <DashboardSidebar />
        <div className="w-full p-4">
          <SidebarInset className="rounded-lg">
            <DashboardHeader />
            <main className="min-h-screen p-4">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
