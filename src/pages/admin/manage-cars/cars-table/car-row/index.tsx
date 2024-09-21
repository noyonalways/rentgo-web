import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";

interface Car {
  carName: string;
  model: string;
  year: string;
  pricePerHour: number;
  color: string;
  status: string;
}

interface CarTableRowProps {
  car: Car;
  onEdit: () => void;
  onDelete: () => void;
}

const CarRow: React.FC<CarTableRowProps> = ({ car, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{car.carName}</TableCell>
      <TableCell>{car.model}</TableCell>
      <TableCell>{car.year}</TableCell>
      <TableCell>{car.pricePerHour}</TableCell>
      <TableCell>{car.color}</TableCell>
      <TableCell>{car.status}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Button
            title="Delete Car"
            disabled={car.status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onDelete}
          >
            <Trash2 size={20} />
          </Button>
          <Button
            title="Edit Car"
            disabled={car.status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onEdit}
          >
            <Edit size={16} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CarRow;
