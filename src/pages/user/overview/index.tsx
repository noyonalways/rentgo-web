import DashboardSectionTitle from "@/components/dashboard-section-title";
import OverviewCard from "@/components/overview-card";
import { CircleCheck, CircleEllipsis, CircleX } from "lucide-react";
import { AiOutlineBook } from "react-icons/ai";
import LatestBookings from "./latest-bookings";
import OverviewBarChart from "./overview-barchart";

interface IProps {}

const userOverview = [
  {
    icon: <AiOutlineBook size={32} />,
    count: 10,
    label: "Total Bookings",
  },
  {
    icon: <CircleEllipsis size={32} />,
    count: 5,
    label: "Pending Bookings",
  },
  {
    icon: <CircleCheck size={32} />,
    count: 4,
    label: "Completed Bookings",
  },
  {
    icon: <CircleX size={32} />,
    count: 1,
    label: "Canceled Bookings",
  },
];

const Overview: React.FC<IProps> = () => {
  return (
    <>
      <DashboardSectionTitle title="Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid grid-cols-2 gap-4">
          {userOverview.map((item, index) => (
            <OverviewCard key={index} {...item} />
          ))}
        </div>
        <OverviewBarChart />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-6">Latest Bookings</h2>
        <LatestBookings />
      </div>
    </>
  );
};

export default Overview;
