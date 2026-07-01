import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wisconsin Compute | Regional Market Intelligence",
  description:
    "Macroeconomic and operational analysis of Wisconsin's $46B AI infrastructure capital pipeline. Bryan Seefeld — Regional Market Intelligence.",
};

const navLinks = [
  { href: "/",          label: "Home"     },
  { href: "/services",  label: "Services" },
  { href: "/about",     label: "About"    },
  { href: "/contact",   label: "Contact"  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-navy-950 text-slate-50">

        {/* ── Sticky nav ── */}
        <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-navy-950/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="text-xs font-bold tracking-[0.22em] uppercase text-slate-50 hover:text-cyan-400 transition-colors"
            >
              Wisconsin Compute
            </Link>
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium tracking-wider uppercase text-slate-400 hover:text-slate-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* ── Footer ── */}
        <footer className="border-t border-slate-800/60 bg-navy-950">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-50">
                Wisconsin Compute
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Regional Market Intelligence · Bryan Seefeld
              </p>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Wisconsin Compute. All rights reserved.
              </p>
              <p className="text-xs text-slate-600">
                Independent market analysis. State of Wisconsin.
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
