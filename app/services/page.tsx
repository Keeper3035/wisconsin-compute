import Link from "next/link";
import { ArrowRight, Mic2, Building2, Shield } from "lucide-react";

const services = [
  {
    icon: Mic2,
    number: "01",
    title: "Keynote Speaking & Industry Briefings",
    audience: ["Corporate Annual Meetings", "Regional Business Associations", "Chambers of Commerce", "Executive Roundtables"],
    pitch:
      "Delivering high-impact, data-driven opening and closing addresses that cut through standard AI hype to reveal the physical reality of the infrastructure boom. These sessions translate macro capital flows, utility grid constraints, and supply chain pressures into a clear local roadmap for regional business leaders.",
    topics: [
      {
        title: "The Industrial Blueprint of AI",
        description:
          "How a $46B capital pipeline is permanently restructuring the Midwest utility grid and local manufacturing landscapes.",
      },
      {
        title: "Beyond the Software",
        description:
          "Why the next decade of corporate execution belongs to physical-layer assets, land underwriting, and heavy hardware supply chains.",
      },
    ],
  },
  {
    icon: Building2,
    number: "02",
    title: "Strategic Advisory & Infrastructure Consulting",
    audience: ["Private Equity Committees", "Commercial Real Estate Developers", "Institutional Asset Managers"],
    pitch:
      "Providing deep operational advisory and technical due diligence for capital deployment. This includes setting up multi-phase investment stage-gate processes, running rigorous greenfield land underwriting, analyzing complex interconnection queues, and evaluating creative behind-the-meter energy or battery storage solutions to pull forward project velocity.",
    topics: [],
  },
  {
    icon: Shield,
    number: "03",
    title: "Private Corporate Briefings",
    audience: ["Mid-Market CEOs", "Corporate Boards of Directors", "Enterprise Leadership Teams"],
    pitch:
      "Exclusive, closed-door strategy sessions tailored specifically to your company's balance sheet. We map the data center explosion directly to your operational footprint, helping you technically qualify your manufacturing output to win massive downstream supply contracts, secure local power access, or safely transition your organization into autonomous background data pipelines.",
    topics: [],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0F19] text-slate-50">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-800/60 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6">
            Services
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50 leading-[1.08] max-w-2xl">
            How Wisconsin Compute Engages.
          </h1>
          <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-xl">
            Three distinct commercial models — keynote speaking, infrastructure
            consulting, and private board briefings — each built around
            zero-fluff, operator-level intelligence.
          </p>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg p-8 md:p-10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
              >
                {/* Card header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs font-bold text-slate-600 tracking-widest">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 bg-[#0B0F19] border border-slate-800/60 rounded flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-50 tracking-tight">
                      {service.title}
                    </h2>
                    {/* Audience tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.audience.map((a) => (
                        <span
                          key={a}
                          className="text-[10px] font-semibold tracking-wide text-cyan-400 border border-cyan-500/30 rounded px-2.5 py-1"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800/60 mb-8" />

                {/* Value pitch */}
                <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                  {service.pitch}
                </p>

                {/* Signature topics (Service 1 only) */}
                {service.topics.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.topics.map((topic) => (
                      <div
                        key={topic.title}
                        className="bg-[#0B0F19] border border-slate-800/60 rounded-lg p-6"
                      >
                        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-cyan-400 mb-2">
                          Signature Topic
                        </p>
                        <h3 className="text-sm font-bold text-slate-50 mb-2">
                          &ldquo;{topic.title}&rdquo;
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Callout ──────────────────────────────────────────────────── */}
      <section className="bg-[#0B0F19]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg px-8 md:px-14 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-3">
                Engage Wisconsin Compute
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-50 tracking-tight mb-4">
                Engage Wisconsin Compute
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you are booking a keynote address for a regional summit
                or retaining private strategic advisory for an upcoming capital
                deployment, let&apos;s establish your framework.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-cyan-500 text-slate-950 text-xs font-bold tracking-wider uppercase px-8 py-4 rounded hover:bg-cyan-400 transition-colors"
            >
              Schedule an Initial Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
