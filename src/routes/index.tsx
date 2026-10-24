import { createFileRoute } from "@tanstack/react-router";
import { JoinCta } from "@/components/wb/JoinCta";
import { MarketChart } from "@/components/wb/MarketChart";
import { Testimonials } from "@/components/wb/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion — Liquidity & Market Structure Education" },
      { name: "description", content: "Clarity over noise. Process over predictions. Study liquidity and market structure with the Wolf Billion trading education community." },
      { property: "og:title", content: "Wolf Billion — Trading Education Community" },
      { property: "og:description", content: "Study how liquidity and market structure fit together. Join our trading education community on Telegram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Framework />
        <Analysis />
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
      <div className={`${wrap} flex h-16 items-center justify-between gap-3`}>
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
      <div className={`${wrap} relative grid items-center gap-10 gap-y-8 pb-14 pt-8 md:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pb-24 lg:pt-24`}>
        <div className="fade-up">
          <h1 className="max-w-[20ch] text-[clamp(1.85rem,8.6vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.04em] sm:max-w-none sm:text-5xl sm:tracking-[-0.035em] lg:text-[3.7rem]">
            What if you've been making trading{" "}
            <span className="block text-balance font-display-italic text-[1.14em] leading-[1] tracking-[-0.015em] text-primary sm:inline">
              harder than it <span className="whitespace-nowrap">needs to be?</span>
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn to read price through liquidity and market structure, not just predictions.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <JoinCta />
            <p className="text-sm text-plum">Join our trading education community on Telegram.</p>
          </div>
        </div>

        <figure className="fade-up -mx-2 rounded-md border bg-card p-2.5 sm:mx-0 sm:p-5" style={{ animationDelay: ".15s" }}>
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
    <section className="border-t py-20 lg:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
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
      </div>

      <div className={`${wrap} mt-20 flex flex-col items-center text-center`}>
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
    d: "Price approaches a previous high or low — an area the framework examines for possible liquidity. These reference levels are where many orders tend to rest, so we mark them before anything else.",
  },
  {
    n: "02", t: "Structure", stage: 2 as const,
    d: "Price moves beyond the relevant level and subsequently changes structure. A Break of Structure (BOS) is read as a shift in context — and the participation it can induce — not as a guarantee of direction.",
  },
  {
    n: "03", t: "Reaction & Liquidity Blocks", stage: 3 as const,
    d: "We study the resulting reaction and the liquidity block it originated from. That zone gives analytical context and a reference for where the interpretation would be invalidated.",
  },
];

function Framework() {
  return (
    <section className="relative border-t bg-card py-20 lg:py-28">
      <div className={wrap}>
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

        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border bg-border lg:grid-cols-3">
          {stages.map((s) => (
            <li key={s.n} className="flex flex-col bg-background p-5 sm:p-7">
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
        <p className="mt-6 text-sm text-plum">Each stage builds on the same illustrative chart. Concepts are educational, not predictive rules.</p>
      </div>
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
    <section className="border-t py-20 lg:py-28">
      <div className={wrap}>
        <p className="eyebrow">The analysis</p>
        <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          See the framework <span className="font-display-italic text-primary">in action.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <figure className="rounded-md border bg-card p-3 sm:p-5 lg:self-start">
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

const community = [
  { n: "01", t: "Market Breakdowns", d: "Educational examples of liquidity and price structure." },
  { n: "02", t: "Trading Discussions", d: "Explore chart interpretations and different market perspectives." },
  { n: "03", t: "Structured Learning", d: "Connect isolated trading concepts into a more consistent analytical framework." },
];

function Community() {
  return (
    <section className="relative overflow-hidden border-t bg-card py-20 lg:py-28">
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
          Join Wolf Billion on Telegram to explore how liquidity and market structure are studied, discuss chart interpretations, and develop your understanding with other traders.
        </p>

        <p className="mt-12 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-plum">What we're building inside — planned focus areas</p>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {community.map((c) => (
            <li key={c.n} className="bg-background p-6 transition-colors hover:bg-elevated">
              <span className="font-mono text-xs text-primary">{c.n}</span>
              <h3 className="mt-4 text-lg font-medium">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-3">
          <JoinCta />
          <p className="text-sm text-plum">Continue on Telegram.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative border-t py-24 lg:py-36">
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
    <footer className="border-t py-12" style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom))" }}>
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
