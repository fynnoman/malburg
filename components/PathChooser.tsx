"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

type Path = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  tone: "warm" | "quiet";
  bullets: string[];
};

const PATHS: Path[] = [
  {
    href: "/schreinerei",
    eyebrow: "Bereich 01",
    title: "Schreinerei",
    body: "Bau- und Möbelschreinerei aus einer Hand. Fenster, Türen, Innenausbau, Küchen und individueller Möbelbau in eigener Werkstatt.",
    image: IMG.workshopWide,
    imageAlt: "Schreiner-Werkstatt mit Werkbank",
    tone: "warm",
    bullets: [
      "Fenster, Haustüren, Innenausbau",
      "Küchen und Einbaumöbel nach Maß",
      "Reparatur und Restaurierung",
    ],
  },
  {
    href: "/bestattungen",
    eyebrow: "Bereich 02",
    title: "Bestattungen",
    body: "Wir begleiten Angehörige durch alle Schritte einer Bestattung. Ruhig, verlässlich, rund um die Uhr erreichbar. Mitglied der Innung.",
    image: IMG.calmForest,
    imageAlt: "Ruhiger Wald mit Lichteinfall",
    tone: "quiet",
    bullets: [
      "Erd-, Feuer-, Baum- und Seebestattung",
      "Übernahme aller Formalitäten",
      "Bestattungsvorsorge",
    ],
  },
];

export function PathChooser() {
  return (
    <section className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-2xl">
            <div className="eyebrow">Zwei Bereiche</div>
            <h2 className="h-serif mt-4 text-[clamp(2.1rem,4vw,3.2rem)] text-walnut-500">
              Wählen Sie, um was es geht.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Damit Sie ohne Umwege zum richtigen Ansprechpartner kommen, ist
              unsere Arbeit klar getrennt. Beide Bereiche werden von den
              gleichen Personen geführt, denen Sie im Ort begegnen.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PATHS.map((p, i) => (
            <motion.div
              key={p.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <Link
                href={p.href}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-walnut-500/10 bg-cream-50"
              >
                <div className="relative h-80 overflow-hidden md:h-[420px]">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 ${
                      p.tone === "warm"
                        ? "bg-gradient-to-t from-walnut-700/70 via-walnut-500/25 to-transparent"
                        : "bg-gradient-to-t from-ink/70 via-ink/25 to-transparent"
                    }`}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                    <div>
                      <div className="text-[0.72rem] uppercase tracking-[0.24em] text-cream-100">
                        {p.eyebrow}
                      </div>
                      <div className="h-serif mt-2 text-[clamp(2rem,3.4vw,2.8rem)] text-cream-50">
                        {p.title}
                      </div>
                    </div>
                    <span className="glass-dark grid h-12 w-12 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-10">
                  <p className="text-[1.02rem] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                  <ul className="grid gap-2 text-[0.95rem] text-ink">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-baseline gap-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          className="text-walnut-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
