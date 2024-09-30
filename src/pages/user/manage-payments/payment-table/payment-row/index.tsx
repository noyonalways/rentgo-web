import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { TBooking } from "@/types";
import { Link } from "react-router-dom";

interface BookingRowProps {
  booking: TBooking;
  onPay?: () => void;
}

const PaymentRow: React.FC<BookingRowProps> = ({ booking, onPay }) => {
  return (
    <TableRow>
      <TableCell>{booking.car.name}</TableCell>
      <TableCell>{booking.bookingDate?.split("T")[0]}</TableCell>
      <TableCell>{booking.returnDate?.split("T")[0]}</TableCell>
      <TableCell>{booking.startTime}</TableCell>
      <TableCell>{booking.endTime}</TableCell>
      <TableCell>৳{booking.car.pricePerHour}</TableCell>
      <TableCell>{booking.totalHours} hrs</TableCell>
      <TableCell>৳{booking.totalCost}</TableCell>
      <TableCell>
        <Badge variant="outline">{booking.status}</Badge>
      </TableCell>
      <TableCell className="space-x-2">
        <Link to={`/cars/${booking.car._id}`}>
          <Button variant={"outline"} size={"sm"}>
            View Car
          </Button>
        </Link>
        <Button
          disabled={booking.paymentStatus === "paid"}
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
