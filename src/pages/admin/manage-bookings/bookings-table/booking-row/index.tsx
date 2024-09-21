import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";

interface Booking {
  userName: string;
  carName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface IProps {
  booking: Booking;
  onEdit: () => void;
  onCancel: () => void;
}

const BookingRow: React.FC<IProps> = ({ booking, onEdit, onCancel }) => {
  return (
    <TableRow>
      <TableCell>{booking.userName}</TableCell>
      <TableCell>{booking.carName}</TableCell>
      <TableCell>{booking.date}</TableCell>
      <TableCell>{booking.startTime}</TableCell>
      <TableCell>{booking.endTime}</TableCell>
      <TableCell>{booking.status}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Button
            title="Cancel Booking"
            disabled={booking.status === "Unavailable"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onCancel}
          >
            <XCircle size={20} />
          </Button>
          <Button
            title="Approve Booking"
            disabled={booking.status === "Approved"}
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onEdit}
          >
            <CheckCircle size={16} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
