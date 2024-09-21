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
  endTime: string;
  status: string;
}

const BookingsTable: React.FC<IProps> = () => {
  const bookings: Booking[] = [
    {
      userName: "John Doe",
      carName: "Toyota Corolla",
      date: "2021-10-10",
      startTime: "10:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    {
      userName: "Jane Doe",
      carName: "Toyota Camry",
      date: "2021-10-11",
      startTime: "11:00 AM",
      endTime: "N/A",
      status: "Approved",
    },
  ];

  const handleEdit = (carName: string) => {
    console.log(`Editing booking for: ${carName}`);
  };

  const handleCancel = (carName: string) => {
    console.log(`Deleting booking for: ${carName}`);
  };

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {bookings.map((booking, index) => (
          <BookingCard
            key={index}
            booking={booking}
            onEdit={() => handleEdit(booking.carName)}
            onCancel={() => handleCancel(booking.carName)}
          />
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
              <BookingRow
                key={index}
                booking={booking}
                onEdit={() => handleEdit(booking.carName)}
                onCancel={() => handleCancel(booking.carName)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingsTable;
