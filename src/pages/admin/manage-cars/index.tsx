import DashboardSectionTitle from "@/components/dashboard-section-title";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import CarsTable from "./cars-table";

interface IProps {}

const ManageCars: React.FC<IProps> = () => {
  return (
    <div className="relative">
      <div className="mt-4">
        <DashboardSectionTitle title="Manage Cars" />
        <Button
          title="Add New Car"
          size={"sm"}
          className="absolute right-0 top-0 space-x-2"
        >
          <CirclePlus size={20} />
          <span>Add New</span>
        </Button>
      </div>
      <CarsTable />
    </div>
  );
};

export default ManageCars;
