import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export type LeadInput = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  message: string;
  wantsMeeting: boolean;
  lang: string;
};

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => {
    const email = clean(input?.email, 200);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("invalid_email");
    }
    return {
      name: clean(input?.name, 120),
      email,
      organisation: clean(input?.organisation, 160),
      role: clean(input?.role, 40) || "other",
      message: clean(input?.message, 4000),
      wantsMeeting: Boolean(input?.wantsMeeting),
      lang: clean(input?.lang, 5) || "pl",
    };
  })
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("interest_leads").insert({
      name: data.name || "—",
      email: data.email,
      organisation: data.organisation || null,
      role: data.role,
      message: data.message || null,
      wants_meeting: data.wantsMeeting,
      lang: data.lang,
    });

    if (error) {
      console.error("interest_leads insert failed", error);
      throw new Error("save_failed");
    }

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("lead-notification", "", {
        templateData: {
          name: data.name || "—",
          email: data.email,
          organisation: data.organisation || "—",
          role: data.role,
          message: data.message || "—",
          wantsMeeting: data.wantsMeeting,
          lang: data.lang,
        },
        replyTo: data.email,
        idempotencyKey: `lead-notification-${data.email}-${Date.now()}`,
      });
    } catch (notifyError) {
      console.error("lead notification email failed", notifyError);
    }

    return { ok: true as const };
  });
