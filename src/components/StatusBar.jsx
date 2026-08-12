import { GitBranch, Wifi } from "lucide-react";
import { sections, profile } from "../data/portfolioData";

export default function StatusBar({ active, line, col }) {
  const activeSection = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-7 bg-[var(--color-keyword)] text-[#0B0E14] font-mono text-[11px] flex items-center justify-between px-3 select-none">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 font-semibold">
          <GitBranch size={12} strokeWidth={2.5} />
          main
        </span>
        <span className="hidden sm:inline opacity-80">
          ~/{profile.githubHandle.toLowerCase()}/{activeSection.file}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden xs:inline">UTF-8</span>
        <span className="hidden xs:inline">LF</span>
        <span>JavaScript</span>
        <span>
          Ln {line}, Col {col}
        </span>
        <Wifi size={12} strokeWidth={2.5} />
      </div>
    </footer>
  );
}
