"use server";

export type InquiryType =
  | "Keynote Booking"
  | "Executive Briefing"
  | "Media Inquiry";

export interface InquiryPayload {
  fullName: string;
  company: string;
  email: string;
  inquiryType: InquiryType;
  projectScope: string;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitInquiry(
  formData: FormData
): Promise<SubmitResult> {
  const payload: InquiryPayload = {
    fullName: (formData.get("fullName") as string)?.trim() ?? "",
    company: (formData.get("company") as string)?.trim() ?? "",
    email: (formData.get("email") as string)?.trim() ?? "",
    inquiryType: (formData.get("inquiryType") as InquiryType) ?? "Executive Briefing",
    projectScope: (formData.get("projectScope") as string)?.trim() ?? "",
  };

  // ── Basic validation ────────────────────────────────────────────────────
  if (!payload.fullName || !payload.email || !payload.company) {
    return { success: false, message: "Please fill in all required fields." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload.email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // ── External webhook (n8n / Airtable) ─────────────────────────────────
  // Replace WEBHOOK_URL with your actual endpoint before deploying.
  //
  // const WEBHOOK_URL = process.env.INQUIRY_WEBHOOK_URL;
  // if (WEBHOOK_URL) {
  //   await fetch(WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  // }

  // Simulate async processing during development
  await new Promise((res) => setTimeout(res, 600));

  return {
    success: true,
    message:
      "Your inquiry has been received. We will follow up within one business day.",
  };
}
