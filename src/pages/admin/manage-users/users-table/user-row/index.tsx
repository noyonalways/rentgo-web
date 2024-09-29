import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { TUser } from "@/types";

interface IProps extends TUser {}

const UserRow: React.FC<IProps> = ({ name, email, role, status }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        {status === "active" ? (
          <Badge variant="secondary">{status}</Badge>
        ) : (
          <Badge variant="destructive">{status}</Badge>
        )}
      </TableCell>
      <TableCell>
        {status === "blocked" ? (
          <Button size="sm" variant="outline">
            Unblock
          </Button>
        ) : (
          <Button disabled={role === "admin"} size="sm" variant="outline">
            Block
          </Button>
        )}
        <Button
          disabled={role === "admin" || status === "blocked"}
          size="sm"
          variant="default"
          className="ml-2"
        >
          Make Admin
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
