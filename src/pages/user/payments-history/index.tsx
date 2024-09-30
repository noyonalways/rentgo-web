import DashboardSectionTitle from "@/components/dashboard-section-title";
import PaymentsHistoryTable from "./payments-history-table";

interface IProps {}

const PaymentsHistory: React.FC<IProps> = () => {
  return (
    <div>
      <DashboardSectionTitle title="Payments History" />
      <PaymentsHistoryTable />
    </div>
  );
};

export default PaymentsHistory;
