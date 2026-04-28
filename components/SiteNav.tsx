"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinkClass =
  "shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white sm:text-[11px] sm:tracking-[0.22em]";

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[110] transition-[background-color,backdrop-filter] duration-300 ${
        solid
          ? "bg-[#07090f]/45 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:gap-5 sm:px-6 sm:py-5">
        <div className="flex min-w-0 shrink-0 items-center">
          <Link
            href="/"
            className="min-w-0 max-w-[12rem] truncate text-[11px] font-bold uppercase tracking-[0.18em] text-white sm:max-w-none sm:text-xs sm:tracking-[0.22em]"
          >
            NoodleTomato
          </Link>
        </div>
        <nav
          className="flex min-w-0 flex-1 items-center justify-center gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-7 md:gap-10 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          <a href="#workflow" className={navLinkClass}>
            How it works
          </a>
          <a href="#create" className={navLinkClass}>
            Niches
          </a>
          <a href="#pricing" className={navLinkClass}>
            Pricing
          </a>
          <a href="#faq" className={navLinkClass}>
            FAQ
          </a>
        </nav>
        <div className="flex shrink-0 items-center">
          <Link
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:border-white/40 hover:bg-white/16 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]"
          >
            <span>Start now</span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/35 ring-1 ring-white/30 transition group-hover:bg-black/45 sm:h-7 sm:w-7">
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="15"
                height="15"
                className="text-white"
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
