import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-eyebrow, .edu-heading", {
        opacity: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      gsap.from(".edu-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "none",
        scrollTrigger: { trigger: ".edu-timeline", start: "top 75%", end: "bottom 90%", scrub: 0.5 },
      });

      gsap.from(".edu-item", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: { trigger: ".edu-timeline", start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={root} className="relative py-28 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <p className="edu-eyebrow font-mono text-sm text-[var(--color-string)] mb-3">
          <span className="text-[var(--color-dim)]">// </span>education.jsx
        </p>
        <h2 className="edu-heading font-mono text-3xl sm:text-4xl font-semibold mb-14">
          My <span className="text-[var(--color-keyword)]">timeline</span>
        </h2>

        <div className="edu-timeline relative pl-10">
          <div className="edu-line absolute left-[7px] top-1 bottom-1 w-[2px] bg-[var(--color-line)]" />

          <div className="space-y-12">
            {education.map((item) => (
              <div key={item.title} className="edu-item relative">
                <span className="absolute -left-10 top-1 w-4 h-4 rounded-full border-2 border-[var(--color-keyword)] bg-[var(--color-bg)]" />
                <p className="font-mono text-xs text-[var(--color-number)] mb-1.5">{item.year}</p>
                <h3 className="font-mono text-lg sm:text-xl font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-[var(--color-muted)] mt-1">{item.institute}</p>
                <p className="font-mono text-xs text-[var(--color-dim)] mt-1.5">
                  {item.meta} · {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
