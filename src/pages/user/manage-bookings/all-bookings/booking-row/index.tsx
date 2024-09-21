import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Edit, XCircle } from "lucide-react";

interface Booking {
  carName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface BookingTableRowProps {
  booking: Booking;
  onEdit: () => void;
  onDelete: () => void;
}

const BookingRow: React.FC<BookingTableRowProps> = ({
  booking,
  onEdit,
  onDelete,
}) => {
  return (
    <TableRow>
      <TableCell>{booking.carName}</TableCell>
      <TableCell>{booking.date}</TableCell>
      <TableCell>{booking.startTime}</TableCell>
      <TableCell>{booking.endTime}</TableCell>
      <TableCell>{booking.status}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Button
            disabled={
              booking.status === "Approved" || booking.status === "Canceled"
            }
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onEdit}
          >
            <Edit size={16} />
          </Button>
          <Button
            disabled={
              booking.status === "Approved" || booking.status === "Canceled"
            }
            variant="outline"
            size="icon"
            className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
            onClick={onDelete}
          >
            <XCircle size={20} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
