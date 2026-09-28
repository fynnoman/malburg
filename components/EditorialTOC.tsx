"use client";

import { useEffect, useState } from "react";

type Item = {
  id: string;
  label: string;
};

export function EditorialTOC({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [items]);

  return (
    <nav aria-label="Abschnitte" className="hidden md:block">
      <div className="text-[0.68rem] uppercase tracking-[0.24em] text-ink-muted">
        Inhalt
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((it, i) => {
          const isActive = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={[
                  "group flex items-baseline gap-4 py-1 text-[0.98rem] transition-colors",
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                ].join(" ")}
              >
                <span
                  className={[
                    "block h-px transition-all",
                    isActive ? "w-10 bg-ink" : "w-5 bg-ink-muted/60 group-hover:w-8",
                  ].join(" ")}
                />
                <span className="tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{it.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
