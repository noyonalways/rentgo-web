import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {}

const Cancelled: React.FC<IProps> = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const transactionId = queryParams.get("transactionId");

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="space-y-6">
          <div className="space-y-4 text-center">
            <CircleX size={64} className="text-[#dc2626] inline-block" />
            <h1 className="text-3xl font-semibold mt-4">Payment Cancelled!</h1>
            <p className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto">
              Your booking payment has been cancelled. No charges have been made
              to your account.
            </p>
          </div>
          <div className="w-full lg:max-w-xl mx-auto rounded-md border">
            <h3 className="font-semibold border-b p-6">
              What would you like to do next?
            </h3>
            <div className="p-6 space-y-4 flex-col flex">
              <Link to={"/"}>
                <Button className="w-full" size={"lg"}>
                  Try Payment Again
                </Button>
              </Link>
              <Link to={"/"}>
                <Button className="w-full" size={"lg"} variant={"outline"}>
                  Modify Booking
                </Button>
              </Link>
              <Link to={"/"}>
                <Button className="w-full" size={"lg"} variant={"outline"}>
                  Return to Home Page
                </Button>
              </Link>
            </div>
          </div>
          <small className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto block text-center">
            If you have any questions or concerns, please don't hesitate to
            contact our customer support team. We're here to help you 24/7.
          </small>
        </div>
      </div>
    </section>
  );
};

export default Cancelled;
