import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../../../assets/car.svg";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  return (
    <header className="py-5 relative">
      <nav className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-1">
            <img src={logo} alt="logo" />
            <span className="text-2xl font-semibold">RentGo</span>
          </Link>
          <ul className="absolute bg-white w-full flex flex-col left-0 top-20 lg:w-auto lg:static lg:flex-row lg:bg-transparent lg:items-center lg:space-x-4">
            <li>
              <Link
                className="hover:bg-primary py-4 px-4 block lg:hover:bg-transparent lg:hover:text-primary lg:py-0 lg:inline-block lg:px-0"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-primary py-4 px-4 block lg:hover:bg-transparent lg:hover:text-primary lg:py-0 lg:inline-block lg:px-0"
                to="/"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-primary py-4 px-4 block lg:hover:bg-transparent lg:hover:text-primary lg:py-0 lg:inline-block lg:px-0"
                to="/"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-primary py-4 px-4 block lg:hover:bg-transparent lg:hover:text-primary lg:py-0 lg:inline-block lg:px-0"
                to="/"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Link to={"/signup"}>
              <Button size={"lg"} variant={"ghost"}>
                Sign Up
              </Button>
            </Link>
            <Link to={"/signin"}>
              <Button size={"lg"} variant={"default"}>
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
