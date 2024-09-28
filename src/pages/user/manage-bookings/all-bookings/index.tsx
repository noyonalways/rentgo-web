import BouncingLoader from "@/components/loader";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useCancelBookingMutation,
  useGetUserBookingQuery,
} from "@/redux/features/user/booking/bookingApi";
import { TError } from "@/types";
import { toast } from "sonner";
import BookingCard from "./booking-card";
import BookingRow from "./booking-row";

interface IProps {}

const AllBookings: React.FC<IProps> = () => {
  const { data: result, isFetching: isBookingFetching } =
    useGetUserBookingQuery({
      status: ["pending", "approved", "completed", "cancelled"],
    });

  const bookings = result?.data;

  const [cancelBooking] = useCancelBookingMutation();

  const handleCancel = async (bookingId: string) => {
    const toastId = toast.loading("Canceling the Booking...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const response = await cancelBooking(bookingId).unwrap();
      if (response.success) {
        toast.success(response.message, {
          id: toastId,
          duration: 2000,
          position: "top-right",
        });
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
        position: "top-right",
      });
    }
  };

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden">
        {isBookingFetching ? (
          <BouncingLoader />
        ) : bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              onCancel={() => handleCancel(booking._id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No bookings available</p>
        )}
      </div>

      {/* Desktop view */}
      {isBookingFetching ? (
        <BouncingLoader />
      ) : bookings && bookings.length > 0 ? (
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Car Name</TableHead>
                <TableHead>Booking Date</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>End Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  onCancel={() => handleCancel(booking._id)}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="hidden md:block text-center text-gray-500">
          No bookings available
        </div>
      )}
    </>
  );
};

export default AllBookings;
