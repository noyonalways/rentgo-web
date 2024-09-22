import ImageMagnifier from "@/components/image-magnifier";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hours } from "@/constants";
import { cn } from "@/lib/utils";
import { createBookingSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  CalendarIcon,
  Car,
  Check,
  ChevronDown,
  Palette,
  User,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PiNotification } from "react-icons/pi";
import { z } from "zod";

interface IProps {}

const CreateBooking: React.FC<IProps> = () => {
  const form = useForm<z.infer<typeof createBookingSchema>>({
    resolver: zodResolver(createBookingSchema),
  });

  const onSubmit = (data: z.infer<typeof createBookingSchema>) => {
    console.log("Form data:", data); // Handle the form submission (e.g., send to an API)

    // Reset the form after submission
    form.reset();
  };

  // Reset the select value when form is reset
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({ startTime: "" }); // Reset the endTime field explicitly
    }
  }, [form]);

  return (
    <section>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co.com/nfsQyLq/banner-imge-optimized.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] lg:h-[70vh] flex flex-col justify-center"
      >
        <div className="container">
          <div className="space-y-2">
            <h3 className="text-primary font-semibold tracking-[.15rem]">
              SUV
            </h3>
            <h1 className="font-bold text-4xl text-white">Range Rover</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row  lg:space-x-20 py-10 lg:py-16">
          <div className="basis-full lg:basis-[60%] space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">General Information</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary inline-block p-4 ro rounded-full">
                  <Check size={20} className="text-primary" />
                </div>
                <p>24/7 Support Assistance</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-secondary inline-block p-4 ro rounded-full">
                  <Check size={20} className="text-primary" />
                </div>
                <p>Free Cancellation and Return</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-secondary inline-block p-4 ro rounded-full">
                  <Check size={20} className="text-primary" />
                </div>
                <p>Rent Now Pay When Return</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Gallery Images</h2>
              <div className="grid lg:grid-cols-2 gap-4">
                <ImageMagnifier
                  src="https://i.ibb.co.com/kqpbXz8/white-sample-car.png"
                  alt="car-image"
                  width={500}
                  height={500}
                  className="border rounded-xl"
                />
                <ImageMagnifier
                  src="https://i.ibb.co.com/kqpbXz8/white-sample-car.png"
                  alt="car-image"
                  width={500}
                  height={500}
                  className="border rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="lg:flex-1 lg:-mt-[148px] mt-10">
            <h3 className="p-6 bg-primary rounded-t-xl text-center text-3xl font-semibold text-white">
              Book The Car
            </h3>
            <div className="p-6 border rounded-b-xl space-y-8 bg-background">
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Car size={20} className="text-primary" />
                  <span>Car Type</span>
                </div>
                <p>SUV</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <User size={20} className="text-primary" />
                  <span>Passengers</span>
                </div>
                <p>04</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Zap size={20} className="text-primary" />
                  <span>Electric</span>
                </div>
                <p>No</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Palette size={20} className="text-primary" />
                  <span>Color</span>
                </div>
                <p>SUV</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <PiNotification size={20} className="text-primary" />
                  <span>Status</span>
                </div>
                <p>SUV</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
                <Form {...form}>
                  <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <FormField
                      name="name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="px-4 py-5"
                              placeholder="Name"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="px-4 py-5"
                              placeholder="Email"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="phone"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="px-4 py-5"
                              placeholder="Phone"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="bookingAddress"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="px-4 py-5"
                              placeholder="Booking Address"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="nidOrPassport"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="px-4 py-5"
                              placeholder="NID/Passport"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="drivingLicense"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="px-4 py-5"
                              placeholder="Driving License"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="startTime"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ?? ""} // Control the select value
                          >
                            <FormControl>
                              <SelectTrigger className="px-4 py-5 text-muted-foreground">
                                <SelectValue placeholder="Select Start Time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {hours.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="date"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal px-4 py-5",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <div className="flex items-center space-x-2">
                                      <span>Select Date</span>
                                      <ChevronDown
                                        className="text-gray-400 dark:text-muted-foreground"
                                        size={20}
                                      />
                                    </div>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0" align="end">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date <
                                  new Date(new Date().setHours(0, 0, 0, 0))
                                } // Disable past dates
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button className="w-full" size="lg">
                      Proceed to Confirm
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBooking;
