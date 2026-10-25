import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";
import { MarketChart } from "@/components/wb/MarketChart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion | Understand the Market Beyond Setups" },
      { name: "description", content: "Study market behavior with more context, look beyond memorized setups, and develop a more thoughtful way to interpret price with Wolf Billion." },
      { property: "og:title", content: "Wolf Billion | Understand the Market Beyond Setups" },
      { property: "og:description", content: "Study market behavior with more context, look beyond memorized setups, and develop a more thoughtful way to interpret price with Wolf Billion." },
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
              name: "Wolf Billion | Understand the Market Beyond Setups",
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
        <Community />
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

function Community() {
  return (
    <section className="relative overflow-hidden border-t bg-card section-y">
      <Reveal className={`${wrap} relative`}>
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          Let&apos;s look at the market <span className="font-display-italic text-primary">from a different angle.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Join Wolf Billion on Telegram, where we explore price behavior and share ideas about how to interpret the market.
        </p>

        <div className="community-next mt-8 flex flex-col items-start gap-3">
          <JoinCta />
          <p className="text-sm text-plum">Continue on Telegram.</p>
        </div>
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
          <p className="mt-6 text-sm text-plum">© {new Date().getFullYear()} Wolf Billion</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Trading involves substantial risk and potential financial loss. Content is for educational purposes only and does not constitute personalized investment advice. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
