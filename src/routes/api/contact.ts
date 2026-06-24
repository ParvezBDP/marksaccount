import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Record<string, unknown>;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const { name, business, email, phone, service, message } = body;
        if (!name || !email || !message) {
          return Response.json(
            { error: "Name, email and message are required" },
            { status: 400 }
          );
        }

        const supabase = createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_PUBLISHABLE_KEY!,
          { auth: { autoRefreshToken: false, persistSession: false } }
        );

        const { error } = await supabase.from("contact_submissions").insert({
          name: String(name),
          business: business ? String(business) : null,
          email: String(email),
          phone: phone ? String(phone) : null,
          service: service ? String(service) : null,
          message: String(message),
        });

        if (error) {
          console.error("Contact insert error:", error);
          return Response.json(
            { error: "Failed to save your message. Please try again." },
            { status: 500 }
          );
        }

        return Response.json({ success: true });
      },
    },
  },
});
