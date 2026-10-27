import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion | Free Trading Education" },
      {
        name: "description",
        content:
          "Wolf Billion is a free online trading education community with video courses, step-by-step lessons, and practical guidance for understanding price movement and market behavior.",
      },
      { property: "og:title", content: "Wolf Billion | Free Trading Education" },
      {
        property: "og:description",
        content:
          "A free online trading education community focused on understanding price movement and market behavior.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wolf Billion" },
      { property: "og:url", content: "https://wolfbillion.com/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Wolf Billion | Free Trading Education" },
      {
        name: "twitter:description",
        content:
          "A free online trading education community focused on understanding price movement and market behavior.",
      },
    ],
  }),
  component: Index,
});

const wrap = "container-page";

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        el.classList.add("reveal-visible");
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

function Index() {
  return (
    <div className="min-h-screen">
      <div className="header-hero-atmosphere">
        <Nav />
        <main>
          <Hero />
          <About />
          <Path />
          <Courses />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="hero-focus-rest site-header relative z-40" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className={`${wrap} nav-inner`}>
        <a href="#top" className="brand-mark logo-brand" aria-label="Wolf Billion home" onClick={close}>
          <img src="/wolf-billion-logo.png" alt="Wolf Billion" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Open"} navigation menu</span>
          <span aria-hidden="true">{open ? "×" : "Menu"}</span>
        </button>
        <nav id="primary-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#top" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#courses" onClick={close}>Courses</a>
          <JoinCta size="sm" />
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden">
      <div className={`${wrap} relative hero-inner`}>
        <div className="hero-copy fade-up">
          <p className="eyebrow">Trading Education Community</p>
          <h1 className="hero-title hero-focus-title hero-headline">WOLF <span className="hero-headline-italic">BILLION</span></h1>
          <p className="hero-focus-rest hero-description">Learn to understand price movement, market behavior, and risk through clear trading education.</p>
          <div className="hero-next hero-focus-rest">
            <JoinCta />
            <p className="text-sm text-plum">Free Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="problem-section section-y">
      <Reveal className={`${wrap} about-layout`}>
        <div>
          <p className="eyebrow">What Is Wolf Billion?</p>
          <h2 className="problem-heading">You’ve learned the strategies. <span className="font-display-italic">But do you understand the market?</span></h2>
        </div>
        <div className="about-copy">
          <p>Wolf Billion is a trading education community built to help you understand price movement and market behavior.</p>
          <p>Learn through step-by-step video courses, market analysis, and discussions with like-minded traders.</p>
          <JoinCta />
        </div>
      </Reveal>
    </section>
  );
}

const pathItems = [
  ["01", "Structured Learning", "Move through a clear sequence from trading fundamentals to price movement and market behavior."],
  ["02", "Educational Guidance", "Use market analysis and practical explanations to build a clearer understanding of trading concepts."],
  ["03", "Community", "Discuss charts, ask questions, and exchange ideas with like-minded traders learning about the market."],
];

function Path() {
  return (
    <section className="community-section section-y">
      <Reveal className={`${wrap} path-content`}>
        <p className="eyebrow">A Step-by-Step Path</p>
        <h2 className="community-heading">Tools to Develop <span className="font-display-italic">Your Trading Knowledge</span></h2>
        <div className="path-grid">
          {pathItems.map(([number, title, body]) => <article className="path-item" key={title}><span className="path-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <JoinCta />
      </Reveal>
    </section>
  );
}

const courseItems = [
  ["Understanding Price Movement", "Learn how price moves and why certain areas of the chart matter."],
  ["Reading Market Behavior", "Understand what happens when price reaches or breaks previous highs and lows."],
  ["Understanding Trading Decisions", "Explore how traders react to price movements and what those reactions can tell us about the market."],
  ["Managing Risk", "Explore uncertainty, position risk, and the decisions that shape a more measured trading approach."],
];

function Courses() {
  return (
    <section id="courses" className="courses-section section-y">
      <Reveal className={`${wrap} courses-content`}>
        <div className="courses-intro"><p className="eyebrow">What You’ll Learn</p><h2>Learn to Understand <span className="font-display-italic">How Price Moves</span></h2><p>Explore video courses and step-by-step lessons designed to help you understand what happens on the charts and why.</p></div>
        <div className="course-grid">{courseItems.map(([title, body]) => <article className="course-item" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        <JoinCta />
      </Reveal>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer" style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}><div className={`${wrap} footer-inner`}><div className="footer-identity"><p className="font-semibold tracking-tight">Wolf <span className="font-display-italic text-lg text-primary">Billion</span></p><p className="text-sm text-plum">© 2026 Wolf Billion</p><a className="footer-social-link text-sm text-plum" href="https://www.tiktok.com/@wolfbillion_fx" target="_blank" rel="noreferrer" aria-label="Follow Wolf Billion on TikTok">Follow Wolf Billion on TikTok</a></div><p className="footer-disclosure text-sm leading-relaxed text-muted-foreground">Trading involves substantial risk and potential financial loss. Content is for educational purposes only and does not constitute personalized investment advice. Past performance does not guarantee future results.</p></div></footer>;
}
