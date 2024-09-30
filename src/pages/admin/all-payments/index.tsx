import DashboardSectionTitle from "@/components/dashboard-section-title";
import PaymentsTable from "./payments-table";

interface IProps {}

const AllPayments: React.FC<IProps> = () => {
  return (
    <div>
      <DashboardSectionTitle title="All Payments" />
      <PaymentsTable />
    </div>
  );
};

export default AllPayments;
