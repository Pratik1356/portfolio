import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolioData";

export default function Hero({ onNavigate }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: -10, duration: 0.5 })
        .from(
          ".hero-line",
          { opacity: 0, y: 24, duration: 0.7, stagger: 0.12 },
          "-=0.2"
        )
        .from(".hero-tagline", { opacity: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from(
          ".hero-cta",
          { opacity: 0, y: 12, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .from(".hero-panel", { opacity: 0, x: 30, duration: 0.8 }, "-=0.9")
        .from(
          ".hero-panel-line",
          { opacity: 0, x: 10, duration: 0.35, stagger: 0.08 },
          "-=0.5"
        );

      gsap.to(".hero-caret", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut",
      });

      gsap.to(".hero-blob", {
        y: 24,
        x: 12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-[100svh] flex items-center pt-10 pb-16 px-5 sm:px-10 overflow-hidden"
    >
      <div
        className="hero-blob absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-keyword), transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <p className="hero-eyebrow font-mono text-sm text-[var(--color-string)] mb-4">
            <span className="text-[var(--color-dim)]">// </span>
            portfolio.init()
          </p>

          <h1 className="font-mono font-semibold tracking-tight text-[clamp(2.2rem,6vw,4rem)] leading-[1.05]">
            <span className="hero-line block">
              <span className="text-[var(--color-keyword)]">const</span> dev
              <span className="text-[var(--color-muted)]"> = </span>
              <span className="text-[var(--color-string)]">"{profile.name}"</span>
              <span className="text-[var(--color-muted)]">;</span>
            </span>
            <span className="hero-line block text-[var(--color-muted)] text-[clamp(1.3rem,3.4vw,2rem)] mt-3">
              {profile.title}
              <span className="hero-caret inline-block w-[2px] h-[0.9em] bg-[var(--color-keyword)] ml-2 align-middle" />
            </span>
          </h1>

          <p className="hero-tagline mt-6 max-w-xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate("projects")}
              className="hero-cta group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-keyword)] text-[#0B0E14] font-mono text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
              className="hero-cta inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--color-line)] font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-keyword)] hover:text-[var(--color-keyword)]"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hero-cta inline-flex items-center gap-2 px-3 py-3 rounded-md text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-cta inline-flex items-center gap-2 px-3 py-3 rounded-md text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
          </div>
        </div>

        <div className="hero-panel font-mono text-[13px] rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-line)] text-[var(--color-dim)] text-xs">
            <span>profile.json</span>
            <Download size={13} />
          </div>
          <div className="p-5 space-y-1.5 leading-relaxed">
            <p className="hero-panel-line">{"{"}</p>
            <p className="hero-panel-line pl-4">
              <span className="text-[var(--color-tag)]">"role"</span>
              <span className="text-[var(--color-muted)]">: </span>
              <span className="text-[var(--color-string)]">"B.E. Computer Engineering"</span>,
            </p>
            <p className="hero-panel-line pl-4">
              <span className="text-[var(--color-tag)]">"college"</span>
              <span className="text-[var(--color-muted)]">: </span>
              <span className="text-[var(--color-string)]">"Rizvi College of Engineering"</span>,
            </p>
            <p className="hero-panel-line pl-4">
              <span className="text-[var(--color-tag)]">"based_in"</span>
              <span className="text-[var(--color-muted)]">: </span>
              <span className="text-[var(--color-string)]">"{profile.location}"</span>,
            </p>
            <p className="hero-panel-line pl-4">
              <span className="text-[var(--color-tag)]">"stack"</span>
              <span className="text-[var(--color-muted)]">: [</span>
            </p>
            <p className="hero-panel-line pl-8 text-[var(--color-string)]">"React", "Node.js", "Tailwind",</p>
            <p className="hero-panel-line pl-4">
              <span className="text-[var(--color-muted)]">],</span>
            </p>
            <p className="hero-panel-line pl-4">
              <span className="text-[var(--color-tag)]">"open_to_work"</span>
              <span className="text-[var(--color-muted)]">: </span>
              <span className="text-[var(--color-number)]">true</span>
            </p>
            <p className="hero-panel-line">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
