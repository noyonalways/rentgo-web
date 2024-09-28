import BouncingLoader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useGetBookingByTransactionIdQuery } from "@/redux/features/user/booking/bookingApi";
import { CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface IProps {}

const Success: React.FC<IProps> = () => {
  // Hook to access the current location
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const transactionId = queryParams.get("transactionId");

  const { data, isLoading } = useGetBookingByTransactionIdQuery(
    transactionId as string
  );

  const {
    transactionId: txnID,
    car,
    bookingDate,
    returnDate,
    startTime,
    endTime,
    totalCost,
  } = data?.data || {};

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        {isLoading ? (
          <div>
            <BouncingLoader />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4 text-center">
              <CheckCircle2 size={64} className="text-[#16A34A] inline-block" />
              <h1 className="text-3xl font-semibold mt-4">
                Payment Successful!
              </h1>
              <p className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto">
                Thank you for your booking. Your payment has been processed
                successfully.
              </p>
            </div>
            <div className="w-full lg:max-w-xl mx-auto rounded-md border">
              <h3 className="font-semibold border-b p-6">Booking Details</h3>
              <div className="p-6 space-y-6">
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Transaction ID
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    {txnID}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Car
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    {car?.name}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Booking Date
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    {bookingDate?.split("T")[0]}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Return Date
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    {returnDate?.split("T")[0]}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Start Time
                  </p>
                  <p className="text-[#656565] basis-1/ dark:text-gray-400">
                    {startTime}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    End Time
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    {endTime}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Price per hour
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    ৳{car?.pricePerHour}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Total Amount
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    ৳{totalCost}
                  </p>
                </div>
              </div>
            </div>
            <small className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto block text-center">
              A confirmation email has been sent to your registered email
              address.
            </small>
            <div className="flex justify-center">
              <Link to="/">
                <Button className="w-full lg:w-auto">Go to Home Page</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Success;
