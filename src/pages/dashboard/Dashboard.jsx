import DashboardLayout from "@/layouts/DashboardLayout";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-center">Dashboard - Home</h1>
    </DashboardLayout>
  );
};

export default Dashboard;
