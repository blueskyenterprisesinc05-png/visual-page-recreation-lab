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
    el.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("reveal-visible");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
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
          <About />
          <Path />
          <Courses />
          <Commitment />
          <Faq />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const close = (restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!open) return;
    const nav = navRef.current;
    const focusable = () =>
      Array.from(
        nav?.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])') ?? [],
      );
    focusable()[0]?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className="hero-focus-rest site-header relative z-40"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {open && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close navigation menu"
          onClick={close}
        />
      )}
      <div className={`${wrap} nav-inner`}>
        <a
          href="#top"
          className="brand-mark logo-brand"
          aria-label="Wolf Billion home"
          onClick={close}
        >
          <img src="/wolf-billion-logo.png" alt="Wolf Billion" />
        </a>
        <button
          ref={triggerRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => (open ? close() : setOpen(true))}
        >
          <span className="sr-only">{open ? "Close" : "Open"} navigation menu</span>
          <span aria-hidden="true">{open ? "×" : "Menu"}</span>
        </button>
        <nav
          ref={navRef}
          id="primary-navigation"
          className={`site-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
          aria-hidden={open ? undefined : true}
        >
          <a href="#top" onClick={() => close(false)}>
            Home
          </a>
          <a href="#about" onClick={() => close(false)}>
            About
          </a>
          <a href="#benefits" onClick={() => close(false)}>
            Benefits
          </a>
          <a href="#courses" onClick={() => close(false)}>
            What You’ll Learn
          </a>
          <a href="#faq" onClick={() => close(false)}>
            FAQ
          </a>
          <span onClick={() => close(false)}>
            <JoinCta size="sm" />
          </span>
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
          <h1 className="hero-title hero-focus-title hero-headline hero-entrance-title">
            WOLF <span className="hero-headline-italic">BILLION</span>
          </h1>
          <p className="hero-focus-rest hero-description hero-entrance-description">
            Learn to understand price movement, market behavior, and risk through clear trading
            education.
          </p>
          <div className="hero-next hero-focus-rest hero-entrance-cta">
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
          <h2 className="problem-heading">
            You can learn a trading strategy.{" "}
            <span className="font-display-italic">But do you understand why price moves?</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Wolf Billion is a trading education community built to help you understand price
            movement and market behavior.
          </p>
          <p>
            Learn through step-by-step video courses, market analysis, and discussions with
            like-minded traders.
          </p>
          <JoinCta />
        </div>
      </Reveal>
    </section>
  );
}

const pathItems = [
  [
    "Structured Learning",
    "Move through a clear sequence from trading fundamentals to price movement and market behavior.",
  ],
  [
    "Educational Guidance",
    "Use market analysis and practical explanations to build a clearer understanding of trading concepts.",
  ],
  [
    "Community",
    "Discuss charts, ask questions, and exchange ideas with like-minded traders learning about the market.",
  ],
];

function Path() {
  return (
    <section id="benefits" className="community-section section-y">
      <Reveal className={`${wrap} path-content`}>
        <h2 className="community-heading">
          Tools to Develop <span className="font-display-italic">Your Trading Knowledge</span>
        </h2>
        <div className="path-grid">
          {pathItems.map(([title, body]) => (
            <article className="path-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <JoinCta />
      </Reveal>
    </section>
  );
}

const courseItems = [
  [
    "Understanding Price Movement",
    "Learn how price moves and why certain areas of the chart matter.",
  ],
  [
    "Reading Market Behavior",
    "Understand what happens when price reaches or breaks previous highs and lows.",
  ],
  [
    "Understanding Trading Decisions",
    "Explore how traders react to price movements and what those reactions can tell us about the market.",
  ],
  [
    "Managing Risk",
    "Explore uncertainty, position risk, and the decisions that shape a more measured trading approach.",
  ],
];

function Courses() {
  return (
    <section id="courses" className="courses-section section-y">
      <Reveal className={`${wrap} courses-content`}>
        <div className="courses-intro">
          <h2>
            Learn to Understand <span className="font-display-italic">How Price Moves</span>
          </h2>
          <p>
            Explore video courses and step-by-step lessons designed to help you understand what
            happens on the charts and why.
          </p>
        </div>
        <div className="course-grid">
          {courseItems.map(([title, body]) => (
            <article className="course-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <JoinCta />
      </Reveal>
    </section>
  );
}

function Commitment() {
  return (
    <section className="commitment-section section-y">
      <Reveal className={`${wrap} statement-content`}>
        <div className="stage-intro">
          <h2>
            The lessons are free. <span className="font-display-italic">The effort is yours.</span>
          </h2>
        </div>
        <div className="statement-copy">
          <p>
            Learning to trade takes time, patience, and consistent effort. Join Wolf Billion to
            learn through structured lessons, practical examples, and a community of traders.
          </p>
        </div>
        <div className="closing-cta">
          <JoinCta label="Join Wolf Billion" />
          <p className="stage-support">Free Discord community. No membership fee.</p>
        </div>
      </Reveal>
    </section>
  );
}

const faqItems = [
  [
    "What is Wolf Billion?",
    "Wolf Billion is a free trading education community where you can learn how price moves, understand what happens on the charts, and connect with other traders.",
  ],
  [
    "I know nothing about trading. Can I still join?",
    "Absolutely. Our video courses and step-by-step lessons are designed to explain trading concepts in a way beginners can understand. You don’t need previous trading experience to start learning.",
  ],
  [
    "Is Wolf Billion really free?",
    "Yes. Joining Wolf Billion and accessing our educational community is completely free. There are no membership or subscription fees.",
  ],
  [
    "Will I get access to the courses when I join?",
    "Yes. Members can access the video lessons and educational materials available inside Wolf Billion.",
  ],
  [
    "I don’t have much free time. Can I still join?",
    "Yes. You can learn at your own pace and work through the lessons whenever you have time. Consistency matters more than rushing through the material.",
  ],
  [
    "I live in another country. Can I join?",
    "Yes. Wolf Billion is an online community, so you can join from anywhere Discord is available.",
  ],
  [
    "How is Wolf Billion different from other trading communities?",
    "Our focus is on helping you understand what happens in the market rather than simply giving you trades to copy. We want you to learn how to read price movement and develop your own understanding of trading.",
  ],
  [
    "What if I don’t understand something in a lesson?",
    "You can ask questions inside the community and get help understanding the concepts you’re learning.",
  ],
  [
    "Do I need money to start learning?",
    "No. You don’t need to deposit money into a trading account to access our lessons. Learning about trading and risking real money are two different things.",
  ],
  [
    "Do I need a computer to join?",
    "No. You can access the community using a compatible phone or computer with Discord. A larger screen may make studying charts easier, but it isn’t required to join.",
  ],
  [
    "Will Wolf Billion provide trading signals?",
    "No. Wolf Billion focuses on trading education, market understanding, and helping members make their own informed decisions rather than providing trades to copy.",
  ],
  [
    "How long will it take me to learn trading?",
    "Everyone learns at a different pace. Your progress depends on the time you dedicate to studying, practicing, and understanding the lessons. There is no fixed timeline.",
  ],
  [
    "Will I become a profitable trader after joining?",
    "Profitability is not guaranteed. Trading involves financial risk, and losses are possible. Wolf Billion provides educational resources to help you develop your understanding, but your trading decisions and results remain your responsibility.",
  ],
  [
    "How do I join Wolf Billion?",
    "Click the Join Wolf Billion button to access our Discord community and begin exploring the available learning resources.",
  ],
];

const orderedFaqItems = [
  faqItems[1],
  faqItems[2],
  faqItems[3],
  faqItems[13],
  faqItems[10],
  faqItems[0],
  ...faqItems.slice(4, 10),
  faqItems[11],
  faqItems[12],
];

function Faq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const toggle = (index: number) =>
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  return (
    <section id="faq" className="faq-section section-y">
      <Reveal className={`${wrap} faq-content`}>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {orderedFaqItems.map(([question, answer], index) => {
            const open = openItems.has(index);
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;
            return (
              <div className="faq-item" key={question}>
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => toggle(index)}
                  >
                    {question}
                    <span aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!open}
                  className="faq-answer"
                  data-open={open}
                >
                  <div className="faq-answer-inner">
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="faq-cta">
          <JoinCta label="Join Wolf Billion for Free" />
          <p className="stage-support">Free Access. No Membership Fee.</p>
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
          <p className="text-sm text-plum">© 2026 Wolf Billion</p>
          <a
            className="footer-social-link text-sm text-plum"
            href="https://www.tiktok.com/@wolfbillion_fx"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Wolf Billion on TikTok"
          >
            Follow Wolf Billion on TikTok
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
