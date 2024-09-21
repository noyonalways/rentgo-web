import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const CarCard: React.FC<CarTableRowProps> = ({ car, onEdit, onDelete }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{car.carName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">Model:</div>
          <div className="text-sm">{car.model}</div>
          <div className="text-sm font-medium">Year:</div>
          <div className="text-sm">{car.year}</div>
          <div className="text-sm font-medium">Price per hour:</div>
          <div className="text-sm">{car.pricePerHour}</div>
          <div className="text-sm font-medium">Color:</div>
          <div className="text-sm">{car.color}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{car.status}</div>
        </div>
        <div className="flex space-x-2 mt-4 justify-end">
          <Button
            disabled={car.status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onDelete}
          >
            <Trash2 size={20} />
          </Button>
          <Button
            disabled={car.status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onEdit}
          >
            <Edit size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
