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
  bookingDate: z.date({
    required_error: "Booking Date is required",
  }),
});

export const updateBookingSchema = z.object({
  bookingAddress: z
    .string({
      required_error: "Booking address is required",
      invalid_type_error: "Booking address must be string",
    })
    .optional(),
  bookingDate: z
    .date({
      required_error: "Booking date is required",
      invalid_type_error: "Booking date must be string",
    })

    .optional(),
  startTime: z
    .string({
      required_error: "Start time is required",
      invalid_type_error: "Start time must be string",
    })
    .optional(),
  nidOrPassport: z
    .string({
      required_error: "NID or Passport number is required",
      invalid_type_error: "NID or Passport number must be string",
    })
    .min(5, "NID or Passport number must be greater than 5 characters")
    .optional(),
  drivingLicense: z
    .string({
      required_error: "Driving license number is required",
      invalid_type_error: "Driving license number must be string",
    })
    .min(5, "Driving license number must be greater than 5 characters")
    .optional(),
  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number must be string",
    })
    .optional(),
});
