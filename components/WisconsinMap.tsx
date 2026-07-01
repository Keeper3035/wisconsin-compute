"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

export interface Facility {
  id: number;
  name: string;
  subtitle: string;
  developer: string;
  county: string;
  coordinates: [number, number];
  status: string;
  dotColor: string;
  labelColor: string;
  details: string[];
}

export const facilities: Facility[] = [
  {
    id: 1,
    name: "Mount Pleasant Campus",
    subtitle: "Fairwater 1",
    developer: "Microsoft",
    county: "Racine County",
    coordinates: [-87.88, 42.72],
    status: "Operational",
    dotColor: "#22d3ee",   // cyan-400
    labelColor: "#22d3ee",
    details: [
      "Multi-billion dollar flagship facility",
      "Advanced direct liquid-cooling topology",
      "Phase 1 fully operational as of mid-2026",
    ],
  },
  {
    id: 2,
    name: "Port Washington Campus",
    subtitle: "Lighthouse",
    developer: "Vantage Data Centers",
    county: "Ozaukee County",
    coordinates: [-87.88, 43.39],
    status: "Under Construction",
    dotColor: "#f59e0b",   // amber-400
    labelColor: "#f59e0b",
    details: [
      "$15B investment — 902-megawatt AI campus",
      "Backed by OpenAI & Oracle Stargate",
      "Active construction underway",
    ],
  },
  {
    id: 3,
    name: "Beaver Dam Facility",
    subtitle: "",
    developer: "Meta Platforms",
    county: "Dodge County",
    coordinates: [-88.84, 43.46],
    status: "Operational",
    dotColor: "#22d3ee",
    labelColor: "#22d3ee",
    details: [
      "$1B, 700,000 sq ft AI compute cluster",
      "Closed-loop evaporative cooling",
      "Purpose-built AI workload infrastructure",
    ],
  },
  {
    id: 4,
    name: "Janesville GM Plant",
    subtitle: "Redevelopment",
    developer: "Viridian Acquisitions",
    county: "Rock County",
    coordinates: [-89.02, 42.68],
    status: "Planned",
    dotColor: "#818cf8",   // indigo-400
    labelColor: "#818cf8",
    details: [
      "800-megawatt mega-campus planned",
      "Repurposes historic GM industrial site",
      "Large-scale adaptive reuse project",
    ],
  },
  {
    id: 5,
    name: "Kenosha Data Ridge",
    subtitle: "Expansion",
    developer: "Microsoft",
    county: "Kenosha County",
    coordinates: [-87.82, 42.58],
    status: "In Development",
    dotColor: "#a78bfa",   // violet-400
    labelColor: "#a78bfa",
    details: [
      "240 newly acquired acres",
      "High-density secondary compute clusters",
      "SE Wisconsin AI corridor expansion",
    ],
  },
  {
    id: 6,
    name: "Milwaukee Midtown",
    subtitle: "Former Midtown Walmart Site",
    developer: "Proposed",
    county: "Milwaukee County",
    coordinates: [-87.94, 43.07],
    status: "Proposed",
    dotColor: "#475569",   // slate-600
    labelColor: "#64748b",
    details: [
      "100,000 sq ft urban data facility",
      "Leverages existing heavy electrical infra",
      "Adaptive infill at former retail anchor",
    ],
  },
];

const LEGEND = [
  { label: "Operational",        color: "#22d3ee" },
  { label: "Under Construction", color: "#f59e0b" },
  { label: "In Development",     color: "#a78bfa" },
  { label: "Planned",            color: "#818cf8" },
  { label: "Proposed",           color: "#475569" },
];

export default function WisconsinMap() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = facilities.find((f) => f.id === activeId) ?? null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Map canvas */}
      <div className="relative flex-1 bg-navy-900 border border-slate-800/60 rounded-lg overflow-hidden min-h-[420px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [-89.7, 44.6], scale: 4200 }}
          width={700}
          height={520}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter((geo) => String(geo.id).startsWith("55"))
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#0f1629"
                    stroke="#f8fafc"
                    strokeWidth={0.8}
                    style={{
                      default: { outline: "none" },
                      hover:   { fill: "#131d35", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
            }
          </Geographies>

          {facilities.map((facility) => (
            <Marker
              key={facility.id}
              coordinates={facility.coordinates}
              onClick={() => setActiveId(activeId === facility.id ? null : facility.id)}
            >
              {activeId === facility.id && (
                <circle
                  r={16}
                  fill={facility.dotColor}
                  fillOpacity={0.1}
                  stroke={facility.dotColor}
                  strokeWidth={1}
                  strokeOpacity={0.4}
                />
              )}
              <circle
                r={7}
                fill={facility.dotColor}
                stroke="#0B0F19"
                strokeWidth={2}
                style={{ cursor: "pointer" }}
              />
            </Marker>
          ))}
        </ComposableMap>

        {/* Legend */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 bg-navy-950/90 backdrop-blur-sm border border-slate-800/60 rounded p-3">
          {LEGEND.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <span className="text-xs text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail / index panel */}
      <div className="w-full lg:w-72 flex-shrink-0">
        {active ? (
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg p-6 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: active.dotColor }} />
                <span className="text-xs font-semibold" style={{ color: active.labelColor }}>
                  {active.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-50 leading-snug">{active.name}</h3>
              {active.subtitle && <p className="text-xs text-slate-500 mt-0.5">{active.subtitle}</p>}
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-400">{active.developer}</p>
              <p className="text-slate-50 font-semibold tracking-wide mt-0.5">{active.county}</p>
            </div>
            <ul className="flex flex-col gap-2 border-t border-slate-800/60 pt-4">
              {active.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setActiveId(null)}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors text-left"
            >
              ← Clear selection
            </button>
          </div>
        ) : (
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-lg p-6 flex flex-col gap-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Select a Site</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Click any pin on the map to view facility details — developer,
              investment scale, technology topology, and project status.
            </p>
            <div className="border-t border-slate-800/60 pt-4 flex flex-col gap-2.5">
              {facilities.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  className="flex items-center gap-2.5 text-left hover:opacity-80 transition-opacity"
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.dotColor }} />
                  <span className="text-xs text-slate-50 font-medium">{f.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
