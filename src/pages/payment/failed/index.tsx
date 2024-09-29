import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {}

const Failed: React.FC<IProps> = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const transactionId = queryParams.get("transactionId");

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="space-y-6">
          <div className="space-y-4 text-center">
            <TriangleAlert size={64} className="text-[#dc2626] inline-block" />
            <h1 className="text-3xl font-semibold mt-4">Payment Failed!</h1>
            <p className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto">
              We're sorry, but there was an issue processing your payment. Your
              booking has not been confirmed.
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
                  Contact Customer Support
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-center">
              Common reasons for payment failure
            </h4>
            <ul className="text-center text-sm w-full lg:max-w-sm mx-auto text-[#656565] dark:text-gray-400 space-y-1">
              <li>&bull; Insufficient funds</li>
              <li>&bull; Incorrect payment details</li>
              <li>&bull; Temporary issue with the payment gateway</li>
            </ul>
          </div>
          <small className="text-[#656565] dark:text-gray-400 w-full lg:max-w-lg mx-auto block text-center">
            If you continue to experience issues, please contact your bank or
            our customer support team.
          </small>
          <div className="flex justify-center">
            <Link className="text-primary" to="/">
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Failed;
