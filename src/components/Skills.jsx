import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const colorMap = {
  keyword: "text-[var(--color-keyword)] border-[var(--color-keyword)]/30",
  string: "text-[var(--color-string)] border-[var(--color-string)]/30",
  number: "text-[var(--color-number)] border-[var(--color-number)]/30",
  tag: "text-[var(--color-tag)] border-[var(--color-tag)]/30",
};

export default function Skills() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-eyebrow, .skills-heading", {
        opacity: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      gsap.from(".skill-group", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      });

      gsap.from(".skill-pill", {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.04,
        scrollTrigger: { trigger: ".skills-grid", start: "top 75%" },
      });

      // ambient float once revealed
      document.querySelectorAll(".skill-pill").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -6 : -10,
          duration: 2 + (i % 3) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.05,
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={root} className="relative py-28 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <p className="skills-eyebrow font-mono text-sm text-[var(--color-string)] mb-3">
          <span className="text-[var(--color-dim)]">// </span>skills.jsx
        </p>
        <h2 className="skills-heading font-mono text-3xl sm:text-4xl font-semibold mb-12">
          Tools I <span className="text-[var(--color-keyword)]">reach for</span>
        </h2>

        <div className="skills-grid grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-dim)] mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-pill font-mono text-[13px] px-3.5 py-2 rounded-md border bg-[var(--color-surface)] ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
