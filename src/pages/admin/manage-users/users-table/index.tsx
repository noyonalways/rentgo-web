import BouncingLoader from "@/components/loader";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllUsersQuery } from "@/redux/features/admin/user/userApi";
import UserCard from "./user-card";
import UserRow from "./user-row";

interface IProps {}

const UsersTable: React.FC<IProps> = () => {
  const { data, isFetching } = useGetAllUsersQuery({ sort: "role" });
  const users = data?.data;

  return (
    <>
      {users?.length === 0 ? (
        <p className="text-center">No data found</p>
      ) : (
        <>
          {isFetching ? (
            <div>
              <BouncingLoader />
            </div>
          ) : (
            <>
              <div className="md:hidden">
                {users?.map((user) => (
                  <UserCard {...user} key={user._id} />
                ))}
              </div>

              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users?.map((user) => (
                      <UserRow {...user} key={user._id} />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UsersTable;
