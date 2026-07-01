"use client";

import { useState, useTransition } from "react";
import { submitInquiry } from "@/app/actions/submitInquiry";
import type { InquiryType } from "@/app/actions/submitInquiry";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";

const inquiryTypes: InquiryType[] = [
  "Keynote Booking",
  "Executive Briefing",
  "Media Inquiry",
];

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const res = await submitInquiry(formData);
      setResult(res);
      if (res.success) form.reset();
    });
  }

  return (
    <div className="bg-navy-950 text-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">

        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-3">
            Client Intake
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50 tracking-tight">
            Submit an Inquiry
          </h1>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-lg">
            For keynote bookings, executive briefings, and media requests.
            Reviewed within one business day.
          </p>
        </div>

        {result?.success ? (
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg p-8 flex flex-col items-center gap-4 text-center">
            <CheckCircle className="w-10 h-10 text-cyan-400" />
            <h2 className="text-lg font-semibold text-slate-50">Inquiry Received</h2>
            <p className="text-sm text-slate-400 max-w-sm">{result.message}</p>
            <button
              onClick={() => setResult(null)}
              className="mt-2 text-xs font-medium text-slate-500 hover:text-slate-200 transition-colors underline underline-offset-4"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {result && !result.success && (
              <div className="bg-red-950/40 border border-red-900 text-red-400 text-sm rounded-lg px-4 py-3">
                {result.message}
              </div>
            )}

            {[
              { id: "fullName",  label: "Full Name",             type: "text",  placeholder: "Jane Smith",        required: true  },
              { id: "company",   label: "Company / Organization", type: "text",  placeholder: "Acme Corporation",  required: true  },
              { id: "email",     label: "Email Address",          type: "email", placeholder: "jane@company.com",  required: true  },
            ].map(({ id, label, type, placeholder, required }) => (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {label} {required && <span className="text-slate-600">*</span>}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  className="bg-navy-900 border border-slate-800/60 rounded text-sm text-slate-50 placeholder:text-slate-600 px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="inquiryType" className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Inquiry Type <span className="text-slate-600">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                defaultValue=""
                className="bg-navy-900 border border-slate-800/60 rounded text-sm text-slate-50 px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-slate-600">Select inquiry type…</option>
                {inquiryTypes.map((t) => (
                  <option key={t} value={t} className="bg-navy-900">{t}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="projectScope" className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Project Scope &amp; Notes
              </label>
              <textarea
                id="projectScope"
                name="projectScope"
                rows={5}
                placeholder="Describe your event, audience size, desired topic, timeline, or briefing objective…"
                className="bg-navy-900 border border-slate-800/60 rounded text-sm text-slate-50 placeholder:text-slate-600 px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
              ) : (
                <><span>Submit Inquiry</span><ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-800/60 pt-5 mt-2">
              <em>
                Wisconsin Compute is an independent market analysis platform. We
                do not provide advisory services to data center colocation
                operators, cloud service competitors, or utility providers.
              </em>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
