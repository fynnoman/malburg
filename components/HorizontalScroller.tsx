"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Card = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  cards: Card[];
};

export function HorizontalScroller({ eyebrow, title, intro, cards }: Props) {
  const wrapper = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const total = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;
      const padding = 32;
      setDistance(Math.max(0, total - viewport + padding));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cards.length]);

  return (
    <section
      ref={wrapper}
      className="relative bg-walnut-600 text-cream-50"
      style={{ height: `${Math.max(cards.length * 60, 300)}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-cream-100/70">
              {eyebrow}
            </div>
            <h2 className="h-serif mt-4 text-[clamp(1.8rem,4vw,3.4rem)] text-cream-50">
              {title}
            </h2>
            {intro && (
              <p className="mt-4 max-w-xl text-[0.95rem] md:text-[1rem] leading-relaxed text-cream-100/80">
                {intro}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 md:mt-14 min-w-0">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 md:gap-6 pl-5 md:pl-16 pr-5 md:pr-16 will-change-transform"
          >
            {cards.map((c) => (
              <article
                key={c.title}
                className="w-[78vw] max-w-[420px] shrink-0 md:w-[440px]"
              >
                <div className="overflow-hidden rounded-3xl border border-cream-50/10 bg-walnut-500/40">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="h-56 w-full object-cover md:h-80"
                    loading="lazy"
                  />
                  <div className="p-5 md:p-8">
                    <div className="text-[0.68rem] md:text-[0.7rem] uppercase tracking-[0.22em] text-cream-100/70">
                      {c.eyebrow}
                    </div>
                    <h3 className="h-serif mt-3 text-[1.35rem] md:text-[1.6rem] text-cream-50">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[0.92rem] md:text-[0.98rem] leading-relaxed text-cream-100/85">
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="container-page mt-6 md:mt-10 flex items-center gap-3 text-[0.68rem] md:text-[0.72rem] uppercase tracking-[0.24em] text-cream-100/60">
          <span>Scrollen</span>
          <span className="h-px flex-1 bg-cream-50/20" />
          <span>{cards.length} Bereiche</span>
        </div>
      </div>
    </section>
  );
}
