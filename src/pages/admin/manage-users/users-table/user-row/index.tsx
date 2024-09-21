import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

interface IProps {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Blocked";
}

const UserRow: React.FC<IProps> = ({ name, email, role, status }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        {status === "Active" ? (
          <Badge variant="secondary">{status}</Badge>
        ) : (
          <Badge variant="destructive">{status}</Badge>
        )}
      </TableCell>
      <TableCell>
        {status === "Blocked" ? (
          <Button size="sm" variant="outline">
            Unblock
          </Button>
        ) : (
          <Button size="sm" variant="outline">
            Block
          </Button>
        )}
        {role === "Admin" ? (
          <Button size="sm" variant="outline" className="ml-2">
            Remove Admin
          </Button>
        ) : (
          <Button
            disabled={status === "Blocked"}
            size="sm"
            variant="default"
            className="ml-2"
          >
            Make Admin
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
