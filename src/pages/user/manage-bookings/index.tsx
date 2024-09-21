import DashboardSectionTitle from "@/components/dashboard-section-title";
import AllBookings from "./all-bookings";

interface IProps {}

const ManageBookings: React.FC<IProps> = () => {
  return (
    <div>
      <DashboardSectionTitle title="Manage Bookings" />
      <AllBookings />
    </div>
  );
};

export default ManageBookings;
