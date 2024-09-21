import DashboardSectionTitle from "@/components/dashboard-section-title";
import BookingsTable from "./bookings-table";

interface IProps {}

const ManageBookings: React.FC<IProps> = () => {
  return (
    <>
      <DashboardSectionTitle title="Manage Bookings" />
      <BookingsTable />
    </>
  );
};

export default ManageBookings;
