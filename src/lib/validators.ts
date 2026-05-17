import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please provide a valid email address."),
  message: z
    .string()
    .min(10, "Please include at least 10 characters.")
    .max(1000, "Message must be under 1000 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
