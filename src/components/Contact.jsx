import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-eyebrow", {
        opacity: 0,
        y: 12,
        duration: 0.5,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.from(".contact-heading span", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".contact-link", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: ".contact-links", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative py-32 px-5 sm:px-10 border-t border-[var(--color-line)]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="contact-eyebrow font-mono text-sm text-[var(--color-string)] mb-4">
          <span className="text-[var(--color-dim)]">// </span>contact.jsx
        </p>

        <h2 className="contact-heading font-mono font-semibold text-[clamp(2rem,6vw,3.6rem)] leading-[1.05] mb-8">
          <span className="block">Let's build</span>
          <span className="block">something <span className="text-[var(--color-keyword)]">together.</span></span>
        </h2>

        <p className="text-[var(--color-muted)] max-w-md mx-auto mb-10">
          Have an idea, an internship opening, or just want to talk frontend? My inbox is open.
        </p>

        <div className="contact-links flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="contact-link inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-keyword)] text-[#0B0E14] font-mono text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--color-line)] font-mono text-sm hover:border-[var(--color-keyword)] hover:text-[var(--color-keyword)] transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="contact-link inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--color-line)] font-mono text-sm hover:border-[var(--color-keyword)] hover:text-[var(--color-keyword)] transition-colors"
          >
            <GithubIcon size={16} />
            github.com/{profile.githubHandle}
          </a>
        </div>

        <p className="mt-20 font-mono text-xs text-[var(--color-dim)]">
          {profile.location} — built with React, Tailwind CSS &amp; GSAP.
        </p>
      </div>
    </section>
  );
}
