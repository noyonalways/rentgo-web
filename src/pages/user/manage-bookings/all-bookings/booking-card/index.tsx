import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, XCircle } from "lucide-react";

interface Booking {
  carName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface BookingCardProps {
  booking: Booking;
  onEdit: () => void;
  onDelete: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  booking,
  onEdit,
  onDelete,
}) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{booking.carName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">Date:</div>
          <div className="text-sm">{booking.date}</div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{booking.startTime}</div>
          <div className="text-sm font-medium">End Time:</div>
          <div className="text-sm">{booking.endTime}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{booking.status}</div>
        </div>
        <div className="flex space-x-2 mt-4 justify-end">
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
      </CardContent>
    </Card>
  );
};

export default BookingCard;
