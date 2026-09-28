"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/data";

type Props = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "warm" | "quiet";
};

export function BigFinalCTA({
  image,
  imageAlt,
  eyebrow = "Ihr Anliegen",
  title,
  body,
  tone = "warm",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.02]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[80vh] items-end overflow-hidden"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className={[
            "absolute inset-0",
            tone === "quiet"
              ? "bg-gradient-to-t from-ink/80 via-ink/50 to-ink/20"
              : "bg-gradient-to-t from-walnut-700/85 via-walnut-500/55 to-walnut-500/15",
          ].join(" ")}
          aria-hidden
        />
      </motion.div>

      <div className="container-page relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-cream-100/85">
            {eyebrow}
          </div>
          <h2 className="h-serif mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-cream-50">
            {title}
          </h2>
          {body && (
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-cream-100/90">
              {body}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-cream">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                <path d="M22 16v3a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 2-2h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2z" />
              </svg>
              {SITE.phone}
            </a>
            <Link href="/kontakt" className="btn-outline-light">
              Nachricht senden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
