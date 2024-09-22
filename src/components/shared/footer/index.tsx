import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import logo from "../../../assets/car.svg";

interface IProps {}

const newsLatterSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
});

const Footer: React.FC<IProps> = () => {
  const form = useForm<z.infer<typeof newsLatterSchema>>({
    resolver: zodResolver(newsLatterSchema),
  });

  const onSubmit = (data: z.infer<typeof newsLatterSchema>) => {
    console.log("data", data); // Handle the form submission (e.g., send to an API)

    // Reset the form after submission
    form.reset();
  };
  return (
    <footer className="bg-[#272727] dark:bg-primary/5 lg:dark:bg-transparent lg:bg-transparent">
      <div className="container">
        <div className="lg:bg-[#272727] lg:dark:bg-primary/5 pt-8 px-1 pb-4 lg:pt-10 lg:px-10 lg:pb-6 rounded-lg rounded-b-none">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-1">
                <img src={logo} alt="logo" />
                <span className="text-2xl font-semibold text-white ">
                  RentGo
                </span>
              </Link>
              <p className="text-sm text-[#D6D6D6]">
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
                Subscribe to the <br className="hidden lg:block" /> newslatter
              </h6>
              <Form {...form}>
                <form
                  className="relative"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="px-5 py-6 bg-background"
                            placeholder="Email"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    className="absolute top-[7px] right-[7px]"
                    size="icon"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between border-t border-t-gray-600/40 dark:border-t-gray-600/20 py-6 mt-6 lg:mt-16">
            <small className="text-gray-400">
              &copy; {new Date().getFullYear()} RentGo. All rights reserved.
            </small>
            <ul className="text-xs flex flex-row lg:space-y-0 items-center space-x-6 mb-8 lg:mb-0">
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
            <ul className="flex items-center space-x-6 mb-8 lg:mb-0">
              <li>
                <a
                  className="text-gray-400 hover:underline hover:text-primary"
                  href="#"
                >
                  <Youtube size={20} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:underline hover:text-primary"
                  href="#"
                >
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:underline hover:text-primary"
                  href="#"
                >
                  <Twitter size={20} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:underline hover:text-primary"
                  href="#"
                >
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:underline hover:text-primary"
                  href="#"
                >
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
