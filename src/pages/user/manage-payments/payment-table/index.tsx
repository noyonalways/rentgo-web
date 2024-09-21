import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaymentCard from "./payment-card";
import PaymentRow from "./payment-row";

interface Booking {
  carName: string;
  date: string;
  pricePerHour: number;
  totalHours: number;
  totalCost: number;
  startTime: string;
  endTime: string;
  status: string;
}

const PaymentTable: React.FC = () => {
  const bookings: Booking[] = [
    {
      carName: "Range Rover",
      date: "22/09/2024",
      startTime: "9:00 AM",
      endTime: "12:00 PM",
      status: "Approved",
      totalHours: 3,
      pricePerHour: 50,
      totalCost: 150,
    },
    {
      carName: "Tesla Model S",
      date: "20/09/2024",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      status: "Pending",
      totalHours: 4,
      pricePerHour: 70,
      totalCost: 280,
    },
    {
      carName: "BMW X5",
      date: "18/09/2024",
      startTime: "11:00 AM",
      endTime: "1:00 PM",
      status: "Completed",
      totalHours: 2,
      pricePerHour: 60,
      totalCost: 120,
    },
  ];

  const handleViewCar = (carName: string) => {
    console.log(`Viewing car: ${carName}`);
  };

  const handlePay = (carName: string) => {
    console.log(`Paying for car: ${carName}`);
  };

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {bookings.map((booking, index) => (
          <PaymentCard
            key={index}
            booking={booking}
            onViewCar={() => handleViewCar(booking.carName)}
            onPay={() => handlePay(booking.carName)}
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
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Price per hour</TableHead>
              <TableHead>Total Hours</TableHead>
              <TableHead>Total Cost</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <PaymentRow
                key={index}
                booking={booking}
                onViewCar={() => handleViewCar(booking.carName)}
                onPay={() => handlePay(booking.carName)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentTable;
