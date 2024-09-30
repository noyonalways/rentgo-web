import { z } from "zod";

export const returnCarSchema = z.object({
  returnDate: z.date({
    required_error: "Return date is required",
    invalid_type_error: "Return date must be string",
  }),
  endTime: z.string({
    required_error: "End time is required",
    invalid_type_error: "End time must be string",
  }),
});

export const addNewCarSchema = z.object({
  image: z
    .string({
      required_error: "Image is required",
      invalid_type_error: "Image must be string",
    })
    .url("Provide a valid url")
    .optional(),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    })
    .min(1, "Name must be more than 1 character"),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be string",
    })
    .min(20, "Description must be more than 20 character"),
  brand: z.string({
    required_error: "Brand is required",
    invalid_type_error: "Brand must be string",
  }),
  model: z.string({
    required_error: "Model is required",
    invalid_type_error: "Model is required",
  }),
  type: z.string({
    required_error: "Type is required",
    invalid_type_error: "Type must be string",
  }),
  category: z.string({
    required_error: "Category is required",
    invalid_type_error: "Category must be string",
  }),
  year: z.string({
    required_error: "Year is required",
    invalid_type_error: "Year must be string",
  }),
  color: z
    .string({
      required_error: "Color is required",
      invalid_type_error: "Color must be string",
    })
    .min(1, "Color must be more than 1 character"),
  seatCapacity: z.number({
    required_error: "Seat capacity is required",
    invalid_type_error: "Seat capacity must be number",
  }),
  mileage: z.number({
    required_error: "Mileage is required",
    invalid_type_error: "Mileage must be number",
  }),
  isElectric: z.boolean({
    required_error: "Electric is required",
    invalid_type_error: "Electric must be boolean",
  }),
  pricePerHour: z
    .number({
      required_error: "Price per hour is required",
      invalid_type_error: "Price per hour must be number",
    })
    .positive({ message: "Price per hour must be a positive number" }),
  mileageUnit: z.string({
    required_error: "Mileage unit is required",
    invalid_type_error: "Mileage unit must be string",
  }),
  transmission: z.string({
    required_error: "Transmission is required",
    invalid_type_error: "Transmission must be string",
  }),
  features: z
    .array(
      z
        .string({
          required_error: "Feature is required",
          invalid_type_error: "Feature must be string",
        })
        .min(1, "Feature must be more than 1 character")
        .trim(),
      { message: "Feature is required" }
    )
    .min(1, { message: "Features is required" }),
});

export const updateCarSchema = z.object({
  image: z
    .string({
      required_error: "Image is required",
      invalid_type_error: "Image must be string",
    })
    .url("Provide a valid url")
    .optional(),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    })
    .min(1, "Name must be more than 1 character")
    .optional(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be string",
    })
    .min(20, "Description must be more than 20 character")
    .optional(),
  brand: z
    .string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be string",
    })
    .optional(),
  model: z
    .string({
      required_error: "Model is required",
      invalid_type_error: "Model is required",
    })
    .optional(),
  type: z
    .string({
      required_error: "Type is required",
      invalid_type_error: "Type must be string",
    })
    .optional(),
  category: z
    .string({
      required_error: "Category is required",
      invalid_type_error: "Category must be string",
    })
    .optional(),
  year: z
    .string({
      required_error: "Year is required",
      invalid_type_error: "Year must be string",
    })
    .optional(),
  color: z
    .string({
      required_error: "Color is required",
      invalid_type_error: "Color must be string",
    })
    .min(1, "Color must be more than 1 character")
    .optional(),
  seatCapacity: z
    .number({
      required_error: "Seat capacity is required",
      invalid_type_error: "Seat capacity must be number",
    })
    .optional(),
  mileage: z
    .number({
      required_error: "Mileage is required",
      invalid_type_error: "Mileage must be number",
    })
    .optional(),
  isElectric: z
    .boolean({
      required_error: "Electric is required",
      invalid_type_error: "Electric must be boolean",
    })
    .optional(),
  pricePerHour: z
    .number({
      required_error: "Price per hour is required",
      invalid_type_error: "Price per hour must be number",
    })
    .positive({ message: "Price per hour must be a positive number" })
    .optional(),
  mileageUnit: z
    .string({
      required_error: "Mileage unit is required",
      invalid_type_error: "Mileage unit must be string",
    })
    .optional(),
  transmission: z
    .string({
      required_error: "Transmission is required",
      invalid_type_error: "Transmission must be string",
    })
    .optional(),
  features: z
    .array(
      z
        .string({
          required_error: "Feature is required",
          invalid_type_error: "Feature must be string",
        })
        .min(1, "Feature must be more than 1 character")
        .trim(),
      { message: "Feature is required" }
    )
    .min(1, { message: "Features is required" })
    .optional(),
});
