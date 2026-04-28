"use client";

import Link from "next/link";
import { useState } from "react";

const skyHeadlineAccentClass =
  "text-sky-400 [text-shadow:0_0_26px_rgba(56,189,248,0.55),0_0_52px_rgba(56,189,248,0.32)]";

type Billing = "monthly" | "annual";

type Plan = {
  name: string;
  description: string;
  monthly: { price: string; foot: string };
  annual: { price: string; foot: string };
  highlights: readonly string[];
  popular?: boolean;
};

const plans = [
  {
    name: "Starter",
    description:
      "Prove the channel before you scale spend. One steady publishing rhythm, full Noodle Tomato pipeline, no freelance patchwork.",
    monthly: { price: "$149", foot: "Billed monthly · cancel anytime" },
    annual: {
      price: "$127",
      foot: "$1,524/year billed upfront · save ~15% vs. monthly",
    },
    highlights: [
      "~2 hrs finished documentary runtime / month, single render queue",
      "Script through master: narration, scene imagery, score, captions",
      "1080p MP4 handoff + standard turnaround targets",
      "Email support on business days",
    ],
  },
  {
    name: "Growth",
    description:
      "For creators who already know long-form pays. Weekly-ish drops, faster queue placement, room to iterate on what’s working.",
    monthly: { price: "$599", foot: "Billed monthly · cancel anytime" },
    annual: {
      price: "$509",
      foot: "$6,108/year billed upfront · save ~15% vs. monthly",
    },
    highlights: [
      "~9 hrs finished runtime / month with priority rendering",
      "Everything in Starter, plus tighter turnaround windows",
      "Parallel topic staging (plan next upload while one renders)",
      "Priority support + async Loom walkthroughs for launches",
    ],
  },
  {
    name: "Pro",
    description:
      "Ops teams running multiple lanes or agencies white-labeling. Parallel exports, highest queue priority, hands for complex drops.",
    monthly: { price: "$1,249", foot: "Billed monthly · cancel anytime" },
    annual: {
      price: "$1,062",
      foot: "$12,744/year billed upfront · save ~15% vs. monthly",
    },
    highlights: [
      "~20 hrs finished runtime / month across parallel exports",
      "Dedicated success channel + launch calendar reviews",
      "Custom retention hooks & tone presets per series",
      "Invoice-friendly billing & optional MSA addendum",
    ],
    popular: true,
  },
] as const satisfies readonly Plan[];

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section
      id="pricing"
      className="relative z-10 overflow-hidden border-y border-white/[0.06] bg-[#07090f] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_12%,rgba(56,189,248,0.11),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_70%,rgba(14,165,233,0.06),transparent_42%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
            Pricing
          </p>
          <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
            Minutes each month.
            <span className={skyHeadlineAccentClass}> Movies each week.</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            Pick monthly while you experiment, or lock annual pricing when uploads are a habit. Runtime buckets are inclusive of narration, visuals, score, captions, and mastering—top-ups available if you blow past plan minutes.
          </p>
        </div>

        <div className="mx-auto mb-10 flex max-w-lg flex-col items-center gap-3 sm:mb-12">
          <div
            className="inline-flex rounded-full border border-white/15 bg-white/[0.04] p-1 shadow-inner shadow-black/40"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition sm:px-6 ${
                billing === "monthly"
                  ? "bg-sky-400 text-[#041018] shadow-[0_0_24px_-6px_rgba(56,189,248,0.65)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition sm:px-6 ${
                billing === "annual"
                  ? "bg-sky-400 text-[#041018] shadow-[0_0_24px_-6px_rgba(56,189,248,0.65)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Annual
            </button>
          </div>
          <p className="text-center text-xs leading-relaxed text-zinc-500">
            Annual billing saves about <span className="text-zinc-300">15%</span>—same features,
            paid once per year. Need something custom?{" "}
            <Link href="#cta" className="text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline">
              Talk to us
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch md:gap-7">
          {plans.map((plan) => {
            const tier = billing === "monthly" ? plan.monthly : plan.annual;
            return (
              <div
                key={plan.name}
                className={`relative flex h-full min-h-0 flex-col rounded-[26px] border p-6 sm:p-8 ${
                  "popular" in plan && plan.popular
                    ? "border-sky-400/45 bg-gradient-to-b from-sky-500/12 to-[#07090f] shadow-[0_0_50px_-18px_rgba(56,189,248,0.5)]"
                    : "border-white/10 bg-white/[0.03] shadow-xl shadow-black/20"
                }`}
              >
                {"popular" in plan && plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-400 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#041018]">
                    Crew favorite
                  </span>
                ) : null}
                <div className="shrink-0">
                  <p className="text-sm font-semibold text-zinc-400">{plan.name}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-white sm:text-[2.5rem]">
                      {tier.price}
                    </span>
                    <span className="text-sm font-medium text-zinc-500">/mo</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{tier.foot}</p>
                  <p className="mt-5 text-sm leading-relaxed text-zinc-400">{plan.description}</p>
                </div>
                <ul className="mt-6 flex min-h-0 flex-1 flex-col gap-3 text-sm leading-snug text-zinc-300">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        width="18"
                        height="18"
                        className="mt-0.5 shrink-0 text-emerald-300"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#cta"
                  className={`mt-8 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    "popular" in plan && plan.popular
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-[#051018] shadow-[0_0_28px_-8px_rgba(56,189,248,0.55)]"
                      : "border border-white/15 bg-transparent text-white hover:border-sky-400/60 hover:bg-white/[0.04]"
                  }`}
                >
                  {"popular" in plan && plan.popular ? (
                    <iconify-icon
                      icon="solar:stars-minimalistic-linear"
                      width="20"
                      height="20"
                    />
                  ) : null}
                  Get started
                  {!("popular" in plan && plan.popular) ? (
                    <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" />
                  ) : null}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-zinc-500 sm:mt-12">
          Prices shown in USD. Runtime estimates assume ~20–90 minute masters; heavy VFX or licensed music clears may require add-ons.
          Taxes where applicable. Need enterprise volume, SSO, or SLA-backed turnaround? We&apos;ll scope it when you reach out.
        </p>
      </div>
    </section>
  );
}
