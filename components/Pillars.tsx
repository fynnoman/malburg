"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type Pillar = {
  title: string;
  body: string;
  icon: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Pillar[];
  variant?: "warm" | "quiet";
};

export function Pillars({
  eyebrow,
  title,
  intro,
  items,
  variant = "warm",
}: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow">{eyebrow}</div>
          <h2
            className={[
              "h-serif mt-4 text-[clamp(2rem,3.8vw,3rem)]",
              variant === "quiet" ? "text-ink" : "text-walnut-500",
            ].join(" ")}
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
              {intro}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex h-full flex-col rounded-3xl border border-walnut-500/10 bg-cream-50 p-8 transition-colors hover:bg-cream-100"
            >
              <span
                className={[
                  "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                  variant === "quiet"
                    ? "bg-ink/8 text-ink"
                    : "bg-walnut-500/8 text-walnut-500",
                ].join(" ")}
              >
                {p.icon}
              </span>
              <h3
                className={[
                  "h-serif mt-6 text-[1.4rem]",
                  variant === "quiet" ? "text-ink" : "text-walnut-500",
                ].join(" ")}
              >
                {p.title}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Icon = {
  handshake: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M2 12l4-4 5 5-2 2-1-1-2 2-4-4z" />
      <path d="M22 12l-4-4-5 5 2 2 1-1 2 2 4-4z" />
      <path d="M9 9l3-3 3 3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 12l8-7 8 7" />
      <path d="M6 10v10h12V10" />
    </svg>
  ),
  hammer: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M14 4l6 6-3 3-6-6z" />
      <path d="M9 9l-6 6 3 3 6-6" />
    </svg>
  ),
  ruler: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M3 8h18v8H3z" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M20 4c-8 0-14 5-14 12v4h4c7 0 12-6 12-14V4z" />
      <path d="M6 20l10-10" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M22 16v3a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 2-2h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2z" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
    </svg>
  ),
};
