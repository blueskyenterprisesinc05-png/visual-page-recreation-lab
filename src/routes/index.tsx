import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";
import { MarketChart } from "@/components/wb/MarketChart";

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
    <header className="hero-focus-rest sticky top-0 z-40 border-b bg-background/90 backdrop-blur-sm" style={{ paddingTop: "env(safe-area-inset-top)" }}>
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
      <div className="hero-focus-rest tech-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="hero-focus-rest ambient -top-40 left-1/2 h-[26rem] w-[46rem] max-w-none -translate-x-1/3 opacity-70" aria-hidden />
      <div className={`${wrap} relative grid items-center gap-12 pb-[4.5rem] pt-10 md:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pb-32 lg:pt-24`}>
        <div className="hero-copy fade-up">
          <h1 className="hero-title hero-focus-title max-w-[20ch] text-[clamp(1.85rem,8.6vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.04em] sm:max-w-none sm:text-5xl sm:tracking-[-0.035em] lg:text-[3.7rem]">
            <span>What if you've been making trading{" "}</span>
            <span className="relative z-10 block text-balance font-display-italic text-[1.14em] leading-[1] tracking-[-0.015em] text-primary sm:inline">
              harder than it <span className="whitespace-nowrap">needs to be?</span>
            </span>
          </h1>
          <p className="hero-focus-rest mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            You&apos;ve been focusing on learning strategies instead of understanding what&apos;s actually happening on the chart.
          </p>
          <div className="hero-focus-rest hero-next mt-7 flex flex-col items-start gap-3">
            <JoinCta />
            <p className="text-sm text-plum">Join our trading education community on Telegram.</p>
          </div>
        </div>

        <figure className="hero-focus-rest fade-up -mx-2 rounded-md border bg-card p-3 sm:mx-0 sm:p-6" style={{ animationDelay: ".15s" }}>
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

function Problem() {
  return (
    <section className="border-t section-y">
      <Reveal className={`${wrap} max-w-3xl`}>
        <div>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em]">
            You&apos;ve learned the strategies. <span className="font-display-italic text-primary">But do you understand the market?</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            You&apos;ve watched the tutorials, studied different setups, and tried applying what you&apos;ve learned. But when you&apos;re on your own, looking at a chart, you&apos;re still not sure what to look for.
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Learning another strategy won&apos;t necessarily change that. Understanding the market behavior behind those setups is a different kind of learning.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

const stages = [
  {
    n: "01", t: "Liquidity", stage: 1 as const,
    d: "Study previous highs and lows as possible liquidity reference areas, including where highs respect previous highs and lows respect previous lows.",
  },
  {
    n: "02", t: "Structure", stage: 2 as const,
    d: "Examine breaks of previous highs and lows through our Break of Structure framework, including how those movements may induce market participation.",
  },
  {
    n: "03", t: "Liquidity Blocks & Reaction", stage: 3 as const,
    d: "Study relevant liquidity blocks, price reactions, and how these areas are considered when reasoning about invalidation and risk.",
  },
];

function Framework() {
  return (
    <section className="relative overflow-hidden border-t bg-card section-y story-section">
      <div className="ambient -left-48 top-10 h-[24rem] w-[38rem] opacity-60" aria-hidden />
      <Reveal className={wrap}>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
            Start with understanding <span className="font-display-italic text-primary">how price behaves.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            We study price through three connected ideas: liquidity, market structure, and reaction.
          </p>
        </div>

        <div className="framework-sequence mt-12 lg:mt-16" aria-label="Three-stage Wolf Billion framework">
          <div className="framework-rail" aria-hidden="true"><span /><i /><b /></div>
          <ol className="framework-steps grid gap-8 lg:grid-cols-3 lg:gap-10">
            {stages.map((s) => (
              <li key={s.n} className="framework-step relative flex flex-col rounded-md border bg-background card-pad transition-colors duration-300 hover:bg-elevated">
                <div className="flex items-center gap-3 font-mono text-xs text-primary">
                  <span className="framework-number grid size-8 place-items-center rounded-full border border-primary/60 bg-card">{s.n}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-plum">stage {s.stage}/3</span>
                </div>
                <h3 className="mt-5 text-xl font-medium">{s.t}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="framework-signal mt-6" aria-hidden="true"><span /><i /><b /></div>
                <span className="framework-focus" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-10 text-sm leading-relaxed text-plum">This is a conceptual overview of our approach, not a fixed rule for every market movement.</p>
      </Reveal>
    </section>
  );
}

function Behind() {
  return (
    <section className="border-t section-y">
      <Reveal className={`${wrap} grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20`}>
        <div>
          <p className="eyebrow">Behind Wolf Billion</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
            Built around a <span className="font-display-italic text-primary">different way</span> of studying price.
          </h2>
        </div>
        <p className="max-w-xl leading-relaxed text-muted-foreground lg:justify-self-end">
          Wolf Billion is being developed around a liquidity-focused approach to studying price movement, market structure, and disciplined decision-making.
        </p>
      </Reveal>
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

      <Reveal className={`${wrap} relative`}>
        <p className="eyebrow">Beyond the chart</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          The chart is just the beginning. <span className="font-display-italic text-primary">The conversation continues.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Join our Telegram community to explore trading concepts, study market structure, and take part in discussions focused on understanding price.
        </p>

        <p className="mt-12 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-plum">What we're building inside — planned focus areas</p>
        <ul className="community-flow mt-4 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {community.map((c) => (
            <li key={c.n} className="community-card bg-background card-pad transition-colors hover:bg-elevated">
              <span className="font-mono text-xs text-primary">{c.n}</span>
              <h3 className="mt-4 text-lg font-medium">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </li>
          ))}
        </ul>

        <div className="community-next mt-8 flex flex-col items-start gap-3">
          <JoinCta />
          <p className="text-sm text-plum">Continue on Telegram.</p>
        </div>
      </Reveal>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t section-y lg:py-36">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden />
      <div className="ambient left-1/2 top-1/2 h-[24rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-80" aria-hidden />
      <Reveal className={`${wrap} relative flex flex-col items-center text-center`}>
        <h2 className="max-w-3xl text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Ready to see the market from <span className="font-display-italic text-[1.1em] text-primary">another perspective?</span>
        </h2>
        <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
          Explore liquidity, understand market structure, and connect with a community focused on disciplined learning.
        </p>
        <JoinCta className="mt-10" />
      </Reveal>
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
