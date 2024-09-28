import DashboardSectionTitle from "@/components/dashboard-section-title";
import BouncingLoader from "@/components/loader";
import OverviewCard from "@/components/overview-card";
import { useGetUserBookingQuery } from "@/redux/features/user/booking/bookingApi";
import { CircleCheck, CircleEllipsis, CircleX } from "lucide-react";
import { AiOutlineBook } from "react-icons/ai";
import LatestBookings from "./latest-bookings";
import OverviewBarChart from "./overview-barchart";

interface IProps {}

const Overview: React.FC<IProps> = () => {
  const { data: pendingBookings, isFetching: isPendingBookings } =
    useGetUserBookingQuery({ status: ["pending"] });

  const { data: completedBookings, isFetching: isCompletedBookings } =
    useGetUserBookingQuery({ status: ["completed"] });

  const { data: canceledBookings, isFetching: isCanceledBookings } =
    useGetUserBookingQuery({ status: ["canceled"] });

  const isLoading =
    isPendingBookings || isCompletedBookings || isCanceledBookings;

  const totalBookingsCount =
    (pendingBookings?.data?.length || 0) +
    (completedBookings?.data?.length || 0) +
    (canceledBookings?.data?.length || 0);

  const userOverview = [
    {
      icon: <AiOutlineBook size={32} />,
      count: totalBookingsCount,
      label: "Total Bookings",
    },
    {
      icon: <CircleEllipsis size={32} />,
      count: pendingBookings?.data?.length || 0,
      label: "Pending Bookings",
    },
    {
      icon: <CircleCheck size={32} />,
      count: completedBookings?.data?.length || 0,
      label: "Completed Bookings",
    },
    {
      icon: <CircleX size={32} />,
      count: canceledBookings?.data?.length || 0,
      label: "Cancelled Bookings",
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {userOverview.map((item, index) => (
            <OverviewCard key={index} {...item} />
          ))}
        </div>
        <OverviewBarChart
          total={totalBookingsCount}
          pending={pendingBookings?.data?.length || 0}
          completed={completedBookings?.data?.length || 0}
          cancelled={canceledBookings?.data?.length || 0}
        />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-6">Latest Bookings</h2>
        <LatestBookings />
      </div>
    </>
  );
};

export default Overview;
