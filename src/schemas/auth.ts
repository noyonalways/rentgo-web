import { z } from "zod";

const checkStrongPassword = (input: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{6,}$/.test(input);
};

export const signUpFormSchema = z
  .object({
    profileImage: z
      .string({
        required_error: "Profile image is required",
        invalid_type_error: "Profile image must be string",
      })
      .optional(),
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
    password: z
      .string({
        required_error: "Password is required",
      })
      .refine(checkStrongPassword, {
        message: "Password must contain at least one letter and one number",
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
    dateOfBirth: z.date({
      required_error: "Date of birth is required",
      invalid_type_error: "Date of birth must be date",
    }),
  })
  .refine(
    (val) => {
      const { password, confirmPassword } = val;
      return password === confirmPassword;
    },
    {
      path: ["confirmPassword"],
      message: "Password and Confirm password did not match",
    }
  );

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
