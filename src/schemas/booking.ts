import { z } from "zod";

export const createBookingSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  phone: z.string({
    required_error: "Phone is required",
  }),
  bookingAddress: z.string({
    required_error: "Booking Address is required",
  }),
  nidOrPassport: z.string({
    required_error: "NID/Passport is required",
  }),
  drivingLicense: z.string({
    required_error: "Driving License is required",
  }),
  startTime: z.string({
    required_error: "Please Select Start Time",
  }),
  date: z.date({
    required_error: "Date is required",
  }),
});
