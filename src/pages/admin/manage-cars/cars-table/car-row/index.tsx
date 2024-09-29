import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { TCar } from "@/types";
import { Edit } from "lucide-react";
import DeleteCarModal from "../../delete-car-modal";

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

          <Button
            title="Edit Car"
            disabled={status === "unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
          >
            <Edit size={16} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CarRow;
