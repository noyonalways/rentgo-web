import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const BookingCard: React.FC<IProps> = ({ booking, onEdit, onCancel }) => {
  return (
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {booking.carName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">User Name:</div>
          <div className="text-sm">{booking.userName}</div>
          <div className="text-sm font-medium">Date:</div>
          <div className="text-sm">{booking.date}</div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{booking.startTime}</div>
          <div className="text-sm font-medium">End Time:</div>
          <div className="text-sm">{booking.endTime}</div>
          <div className="text-sm font-medium">Status:</div>
          <div
            className={`text-sm ${
              booking.status === "Approved"
                ? "text-green-500"
                : booking.status === "Unavailable"
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {booking.status}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-4 justify-end">
          {/* Cancel Button */}
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

          {/* Approve Button */}
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
      </CardContent>
    </Card>
  );
};

export default BookingCard;
