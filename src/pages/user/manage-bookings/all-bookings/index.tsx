import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookingCard from "./booking-card";
import BookingRow from "./booking-row";

interface Booking {
  carName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface IProps {}

const AllBookings: React.FC<IProps> = () => {
  const bookings: Booking[] = [
    {
      carName: "Range Rover",
      date: "22/09/2024",
      startTime: "10:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    // Add more bookings here for demonstration
    {
      carName: "Tesla Model 3",
      date: "23/09/2024",
      startTime: "2:00 PM",
      endTime: "N/A",
      status: "Approved",
    },
    {
      carName: "BMW X5",
      date: "24/09/2024",
      startTime: "9:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    {
      carName: "BMW X5",
      date: "24/09/2024",
      startTime: "9:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    {
      carName: "BMW X5",
      date: "24/09/2024",
      startTime: "9:00 AM",
      endTime: "N/A",
      status: "Pending",
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
        {bookings.map((booking, index) => (
          <BookingCard
            key={index}
            booking={booking}
            onEdit={() => handleEdit(booking.carName)}
            onDelete={() => handleDelete(booking.carName)}
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
                onDelete={() => handleDelete(booking.carName)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBookings;
