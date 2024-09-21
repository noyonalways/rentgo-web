import DashboardSectionTitle from "@/components/dashboard-section-title";
import PaymentTable from "./payment-table";

interface IProps {}

const ManagePayments: React.FC<IProps> = () => {
  return (
    <div>
      <DashboardSectionTitle title="Manage Payments" />
      <PaymentTable />
    </div>
  );
};

export default ManagePayments;
