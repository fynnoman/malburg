"use client";

import { motion } from "framer-motion";

type Branch = {
  label: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  items: string[];
  variant?: "warm" | "dark";
};

type Props = {
  eyebrow: string;
  title: string;
  branches: [Branch, Branch];
};

export function SplitTwoBranches({ eyebrow, title, branches }: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mb-14 max-w-2xl">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="h-serif mt-4 text-[clamp(2rem,3.8vw,3rem)] text-walnut-500">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {branches.map((b, i) => (
            <motion.article
              key={b.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={[
                "relative overflow-hidden rounded-[2rem]",
                b.variant === "dark"
                  ? "bg-walnut-600 text-cream-50"
                  : "border border-walnut-500/10 bg-cream-100",
              ].join(" ")}
            >
              <div className="grid gap-0 md:grid-cols-1">
                <div className="relative h-72 w-full overflow-hidden md:h-96">
                  <img
                    src={b.image}
                    alt={b.alt}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className={
                      b.variant === "dark"
                        ? "absolute inset-0 bg-gradient-to-t from-walnut-700/50 to-transparent"
                        : "absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                    }
                    aria-hidden
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-cream-50/90 px-3 py-1 text-[0.7rem] uppercase tracking-[0.22em] text-walnut-500">
                    {b.label}
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h3
                    className={[
                      "h-serif text-[clamp(1.7rem,2.6vw,2.2rem)]",
                      b.variant === "dark" ? "text-cream-50" : "text-walnut-500",
                    ].join(" ")}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={[
                      "mt-4 text-[1rem] leading-relaxed",
                      b.variant === "dark" ? "text-cream-100/85" : "text-ink-soft",
                    ].join(" ")}
                  >
                    {b.body}
                  </p>
                  <ul className="mt-6 grid gap-2 text-[0.95rem]">
                    {b.items.map((it) => (
                      <li
                        key={it}
                        className={[
                          "flex items-baseline gap-3",
                          b.variant === "dark" ? "text-cream-100" : "text-ink",
                        ].join(" ")}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          className={b.variant === "dark" ? "text-cream-100/70" : "text-walnut-400"}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
