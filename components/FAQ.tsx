"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FAQItem[];
  variant?: "warm" | "quiet";
};

export function FAQ({
  eyebrow = "Häufige Fragen",
  title,
  intro,
  items,
  variant = "warm",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-page grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="eyebrow">{eyebrow}</div>
            <h2
              className={[
                "h-serif mt-4 text-[clamp(2rem,3.6vw,2.9rem)]",
                variant === "quiet" ? "text-ink" : "text-walnut-500",
              ].join(" ")}
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
                {intro}
              </p>
            )}
          </div>
        </div>

        <ul className="md:col-span-7">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={it.q} className="border-b border-walnut-500/12 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="h-serif text-[1.15rem] text-ink md:text-[1.25rem]">
                    {it.q}
                  </span>
                  <span
                    className={[
                      "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors",
                      variant === "quiet"
                        ? "border-ink/15 text-ink"
                        : "border-walnut-500/20 text-walnut-500",
                    ].join(" ")}
                  >
                    <motion.svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </motion.svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-[1rem] leading-relaxed text-ink-soft">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
