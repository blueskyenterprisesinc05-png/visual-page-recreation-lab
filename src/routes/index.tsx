import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { JoinCta } from "@/components/wb/JoinCta";

const description = "Learn to understand price movement and market behavior with Wolf Billion. Explore free trading education video lessons and join our Discord community.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Billion | Free Trading Education" },
      { name: "description", content: description },
      { property: "og:title", content: "Wolf Billion | Free Trading Education" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wolf Billion" },
      { property: "og:url", content: "https://wolfbillion.com/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Wolf Billion | Free Trading Education" },
      { name: "twitter:description", content: description },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", name: "Wolf Billion", description: "Free trading education focused on understanding price movement and market behavior.", url: "https://wolfbillion.com/", sameAs: ["https://www.tiktok.com/@wolfbillion_fx"] },
          { "@type": "WebSite", name: "Wolf Billion", description: "Free trading education focused on understanding price movement and market behavior.", url: "https://wolfbillion.com/" },
        ],
      }),
    }],
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
      if (entry?.isIntersecting) { el.classList.add("reveal-visible"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

function Index() {
  return <div className="min-h-screen">
    <div className="header-hero-atmosphere">
      <Nav />
      <main>
        <Hero />
        <About />
        <Path />
        <Courses />
        <Access />
        <Effort />
        <Join />
        <Faq />
      </main>
    </div>
    <Footer />
  </div>;
}

function Nav() {
  return <header className="hero-focus-rest site-header relative z-40" style={{ paddingTop: "env(safe-area-inset-top)" }}>
    <div className={`${wrap} nav-inner flex items-center justify-between gap-3`}>
      <a href="#top" className="brand-mark logo-brand" aria-label="Wolf Billion home"><img src="/wolf-billion-logo.png" alt="Wolf Billion" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#top">Home</a><a href="#about">About</a><a href="#courses">Courses</a><a href="#access">Benefits</a><a href="#faq">FAQ</a>
      </nav>
      <JoinCta size="sm" className="shrink-0" />
    </div>
  </header>;
}

function Hero() {
  return <section id="top" className="hero relative overflow-hidden">
    <div className={`${wrap} relative hero-inner`}><div className="hero-copy fade-up">
      <p className="eyebrow">WOLF BILLION</p>
      <h1 className="hero-title hero-focus-title hero-headline">Trading Education <span className="hero-headline-italic font-display-italic">Community</span></h1>
      <p className="hero-description">Video courses and step-by-step lessons designed to help you understand price movement, market behavior, and the concepts behind trading.</p>
      <div className="hero-next flex flex-col items-center"><JoinCta /><p className="microcopy">Free Access</p></div>
    </div></div>
  </section>;
}

function About() {
  return <section id="about" className="about-section content-section"><Reveal className={`${wrap} narrow-content`}>
    <p className="section-kicker">01 / THE COMMUNITY</p><h2>What Is Wolf Billion?</h2>
    <p>Wolf Billion is an online trading education community focused on helping traders develop a deeper understanding of price movement and market behavior.</p>
    <p>Members gain access to video courses, step-by-step lessons, market analysis, and educational guidance designed to help them understand what happens on the charts.</p>
    <p>Learn alongside like-minded traders, ask questions, exchange ideas, and develop your trading knowledge in a community built around learning and continuous improvement.</p>
    <blockquote>You've learned the strategies. <em>But do you understand the market?</em></blockquote><JoinCta />
  </Reveal></section>;
}

const pathItems = [
  ["Structured Learning", "Access video courses and step-by-step lessons covering trading fundamentals, price movement, and market behavior."],
  ["Educational Guidance", "Learn from experienced traders, explore market analysis, and get help understanding trading concepts."],
  ["A Community of Like-Minded Traders", "Connect with other traders, share ideas, ask questions, and learn alongside people working to improve their understanding of the market."],
];
function Path() { return <section id="path" className="content-section tinted-section"><Reveal className={wrap}><p className="section-kicker">02 / THE PATH</p><h2>A Step-by-Step Path</h2><p className="section-lede">Tools to Develop Your Trading Knowledge</p><div className="feature-grid">{pathItems.map(([title, text]) => <article className="feature-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><JoinCta /></Reveal></section>; }

const courseItems = [["Understanding Price Movement", "Learn how price moves and why certain areas of the chart matter."], ["Reading Market Behavior", "Understand what happens when price reaches or breaks previous highs and lows."], ["Understanding Trading Decisions", "Explore how traders react to price movements and what those reactions can tell us about the market."], ["Managing Risk", "Learn how to identify important price levels, understand uncertainty, and approach risk more carefully."]];
function Courses() { return <section id="courses" className="content-section"><Reveal className={wrap}><p className="section-kicker">03 / THE CURRICULUM</p><h2>Our Trading Courses</h2><p className="section-lede">Learn to Understand How Price Moves</p><p className="intro-copy">Explore video courses and step-by-step lessons designed to help you understand what happens on the charts and why.</p><div className="feature-grid four-grid">{courseItems.map(([title, text]) => <article className="feature-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><JoinCta /></Reveal></section>; }

const accessItems = [["Video Courses & Step-by-Step Lessons", "Follow structured lessons that break down trading concepts into simple, easy-to-understand explanations."], ["Market Analysis & Practical Examples", "Explore real chart examples to see how price moves and how the concepts you learn apply to the market."], ["Guidance & Support", "Ask questions, get help understanding difficult concepts, and continue learning with support from the community."], ["A Community of Traders", "Connect with like-minded traders, exchange ideas, share experiences, and learn together."]];
function Access() { return <section id="access" className="content-section tinted-section"><Reveal className={wrap}><p className="section-kicker">04 / YOUR ACCESS</p><h2>What You'll Get Access To</h2><p className="section-lede">Everything You Need to Start Learning</p><div className="feature-grid four-grid">{accessItems.map(([title, text]) => <article className="feature-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><JoinCta /><p className="microcopy">Free Access</p></Reveal></section>; }

function Effort() { return <section className="content-section editorial-section"><Reveal className={`${wrap} narrow-content`}><p className="section-kicker">05 / THE WORK</p><h2>Are You Prepared to Put in the Work?</h2><p>Learning to trade takes time, patience, and consistent effort.</p><p>At Wolf Billion, we make trading concepts easier to understand through structured video courses, practical examples, and a community where you can continue learning.</p><p>But understanding the market doesn't happen overnight. You need to be willing to study, practice what you learn, ask questions, and keep improving.</p><blockquote>The lessons are free. <em>The effort is yours.</em></blockquote><JoinCta /></Reveal></section>; }

function Join() { return <section id="join" className="join-section content-section"><Reveal className={`${wrap} join-panel`}><p className="section-kicker">06 / START HERE</p><h2>Start Your Trading Education Today</h2><p className="section-lede">Join Wolf Billion for Free</p><p>Get access to a trading education community designed to help you understand how price moves and develop your trading knowledge.</p><h3>Your Free Access Includes:</h3><ul><li>Video courses and step-by-step lessons</li><li>Market analysis and practical chart examples</li><li>Educational guidance and support</li><li>A community of like-minded traders</li></ul><JoinCta /><p className="microcopy">Free Access. No Membership Fee.</p></Reveal></section>; }

const faqs = [["What is Wolf Billion?", "Wolf Billion is a free trading education community where you can learn how price moves, understand what happens on the charts, and connect with other traders."], ["I know nothing about trading. Can I still join?", "Absolutely. Our video courses and step-by-step lessons are designed to explain trading concepts in a way beginners can understand. You don't need previous trading experience to start learning."], ["Is Wolf Billion really free?", "Yes. Joining Wolf Billion and accessing our educational community is completely free. There are no membership or subscription fees."], ["Will I get access to the courses when I join?", "Yes. Members can access the video lessons and educational materials available inside Wolf Billion."], ["I don't have much free time. Can I still join?", "Yes. You can learn at your own pace and work through the lessons whenever you have time. Consistency matters more than rushing through the material."], ["I live in another country. Can I join?", "Yes. Wolf Billion is an online community, so you can join from anywhere Discord is available."], ["How is Wolf Billion different from other trading communities?", "Our focus is on helping you understand what happens in the market rather than simply giving you trades to copy. We want you to learn how to read price movement and develop your own understanding of trading."], ["What if I don't understand something in a lesson?", "You can ask questions inside the community and get help understanding the concepts you're learning."], ["Do I need money to start learning?", "No. You don't need to deposit money into a trading account to access our lessons. Learning about trading and risking real money are two different things."], ["Do I need a computer to join?", "No. You can access the community using a compatible phone or computer with Discord. A larger screen may make studying charts easier, but it isn't required to join."], ["Will Wolf Billion provide trading signals?", "No. Wolf Billion focuses on trading education, market understanding, and helping members make their own informed decisions rather than providing trades to copy."], ["How long will it take me to learn trading?", "Everyone learns at a different pace. Your progress depends on the time you dedicate to studying, practicing, and understanding the lessons. There is no fixed timeline."], ["Will I become a profitable trader after joining?", "Profitability is not guaranteed. Trading involves financial risk, and losses are possible. Wolf Billion provides educational resources to help you develop your understanding, but your trading decisions and results remain your responsibility."], ["How do I join Wolf Billion?", "Click the Join Wolf Billion button to access our Discord community and begin exploring the available learning resources."]];
function Faq() { const [open, setOpen] = useState<number | null>(null); return <section id="faq" className="content-section faq-section"><div className={`${wrap} faq-wrap`}><p className="section-kicker">07 / QUESTIONS</p><h2>Frequently Asked Questions</h2><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{q}</span><span aria-hidden="true">{open === i ? "−" : "+"}</span></button>{open === i && <div className="faq-answer"><p>{a}</p></div>}</div>)}</div><JoinCta /></div></section>; }

function Footer() { return <footer className="site-footer" style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}><div className={`${wrap} footer-inner`}><div className="footer-identity"><p className="font-semibold tracking-tight">Wolf <span className="font-display-italic text-lg text-primary">Billion</span></p><p className="text-sm text-plum">© 2026 Wolf Billion</p><a className="footer-social-link text-sm text-plum" href="https://www.tiktok.com/@wolfbillion_fx" target="_blank" rel="noreferrer" aria-label="Wolf Billion on TikTok">TikTok</a></div><p className="footer-disclosure text-sm leading-relaxed text-muted-foreground">Trading involves substantial risk and potential financial loss. Content is for educational purposes only and does not constitute personalized investment advice. Past performance does not guarantee future results.</p></div></footer>; }
