import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookingCard from "./booking-card";
import BookingRow from "./booking-row";

interface IProps {}

interface Booking {
  userName: string;
  carName: string;
  date: string;
  startTime: string;
  status: string;
}

const ReturnCarsTable: React.FC<IProps> = () => {
  const bookings: Booking[] = [
    {
      userName: "John Doe",
      carName: "Toyota Corolla",
      date: "2021-10-10",
      startTime: "10:00 AM",
      status: "Approved",
    },
    {
      userName: "Jane Doe",
      carName: "Toyota Camry",
      date: "2021-10-11",
      startTime: "11:00 AM",
      status: "Approved",
    },
  ];

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {bookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead>Car Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <BookingRow key={index} booking={booking} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReturnCarsTable;
