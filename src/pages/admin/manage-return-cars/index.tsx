import DashboardSectionTitle from "@/components/dashboard-section-title";
import ReturnCarsTable from "./return-cars-table";

interface IProps {}

const ManageReturnCars: React.FC<IProps> = () => {
  return (
    <>
      <DashboardSectionTitle title="Manage Return Cars" />
      <ReturnCarsTable />
    </>
  );
};

export default ManageReturnCars;
