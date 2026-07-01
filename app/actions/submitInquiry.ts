"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // ── Send email via Resend ───────────────────────────────────────────────
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "bryanseefeld95@gmail.com",
    subject: `New Inquiry — ${payload.inquiryType} from ${payload.fullName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; color: #1e293b;">
        <h2 style="margin-bottom: 4px;">New Wisconsin Compute Inquiry</h2>
        <p style="color: #64748b; margin-top: 0;">${payload.inquiryType}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px;">Name</td>
            <td style="padding: 8px 0; font-weight: 600;">${payload.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Company</td>
            <td style="padding: 8px 0; font-weight: 600;">${payload.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Inquiry Type</td>
            <td style="padding: 8px 0;">${payload.inquiryType}</td>
          </tr>
        </table>
        ${payload.projectScope ? `
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; margin-bottom: 8px;">Project Scope / Notes</p>
        <p style="background: #f8fafc; padding: 16px; border-radius: 6px; margin: 0;">${payload.projectScope}</p>
        ` : ""}
      </div>
    `,
  });

  return {
    success: true,
    message:
      "Your inquiry has been received. We will follow up within one business day.",
  };
}
