import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Booking {
  userName: string;
  carName: string;
  date: string;
  startTime: string;
  status: string;
}

interface IProps {
  booking: Booking;
}

const returnCarSchema = z.object({
  endTime: z.string({
    required_error: "End time is required",
  }),
});

const BookingRow: React.FC<IProps> = ({ booking }) => {
  const form = useForm<z.infer<typeof returnCarSchema>>({
    resolver: zodResolver(returnCarSchema),
  });

  const onSubmit = (data: z.infer<typeof returnCarSchema>) => {
    console.log("Form data:", {
      endTime: data.endTime,
      carName: booking.carName,
    }); // Handle the form submission (e.g., send to an API)

    // Reset the form after submission
    form.reset();
  };

  return (
    <TableRow>
      <TableCell>{booking.userName}</TableCell>
      <TableCell>{booking.carName}</TableCell>
      <TableCell>{booking.date}</TableCell>
      <TableCell>{booking.startTime}</TableCell>
      <TableCell className="max-w-20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="endTime"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="End Time"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </TableCell>
      <TableCell>{booking.status}</TableCell>
      <TableCell>
        <Button
          title="Return Car"
          variant="secondary"
          size="default"
          className="duration-200 transition-all hover:bg-primary hover:text-white"
          onClick={() => form.handleSubmit(onSubmit)()}
        >
          Return
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
