"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Participate" },
  { href: "/reading-list/", label: "Reading List" },
  { href: "/team/", label: "Research Team" },
  { href: "/location/", label: "Location" },
  { href: "/faq/", label: "FAQ" },
  { href: "/internship-collaboration/", label: "Get Involved" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-colors duration-300 bg-background/70 border-b border-divider py-3 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-[clamp(1rem,1.2vw,1.125rem)] font-semibold">
            <Link
              href="/"
              className="text-foreground transition-all duration-200 ease-in-out hover:text-accent-primary"
              onClick={() => setOpen(false)}
            >
              Connected Minds
            </Link>
          </h1>
          <div className="flex items-center gap-2">
            <ul className="text-[clamp(1rem,1.2vw,1.125rem)] hidden lg:flex">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground transition-all duration-200 ease-in-out hover:text-accent-primary py-2 px-3 font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:text-accent-primary transition-colors"
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <ul className="lg:hidden mt-3 pt-3 border-t border-divider grid gap-1 text-[1.0625rem]">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground transition-all duration-200 ease-in-out hover:text-accent-primary py-2.5 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
