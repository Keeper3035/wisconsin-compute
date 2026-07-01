"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/bryanseefeld";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const iframeSrc = `${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1&background_color=0B0F19&text_color=f8fafc&primary_color=06B6D4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        className="relative z-10 bg-navy-900 border border-slate-800/60 rounded-lg w-full max-w-2xl flex flex-col shadow-2xl shadow-black/60"
        style={{ height: "min(720px, 90vh)" }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 flex-shrink-0">
          <div>
            <p className="text-sm font-semibold text-slate-50">Book a Briefing</p>
            <p className="text-xs text-slate-500 mt-0.5">Executive session with Bryan Seefeld</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-200 transition-colors p-1 rounded hover:bg-navy-800"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Schedule a briefing with Bryan Seefeld"
          className="flex-1 rounded-b-lg"
        />
      </div>
    </div>
  );
}
