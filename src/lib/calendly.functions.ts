import { createServerFn } from "@tanstack/react-start";

const FALLBACK_URL = "https://calendly.com/galushka-law";

export const getSchedulingUrl = createServerFn({ method: "GET" }).handler(async () => {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const calendlyKey = process.env["CALENDLY_API_KEY"];
  if (!lovableKey || !calendlyKey) return { url: FALLBACK_URL };

  try {
    const response = await fetch("https://connector-gateway.lovable.dev/calendly/users/me", {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": calendlyKey,
      },
    });
    if (!response.ok) {
      console.error(`Calendly request failed [${response.status}]: ${await response.text()}`);
      return { url: FALLBACK_URL };
    }
    const body = (await response.json()) as { resource?: { scheduling_url?: string } };
    return { url: body.resource?.scheduling_url ?? FALLBACK_URL };
  } catch (err) {
    console.error("Calendly request errored", err);
    return { url: FALLBACK_URL };
  }
});
