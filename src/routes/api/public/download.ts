import { createFileRoute } from "@tanstack/react-router";
import itr3Form from "@/assets/itr3-form.pdf.asset.json";
import itr3Rules from "@/assets/itr3-validation-rules.pdf.asset.json";

const DOWNLOADS = {
  "itr3-form": itr3Form,
  "itr3-validation-rules": itr3Rules,
} as const;

export const Route = createFileRoute("/api/public/download")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const requestUrl = new URL(request.url);
        const key = requestUrl.searchParams.get("file");

        if (!key || !(key in DOWNLOADS)) {
          return new Response("File not found", { status: 404 });
        }

        const asset = DOWNLOADS[key as keyof typeof DOWNLOADS];
        const assetUrl = new URL(asset.url, requestUrl.origin);
        const assetResponse = await fetch(assetUrl);

        if (!assetResponse.ok || !assetResponse.body) {
          return new Response("File is temporarily unavailable", { status: 502 });
        }

        return new Response(assetResponse.body, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${asset.original_filename}"`,
            "Content-Length": String(asset.size),
            "Cache-Control": "public, max-age=3600",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});