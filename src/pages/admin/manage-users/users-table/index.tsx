import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserCard from "./user-card";
import UserRow from "./user-row";

interface IProps {}

interface User {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Blocked";
}

const users: User[] = [
  {
    name: "John Doe",
    email: "joh.doe@gmail.com",
    role: "User",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    role: "User",
    status: "Blocked",
  },
];

const UsersTable: React.FC<IProps> = () => {
  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            role={user.role}
            status={user.status}
          />
        ))}
      </div>

      {/* Desktop view */}
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
            {users.map((user, index) => (
              <UserRow
                key={index}
                name={user.name}
                email={user.email}
                role={user.role}
                status={user.status}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersTable;
