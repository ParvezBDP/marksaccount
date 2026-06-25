import type { Handler } from "@netlify/functions";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(), body: "" };
  }
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json(500, { error: "Email service not configured" });
  }

  let data: Record<string, string> = {};
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const name = (data.name || "").trim().slice(0, 200);
  const email = (data.email || "").trim().slice(0, 300);
  const phone = (data.phone || "").trim().slice(0, 50);
  const business = (data.business || "").trim().slice(0, 200);
  const service = (data.service || "").trim().slice(0, 100);
  const message = (data.message || "").trim().slice(0, 5000);

  if (!name || !email || !message) {
    return json(400, { error: "Name, email and message are required" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: "Invalid email address" });
  }

  const subject = "New Contact Form Submission - Marks Accounting";
  const html = `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.55;max-width:640px">
      <h2 style="margin:0 0 16px">New Contact Form Submission</h2>
      <p style="margin:0 0 16px;color:#555">A new enquiry was submitted via marksaccounting.in.</p>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;border:1px solid #e5e7eb">
        <tr><td style="background:#f9fafb;font-weight:600;width:160px">Name</td><td>${escape(name)}</td></tr>
        <tr><td style="background:#f9fafb;font-weight:600">Email</td><td>${escape(email)}</td></tr>
        <tr><td style="background:#f9fafb;font-weight:600">Phone</td><td>${escape(phone) || "-"}</td></tr>
        <tr><td style="background:#f9fafb;font-weight:600">Business</td><td>${escape(business) || "-"}</td></tr>
        <tr><td style="background:#f9fafb;font-weight:600">Service</td><td>${escape(service) || "-"}</td></tr>
        <tr><td style="background:#f9fafb;font-weight:600;vertical-align:top">Message</td><td>${escape(message).replace(/\n/g, "<br>")}</td></tr>
      </table>
    </div>
  `;

  const text = [
    `New Contact Form Submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Business: ${business || "-"}`,
    `Service: ${service || "-"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Marks Accounting <contact@marksaccounting.in>",
        to: ["contact@marksaccounting.in"],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend send failed:", res.status, errText);
      return json(502, { error: "Failed to send email. Please try again." });
    }

    return json(200, { success: true });
  } catch (err) {
    console.error("Resend send error:", err);
    return json(500, { error: "Failed to send email. Please try again." });
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
    body: JSON.stringify(body),
  };
}