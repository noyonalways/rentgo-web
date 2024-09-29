import BouncingLoader from "@/components/loader";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsQuery } from "@/redux/features/admin/booking/bookingApi";
import BookingCard from "./booking-card";
import BookingRow from "./booking-row";

interface IProps {}

const ReturnCarsTable: React.FC<IProps> = () => {
  const { data, isFetching } = useGetAllBookingsQuery({
    status: ["approved"],
  });
  const bookings = data?.data;

  return (
    <>
      {bookings?.length === 0 ? (
        <p className="text-center">No data Found</p>
      ) : (
        <>
          {isFetching ? (
            <div>
              <BouncingLoader />
            </div>
          ) : (
            <>
              <div className="md:hidden">
                {bookings?.map((booking) => (
                  <BookingCard key={booking._id} {...booking} />
                ))}
              </div>

              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User Name</TableHead>
                      <TableHead>Car Name</TableHead>
                      <TableHead>Booking Date</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Return Date</TableHead>
                      <TableHead>End Time</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings?.map((booking) => (
                      <BookingRow key={booking._id} {...booking} />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ReturnCarsTable;
