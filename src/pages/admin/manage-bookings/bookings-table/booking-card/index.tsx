import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TBooking } from "@/types";
import ApproveBookingModal from "../approve-booking-modal";
import CancelBookingModal from "../cancel-booking-modal";

interface IProps extends TBooking {}

const BookingCard: React.FC<IProps> = ({
  _id,
  car,
  bookingDate,
  startTime,
  endTime,
  status,
  user,
}) => {
  return (
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{car.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">User Name:</div>
          <div className="text-sm">{user.name}</div>
          <div className="text-sm font-medium">Booking Date:</div>
          <div className="text-sm">{new Date(bookingDate).toDateString()}</div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{startTime}</div>
          <div className="text-sm font-medium">End Time:</div>
          <div className="text-sm">{endTime ? endTime : "N/A"}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{status}</div>
        </div>
        <div className="flex space-x-2 mt-4 justify-end">
          <CancelBookingModal id={_id} status={status} />
          <ApproveBookingModal id={_id} status={status} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
