import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

interface Booking {
  carName: string;
  date: string;
  startTime: string;
  endTime: string;
  pricePerHour: number;
  totalHours: number;
  totalCost: number;
  status: string;
}

interface BookingRowProps {
  booking: Booking;
  onViewCar?: () => void;
  onPay?: () => void;
}

const PaymentRow: React.FC<BookingRowProps> = ({
  booking,
  onViewCar,
  onPay,
}) => {
  return (
    <TableRow>
      <TableCell>{booking.carName}</TableCell>
      <TableCell>{booking.date}</TableCell>
      <TableCell>{booking.startTime}</TableCell>
      <TableCell>{booking.endTime}</TableCell>
      <TableCell>৳{booking.pricePerHour}</TableCell>
      <TableCell>{booking.totalHours} hrs</TableCell>
      <TableCell>৳{booking.totalCost}</TableCell>
      <TableCell>
        <Badge variant="outline">{booking.status}</Badge>
      </TableCell>
      <TableCell className="space-x-2">
        <Link to={"/"} onClick={onViewCar}>
          <Button variant={"outline"} size={"sm"}>
            View Car
          </Button>
        </Link>
        <Button
          disabled={booking.status !== "Completed"}
          size={"sm"}
          onClick={onPay}
        >
          Pay
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PaymentRow;
