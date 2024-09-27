import { ModeToggle } from "@/components/mode-toggle";
import ProfileAvatar from "@/components/profile-avatar";
import { Button } from "@/components/ui/button";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/car.svg";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use the selector to automatically update when the user is logged in
  const loggedInUser = useAppSelector(selectCurrentUser);
  const { data: currentUser, isLoading } = useGetMeQuery(undefined, {
    skip: !loggedInUser, // Skip the query if not logged in
  });

  return (
    <header className="z-50 sticky top-0 bg-background border-b">
      <nav className="container sticky top-0 py-3 lg:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-1">
            <img src={logo} alt="logo" />
            <span className="text-2xl font-semibold">RentGo</span>
          </Link>
          <ul
            className={`z-10 flex absolute bg-background w-[80%] flex-col top-0 lg:w-auto lg:static lg:flex-row lg:bg-transparent lg:items-center lg:space-x-8 h-screen lg:h-auto ${
              isMenuOpen ? "left-0" : "-left-full"
            } transition-all duration-300`}
          >
            <li className="flex justify-between p-4 lg:hidden">
              <Link to="/" className="flex items-center space-x-1">
                <img src={logo} alt="logo" />
                <span className="text-2xl font-semibold">RentGo</span>
              </Link>
              <button
                className="inline-block lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu className="opacity-0" size={24} />
                )}
              </button>
            </li>
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
                to="/cars"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-primary py-4 px-4 block lg:hover:bg-transparent lg:hover:text-primary lg:py-0 lg:inline-block lg:px-0"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            {!isLoading && loggedInUser && (
              <li>
                <Link
                  className="hover:bg-primary py-4 px-4 block lg:hover:bg-transparent lg:hover:text-primary lg:py-0 lg:inline-block lg:px-0"
                  to="/user/overview"
                >
                  Dashboard
                </Link>
              </li>
            )}

            <li className="lg:hidden flex flex-col px-2 space-y-2 pt-2">
              <Link to={"/signup"}>
                <Button size={"lg"} variant={"outline"} className="w-full">
                  Sign Up
                </Button>
              </Link>
              <Link to={"/signin"}>
                <Button size={"lg"} variant={"default"} className="w-full">
                  Sign In
                </Button>
              </Link>
            </li>
          </ul>

          {/* Conditionally render based on user login state */}
          {!isLoading && loggedInUser ? (
            <div className="flex items-center space-x-6">
              <ProfileAvatar
                size="10"
                align="end"
                profileImage={currentUser?.data?.profileImage}
                name={currentUser?.data?.name}
              />
              <button
                className="inline-block lg:hidden active:scale-95 duration-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <button
                className="inline-block lg:hidden active:scale-95 duration-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
              <div className="space-x-2 hidden lg:inline-block">
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
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
