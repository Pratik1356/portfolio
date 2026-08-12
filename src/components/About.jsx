import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutList } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-eyebrow", {
        opacity: 0,
        y: 12,
        duration: 0.5,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.from(".about-text", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".about-item", {
        x: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        scrollTrigger: { trigger: ".about-list", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative py-28 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <p className="about-eyebrow font-mono text-sm text-[var(--color-string)] mb-3">
          <span className="text-[var(--color-dim)]">// </span>about.jsx
        </p>
        <h2 className="font-mono text-3xl sm:text-4xl font-semibold mb-10">
          Who I <span className="text-[var(--color-keyword)]">am</span>
        </h2>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div className="about-text space-y-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            <p>
              I'm a{" "}
              <span className="text-[var(--color-text)] font-medium">
                B.E. Computer Engineering
              </span>{" "}
              student at Rizvi College of Engineering, Mumbai, with a strong
              interest in full stack development.
            </p>
            <p>
              I'm motivated and detail-oriented about building responsive,
              user-friendly web applications — and I keep expanding my
              technical range by shipping real projects rather than just
              reading about them.
            </p>
          </div>

          <div className="about-list rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6 font-mono text-sm">
            <p className="text-[var(--color-dim)] mb-3">// things I like building</p>
            <ul className="space-y-3">
              {aboutList.map((item) => (
                <li key={item} className="about-item flex items-center gap-3 text-[var(--color-text)]">
                  <span className="text-[var(--color-keyword)]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
