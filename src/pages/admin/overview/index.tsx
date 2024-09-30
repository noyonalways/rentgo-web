import DashboardSectionTitle from "@/components/dashboard-section-title";
import BouncingLoader from "@/components/loader";
import OverviewCard from "@/components/overview-card";
import { useGetAllBookingsQuery } from "@/redux/features/admin/booking/bookingApi";
import { useGetAllUsersQuery } from "@/redux/features/admin/user/userApi";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { useGetTotalRevenueQuery } from "@/redux/features/payment/paymentApi";
import { Banknote, Car, UsersRound } from "lucide-react";
import { AiOutlineBook } from "react-icons/ai";
import OverviewBarChart from "./overview-barchart";

interface IProps {}

const Overview: React.FC<IProps> = () => {
  const { data: bookings, isFetching: loadingBookings } =
    useGetAllBookingsQuery(undefined);

  const { data: cars, isFetching: loadingCars } = useGetAllCarsQuery({
    status: "available",
  });

  const { data: users, isFetching: loadingUsers } =
    useGetAllUsersQuery(undefined);

  const { data: revenue, isFetching: loadingRevenue } =
    useGetTotalRevenueQuery();

  const isLoading =
    loadingBookings || loadingCars || loadingUsers || loadingRevenue;

  const adminOverview = [
    {
      icon: <AiOutlineBook size={32} />,
      count: bookings?.data?.length || 0,
      label: "Total Bookings",
    },
    {
      icon: <Car size={32} />,
      count: cars?.data?.length || 0,
      label: "Available Cars",
    },
    {
      icon: <Banknote size={32} />,
      count: revenue?.data?.totalRevenue || 0,
      label: "Total Revenue",
    },
    {
      icon: <UsersRound size={32} />,
      count: users?.data?.length || 0,
      label: "Total Users",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <BouncingLoader />
        <p className="ml-4">Loading overview...</p>
      </div>
    );
  }

  return (
    <>
      <DashboardSectionTitle title="Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          {adminOverview.map((item, index) => (
            <OverviewCard key={index} {...item} />
          ))}
        </div>
        <OverviewBarChart
          totalBookings={bookings?.data?.length || 0}
          availableCars={cars?.data?.length || 0}
          totalRevenue={revenue?.data?.totalRevenue || 0}
          totalUsers={users?.data?.length || 0}
        />
      </div>
    </>
  );
};

export default Overview;
