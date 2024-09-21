import { ModeToggle } from "@/components/mode-toggle";
import ProfileAvatar from "@/components/profile-avatar";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  History,
  Home,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/car.svg";

interface IProps {}

const Sidebar: React.FC<IProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:basis-[20%] basis-full lg:h-screen bg-background border-b lg:border-b-0 lg:border-r border-r-0 fixed top-0 lg:sticky w-full z-10">
      <div className="px-2 py-3 lg:p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hidden lg:flex items-center space-x-1">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <span className="text-2xl font-semibold">RentGo</span>
        </Link>
        <div className="lg:hidden ml-1">
          <ProfileAvatar size="10" align="start" />
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          {/* Menu Toggle Button for Mobile */}
          <button
            className="lg:hidden active:scale-95 transition duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation - Hidden by default on mobile */}
      <nav
        className={`lg:block transition-all duration-300 ease-in-out px-2 lg:px-4 py-2 ${
          isMenuOpen ? "right-0" : "right-full"
        } absolute lg:static top-20  w-full bg-background lg:bg-transparent h-screen lg:h-auto`}
      >
        <ul className="lg:p-0 space-y-2">
          <li>
            <Link className="block w-full" to={"/"}>
              <Button
                size={"lg"}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <Home size={16} />
                <span>Home</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link className="block w-full" to={"/user/overview"}>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <LayoutDashboard size={16} />
                <span>Overview</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link className="block w-full" to={"/user/booking-management"}>
              <Button
                variant="secondary"
                size={"lg"}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <History size={16} />
                <span>Booking Management</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link className="block w-full" to={"/user/payment-management"}>
              <Button
                variant="secondary"
                size={"lg"}
                className="flex items-center justify-start space-x-2 w-full"
              >
                <CreditCard size={16} />
                <span>Payment Management</span>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
