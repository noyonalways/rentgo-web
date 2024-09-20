import { z } from "zod";

export const signUpFormSchema = z.object({
  picture: z
    .instanceof(File) // Ensure the file is an instance of the File object
    .optional(), // The file upload can be optional
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be string",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
  confirmPassword: z.string({
    required_error: "Confirm password is required",
  }),
  phone: z.string({
    required_error: "Phone number is required",
  }),
  address: z.string({
    required_error: "Address is required",
  }),
  terms: z.boolean({
    required_error: "You must agree to the terms and conditions",
  }),
});

export const signInFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
});
