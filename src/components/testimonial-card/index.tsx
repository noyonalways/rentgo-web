import { Star } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IProps {}

const TestimonialCard: React.FC<IProps> = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-primary/5 border cursor-pointer">
      <div className="flex justify-end">
        <div className="inline-flex space-x-1 bg-background rounded-bl-xl p-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      <FaQuoteLeft className="ml-4 text-primary" size={24} />
      <p className="mb-4 mt-4 px-4">
        Came in for walk-in inspection and oil change. Brown is delight to deal
        with. He took my car right in, and completed work in a short time.
        Highly recommend the shop.
      </p>
      <div className="flex justify-start">
        <div className="inline-flex items-center space-x-4">
          <Avatar className="size-24 p-4">
            <AvatarImage
              src="https://i.ibb.co.com/c64q254/noyon-logo-dark.png"
              alt="Customer avatar"
              className=" w-full"
            />
            <AvatarFallback className="bg-muted dark:bg-primary/15">
              CI
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-500">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
