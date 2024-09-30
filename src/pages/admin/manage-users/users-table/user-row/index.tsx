import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { TUser } from "@/types";
import BlockUserModal from "../block-user-modal";
import MakeAdminModal from "../make-admin-modal";
import UnblockUserModal from "../unblock-user-modal";

interface IProps extends TUser {}

const UserRow: React.FC<IProps> = ({ name, email, role, status, _id }) => {
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
          <UnblockUserModal role={role} id={_id} />
        ) : (
          <BlockUserModal role={role} id={_id} />
        )}

        <MakeAdminModal role={role} id={_id} status={status} />
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
