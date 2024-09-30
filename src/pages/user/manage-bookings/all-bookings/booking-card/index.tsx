import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TBooking } from "@/types";
import CancelBookingModal from "../cancel-booking-modal";
import UpdateBookingModal from "../update-booking-modal";

interface BookingCardProps {
  booking: TBooking;
  onCancel: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  booking,

  onCancel,
}) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{booking.car.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">Date:</div>
          <div className="text-sm">
            {new Date(booking.bookingDate).toDateString()}
          </div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{booking.startTime}</div>
          <div className="text-sm font-medium">End Time:</div>
          <div className="text-sm">
            {booking.endTime ? booking.endTime : "N/A"}
          </div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{booking.status}</div>
        </div>
        <div className="flex space-x-2 mt-4 justify-end">
          <CancelBookingModal onCancel={onCancel} status={booking.status} />

          <UpdateBookingModal id={booking._id} status={booking.status} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
