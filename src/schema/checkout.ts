import { z } from "zod";

export const checkoutInput = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  city: z
    .string()
    .toLowerCase()
    .min(1, { message: "City cannot be empty" })
    .max(100, { message: "City name cannot be more than 100 characters" }),
  streetNo: z.string(),
});

export type CheckoutInput = z.infer<typeof checkoutInput>;
