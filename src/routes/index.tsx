import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";
import { MarketChart } from "@/components/wb/MarketChart";
import { Testimonials } from "@/components/wb/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion | Liquidity & Market Structure Education" },
      { name: "description", content: "Explore Wolf Billion, a trading education brand focused on liquidity, market structure, and a more disciplined approach to studying price. Join our Telegram community." },
      { property: "og:title", content: "Wolf Billion | Liquidity & Market Structure Education" },
      { property: "og:description", content: "Explore Wolf Billion, a trading education brand focused on liquidity, market structure, and a more disciplined approach to studying price. Join our Telegram community." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wolf Billion" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Wolf Billion | Liquidity & Market Structure Education" },
      { name: "twitter:description", content: "Explore Wolf Billion, a trading education brand focused on liquidity, market structure, and a more disciplined approach to studying price. Join our Telegram community." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Wolf Billion",
              description:
                "A trading education brand focused on liquidity, market structure, and a more disciplined approach to studying price.",
              sameAs: ["https://t.me/+K4fPSalRPnsxNTU0"],
            },
            {
              "@type": "WebPage",
              name: "Wolf Billion | Liquidity & Market Structure Education",
              description:
                "Explore Wolf Billion, a trading education brand focused on liquidity, market structure, and a more disciplined approach to studying price. Join our Telegram community.",
              isPartOf: { "@type": "WebSite", name: "Wolf Billion" },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const wrap = "container-page";

/** Fade-and-translate reveal on scroll. The hidden state is only added by JS, so content stays visible without it. */
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.classList.add("reveal-visible");
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Framework />
        <Analysis />
        <Behind />
        <Community />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-sm" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className={`${wrap} flex h-[4.25rem] items-center justify-between gap-3`}>
        <a href="#top" className="whitespace-nowrap text-[0.95rem] font-semibold tracking-tight">
          Wolf <span className="font-display-italic text-lg text-primary">Billion</span>
        </a>
        <JoinCta size="sm" className="shrink-0 max-[360px]:h-9 max-[360px]:px-3 max-[360px]:text-[0.8rem]" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="ambient -top-40 left-1/2 h-[26rem] w-[46rem] max-w-none -translate-x-1/3 opacity-70" aria-hidden />
      <div className={`${wrap} relative grid items-center gap-12 pb-[4.5rem] pt-10 md:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pb-32 lg:pt-24`}>
        <div className="fade-up">
          <h1 className="max-w-[20ch] text-[clamp(1.85rem,8.6vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.04em] sm:max-w-none sm:text-5xl sm:tracking-[-0.035em] lg:text-[3.7rem]">
            What if you've been making trading{" "}
            <span className="relative block text-balance font-display-italic text-[1.14em] leading-[1] tracking-[-0.015em] text-primary before:absolute before:-inset-x-8 before:-inset-y-3 before:-z-10 before:rounded-full before:bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_24%,transparent),transparent)] before:blur-md sm:inline">
              harder than it <span className="whitespace-nowrap">needs to be?</span>
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn to read price through liquidity and market structure, not just predictions.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <JoinCta />
            <p className="text-sm text-plum">Join our trading education community on Telegram.</p>
          </div>
        </div>

        <figure className="fade-up -mx-2 rounded-md border bg-card p-3 sm:mx-0 sm:p-6" style={{ animationDelay: ".15s" }}>
          <div className="mb-2 flex items-center justify-between px-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            <span>Educational illustration</span>
            <span className="text-plum">fig. 01</span>
          </div>
          <MarketChart
            stage={3}
            className="w-full sm:hidden"
            compact
            title="Liquidity and market structure illustration"
            desc="Price rises to a previous high, sweeps above it, then breaks below the prior swing low (break of structure), returns to the liquidity block and reacts lower."
          />
          <MarketChart
            stage={3}
            className="hidden w-full sm:block"
            title="Liquidity and market structure illustration"
            desc="Price rises to a previous high, sweeps above it, then breaks below the prior swing low (break of structure), returns to the liquidity block and reacts lower."
          />
          <figcaption className="mt-3 border-t px-1 pt-3 text-sm text-muted-foreground">
            An illustrative view of how liquidity and market structure can be studied together.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const problems = [
  { n: "01", t: "Too much input", d: "Competing interpretations and indicators create confusion.", tag: "Overload" },
  { n: "02", t: "Late interpretation", d: "The trader only recognizes the context after price has reacted.", tag: "Hesitation" },
  { n: "03", t: "No consistent sequence", d: "Without a framework, interpretations change from one market situation to another.", tag: "Need for structure" },
];

function Problem() {
  return (
    <section className="border-t section-y">
      <Reveal className={`${wrap} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        <div>
          <p className="eyebrow">The problem is not a lack of signals</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
            More information <span className="font-display-italic text-primary">does not create</span> more clarity.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Charts are crowded with opinions, indicators, and after-the-fact explanations. Without a repeatable process, every move becomes another reason to hesitate, chase, or change the plan.
          </p>
          <p className="mt-10 hidden max-w-sm border-l-2 border-primary pl-4 font-display-italic text-2xl leading-snug lg:block">
            The goal is not to predict every move. It is to study what price is doing with more consistency.
          </p>
        </div>

        <ol className="relative">
          <span className="absolute bottom-6 left-[1.05rem] top-6 w-px bg-gradient-to-b from-plum via-border to-primary" aria-hidden />
          {problems.map((p, i) => (
            <li key={p.n} className="relative flex gap-5 pb-10 last:pb-0">
              <span className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-full border font-mono text-xs ${i === 2 ? "border-primary bg-primary text-primary-foreground" : "bg-background text-muted-foreground"}`}>
                {p.n}
              </span>
              <div className="flex-1 border-b pb-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium">{p.t}</h3>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-plum">→ {p.tag}</span>
                </div>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
                <ProblemGlyph i={i} />
              </div>
            </li>
          ))}
        </ol>

        <p className="max-w-sm border-l-2 border-primary pl-4 font-display-italic text-2xl leading-snug lg:hidden">
          The goal is not to predict every move. It is to study what price is doing with more consistency.
        </p>
      </Reveal>

      <div className={`${wrap} mt-16 flex flex-col items-center lg:mt-24 text-center`}>
        <span className="h-14 w-px bg-gradient-to-b from-transparent to-primary" aria-hidden />
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Clarity does not come from adding another signal. <span className="text-foreground">It comes from giving the chart a sequence.</span>
        </p>
      </div>
    </section>
  );
}

function ProblemGlyph({ i }: { i: number }) {
  const common = "mt-4 h-8 w-full max-w-[220px]";
  if (i === 0)
    return (
      <svg viewBox="0 0 220 32" className={common} aria-hidden>
        {[0, 1, 2, 3].map((k) => (
          <path key={k} d={`M0 ${16 + k * 2} Q 55 ${k * 8} 110 ${16 - k} T 220 ${10 + k * 4}`} fill="none" className="stroke-plum" strokeWidth="1" opacity={0.5 + k * 0.12} />
        ))}
      </svg>
    );
  if (i === 1)
    return (
      <svg viewBox="0 0 220 32" className={common} aria-hidden>
        <path d="M0 26 L60 22 L90 6 L120 24 L220 20" fill="none" className="stroke-muted-foreground" strokeWidth="1.2" />
        <circle cx="150" cy="22" r="3" className="fill-plum" />
        <text x="140" y="14" fontSize="9" className="fill-plum font-mono">noticed here</text>
      </svg>
    );
  return (
    <svg viewBox="0 0 220 32" className={common} aria-hidden>
      {[20, 90, 160].map((x, k) => (
        <g key={x}>
          <rect x={x} y="10" width="40" height="12" rx="2" fill="none" className="stroke-primary" strokeWidth="1" />
          {k < 2 && <line x1={x + 40} x2={x + 70} y1="16" y2="16" className="stroke-primary" strokeWidth="1" strokeDasharray="2 3" />}
        </g>
      ))}
    </svg>
  );
}

const stages = [
  {
    n: "01", t: "Liquidity", stage: 1 as const,
    d: "Study previous highs and lows as possible liquidity reference areas — the levels the framework examines before anything else.",
  },
  {
    n: "02", t: "Structure", stage: 2 as const,
    d: "Examine breaks of previous highs and lows through our Break of Structure framework, including how such movements may induce market participation.",
  },
  {
    n: "03", t: "Liquidity Blocks & Reaction", stage: 3 as const,
    d: "Study relevant liquidity blocks, price reactions, and the areas used to reason about invalidation and risk.",
  },
];

function Framework() {
  return (
    <section className="relative overflow-hidden border-t bg-card section-y">
      <div className="ambient -left-48 top-10 h-[24rem] w-[38rem] opacity-60" aria-hidden />
      <Reveal className={wrap}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">The framework</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
              A clearer way to <span className="font-display-italic text-primary">interpret price.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground lg:justify-self-end">
            Our approach connects liquidity, market structure, and price reaction into a framework for studying market behavior.
          </p>
        </div>

        <ol className="mt-12 grid gap-px lg:mt-16 overflow-hidden rounded-md border bg-border lg:grid-cols-3">
          {stages.map((s) => (
            <li key={s.n} className="flex flex-col bg-background card-pad transition-colors duration-300 hover:bg-elevated">
              <div className="flex items-center gap-3 font-mono text-xs text-primary">
                <span>{s.n}</span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-plum">stage {s.stage}/3</span>
              </div>
              <h3 className="mt-5 text-xl font-medium">{s.t}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 rounded-sm border bg-card p-2">
                <MarketChart
                  stage={s.stage}
                  compact
                  className="w-full"
                  title={`Stage ${s.n}: ${s.t}`}
                  desc={s.d}
                />
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl border-l-2 border-primary pl-4 font-display-italic text-xl leading-snug sm:text-2xl">
          We don't start with predictions. We start by examining where liquidity may be, how structure changes, and what price does next.
        </p>
        <p className="mt-6 text-sm text-plum">Each stage builds on the same illustrative chart. Concepts are educational, not predictive rules.</p>
      </Reveal>
    </section>
  );
}

const breakdown = [
  { k: "Market", v: "Illustrative example" },
  { k: "Timeframe", v: "Illustrative 1H" },
  { k: "Liquidity", v: "A previous high is identified as a relevant liquidity reference.", n: 1 },
  { k: "Structure", v: "After price moves above the referenced high, an example break in structure is highlighted below the prior swing low.", n: 3 },
  { k: "Liquidity Block", v: "The zone the move originated from is annotated for further analysis.", n: 4 },
  { k: "Reaction", v: "Price returns into the zone and the behavior around it is illustrated.", n: 5 },
  { k: "Invalidation", v: "Acceptance above the top of the liquidity block would mean the interpretation no longer holds.", n: 6 },
];

function Analysis() {
  return (
    <section className="relative overflow-hidden border-t section-y">
      <div className="ambient -right-48 top-1/4 h-[26rem] w-[42rem] opacity-60" aria-hidden />
      <Reveal className={wrap}>
        <p className="eyebrow">The analysis</p>
        <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          See the framework <span className="font-display-italic text-primary">in action.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <figure className="edge-lit rounded-md border bg-card p-3 sm:p-6 lg:self-start">
            <MarketChart
              stage={4}
              numbered
              className="w-full"
              title="Illustrative 1H analysis"
              desc="1: previous high as liquidity reference. 2: price moves above it. 3: break of structure below swing low. 4: liquidity block. 5: reaction from the block. 6: invalidation above the block."
            />
            <figcaption className="mt-3 border-t px-1 pt-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-primary">
              Illustrative analysis — not a real trade result.
            </figcaption>
          </figure>

          <dl className="divide-y border-y">
            {breakdown.map((b) => (
              <div key={b.k} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3.5 text-[0.93rem]">
                <dt className="flex items-start gap-2 font-medium">
                  {b.n && <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary font-mono text-[0.65rem] text-primary-foreground">{b.n}</span>}
                  {b.k}
                </dt>
                <dd className="text-muted-foreground">{b.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Testimonials />
      </div>
    </section>
  );
}

function Behind() {
  return (
    <section className="border-t section-y">
      <div className={`${wrap} grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20`}>
        <div>
          <p className="eyebrow">Behind Wolf Billion</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
            Built around a <span className="font-display-italic text-primary">different way</span> of studying price.
          </h2>
        </div>
        <p className="max-w-xl leading-relaxed text-muted-foreground lg:justify-self-end">
          Wolf Billion is being developed around a liquidity-focused approach to studying price movement, market structure, and disciplined decision-making.
        </p>
      </div>
    </section>
  );
}

const community = [
  { n: "01", t: "Market Breakdowns", d: "Learn how liquidity and market structure can be examined through educational chart breakdowns." },
  { n: "02", t: "Trading Discussions", d: "Explore trading ideas, chart interpretations, and different analytical perspectives." },
  { n: "03", t: "Structured Learning", d: "Develop a more consistent understanding of liquidity, Break of Structure, and Liquidity Blocks." },
];

function Community() {
  return (
    <section className="relative overflow-hidden border-t bg-card section-y">
      <svg viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 top-10 w-[420px] opacity-40 lg:right-0" aria-hidden>
        {[60, 110, 160].map((r) => <circle key={r} cx="200" cy="200" r={r} fill="none" className="stroke-border" />)}
        {[[200, 40], [339, 280], [61, 280], [310, 90], [90, 310], [200, 360]].map(([x, y]) => (
          <g key={`${x}${y}`}>
            <line x1="200" y1="200" x2={x} y2={y} className="stroke-plum" strokeWidth="0.6" />
            <circle cx={x} cy={y} r="4" className="fill-primary" />
          </g>
        ))}
        <circle cx="200" cy="200" r="7" className="fill-foreground" />
      </svg>

      <div className={`${wrap} relative`}>
        <p className="eyebrow">Beyond the chart</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          The chart is just the beginning. <span className="font-display-italic text-primary">The conversation continues.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Join our Telegram community to explore trading concepts, study market structure, and take part in discussions focused on understanding price.
        </p>

        <p className="mt-12 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-plum">What we're building inside — planned focus areas</p>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {community.map((c) => (
            <li key={c.n} className="bg-background card-pad transition-colors hover:bg-elevated">
              <span className="font-mono text-xs text-primary">{c.n}</span>
              <h3 className="mt-4 text-lg font-medium">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-3">
          <JoinCta />
          <p className="text-sm text-plum">Continue on Telegram.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative border-t section-y lg:py-36">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden />
      <div className={`${wrap} relative flex flex-col items-center text-center`}>
        <h2 className="max-w-3xl text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Ready to see the market from <span className="font-display-italic text-[1.1em] text-primary">another perspective?</span>
        </h2>
        <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
          Explore liquidity, understand market structure, and connect with a community focused on disciplined learning.
        </p>
        <JoinCta className="mt-10" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-14" style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}>
      <div className={`${wrap} grid gap-8 md:grid-cols-[1fr_1.4fr]`}>
        <div>
          <p className="font-semibold tracking-tight">
            Wolf <span className="font-display-italic text-lg text-primary">Billion</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Clarity over noise. Process over predictions.</p>
          <p className="mt-6 text-xs text-plum">© {new Date().getFullYear()} Wolf Billion</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Trading involves substantial risk and potential financial loss. Content is educational and does not constitute personalized investment advice. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
