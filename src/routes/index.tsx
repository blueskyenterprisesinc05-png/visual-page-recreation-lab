import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion" },
      {
        name: "description",
        content:
          "Study market behavior with more context, look beyond memorized setups, and develop a more thoughtful way to interpret price with Wolf Billion.",
      },
      { property: "og:title", content: "Wolf Billion | Understand the Market Beyond Setups" },
      {
        property: "og:description",
        content:
          "Study market behavior with more context, look beyond memorized setups, and develop a more thoughtful way to interpret price with Wolf Billion.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wolf Billion" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Wolf Billion | Understand the Market Beyond Setups" },
      {
        name: "twitter:description",
        content:
          "Study market behavior with more context, look beyond memorized setups, and develop a more thoughtful way to interpret price with Wolf Billion.",
      },
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
      { threshold: 0.1, rootMargin: "0px" },
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
      <div className="header-hero-atmosphere">
        <Nav />
        <main>
          <Hero />
          <Problem />
          <Community />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header
      className="hero-focus-rest site-header relative z-40 border-b"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className={`${wrap} flex items-center justify-between gap-3`}>
        <a href="#top" className="whitespace-nowrap text-[0.95rem] font-semibold tracking-tight">
          Wolf <span className="font-display-italic text-lg text-primary">Billion</span>
        </a>
        <JoinCta
          size="sm"
          className="shrink-0 max-[360px]:h-9 max-[360px]:px-3 max-[360px]:text-[0.8rem]"
        />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden">
      <div className={`${wrap} relative pb-[4.5rem] pt-10 md:pt-16 lg:pb-32 lg:pt-24`}>
        <div className="hero-copy fade-up">
          <h1 className="hero-title hero-focus-title max-w-[20ch] text-[clamp(1.85rem,8.6vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.04em] sm:max-w-none sm:text-5xl sm:tracking-[-0.035em] lg:text-[3.7rem]">
            <span>What if you’ve been making trading </span>
            <span className="relative z-10 block text-balance font-display-italic text-[1.14em] leading-[1] tracking-[-0.015em] text-primary sm:inline">
              {"\u00a0"}harder than it <span className="whitespace-nowrap">needs to be?</span>
            </span>
          </h1>
          <p className="hero-focus-rest mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            You’ve been focusing on learning strategies instead of understanding what’s actually
            happening on the chart.
          </p>
          <div className="hero-focus-rest hero-next mt-7 flex flex-col items-start gap-3">
            <p className="text-sm text-plum">Free trading education video lessons on Telegram.</p>
            <JoinCta />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="problem-section border-t section-y">
      <Reveal className={`${wrap} max-w-3xl`}>
        <div>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em]">
            You’ve learned the strategies.{" "}
            <span className="font-display-italic text-primary">
              But&nbsp;do you understand the market?
            </span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            You’ve watched the tutorials, studied different setups, and tried applying what you’ve
            learned. But when you’re on your own, looking at a chart, you’re still not sure what to
            look for.
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Learning another strategy won’t necessarily change that. Understanding the market
            behavior behind those setups is a different kind of learning.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Community() {
  return (
    <section className="community-section relative overflow-hidden border-t section-y">
      <Reveal className={`${wrap} relative`}>
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          Let&apos;s look at the market{" "}
          <span className="font-display-italic text-primary">from a different angle.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Join our free Telegram channel for video lessons exploring price movement and how to
          better understand what happens in the market.
        </p>

        <div className="community-next mt-8 flex flex-col items-start gap-3">
          <JoinCta />
          <p className="text-sm text-plum">Free access · Opens Telegram</p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="site-footer border-t py-14"
      style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className={`${wrap} grid gap-8 grid-cols-1 min-[810px]:grid-cols-[1fr_1.4fr]`}>
        <div>
          <p className="font-semibold tracking-tight">
            Wolf <span className="font-display-italic text-lg text-primary">Billion</span>
          </p>
          <p className="mt-6 text-sm text-plum">© 2026 Wolf Billion</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Trading involves substantial risk and potential financial loss. Content is for educational
          purposes only and does not constitute personalized investment advice. Past performance
          does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
