"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export type HeroSlide = {
  kicker: string;
  headline: string;
  subline: string;
  image: string;
  /** Optional `object-*` classes so wide heroes can favor sky / subject (e.g. jet in upper frame). */
  imageClassName?: string;
};

type HeroShowcaseProps = {
  slides: readonly HeroSlide[];
};

export function HeroShowcase({ slides }: HeroShowcaseProps) {
  const [active, setActive] = useState(0);
  const safeIndex = slides.length ? active % slides.length : 0;

  const advance = useCallback(() => {
    setActive((i) => (slides.length ? (i + 1) % slides.length : 0));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = window.setInterval(advance, 8000);
    return () => window.clearInterval(t);
  }, [advance, slides.length]);

  const slide = slides[safeIndex] ?? slides[0];
  if (!slide) return null;

  const lines = slide.headline.split("\n").filter(Boolean);

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden overflow-y-visible border-b border-white/[0.06]">
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
              i === safeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== safeIndex}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              className={`scale-105 object-cover sm:scale-100 ${s.imageClassName ?? "object-center"}`}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/35 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090f] to-transparent" />
      </div>

      <nav
        className="absolute bottom-8 left-1/2 z-20 flex max-w-[calc(100%-2rem)] -translate-x-1/2 gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:bottom-auto md:left-5 md:top-1/2 md:max-h-none md:max-w-none md:-translate-y-1/2 md:translate-x-0 md:flex-col md:gap-3 md:overflow-visible md:overscroll-auto lg:left-8 [&::-webkit-scrollbar]:hidden"
        aria-label="Featured stories"
      >
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => setActive(i)}
            className={`relative h-12 w-[4.5rem] shrink-0 overflow-hidden rounded-md transition md:h-14 md:w-20 ${
              i === safeIndex
                ? "scale-[1.02] ring-2 ring-sky-400 ring-offset-2 ring-offset-black/70 shadow-[0_0_22px_rgba(56,189,248,0.45),0_0_0_1px_rgba(251,191,36,0.35)]"
                : "opacity-65 ring-1 ring-white/10 hover:opacity-100"
            }`}
            aria-current={i === safeIndex ? "true" : undefined}
            aria-label={`Show ${s.kicker}`}
          >
            <Image
              src={s.image}
              alt=""
              fill
              className={`object-cover ${s.imageClassName ?? "object-center"}`}
              sizes="80px"
            />
          </button>
        ))}
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-36 pt-24 sm:px-6 sm:pb-40 sm:pt-28 md:pb-40 md:pl-28 md:pt-20 lg:pl-36">
        <div className="max-w-2xl translate-y-3 space-y-8 sm:translate-y-4 md:translate-y-6">
          <p className="min-h-[1.45rem] text-[15px] font-medium leading-snug text-white/95 sm:min-h-[1.55rem] sm:text-base">
            {slide.kicker}
          </p>
          <h1 className="min-h-[2.2lh] text-[clamp(1.5rem,5.6vw,4.25rem)] font-bold uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-[clamp(2rem,6.5vw,4.25rem)]">
            {lines.map((line, idx) => (
              <span key={`${safeIndex}-${idx}`} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="min-h-[7rem] max-w-lg text-base leading-relaxed text-white/65 sm:min-h-[7.75rem] sm:text-lg">
            {slide.subline}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="https://www.noodletomato.com/"
              className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/25 bg-white/12 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-white/40 hover:bg-white/16 sm:text-xs"
            >
              <span>Start Noodle now</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#041018] shadow-[0_0_22px_-6px_rgba(255,255,255,0.45)] ring-1 ring-white/50 transition group-hover:bg-white/95 group-hover:shadow-[0_0_26px_-4px_rgba(255,255,255,0.55)]">
                <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" />
              </span>
            </Link>
            <Link
              href="#create"
              className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/18 bg-white/[0.07] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_6px_28px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-white/35 hover:bg-white/11 sm:text-xs"
            >
              <span>See what you can ship</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/55 bg-black/20 shadow-[0_0_16px_-8px_rgba(255,255,255,0.2)] transition group-hover:border-white/75 group-hover:bg-black/30">
                <iconify-icon icon="solar:star-linear" width="19" height="19" className="text-white" />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.16em] text-white/45">
            <span className="inline-flex items-center gap-2 text-white/55">
              <iconify-icon
                icon="solar:shield-check-linear"
                width="16"
                height="16"
                className="text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]"
              />
              First video guarantee
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>20–90 min · 1080p</span>
          </div>
        </div>
      </div>
    </section>
  );
}
