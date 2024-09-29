import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hours } from "@/constants";
import { useReturnCarMutation } from "@/redux/features/car/carApi";
import { returnCarSchema } from "@/schemas";
import { TBooking, TError } from "@/types";
import { formatDateToYYYYMMDD } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";

interface IProps extends TBooking {}

const BookingCard: React.FC<IProps> = ({
  startTime,
  bookingDate,
  user,
  car,
  status,
  _id,
}) => {
  const form = useForm<z.infer<typeof returnCarSchema>>({
    resolver: zodResolver(returnCarSchema),
  });

  const [returnCar] = useReturnCarMutation();

  const onSubmit = async (data: z.infer<typeof returnCarSchema>) => {
    const returnData = {
      bookingId: _id,
      returnDate: formatDateToYYYYMMDD(data.returnDate),
      endTime: data.endTime,
    };

    // console.log(returnData);

    try {
      // api call
      const res = await returnCar(returnData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res?.message, {
          position: "top-right",
          duration: 2000,
        });
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message || "Something went wrong", {
        position: "top-right",
        duration: 2000,
      });
    }

    form.reset();
  };

  return (
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{car.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-sm font-medium">User Name:</div>
          <div className="text-sm">{user.name}</div>
          <div className="text-sm font-medium">Booking Date:</div>
          <div className="text-sm">{new Date(bookingDate).toDateString()}</div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{startTime}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{status}</div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="returnDate"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col mb-4">
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
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="endTime"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-2">
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""} // Control the select value
                  >
                    <FormControl>
                      <SelectTrigger className="px-4 py-5 text-muted-foreground">
                        <SelectValue placeholder="Select End Time" />
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

            <Button
              disabled={status !== "approved"}
              variant="default"
              className="w-full"
              size="lg"
              type="submit"
            >
              Return
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
