import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {}

const Success: React.FC<IProps> = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="space-y-6">
          <div className="space-y-4 text-center">
            <CheckCircle2 size={64} className="text-[#16A34A] inline-block" />
            <h1 className="text-3xl font-semibold mt-4">Payment Successful!</h1>
            <p className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto">
              Thank you for your booking. Your payment has been processed
              successfully.
            </p>
          </div>
          <div className="w-full lg:max-w-xl mx-auto rounded-md border">
            <h3 className="font-semibold border-b p-6">Booking Details</h3>
            <div className="p-6 space-y-6">
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Booking ID
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    123456
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Car Model
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    Range Rover CV12
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Pick Up Date
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    22/09/2024
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Start Time
                  </p>
                  <p className="text-[#656565] basis-1/ dark:text-gray-400">
                    10:00 AM
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    End Time
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    15:00 PM
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Price per hour
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    ৳500
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="text-[#656565] basis-2/5 lg:basis-1/4 dark:text-gray-400">
                    Total Amount
                  </p>
                  <p className="text-[#656565] flex-1 dark:text-gray-400">
                    ৳2500
                  </p>
                </div>
              </div>
            </div>
          </div>
          <small className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto block text-center">
            A confirmation email has been sent to your registered email address.
          </small>
          <div className="flex justify-center">
            <Link to="/">
              <Button className="w-full lg:w-auto">Go to Home Page</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
