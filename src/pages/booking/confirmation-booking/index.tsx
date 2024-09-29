import ImageMagnifier from "@/components/image-magnifier";
import BouncingLoader from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetSingleCarQuery } from "@/redux/features/car/carApi";
import { useBookCarMutation } from "@/redux/features/user/booking/bookingApi";
import {
  clearBooking,
  selectCurrentBookingDetails,
} from "@/redux/features/user/booking/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createBookingSchema } from "@/schemas";
import { TError } from "@/types";
import { formatDateToYYYYMMDD } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Car, Check, Palette, User, Zap } from "lucide-react";
import { useForm } from "react-hook-form";
import { PiNotification } from "react-icons/pi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {}

const ConfirmationBooking: React.FC<IProps> = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleCarQuery(params?.id as string);
  const bookingDetails = useAppSelector(selectCurrentBookingDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [bookCar] = useBookCarMutation();

  const {
    _id,
    name,
    description,
    type,
    seatCapacity,
    isElectric,
    color,
    status,
    pricePerHour,
    galleryImages,
    features,
  } = data?.data ?? {};

  const form = useForm<z.infer<typeof createBookingSchema>>({
    resolver: zodResolver(createBookingSchema),
    defaultValues: {
      name: bookingDetails.name,
      email: bookingDetails.email,
      phone: bookingDetails.phone,
      bookingAddress: bookingDetails.bookingAddress,
      startTime: bookingDetails.startTime,
      nidOrPassport: bookingDetails.nidOrPassport,
      drivingLicense: bookingDetails.drivingLicense,
      bookingDate: new Date(bookingDetails?.bookingDate),
    },
  });

  const onSubmit = async (data: z.infer<typeof createBookingSchema>) => {
    const tostId = toast.loading("Adding new car...", {
      duration: 2000,
      position: "top-right",
    });

    const newBookingData = {
      bookingDate: formatDateToYYYYMMDD(data.bookingDate),
      startTime: data.startTime,
      car: bookingDetails.carId,
      bookingAddress: data.bookingAddress,
      nidOrPassport: data.nidOrPassport,
      drivingLicense: data.drivingLicense,
      phone: data.phone,
    };

    try {
      const res = await bookCar(newBookingData).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          id: tostId,
          position: "top-right",
          duration: 2000,
        });

        dispatch(clearBooking());
        navigate(`/user/manage-bookings`);
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message || "Something went wrong", {
        id: tostId,
        position: "top-right",
        duration: 2000,
      });
    }
  };

  return (
    <section>
      {isLoading ? (
        <div className="h-[55vh] flex items-center  container justify-center">
          <BouncingLoader />
        </div>
      ) : (
        <>
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
                  {type}
                </h3>
                <h1 className="font-bold text-4xl text-white">{name}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-col lg:flex-row  lg:space-x-20 py-10 lg:py-16">
              <div className="basis-full lg:basis-[60%] space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    General Information
                  </h2>
                  <p>{description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    {features &&
                      features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-4"
                        >
                          <div className="bg-secondary inline-block p-3 ro rounded-full">
                            <Check size={16} className="text-primary" />
                          </div>
                          <p>{feature}</p>
                        </div>
                      ))}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary inline-block p-3 ro rounded-full">
                        <Check size={16} className="text-primary" />
                      </div>
                      <p>24/7 Support Assistance</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary inline-block p-3 ro rounded-full">
                        <Check size={16} className="text-primary" />
                      </div>
                      <p>Free Cancellation and Return</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary inline-block p-3 ro rounded-full">
                        <Check size={16} className="text-primary" />
                      </div>
                      <p>Rent Now Pay When Return</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Gallery Images</h2>
                  <div className="grid lg:grid-cols-2 gap-4">
                    {galleryImages &&
                      galleryImages.map((img) => (
                        <ImageMagnifier
                          key={img._id}
                          src={img.url}
                          alt="car-image"
                          width={500}
                          height={500}
                          className="border rounded-xl"
                        />
                      ))}
                  </div>
                </div>
              </div>

              <div className="lg:flex-1 lg:-mt-[144px] mt-10">
                <h3 className="p-6 bg-primary rounded-t-xl text-center text-2xl font-semibold text-white">
                  Confirm Booking ৳{pricePerHour}/hr
                </h3>
                <div className="p-6 border rounded-b-xl space-y-8 bg-background">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Car size={20} className="text-primary" />
                      <span>Car Type</span>
                    </div>
                    <p>{type}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <User size={20} className="text-primary" />
                      <span>Passengers</span>
                    </div>
                    <p>{seatCapacity}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Zap size={20} className="text-primary" />
                      <span>Electric</span>
                    </div>
                    <p>{isElectric ? "Yes" : "No"}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Palette size={20} className="text-primary" />
                      <span>Color</span>
                    </div>
                    <p>{color}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <PiNotification size={20} className="text-primary" />
                      <span>Status</span>
                    </div>
                    <p>{status}</p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      Booking Details
                    </h2>
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
                                  readOnly
                                  className="px-4 py-5 "
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
                                  readOnly
                                  className="px-4 py-5 "
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
                                  readOnly
                                  className="px-4 py-5 "
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
                                  readOnly
                                  className="px-4 py-5 "
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
                                  readOnly
                                  className="px-4 py-5 "
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
                                  readOnly
                                  className="px-4 py-5 "
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
                              <FormControl>
                                <Input
                                  readOnly
                                  className="px-4 py-5 "
                                  placeholder="Start Time"
                                  {...field}
                                  value={field.value ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          name="bookingDate"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  readOnly
                                  className="px-4 py-5 "
                                  placeholder="Date"
                                  {...field}
                                  value={field.value.toDateString() ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex space-x-4">
                          <Link to={`/cars/${_id}/booking`}>
                            <Button
                              type="button"
                              variant="secondary"
                              className="w-full"
                              size="lg"
                            >
                              Back to Booking
                            </Button>
                          </Link>
                          <Button type="submit" className="w-full" size="lg">
                            Confirm
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ConfirmationBooking;
