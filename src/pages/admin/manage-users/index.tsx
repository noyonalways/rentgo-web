import DashboardSectionTitle from "@/components/dashboard-section-title";
import UsersTable from "./users-table";

interface IProps {}

const ManageUsers: React.FC<IProps> = () => {
  return (
    <>
      <DashboardSectionTitle title="Manage Users" />
      <UsersTable />
    </>
  );
};

export default ManageUsers;
