"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CalendlyModal from "@/components/CalendlyModal";

const WisconsinMap = dynamic(() => import("@/components/WisconsinMap"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 bg-navy-900 border border-slate-800/60 rounded-lg min-h-[420px] flex items-center justify-center">
      <span className="text-xs text-slate-600 tracking-[0.15em] uppercase">Loading map…</span>
    </div>
  ),
});

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-navy-950 text-slate-50">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-800/60 overflow-hidden">
        {/* Subtle radial cyan bloom behind headline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(6,182,212,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-200/80 mb-6">
            Wisconsin Compute&nbsp;&nbsp;//&nbsp;&nbsp;The Economic Engine
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.04] max-w-4xl">
            <span className="text-slate-50">Wisconsin is Building the Physical Inputs of AI.</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
            AI is no longer just a software race — it has become the single
            largest driver of physical economic growth in Wisconsin&apos;s
            history. This unprecedented infrastructure surge is injecting $46B
            into our state, activating multi-million dollar contracts for local
            manufacturers, and permanently restructuring our utility grid. I
            deliver the macro-strategic blueprints that help Wisconsin corporate
            boards, industrial executives, and real estate developers capitalize
            on this massive industrial wealth transfer.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Primary CTA — solid cyan */}
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded hover:bg-cyan-400 transition-colors"
            >
              Schedule Introductory Call
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Wisconsin's Economic Engine ──────────────────────────────────── */}
      <section className="border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="mb-14">
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-3">
              Macroeconomic Impact
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-50 tracking-tight max-w-2xl leading-tight">
              Wisconsin&apos;s Economic Engine
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
              How mega-scale digital infrastructure investments are reshaping the
              state&apos;s industrial footprint, supply contracts, and gross domestic
              product — by the numbers, in Wisconsin.
            </p>
          </div>

          {/* Hero Metric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                metric: "$46 BILLION+",
                label:  "Total Capital Pipeline",
                subtext:
                  "Combined data center infrastructure developments currently under construction, expansion, or formal evaluation across the state of Wisconsin.",
              },
              {
                metric: "10,000+ JOBS",
                label:  "Industrial & Trade Work Force",
                subtext:
                  "Skilled building and union trade personnel deployed during development phases, anchored by Microsoft's newly operational Fairwater campus.",
              },
              {
                metric: "$1.1 BILLION+",
                label:  "Direct In-State Supply Contracts",
                subtext:
                  "Active corporate orders secured by iconic Wisconsin manufacturers — including Generac, Modine, and Regal Rexnord — to supply advanced power and cooling hardware globally.",
              },
            ].map(({ metric, label, subtext }) => (
              <div
                key={label}
                className="group bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg px-8 py-10 flex flex-col gap-4 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight leading-none">
                  {metric}
                </p>
                <div className="w-8 h-px bg-cyan-500/40" />
                <div>
                  <p className="text-sm font-semibold text-slate-200 mb-2">{label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{subtext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Narrative callout */}
          <div className="mt-6 bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg px-8 py-7">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              <span className="text-cyan-400 font-bold uppercase tracking-[0.22em] text-[10px] block mb-3">
                Regional Outlook
              </span>
              &ldquo;According to regional macroeconomic studies, the ongoing digital
              infrastructure boom is projected to more than double the state&apos;s
              data center-specific gross domestic product contribution by 2029,
              scaling local data architectures and activating advanced utility
              infrastructure upgrades that would otherwise take utilities decades
              to fund alone.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* ── Wisconsin Infrastructure Tracker ────────────────────────────── */}
      <section id="briefings" className="border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-10">
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-3">
              Market Intelligence
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 tracking-tight">
              Wisconsin Infrastructure Tracker
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Active and planned hyperscale AI compute deployments across the state.
              Click any pin to view facility details.
            </p>
          </div>
          <WisconsinMap />
        </div>
      </section>

{/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-4">
            Engage
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 tracking-tight">
            Request a Briefing or Engagement
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-sm mx-auto">
            Executive briefings, keynote bookings, and media requests reviewed
            within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-cyan-500 text-slate-950 text-xs font-bold tracking-wider uppercase px-8 py-3 rounded hover:bg-cyan-400 transition-colors"
          >
            Start an Inquiry
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <CalendlyModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
