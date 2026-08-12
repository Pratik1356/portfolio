import { useEffect, useRef, useState } from "react";
import StatusBar from "./components/StatusBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { sections } from "./data/portfolioData";

function App() {
  const [active, setActive] = useState("hero");
  const [scrollPct, setScrollPct] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setScrollPct(max > 0 ? doc.scrollTop / max : 0);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const line = Math.max(1, Math.round(scrollPct * 258) + 1);
  const col = Math.max(1, ((line * 7) % 40) + 1);

  return (
    <div className="relative min-h-screen font-sans">
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <StatusBar active={active} line={line} col={col} />
    </div>
  );
}

export default App;
