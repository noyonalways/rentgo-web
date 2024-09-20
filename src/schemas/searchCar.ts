import { z } from "zod";

export const searchCarFormSchema = z.object({
  carName: z.preprocess(
    (val) => (val === undefined ? "" : val),
    z.string().min(1, "Car Name is required")
  ),
  carType: z.preprocess(
    (val) => (val === undefined ? "" : val),
    z.string().optional()
  ),
  seatCapacity: z.preprocess(
    (val) => (val === undefined ? "" : val),
    z.string().optional()
  ),
  isElectric: z.preprocess(
    (val) => (val === undefined ? false : val),
    z.boolean().optional()
  ),
});
