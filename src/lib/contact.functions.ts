import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  business: z.string().max(200).optional(),
  email: z.string().email().max(300),
  phone: z.string().max(50).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(1).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      business: data.business || null,
      email: data.email,
      phone: data.phone || null,
      service: data.service || null,
      message: data.message,
    });

    if (error) {
      console.error("Contact submission error:", error);
      throw new Error("Failed to save your message. Please try again.");
    }

    return { success: true };
  });
