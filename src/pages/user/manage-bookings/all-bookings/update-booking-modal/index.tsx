import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useUpdateBookingMutation } from "@/redux/features/user/booking/bookingApi";
import { updateBookingSchema } from "@/schemas";
import { TError } from "@/types";
import { formatDateToYYYYMMDD } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, Edit } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {
  status: string;
  id: string;
}

const UpdateBookingModal: React.FC<IProps> = ({ status, id }) => {
  const [updateBooking] = useUpdateBookingMutation();

  const form = useForm<z.infer<typeof updateBookingSchema>>({
    resolver: zodResolver(updateBookingSchema),
  });

  const onSubmit = async (data: z.infer<typeof updateBookingSchema>) => {
    // Initialize an empty object for update data
    const updateData: Record<string, string> = {};

    if (data.nidOrPassport) updateData.nidOrPassport = data.nidOrPassport;
    if (data.drivingLicense) updateData.drivingLicense = data.drivingLicense;
    if (data.bookingAddress) updateData.bookingAddress = data.bookingAddress;
    if (data.phone) updateData.phone = data.phone;
    if (data.startTime) updateData.startTime = data.startTime;
    if (data.bookingDate) {
      const localDate = new Date(data.bookingDate);
      updateData.bookingDate = formatDateToYYYYMMDD(localDate);
    }

    try {
      if (Object.keys(updateData).length) {
        const response = await updateBooking({
          bookingId: id,
          payload: updateData,
        }).unwrap();

        if (response.success) {
          toast.success(response?.message, {
            id: "UpdateBookingModalSuccess",
            position: "top-right",
          });
        }

        form.reset();
      }
    } catch (err) {
      const error = err as TError;

      if (error.data.errorMessages) {
        error.data.errorMessages.forEach((item) => {
          toast.error(item.message, {
            id: item.path,
            position: "top-right",
          });
        });
      } else {
        toast.error(error?.data?.message || "Something went wrong", {
          id: "UpdateBookingModalError",
          position: "top-right",
        });
      }
    }
  };

  // Reset the select value when form is reset
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({ startTime: "" }); // Reset the endTime field explicitly
    }
  }, [form]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          title="Modify booking"
          disabled={status !== "pending"}
          variant="outline"
          size="icon"
          className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
        >
          <Edit size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Booking</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
              name="bookingDate"
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
                          date < new Date(new Date().setHours(0, 0, 0, 0)) &&
                          date.getDate() !== new Date().getDate()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="text-end">
                Update
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookingModal;
