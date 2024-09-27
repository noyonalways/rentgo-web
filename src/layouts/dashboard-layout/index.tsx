import ProfileAvatar from "@/components/profile-avatar";
import Sidebar from "@/components/shared/sidebar";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { Outlet } from "react-router-dom";

interface IProps {}

const DashboardLayout: React.FC<IProps> = () => {
  const { data: currentUser } = useGetMeQuery(undefined);
  return (
    <section className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="pt-20 lg:pt-6 lg:pb-6 px-2 lg:px-8 w-auto lg:w-full">
        <div className="hidden lg:flex justify-end ">
          <ProfileAvatar
            align="end"
            profileImage={currentUser?.data?.profileImage}
            name={currentUser?.data?.name}
          />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
