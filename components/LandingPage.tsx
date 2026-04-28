import Image from "next/image";
import Link from "next/link";
import { FeatureCardsRail } from "@/components/FeatureCardsRail";
import type { FeatureCardItem } from "@/components/FeatureCardsRail";
import { HeroShowcase } from "@/components/HeroShowcase";
import { PricingPlans } from "@/components/PricingPlans";
import { SiteNav } from "@/components/SiteNav";

/** Local mood board — Y2K / tech-editorial / blue-noir (see /public/vibe) */
const vibe = {
  blueMotion: "/vibe/blue-motion.png",
  y2kBubble: "/vibe/y2k-bubble.png",
  chromeStudio: "/vibe/chrome-studio.png",
  editorialSeat: "/vibe/editorial-seat.png",
  techFashion: "/vibe/tech-fashion.png",
  fisheyeEnergy: "/vibe/fisheye-energy.png",
  peephole: "/vibe/peephole.png",
  bwGloss: "/vibe/bw-gloss.png",
  motionChrome: "/vibe/motion-chrome.png",
} as const;

/** Hero slides — ChatGPT exports: spaces/Cyrillic; encode for URL */
const heroSlide1Image =
  "/" + encodeURIComponent("ChatGPT Image 27 апр. 2026 г., 22_49_45.png");
const heroSlide3Image =
  "/" + encodeURIComponent("ChatGPT Image 27 апр. 2026 г., 22_51_48.png");

/** Hero rotator — high-contrast editorial stills (public/) */
const heroSlides = [
  {
    kicker: "Automated storytelling",
    headline: "Your topic in.\nYour film out.",
    subline:
      "Choose a niche and get a research-backed documentary with voice, visuals, subtitles, and music. One MP4, ready for YouTube—less production drag, more time to publish.",
    image: heroSlide1Image,
    imageClassName: "object-[center_18%] sm:object-[center_22%]",
  },
  {
    kicker: "Full-stack production",
    headline: "One brief in.\nOne film out.",
    subline:
      "The same system handles scripting, scene-matched imagery, captions, and score from a single brief. Download one polished file—no edit suite required before upload.",
    image: "/abfe5782b6b89fc6a2efc6d802369ff3.jpg",
  },
  {
    kicker: "Built for RPM",
    headline: "Long formats earn.\nLong after premiere.",
    subline:
      "Prioritize retention and RPM on long videos instead of chasing one-day Shorts spikes. Build a catalog of films that keep earning well after release week.",
    image: heroSlide3Image,
  },
] as const;

/** Full-bleed art inside the “What you get” spec panel */
const pipelineSpecPanelBg = "/e1687c16e9573dfceabed22a46c264a8.jpg";

/** One pipeline column visual (stable; not tied to hero slide index) */
const pipelineAsideImage = "/abfe5782b6b89fc6a2efc6d802369ff3.jpg";

/** CTA split panel — tech-noir / cyan editorial still */
const ctaPanelImage = "/84bdb14fe77afa76bc877ccb4df850bb.jpg";

const partners = [
  { icon: "simple-icons:youtube", label: "YouTube" },
  { icon: "simple-icons:discord", label: "Discord" },
] as const;

const featureCards = [
  {
    title: "Midnight briefings",
    subtitle: "Studio-grade long docs, zero stock slump.",
    image: vibe.chromeStudio,
    badge: "POPULAR",
  },
  {
    title: "Rabbit-hole torque",
    subtitle: "True stories tuned for retention curves.",
    image: vibe.techFashion,
  },
  {
    title: "Chrome chronicles",
    subtitle: "Next-gen frames, lore you can cite.",
    image: vibe.editorialSeat,
    badge: "NEW",
  },
  {
    title: "Velocity vignettes",
    subtitle: "Stills and VO that keep the motion high.",
    image: vibe.fisheyeEnergy,
  },
  {
    title: "High-gloss ledgers",
    subtitle: "Explainers with charts that scan in seconds.",
    image: vibe.motionChrome,
  },
] as const;

const featureCardsForRail: FeatureCardItem[] = featureCards.map((c) => ({
  title: c.title,
  subtitle: c.subtitle,
  image: c.image,
  badge: "badge" in c ? c.badge : undefined,
}));

/** Sky accent inside section titles — layered glow so short words match longer phrases */
const skyHeadlineAccentClass =
  "text-sky-400 [text-shadow:0_0_26px_rgba(56,189,248,0.55),0_0_52px_rgba(56,189,248,0.32)]";

/** Primary pill — Tonight’s slate (reference for all non-hero / non-nav CTAs) */
const slatePrimaryCtaClass =
  "inline-flex w-fit items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-[#041018] shadow-[0_0_32px_-4px_rgba(56,189,248,0.75),0_4px_16px_-4px_rgba(56,189,248,0.4)] transition hover:bg-sky-300 hover:shadow-[0_0_40px_-4px_rgba(56,189,248,0.85)]";

/** Secondary pill — same box size as slate primary, glass treatment */
const slateSecondaryCtaClass =
  "inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/10";

/** “What you get” feature icons — soft sky edge, light glow (avoid heavy neon) */
const pipelineFeatureIconTileClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/[0.05] shadow-[0_0_14px_-4px_rgba(56,189,248,0.22)]";

const pipelineDeliverables = [
  {
    title: "Script",
    body: "Research-backed, retention-optimized structure—not a loose outline.",
    icon: "solar:document-text-linear",
  },
  {
    title: "Narration",
    body: "Natural AI voiceover with multiple styles and pacing options.",
    icon: "solar:microphone-3-linear",
  },
  {
    title: "Visuals",
    body: "AI imagery matched scene-by-scene to tone and geography.",
    icon: "solar:gallery-minimalistic-linear",
  },
  {
    title: "Subtitles",
    body: "Animated captions synced to narration for watch-time retention.",
    icon: "solar:subtitles-linear",
  },
  {
    title: "Music",
    body: "Background score fitted to mood and tempo.",
    icon: "solar:music-note-slider-linear",
  },
  {
    title: "Editing",
    body: "Pacing, transitions, and timing—handled end to end.",
    icon: "solar:clapperboard-linear",
  },
  {
    title: "1080p MP4",
    body: "Upload-ready file, roughly 20–90 minutes, no extra assembly.",
    icon: "solar:download-minimalistic-linear",
  },
] as const;

const steps = [
  {
    title: "Pick a topic",
    body: "Choose a topic. One line of text is your whole brief—nothing else required.",
    bg: vibe.blueMotion,
  },
  {
    title: "We build the full video",
    body: "Script through final cut—VO, shots, captions, score—in one MP4, about twenty to ninety minutes.",
    bg: vibe.chromeStudio,
  },
  {
    title: "Upload and earn",
    body: "Download, upload to YouTube, and earn as long watch time stacks up.",
    bg: vibe.fisheyeEnergy,
  },
] as const;

const landingFaqItems = [
  {
    q: "How long until I get my MP4?",
    a: "Most full-length documentaries land within the turnaround window for your plan—usually a few hours to a business day depending on queue depth and runtime. You’ll get a download link in-app and by email when the master is ready.",
  },
  {
    q: "Can I publish the video on YouTube and monetize it?",
    a: "Yes. Output is meant for your channel: upload, set ad eligibility, and earn on watch time like any other long-form you own. Follow YouTube’s policies for your niche; we don’t replace your responsibility as the publisher.",
  },
  {
    q: "What topics work best?",
    a: "History, science, true crime, and “rabbit hole” explainers tend to retain well—anything with a clear narrative arc and strong curiosity hook. If you’re unsure, start with a topic you’d binge yourself; the pipeline is built for obsession-grade storytelling.",
  },
  {
    q: "Do I own the final file?",
    a: "You receive a finished 1080p MP4 to use on your channels under our terms. Licensed music or third-party clears may have platform-specific rules—we surface what’s in the mix so you’re not surprised at upload time.",
  },
  {
    q: "How does billing and runtime work?",
    a: "Plans include a monthly bucket of finished runtime (see Pricing). Overage or rush lanes can be added if you outgrow the bucket. Cancel monthly anytime; annual is billed upfront with the discount shown on the toggle.",
  },
  {
    q: "Can I revise narration or visuals?",
    a: "Yes—within fair use of your plan you can regenerate beats or swap tone presets. Heavy rewrites or net-new research may count against runtime or need a top-up; we’ll always show cost before you commit.",
  },
] as const;

export function LandingPage() {
  return (
    <>
      <SiteNav />

      <main>
        <HeroShowcase slides={heroSlides} />

        {/* Feature strip — cyber editorial slate (reference layout) */}
        <section id="create" className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_35%,rgba(56,189,248,0.14),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(14,165,233,0.06),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-14">
            <div className="flex max-w-xl flex-col gap-6 lg:max-w-none">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                Tonight&apos;s slate
              </p>
              <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                What will you{" "}
                <span className={skyHeadlineAccentClass}>create</span>{" "}
                today?
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Pick a niche, preview the tone, ship a full-length story that actually holds attention.
              </p>
              <Link href="#cta" className={slatePrimaryCtaClass}>
                <iconify-icon
                  icon="solar:stars-minimalistic-linear"
                  width="20"
                  height="20"
                />
                Explore the Noodle Tomato
              </Link>
            </div>
            <FeatureCardsRail cards={featureCardsForRail} />
          </div>
        </section>

        {/* One pipeline — editorial strip: same language as Hero / Tonight’s slate (no bento grid) */}
        <section
          id="pipeline"
          className="relative overflow-hidden border-y border-white/[0.06] bg-[#07090f] pt-24 pb-20 md:pt-28 md:pb-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_15%,rgba(56,189,248,0.12),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_85%,rgba(14,165,233,0.07),transparent_42%)]" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <div className="flex max-w-xl flex-col gap-6 lg:max-w-none">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                  One pipeline
                </p>
                <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                  Pay per video.
                  <span className={skyHeadlineAccentClass}> Upload tonight.</span>
                  <span className="mt-1 block sm:mt-2">Earn on watch time.</span>
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Finished documentaries—not rough cuts. Pay per full-length asset; long-form watch time is what turns YouTube uploads into recurring ad revenue.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link href="#cta" className={slatePrimaryCtaClass}>
                    <iconify-icon
                      icon="solar:stars-minimalistic-linear"
                      width="20"
                      height="20"
                    />
                    Start earning
                  </Link>
                  <Link href="#create" className={slateSecondaryCtaClass}>
                    <iconify-icon
                      icon="solar:play-bold"
                      width="20"
                      height="20"
                      className="text-white"
                    />
                    View full video
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[32px] bg-sky-500/[0.12] blur-2xl sm:-inset-5 sm:blur-3xl"
                  aria-hidden
                />
                <div className="relative aspect-[3/4] max-h-[min(520px,72svh)] overflow-hidden rounded-[28px] border border-white/[0.1] shadow-[0_40px_100px_-44px_rgba(0,0,0,0.92)] sm:aspect-[4/5] sm:max-h-none lg:aspect-[10/11]">
                  <Image
                    src={pipelineAsideImage}
                    alt=""
                    fill
                    className="object-cover object-[center_38%]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/15 to-transparent lg:via-transparent lg:to-black/30" />
                  <p className="absolute bottom-6 left-6 right-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Same brief in · One MP4 out
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] shadow-[0_32px_80px_-48px_rgba(0,0,0,0.88)] backdrop-blur-sm md:mt-20">
              {/* Above the divider: no photo — calm glass panel */}
              <div className="p-6 sm:p-10 md:p-12">
                <div className="flex flex-col gap-6 border-b border-white/[0.1] pb-10 md:flex-row md:items-end md:justify-between md:gap-12">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                      What you get
                    </p>
                    <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                      Production-ready every time
                    </p>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                    Everything ships in one pipeline—same brief in, one polished MP4 out. No edit suite between you and upload night.
                  </p>
                </div>

                <ul className="mt-10 grid list-none gap-9 sm:gap-x-14 sm:gap-y-10 md:grid-cols-2 md:gap-y-9">
                  {pipelineDeliverables.slice(0, 6).map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span
                        className={`relative mt-0.5 ${pipelineFeatureIconTileClass}`}
                        aria-hidden
                      >
                        <iconify-icon icon={item.icon} width="22" height="22" className="text-sky-200" />
                      </span>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Below the divider: full-bleed image only for Delivery */}
              <div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden border-t border-white/[0.12] sm:min-h-[320px]">
                <Image
                  src={pipelineSpecPanelBg}
                  alt=""
                  fill
                  className="z-0 object-cover object-[center_22%]"
                  sizes="(max-width: 1152px) 100vw, 1152px"
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#07090f]/92 via-[#07090f]/68 to-[#07090f]/38]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 z-[1] bg-black/22" aria-hidden />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_130%_120%_at_0%_45%,rgba(7,9,15,0.62),transparent_58%)]"
                  aria-hidden
                />

                <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-10 md:px-12">
                  <div className="flex min-h-[220px] flex-col justify-center sm:min-h-[260px] lg:max-w-xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={pipelineFeatureIconTileClass} aria-hidden>
                        <iconify-icon
                          icon={pipelineDeliverables[6].icon}
                          width="22"
                          height="22"
                          className="text-sky-200"
                        />
                      </span>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                        Delivery
                      </p>
                    </div>
                    <p className="mt-4 text-xl font-bold text-white sm:text-2xl">
                      {pipelineDeliverables[6].title}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                      {pipelineDeliverables[6].body}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How it works — soft sky transition + #workflow for deep links */}
            <div id="workflow" className="relative scroll-mt-28">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-36 md:h-44"
                aria-hidden
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_-8%,rgba(56,189,248,0.15),transparent_64%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.08),transparent_46%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07090f]/20 to-transparent" />
              </div>
              <div className="relative z-10 pt-16 md:pt-[250px]">
              <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center sm:mb-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                  How it works
                </p>
                <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                  Three steps.
                  <span className={skyHeadlineAccentClass}> One click.</span>
                  <span className="mt-1 block sm:mt-2">Full video.</span>
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Fully automated: topic in, production-ready MP4 out. Pay per video—each upload is its own revenue stream when you publish to YouTube.
                </p>
              </div>
              <div className="grid gap-8 px-1 sm:px-0 md:grid-cols-3 md:items-stretch md:gap-7">
                {steps.map((step, i) => (
                  <article
                    key={step.title}
                    className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-white/10 p-8 shadow-xl shadow-black/25 md:h-full md:min-h-[340px]"
                  >
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">
                      <Image
                        src={step.bg}
                        alt=""
                        fill
                        className="object-cover opacity-[0.62] saturate-[0.9]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/55 via-[#07090f]/45 to-[#07090f]/60" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_0%,rgba(56,189,248,0.07),transparent_55%)]" />
                    </div>
                    <p className="pointer-events-none absolute right-5 top-5 z-0 select-none text-4xl font-black leading-none text-white/[0.12] tabular-nums sm:right-6 sm:top-6 sm:text-5xl">
                      {(i + 1).toString().padStart(2, "0")}
                    </p>
                    <div className="relative z-10 flex flex-1 flex-col justify-end">
                      <div className="mx-auto w-full max-w-[calc(100%-4.25rem)] text-center sm:max-w-[calc(100%-5rem)]">
                        <h3 className="mx-auto min-h-[2.75rem] max-w-[16rem] text-pretty text-lg font-bold uppercase leading-snug tracking-wide text-white sm:min-h-[4.25rem] sm:max-w-[18rem] sm:text-xl sm:leading-snug">
                          {step.title}
                        </h3>
                        <p className="mx-auto mt-3 max-w-[17.5rem] text-balance text-sm leading-snug text-zinc-200 line-clamp-3 sm:mt-4 sm:leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div
                className="mt-12 border-t border-white/[0.06] pt-10 sm:mt-14 sm:pt-12"
                role="region"
                aria-label="Platforms and tools"
              >
                <div className="flex flex-col items-center gap-5 sm:gap-6">
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-500">
                    Built for creators who publish on
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-7 sm:gap-x-14">
                    {partners.map(({ icon, label }) => (
                      <div
                        key={icon}
                        className="flex h-9 w-24 items-center justify-center text-zinc-400 opacity-90 transition hover:text-zinc-200 hover:opacity-100"
                      >
                        <iconify-icon
                          icon={icon}
                          width="96"
                          height="36"
                          aria-label={label}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof — same canvas + type scale as pipeline / Tonight’s slate */}
        <section
          id="proof"
          className="relative overflow-hidden border-y border-white/[0.06] bg-[#07090f] py-24 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_15%,rgba(56,189,248,0.12),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_85%,rgba(14,165,233,0.07),transparent_42%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="flex max-w-xl flex-col gap-6 lg:max-w-none">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                Field notes
              </p>
              <h2 className="text-balance text-2xl font-extrabold leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                We didn&apos;t ship theory—
                <span className={skyHeadlineAccentClass}> we shipped channels</span> first.
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                The same stack that powers Noodle Tomato ran faceless documentaries before we productized it. Volume plus watch time beats praying for a single viral Short.
              </p>
              <div className="relative mt-2 aspect-[16/11] overflow-hidden rounded-[26px] border border-white/[0.1] shadow-2xl shadow-black/60">
                <Image
                  src={vibe.fisheyeEnergy}
                  alt="Wide-angle kinetic atmosphere"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#07090f]/60 via-transparent to-sky-900/25" />
              </div>
            </div>
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {(
                [
                  {
                    label: "Peak views (one launch)",
                    value: "500K+",
                    icon: "solar:eye-linear",
                    context:
                      "Organic browse and suggested traffic on one long title—no ad buy behind that window.",
                  },
                  {
                    label: "Ad revenue (single hit)",
                    value: "$3.1K",
                    icon: "solar:wallet-money-linear",
                    context:
                      "From a single 45–60 minute documentary; long-form RPM beats typical Shorts CPM bands.",
                  },
                  {
                    label: "ROI vs. production cost",
                    value: "21×",
                    icon: "solar:graph-up-linear",
                    context:
                      "Versus booking editors, voice talent, and stock for a comparable runtime and polish bar.",
                  },
                  {
                    label: "Time hands-off",
                    value: "<10 min",
                    icon: "solar:stopwatch-play-linear",
                    context:
                      "Your touchpoints: lock the topic and grab the file. Scripting through export runs unattended.",
                  },
                ] as const
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[200px] flex-col rounded-[26px] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 sm:min-h-0 sm:p-7"
                >
                  <div className="flex items-start gap-2.5 text-[11px] font-semibold uppercase leading-snug tracking-[0.22em] text-zinc-500">
                    <iconify-icon
                      icon={stat.icon}
                      width="18"
                      height="18"
                      className="mt-0.5 shrink-0 text-sky-300"
                    />
                    {stat.label}
                  </div>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-[2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-auto pt-4 text-sm leading-relaxed text-zinc-500">
                    {stat.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare formats — deep link #compare; FAQ Q&A lives after pricing (#faq) */}
        <section
          id="compare"
          className="relative overflow-hidden scroll-mt-28 border-y border-white/[0.06] bg-[#07090f] py-24 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_35%,rgba(56,189,248,0.1),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(14,165,233,0.06),transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center sm:mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                Compare formats
              </p>
              <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                Long-form pays better{" "}
                <span className={skyHeadlineAccentClass}>per view</span>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Chasing Shorts? Rad for reach. Building a bank account? Long documentaries compound.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-7">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 text-left shadow-xl shadow-black/20 sm:p-8">
                <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  <iconify-icon
                    icon="solar:videocamera-record-linear"
                    width="20"
                    height="20"
                    className="text-sky-300"
                  />
                  Short-form bursts
                </div>
                <p className="text-3xl font-bold tracking-tight text-white">~$5–50</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Typical revenue band per 100K views on social clips—great for vibes, stingy RPM.
                </p>
              </div>
              <div className="rounded-[26px] border border-sky-400/40 bg-gradient-to-br from-sky-500/15 via-[#081022] to-[#060b16] p-6 text-left shadow-[0_0_44px_-12px_rgba(56,189,248,0.5)] sm:p-8">
                <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                  <iconify-icon
                    icon="solar:play-stream-linear"
                    width="20"
                    height="20"
                    className="text-sky-300"
                  />
                  YouTube documentaries
                </div>
                <p className="text-3xl font-bold tracking-tight text-white">$500–1,200</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Same 100K views when people stay for the story—watch time is the currency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PricingPlans />

        {/* Q&A — matches Field notes / pipeline; nav #faq */}
        <section
          id="faq"
          className="relative overflow-hidden scroll-mt-28 border-y border-white/[0.06] bg-[#07090f] py-24 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_12%,rgba(56,189,248,0.11),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_88%,rgba(14,165,233,0.07),transparent_42%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center sm:mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                Q&amp;A
              </p>
              <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                Straight answers.
                <span className={skyHeadlineAccentClass}> Before you commit.</span>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                The stuff creators ask before the first render—turnaround, rights, billing, and what “done” actually means.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-3">
              {landingFaqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[22px] border border-white/[0.1] bg-white/[0.03] shadow-lg shadow-black/25 transition-[border-color,box-shadow] open:border-sky-400/35 open:shadow-[0_0_40px_-16px_rgba(56,189,248,0.35)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left sm:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sky-300 transition group-open:rotate-180"
                      aria-hidden
                    >
                      <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20" />
                    </span>
                  </summary>
                  <div className="border-t border-white/[0.08] px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                    <p className="pt-4 text-sm leading-relaxed text-zinc-400">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-500 sm:mt-12">
              Still deciding?{" "}
              <Link href="#compare" className="text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline">
                See long-form vs. Shorts RPM
              </Link>{" "}
              or{" "}
              <Link href="#cta" className="text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline">
                jump to the launch pad
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA — pipeline-style split + hero-style glass actions (no generic “launch/compare” copy) */}
        <section
          id="cta"
          className="relative overflow-hidden scroll-mt-28 border-t border-white/[0.06] bg-[#07090f] py-24 md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_18%,rgba(56,189,248,0.16),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_72%,rgba(14,165,233,0.08),transparent_46%)]" />
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={vibe.blueMotion}
              alt=""
              fill
              className="object-cover object-[center_40%] opacity-[0.11] saturate-[1.06]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-[#07090f]/92 to-[#07090f]" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-[#07090f]/55 shadow-[0_40px_100px_-52px_rgba(0,0,0,0.95)] backdrop-blur-md md:grid md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-stretch">
              <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-500/12 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" aria-hidden />

              <div className="relative flex flex-col justify-center gap-7 p-8 sm:p-10 md:p-12 lg:p-14">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                    Final frame
                  </p>
                  <div className="h-px w-16 bg-gradient-to-r from-sky-400/80 to-transparent" aria-hidden />
                </div>
                <h2 className="text-balance text-2xl font-extrabold uppercase leading-[1.12] tracking-[0.04em] text-white sm:text-3xl lg:text-[2.15rem] lg:leading-[1.1]">
                  Tonight&apos;s topic is{" "}
                  <span className={skyHeadlineAccentClass}>tomorrow&apos;s ad slot.</span>
                </h2>
                <p className="max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Same energy as the hero—drop a line of obsession, get VO, scene-matched frames, captions, and score in
                  one MP4. No edit suite between you and upload night.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href="https://www.noodletomato.com/"
                    className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/25 bg-white/12 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:border-white/40 hover:bg-white/16 sm:text-xs"
                  >
                    <span>Start Noodle now</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#041018] shadow-[0_0_22px_-6px_rgba(255,255,255,0.45)] ring-1 ring-white/50 transition group-hover:bg-white/95 group-hover:shadow-[0_0_26px_-4px_rgba(255,255,255,0.55)]">
                      <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" />
                    </span>
                  </Link>
                  <Link
                    href="#create"
                    className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/18 bg-white/[0.07] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_6px_28px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:border-white/35 hover:bg-white/11 sm:text-xs"
                  >
                    <span>See what you can ship</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/55 bg-black/20 shadow-[0_0_16px_-8px_rgba(255,255,255,0.2)] transition group-hover:border-white/75 group-hover:bg-black/30">
                      <iconify-icon icon="solar:star-linear" width="19" height="19" className="text-white" />
                    </span>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  <span className="inline-flex items-center gap-2 text-zinc-400">
                    <iconify-icon
                      icon="solar:shield-check-linear"
                      width="14"
                      height="14"
                      className="text-sky-400"
                    />
                    First video guarantee
                  </span>
                  <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
                  <span>20–90 min · 1080p · YouTube-ready</span>
                </div>
              </div>

              <div className="relative min-h-[240px] border-t border-white/[0.08] md:min-h-0 md:border-t-0 md:border-l md:border-white/[0.08]">
                <Image
                  src={ctaPanelImage}
                  alt=""
                  fill
                  className="object-cover object-[center_48%_42%] sm:object-[center_45%_40%]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/30 to-[#07090f]/55 md:bg-gradient-to-r md:from-[#07090f]/96 md:via-[#07090f]/40 md:to-transparent" />
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_90%_48%,rgba(34,211,238,0.14),rgba(56,189,248,0.06),transparent_58%)]"
                  aria-hidden
                />
                <p className="absolute bottom-6 left-6 right-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45 md:bottom-8 md:left-8 md:right-8">
                  Same brief in · One MP4 out
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-[#03050a]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_45%_at_50%_-10%,rgba(56,189,248,0.11),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_85%,rgba(14,165,233,0.06),transparent_42%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pb-14 sm:pt-16 md:pb-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Studio</p>
              <p className="mt-4 text-lg font-bold uppercase tracking-[0.12em] text-white">Noodle Tomato</p>
              <p className="mt-3 max-w-xs font-mono text-[11px] leading-relaxed text-zinc-500">
                v.0 · long-form · 1080p · obsessions welcome
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                AI-built long-form docs for YouTube—script through master in one MP4, tuned for watch time.
              </p>
              <Link
                href="https://www.noodletomato.com/"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.07] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:border-white/40 hover:bg-white/11 sm:w-fit sm:justify-start"
              >
                <span>Start Noodle now</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#041018] ring-1 ring-white/45 transition group-hover:bg-white/95">
                  <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" />
                </span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Product</p>
              <ul className="mt-4 flex flex-col gap-1">
                {(
                  [
                    ["#create", "Niches & slate"],
                    ["#pipeline", "Pipeline"],
                    ["#pricing", "Pricing"],
                    ["#faq", "Q&A"],
                  ] as const
                ).map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="group flex items-center gap-2 py-2 text-sm text-zinc-400 transition hover:text-white"
                    >
                      <span className="h-px w-0 bg-white/60 transition-all group-hover:w-3" aria-hidden />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Company</p>
              <ul className="mt-4 flex flex-col gap-1">
                {(
                  [
                    ["#proof", "Field notes"],
                    ["#compare", "Long-form vs. Shorts"],
                    ["#", "Contact"],
                    ["#", "Privacy"],
                    ["#", "Terms"],
                  ] as const
                ).map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-center gap-2 py-2 text-sm text-zinc-400 transition hover:text-white"
                    >
                      <span className="h-px w-0 bg-white/60 transition-all group-hover:w-3" aria-hidden />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Publish stack</p>
              <div
                className="mt-4 flex flex-wrap gap-4 text-zinc-500"
                role="list"
                aria-label="Platforms and tools"
              >
                {partners.map(({ icon, label }) => (
                  <div
                    key={icon}
                    role="listitem"
                    className="opacity-75 transition hover:opacity-100"
                  >
                    <iconify-icon icon={icon} width="72" height="28" aria-label={label} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-10 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Noodle Tomato
            </p>
            <a
              href="https://www.noodletomato.com/"
              className="inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-white"
            >
              <iconify-icon icon="solar:global-linear" width="16" height="16" className="text-zinc-500" aria-hidden />
              noodletomato.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
