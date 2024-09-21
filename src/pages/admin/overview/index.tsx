import DashboardSectionTitle from "@/components/dashboard-section-title";
import OverviewCard from "@/components/overview-card";
import { Banknote, Car, UsersRound } from "lucide-react";
import { AiOutlineBook } from "react-icons/ai";
import OverviewBarChart from "./overview-barchart";

interface IProps {}

const adminOverview = [
  {
    icon: <AiOutlineBook size={32} />,
    count: 40,
    label: "Total Bookings",
  },
  {
    icon: <Car size={32} />,
    count: 5,
    label: "Available Cars",
  },
  {
    icon: <Banknote size={32} />,
    count: 12000,
    label: "Total Revenue",
  },
  {
    icon: <UsersRound size={32} />,
    count: 28,
    label: "Canceled Bookings",
  },
];

const Overview: React.FC<IProps> = () => {
  return (
    <>
      <DashboardSectionTitle title="Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid grid-cols-2 gap-4">
          {adminOverview.map((item, index) => (
            <OverviewCard key={index} {...item} />
          ))}
        </div>
        <OverviewBarChart />
      </div>
    </>
  );
};

export default Overview;
