import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { TCar } from "@/types";
import { Edit, Trash2 } from "lucide-react";

interface CarTableRowProps extends TCar {}

const CarRow: React.FC<CarTableRowProps> = ({
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
          <Button
            title="Delete Car"
            disabled={status === "unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
          >
            <Trash2 size={16} />
          </Button>
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
