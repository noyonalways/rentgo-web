import ProfileAvatar from "@/components/profile-avatar";
import Sidebar from "@/components/shared/sidebar";

import { Outlet } from "react-router-dom";

interface IProps {}

const DashboardLayout: React.FC<IProps> = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="pt-24 lg:pt-6 lg:pb-6 px-2 lg:px-8 w-auto lg:w-full">
        <div className="hidden lg:flex justify-end ">
          <ProfileAvatar align="end" />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
