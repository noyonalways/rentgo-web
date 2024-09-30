import DashboardSectionTitle from "@/components/dashboard-section-title";
import AddNewCarModal from "./add-new-car-modal";
import CarsTable from "./cars-table";

interface IProps {}

const ManageCars: React.FC<IProps> = () => {
  return (
    <div className="relative">
      <div className="mt-4">
        <DashboardSectionTitle title="Manage Cars" />

        {/* add new car modal */}
        <AddNewCarModal />
      </div>
      <CarsTable />
    </div>
  );
};

export default ManageCars;
