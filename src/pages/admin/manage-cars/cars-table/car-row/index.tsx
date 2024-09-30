import { TableCell, TableRow } from "@/components/ui/table";
import { TCar } from "@/types";
import DeleteCarModal from "../../delete-car-modal";
import UpdateCarModal from "../../update-car-modal";

interface CarTableRowProps extends TCar {}

const CarRow: React.FC<CarTableRowProps> = ({
  _id,
  name,
  model,
  year,
  pricePerHour,
  color,
  status,
}) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{model}</TableCell>
      <TableCell>{year}</TableCell>
      <TableCell>{pricePerHour}</TableCell>
      <TableCell>{color}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <DeleteCarModal status={status} id={_id} />

          <UpdateCarModal status={status} id={_id} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CarRow;
