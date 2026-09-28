"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: GalleryItem[];
  variant?: "warm" | "quiet";
};

export function StickyGallery({ eyebrow, title, intro, items, variant = "warm" }: Props) {
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

        <div className="mt-14 space-y-8">
          {items.map((item, i) => (
            <Row key={item.caption} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ item, index }: { item: GalleryItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.06]);

  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "grid items-center gap-8 md:grid-cols-12",
        reversed ? "md:[direction:rtl]" : "",
      ].join(" ")}
    >
      <div className="md:col-span-8 md:[direction:ltr]">
        <div className="relative overflow-hidden rounded-3xl border border-walnut-500/10">
          <div className="aspect-[16/10] overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover will-change-transform"
              style={{ y, scale }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-4 md:[direction:ltr]">
        <div className="text-[0.72rem] uppercase tracking-[0.24em] text-walnut-400">
          Referenz {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="h-serif mt-3 text-[1.5rem] text-ink">{item.caption}</h3>
      </div>
    </motion.div>
  );
}
