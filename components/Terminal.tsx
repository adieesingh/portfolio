"use client";

import { useEffect, useState } from "react";

type LogLine = {
  html: string;
  delay: number;
};

const logLines: LogLine[] = [
  { html: '<span class="text-ink-faint">$</span> systemctl status portfolio.service', delay: 0 },
  { html: '<span class="text-teal">✓</span> feat-system-rpa <span class="text-amber">/connectors</span> ..... running', delay: 300 },
  { html: '<span class="text-teal">✓</span> stockline-api <span class="text-amber">/express+prisma</span> ..... running', delay: 300 },
  { html: '<span class="text-teal">✓</span> stockline-web <span class="text-amber">/next14</span> ..... building', delay: 300 },
  { html: '<span class="text-teal">✓</span> shorturl-service <span class="text-amber">/azure-vm</span> ..... online', delay: 300 },
  { html: '<span class="text-teal">✓</span> 100xdevs-cohort3 <span class="text-amber">/docker+k8s</span> ..... in progress', delay: 300 },
  { html: '<span class="text-ink-faint">$</span> uptime: since apr 2025', delay: 400 },
];

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let cumulative = 200;
    const timers = logLines.map((line, i) => {
      cumulative += line.delay;
      return setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), cumulative);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-xl border border-line bg-bg-card overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-raised border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-danger" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal" />
        <span className="ml-2 font-mono text-[11.5px] text-ink-faint">status.log</span>
      </div>
      <div className="px-5 py-6 font-mono text-[13px] text-ink-dim min-h-[230px]">
        {logLines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className="mb-2.5 opacity-0 animate-fade-in"
            dangerouslySetInnerHTML={{ __html: line.html }}
          />
        ))}
        {visibleCount === logLines.length && (
          <span className="inline-block w-[7px] h-[14px] bg-teal align-middle animate-blink" />
        )}
      </div>
    </div>
  );
}
