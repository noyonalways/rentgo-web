import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CarCard from "./car-card";
import CarRow from "./car-row";

interface Car {
  carName: string;
  model: string;
  year: string;
  pricePerHour: number;
  color: string;
  status: string;
}

interface IProps {}

const CarsTable: React.FC<IProps> = () => {
  const bookings: Car[] = [
    {
      carName: "Audi A6",
      model: "AV25",
      year: "2022",
      pricePerHour: 400,
      color: "White",
      status: "Available",
    },
  ];

  const handleEdit = (carName: string) => {
    console.log(`Editing booking for: ${carName}`);
  };

  const handleDelete = (carName: string) => {
    console.log(`Deleting booking for: ${carName}`);
  };

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {bookings.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            onEdit={() => handleEdit(car.carName)}
            onDelete={() => handleDelete(car.carName)}
          />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Car Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Price per hour</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((car, index) => (
              <CarRow
                key={index}
                car={car}
                onEdit={() => handleEdit(car.carName)}
                onDelete={() => handleDelete(car.carName)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CarsTable;
