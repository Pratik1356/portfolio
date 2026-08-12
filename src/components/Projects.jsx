import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects, profile } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-eyebrow, .projects-heading", {
        opacity: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 82%" },
          }
        );
        gsap.from(card.querySelectorAll(".project-badge"), {
          opacity: 0,
          y: 8,
          duration: 0.4,
          stagger: 0.06,
          scrollTrigger: { trigger: card, start: "top 75%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={root} className="relative py-28 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <p className="projects-eyebrow font-mono text-sm text-[var(--color-string)] mb-3">
          <span className="text-[var(--color-dim)]">// </span>projects.jsx
        </p>
        <h2 className="projects-heading font-mono text-3xl sm:text-4xl font-semibold mb-12">
          Things I've <span className="text-[var(--color-keyword)]">shipped</span>
        </h2>

        <div className="space-y-8">
          {projects.map((p) => (
            <article
              key={p.name}
              className="project-card rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-line)] font-mono text-xs text-[var(--color-dim)]">
                <span>{p.file}</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[var(--color-keyword)] transition-colors"
                >
                  <GithubIcon size={13} /> source
                </a>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-mono text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-number)]">{p.type}</span>
                </div>

                <p className="text-[var(--color-muted)] leading-relaxed mb-5 max-w-2xl">
                  {p.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-[var(--color-muted)]">
                      <span className="text-[var(--color-string)] mt-0.5">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="project-badge font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--color-line)] text-[var(--color-tag)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 font-mono text-sm text-[var(--color-keyword)] hover:underline underline-offset-4"
        >
          See more on GitHub <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
