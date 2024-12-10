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
      <TableCell className="capitalize">
        {(status === "cancelled" && (
          <div className="text-sm px-4 bg-red-400 text-white inline-block rounded-full">
            {status}
          </div>
        )) ||
          (status === "pending" && (
            <div className="text-sm px-4 bg-yellow-400 inline-block rounded-full">
              {status}
            </div>
          )) ||
          (status === "approved" && (
            <div className="text-sm px-4 bg-blue-400 text-white inline-block rounded-full">
              {status}
            </div>
          )) ||
          (status === "completed" && (
            <div className="text-sm px-4 bg-green-400 text-white inline-block rounded-full">
              {status}
            </div>
          ))}
      </TableCell>
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
