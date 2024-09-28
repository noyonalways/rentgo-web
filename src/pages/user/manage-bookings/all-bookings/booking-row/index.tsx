import { TableCell, TableRow } from "@/components/ui/table";
import { TBooking } from "@/types";
import CancelBookingModal from "../cancel-booking-modal";
import UpdateBookingModal from "../update-booking-modal";

interface BookingTableRowProps {
  booking: TBooking;
  onCancel: () => void;
}

const BookingRow: React.FC<BookingTableRowProps> = ({ booking, onCancel }) => {
  return (
    <TableRow>
      <TableCell>{booking.car.name}</TableCell>
      <TableCell>{new Date(booking.bookingDate).toDateString()}</TableCell>
      <TableCell>{booking.startTime}</TableCell>
      <TableCell>{booking.endTime ? booking.endTime : "N/A"}</TableCell>
      <TableCell>{booking.status}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <CancelBookingModal onCancel={onCancel} status={booking.status} />

          <UpdateBookingModal status={booking.status} id={booking._id} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
