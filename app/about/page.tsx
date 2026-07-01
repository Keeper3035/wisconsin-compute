import Link from "next/link";
import { ArrowRight, Zap, Database, Mic2 } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Greenfield Asset & Grid Underwriting",
    focus:
      "Navigating complex interconnection queues, evaluating behind-the-meter energy solutions, and structuring site selection frameworks for high-density compute.",
    details: [
      "Utility interconnection queue strategy",
      "Behind-the-meter & co-located generation",
      "Greenfield site selection underwriting",
      "Multi-phase grid capacity sensitivity modeling",
    ],
  },
  {
    icon: Database,
    title: "Operational Data Architectures",
    focus:
      "Designing autonomous background pipelines and secure enterprise API meshes to move organizations past basic AI prompts into real workflow efficiency.",
    details: [
      "Autonomous workflow design & deployment",
      "Secure enterprise API mesh architecture",
      "Model Context Protocol (MCP) integration",
      "Data pipeline governance & orchestration",
    ],
  },
  {
    icon: Mic2,
    title: "Keynote & Macro Briefings",
    focus:
      "Delivering zero-fluff, hard-data industry insight to executive roundtables, commercial real estate developers, and corporate boards.",
    details: [
      "Executive roundtable presentations",
      "CRE developer infrastructure briefings",
      "Corporate board strategic advisories",
      "Regional economic impact frameworks",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0B0F19] text-slate-50">

      {/* ── Executive Profile Hero ─────────────────────────────────────── */}
      <section className="relative border-b border-slate-800/60 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 75% 30%, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6">
            About
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50 leading-[1.08] max-w-3xl">
            The Strategy Behind the Megawatt.
          </h1>
          <p className="mt-4 text-base font-semibold text-cyan-400 tracking-wide">
            Bryan Seefeld — Infrastructure Strategy Executive &amp; Regional Analyst
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-slate-400 leading-relaxed text-sm md:text-base">
            <p>
              Most commentators look at the AI boom from the software layer. I
              look at it from the capital stack, the power grid, and the land.
              As an infrastructure strategist, I build and execute the
              investment frameworks that transform raw land into gigawatt-scale
              digital infrastructure. My background spans the cross-functional
              underwriting of massive greenfield campuses, multi-phase
              sensitivity modeling, and deep navigation of hyper-constrained
              utility markets.
            </p>
            <p>
              For corporate boards, private equity investment committees, and
              mid-market leadership teams, I cut through the industry hype to
              answer the only questions that impact the bottom line: How do
              physical infrastructure bottlenecks affect your business model,
              and how do you re-architect your internal digital operations to
              capture regional growth? I translate high-density cooling
              topologies, grid capacity risks, and site due diligence into
              decision-ready strategic directives.
            </p>
            <p>
              Whether delivering an executive keynote to help regional business
              networks navigate shifting supply chains, or advising a leadership
              team on building automated data pipelines, I bring raw,
              boots-on-the-ground operational intelligence. I don&apos;t offer
              surface-level tech trends; I deliver the concrete, physical-layer
              frameworks required to scale and protect your organization.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Pillars of Expertise ─────────────────────────────────── */}
      <section className="border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-3">
              Areas of Focus
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 tracking-tight">
              Core Pillars of Expertise
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Three integrated disciplines that form the foundation of every
              briefing, engagement, and strategic recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg p-8 flex flex-col gap-5 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-navy-800 border border-slate-800/60 rounded flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-50 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {pillar.focus}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 border-t border-slate-800/60 pt-4 mt-auto">
                    {pillar.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500/60 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0B0F19]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-4">
            Engage
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 tracking-tight">
            Request a Briefing
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-sm mx-auto">
            Executive briefings, keynote bookings, and strategic consulting
            engagements. Reviewed within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-cyan-500 text-slate-950 text-xs font-bold tracking-wider uppercase px-8 py-3 rounded hover:bg-cyan-400 transition-colors"
          >
            Request a Briefing
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
