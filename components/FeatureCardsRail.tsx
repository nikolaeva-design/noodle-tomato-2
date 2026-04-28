"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export type FeatureCardItem = {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
};

type FeatureCardsRailProps = {
  cards: readonly FeatureCardItem[];
};

const GAP_PX = 16;

export function FeatureCardsRail({ cards }: FeatureCardsRailProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);

  const triple = cards.length
    ? ([...cards, ...cards, ...cards] as FeatureCardItem[])
    : [];

  const measureSetWidth = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || cards.length === 0) return 0;
    const children = el.querySelectorAll("[data-rail-card]");
    let w = 0;
    const n = cards.length;
    for (let i = 0; i < n; i++) {
      const node = children[i] as HTMLElement | undefined;
      if (node) {
        w += node.offsetWidth;
        if (i < n - 1) w += GAP_PX;
      }
    }
    return w;
  }, [cards.length]);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el || cards.length === 0) return;
    const apply = () => {
      const w = measureSetWidth();
      if (w <= 0) return;
      setWidthRef.current = w;
      el.scrollLeft = w;
    };
    apply();
    const id = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(id);
  }, [cards.length, measureSetWidth]);

  useEffect(() => {
    const onResize = () => {
      const el = scrollerRef.current;
      if (!el || cards.length === 0) return;
      const w = measureSetWidth();
      if (w <= 0) return;
      setWidthRef.current = w;
      el.scrollLeft = w;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [cards.length, measureSetWidth]);

  const syncLoop = useCallback(() => {
    const el = scrollerRef.current;
    const w = setWidthRef.current;
    if (!el || !w) return;
    if (el.scrollLeft < w * 0.35) {
      el.scrollLeft += w;
    } else if (el.scrollLeft > w * 2.35) {
      el.scrollLeft -= w;
    }
  }, []);

  const scrollDir = useCallback(
    (dir: 1 | -1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const first = el.querySelector("[data-rail-card]") as HTMLElement | null;
      const step = first ? first.offsetWidth + GAP_PX : 260;
      el.scrollBy({ left: dir * step, behavior: "smooth" });
      window.setTimeout(syncLoop, 320);
    },
    [syncLoop]
  );

  if (cards.length === 0) return null;

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={syncLoop}
          className="scrollbar-none flex gap-4 overflow-x-auto scroll-smooth pb-1 pl-0 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:pr-0 [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x proximity" }}
        >
          {triple.map((card, i) => (
            <article
              key={`${card.title}-${i}`}
              data-rail-card
              className="group relative w-[min(240px,calc(100vw-3.5rem))] min-w-[220px] max-w-[240px] shrink-0 snap-start overflow-hidden rounded-[22px] border border-white/[0.12] bg-[#05070d] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)] transition hover:border-sky-400/40 hover:shadow-[0_24px_60px_-20px_rgba(56,189,248,0.12)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="240px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070d]/40 via-transparent to-transparent" />
                {card.badge ? (
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                      card.badge === "NEW"
                        ? "bg-sky-400/95 text-white shadow-[0_0_16px_rgba(56,189,248,0.45)]"
                        : "bg-amber-300 text-[#1a1400]"
                    }`}
                  >
                    {card.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] bg-[#06080f] px-4 py-4">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white">{card.title}</p>
                  <p
                    className="truncate text-xs text-zinc-500"
                    title={card.subtitle}
                  >
                    {card.subtitle}
                  </p>
                </div>
                <iconify-icon
                  icon="solar:arrow-right-linear"
                  width="22"
                  height="22"
                  className="text-sky-400 transition group-hover:translate-x-0.5"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 sm:ml-0 sm:mr-0">
        <button
          type="button"
          aria-label="Previous niches"
          onClick={() => scrollDir(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-200"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="22" height="22" />
        </button>
        <button
          type="button"
          aria-label="Next niches"
          onClick={() => scrollDir(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/12 to-white/[0.04] text-white shadow-[0_4px_28px_-4px_rgba(56,189,248,0.35)] backdrop-blur-sm transition hover:border-sky-400/50 hover:from-sky-500/20 hover:to-white/10 hover:shadow-[0_6px_32px_-4px_rgba(56,189,248,0.45)]"
        >
          <iconify-icon icon="solar:arrow-right-linear" width="22" height="22" />
        </button>
      </div>
    </div>
  );
}
