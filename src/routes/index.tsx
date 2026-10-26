import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion | Free Trading Education" },
      {
        name: "description",
        content:
          "Learn to understand price movement and market behavior with Wolf Billion. Explore free trading education video lessons and join our Telegram community.",
      },
      { property: "og:title", content: "Wolf Billion | Free Trading Education" },
      {
        property: "og:description",
        content:
          "Learn to understand price movement and market behavior with Wolf Billion. Explore free trading education video lessons and join our Telegram community.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wolf Billion" },
      { property: "og:url", content: "https://wolfbillion.com/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Wolf Billion | Free Trading Education" },
      {
        name: "twitter:description",
        content:
          "Learn to understand price movement and market behavior with Wolf Billion. Explore free trading education video lessons and join our Telegram community.",
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
                "Free trading education focused on understanding price movement and market behavior.",
              url: "https://wolfbillion.com/",
              sameAs: ["https://www.tiktok.com/@wolfbillion_fx"],
            },
            {
              "@type": "WebSite",
              name: "Wolf Billion",
              description:
                "Free trading education focused on understanding price movement and market behavior.",
              url: "https://wolfbillion.com/",
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
      className="hero-focus-rest site-header relative z-40"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className={`${wrap} flex items-center justify-between gap-3`}>
        <a href="#top" className="brand-mark logo-brand" aria-label="Wolf Billion home">
          <img src="/wolf-billion-logo.png" alt="Wolf Billion" />
        </a>
        <JoinCta size="sm" className="shrink-0" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden">
      <div className={`${wrap} relative hero-inner`}>
        <div className="hero-copy fade-up">
          <h1 className="hero-title hero-focus-title hero-headline">
            <span>What if you’ve been making trading </span>
            <span className="hero-headline-italic font-display-italic text-primary">
              harder than it needs to be?
            </span>
          </h1>
          <p className="hero-focus-rest mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            You’ve been focusing on learning strategies instead of understanding what’s actually
            happening on the chart.
          </p>
          <div className="hero-focus-rest hero-next flex flex-col items-start">
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
    <section className="problem-section section-y">
      <Reveal className={`${wrap} max-w-3xl`}>
        <div>
          <h2 className="problem-heading text-3xl font-normal leading-[1.1] tracking-[-0.03em]">
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
    <section className="community-section relative overflow-hidden section-y">
      <Reveal className={`${wrap} relative`}>
        <h2 className="community-heading max-w-2xl text-3xl font-normal leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
          Let’s look at the market{" "}
          <span className="font-display-italic text-primary">from a different angle.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Join our free Telegram channel for video lessons exploring price movement and how to
          better understand what happens in the market.
        </p>

        <div className="community-next mt-8 flex flex-col items-start gap-3">
          <JoinCta />
          <p className="text-plum">Free access · Opens Telegram</p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="site-footer"
      style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className={`${wrap} footer-inner`}>
        <div className="footer-identity">
          <p className="font-semibold tracking-tight">
            Wolf <span className="font-display-italic text-lg text-primary">Billion</span>
          </p>
          <p className="text-sm text-plum">�� 2026 Wolf Billion</p>
          <a
            className="footer-social-link text-sm text-plum"
            href="https://www.tiktok.com/@wolfbillion_fx"
            target="_blank"
            rel="noreferrer"
            aria-label="Wolf Billion on TikTok"
          >
            TikTok
          </a>
        </div>
        <p className="footer-disclosure text-sm leading-relaxed text-muted-foreground">
          Trading involves substantial risk and potential financial loss. Content is for educational
          purposes only and does not constitute personalized investment advice. Past performance
          does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
