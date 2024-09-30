import { z } from "zod";

export const searchCarFormSchema = z.object({
  carName: z
    .string({
      required_error: "Car name is required",
      invalid_type_error: "Car name must string",
    })
    .optional(),
  type: z
    .string({
      required_error: "Car type is required",
      invalid_type_error: "Car type must string",
    })
    .optional(),
  color: z
    .string({
      required_error: "Car brand is required",
      invalid_type_error: "Car brand must string",
    })
    .optional(),
  isElectric: z
    .boolean({
      required_error: "Electric is required",
      invalid_type_error: "Electric must boolean",
    })
    .optional(),
});
