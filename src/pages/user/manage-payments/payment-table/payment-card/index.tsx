import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface BookingCardProps {
  booking: Booking;
  onViewCar?: () => void;
  onPay?: () => void;
}

const PaymentCard: React.FC<BookingCardProps> = ({
  booking,
  onViewCar,
  onPay,
}) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{booking.carName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-sm font-medium">Date:</div>
          <div className="text-sm">{booking.date}</div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{booking.startTime}</div>
          <div className="text-sm font-medium">End Time:</div>
          <div className="text-sm">{booking.endTime}</div>
          <div className="text-sm font-medium">Price per Hour:</div>
          <div className="text-sm">৳{booking.pricePerHour}</div>
          <div className="text-sm font-medium">Total Hours:</div>
          <div className="text-sm">{booking.totalHours}</div>
          <div className="text-sm font-medium">Total Cost:</div>
          <div className="text-sm">৳{booking.totalCost}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{booking.status}</div>
        </div>
        <div className="space-x-2 justify-end flex">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
