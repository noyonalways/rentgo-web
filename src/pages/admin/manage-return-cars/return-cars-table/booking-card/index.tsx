import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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

const BookingCard: React.FC<IProps> = ({ booking }) => {
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
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {booking.carName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-sm font-medium">User Name:</div>
          <div className="text-sm">{booking.userName}</div>
          <div className="text-sm font-medium">Date:</div>
          <div className="text-sm">{booking.date}</div>
          <div className="text-sm font-medium">Start Time:</div>
          <div className="text-sm">{booking.startTime}</div>
          <div className="text-sm font-medium">Status:</div>
          <div className="text-sm">{booking.status}</div>
        </div>
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="endTime"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="px-4 py-5"
                      placeholder="End Time"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant={"default"} className="w-full" size={"lg"}>
              Return
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
