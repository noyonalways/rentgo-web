import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TCar } from "@/types";
import { Edit, Trash2 } from "lucide-react";

interface CarTableRowProps extends TCar {}

const CarCard: React.FC<CarTableRowProps> = ({
  name,
  model,
  year,
  pricePerHour,
  color,
  status,
}) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">Model:</div>
          <div className="text-sm">{model}</div>
          <div className="text-sm font-medium">Year:</div>
          <div className="text-sm">{year}</div>
          <div className="text-sm font-medium">Price per hour:</div>
          <div className="text-sm">{pricePerHour}</div>
          <div className="text-sm font-medium">Color:</div>
          <div className="text-sm">{color}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{status}</div>
        </div>
        <div className="flex space-x-2 mt-4 justify-end">
          <Button
            disabled={status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
          >
            <Trash2 size={16} />
          </Button>
          <Button
            disabled={status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
          >
            <Edit size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
