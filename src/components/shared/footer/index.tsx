import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  MoveRight,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/car.svg";
interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <footer>
      <div className="container">
        <div className="bg-[#272727] dark:bg-primary/10 pt-10 px-10 pb-6 rounded-lg">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-1">
                <img src={logo} alt="logo" />
                <span className="text-2xl font-semibold text-white ">
                  RentGo
                </span>
              </Link>
              <p className="text-sm">
                Rent high-quality cars, for your fun vacation and road trip.
              </p>
            </div>

            {/* quick links */}
            <div className="space-y-4">
              <h6 className="font-semibold text-lg text-white">Quick Links</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Payment
                  </Link>
                </li>
              </ul>
            </div>

            {/* menu */}
            <div className="space-y-4">
              <h6 className="font-semibold text-lg text-white">Menu</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-[#D6D6D6] hover:underline" to="/">
                    Help
                  </Link>
                </li>
              </ul>
            </div>

            {/* news latter */}
            <div className="space-y-4">
              <h6 className="font-semibold text-lg text-white">
                Subscribe to the <br /> newslatter
              </h6>
              <form className="relative">
                <Input
                  placeholder="Email"
                  className="bg-white dark:bg-white/10 h-12"
                />
                <Button
                  type="submit"
                  size={"icon"}
                  className="absolute right-2 top-[6px]"
                >
                  <MoveRight />
                </Button>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-t-gray-600 py-6 mt-16">
            <small className="text-gray-400">
              &copy; {new Date().getFullYear()} RentGo. All rights reserved.
            </small>
            <ul className="text-xs flex items-center space-x-6">
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  Legal Notice
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  Accessibility
                </a>
              </li>
            </ul>

            {/* social links */}
            <ul className="flex items-center space-x-6">
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  <Youtube size={20} />
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  <Twitter size={20} />
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:underline" href="#">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
