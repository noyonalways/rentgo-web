import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
import { TableCell, TableRow } from "@/components/ui/table";
import { hours } from "@/constants";
import { cn } from "@/lib/utils";
import { useReturnCarMutation } from "@/redux/features/car/carApi";
import { returnCarSchema } from "@/schemas";
import { TBooking, TError } from "@/types";
import { formatDateToYYYYMMDD } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface IProps extends TBooking {}

const BookingRow: React.FC<IProps> = ({
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

    console.log(returnData);

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
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{car.name}</TableCell>
      <TableCell>{new Date(bookingDate).toDateString()}</TableCell>
      <TableCell>{startTime}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="returnDate"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col max-w-56">
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
      </TableCell>
      <TableCell>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="endTime"
              control={form.control}
              render={({ field }) => (
                <FormItem className="max-w-56">
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <FormControl>
                      <SelectTrigger className="px-4 py-5 text-muted-foreground">
                        <SelectValue placeholder="Select End Time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {hours?.map((time) => (
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
          </form>
        </Form>
      </TableCell>
      <TableCell>
        <Button
          disabled={status !== "approved"}
          onClick={() => form.handleSubmit(onSubmit)()}
          type="submit"
          title="Return Car"
          variant="outline"
          size="default"
          className="duration-200 transition-all hover:bg-primary hover:text-white"
        >
          Return
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
