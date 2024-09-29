import BouncingLoader from "@/components/loader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMakePaymentMutation } from "@/redux/features/payment/paymentApi";
import { useGetUserBookingQuery } from "@/redux/features/user/booking/bookingApi";
import { TError } from "@/types";
import { useState } from "react";
import { toast } from "sonner";
import PaymentCard from "./payment-card";
import PaymentRow from "./payment-row";

const PaymentTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [makePayment] = useMakePaymentMutation();

  const handlePay = async (bookingId: string) => {
    const toastId = toast.loading("Initiating Payment...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const response = await makePayment({
        booking: bookingId,
        currency: "BDT",
        paymentMethod: "aamarpay",
      }).unwrap();

      if (response.success) {
        toast.success(response.message, {
          id: toastId,
          duration: 2000,
          position: "top-right",
        });

        // Redirect to payment URL if present
        if (response.data?.result) {
          window.location.href = response.data.payment_url;
        }
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
        position: "top-right",
      });
    }
  };

  const { data: result, isFetching } = useGetUserBookingQuery({
    paymentStatus: ["pending", "cancelled"],
    status: ["completed"],
    page,
    limit,
  });

  const bookings = result?.data;
  const meta = result?.meta;

  // Function to handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && meta && newPage <= meta.totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {isFetching ? (
          <BouncingLoader />
        ) : bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <PaymentCard
              key={booking._id}
              booking={booking}
              onPay={() => handlePay(booking._id)}
            />
          ))
        ) : (
          <p className="text-center">No data found</p>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex md:flex-col space-y-4">
        {isFetching ? (
          <BouncingLoader />
        ) : bookings && bookings.length > 0 ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Car Name</TableHead>
                  <TableHead>Booking Date</TableHead>
                  <TableHead>Return Date</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                  <TableHead>Price per hour</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead>Total Cost</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <PaymentRow
                    key={booking._id}
                    booking={booking}
                    onPay={() => handlePay(booking._id)}
                  />
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            {meta && (
              <Pagination className="justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => handlePageChange(page - 1)}
                    />
                  </PaginationItem>
                  {Array.from({ length: meta.totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        isActive={page === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => handlePageChange(page + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <p className="text-center">No data found</p>
        )}
      </div>
    </div>
  );
};

export default PaymentTable;
