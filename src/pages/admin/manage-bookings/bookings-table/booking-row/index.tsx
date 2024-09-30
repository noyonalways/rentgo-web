import { TableCell, TableRow } from "@/components/ui/table";
import { TBooking } from "@/types";
import ApproveBookingModal from "../approve-booking-modal";
import CancelBookingModal from "../cancel-booking-modal";

interface IProps extends TBooking {}

const BookingRow: React.FC<IProps> = ({
  _id,
  car,
  bookingDate,
  startTime,
  endTime,
  status,
  user,
}) => {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{car.name}</TableCell>
      <TableCell>{new Date(bookingDate).toDateString()}</TableCell>
      <TableCell>{startTime}</TableCell>
      <TableCell>{endTime ? endTime : "N/A"}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <CancelBookingModal id={_id} status={status} />
          <ApproveBookingModal id={_id} status={status} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
