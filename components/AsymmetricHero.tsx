"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type CollageImage = {
  src: string;
  alt: string;
  className?: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  cta?: ReactNode;
  images: [CollageImage, CollageImage, CollageImage];
};

export function AsymmetricHero({
  eyebrow,
  title,
  intro,
  cta,
  images,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-woodgrain pt-32 md:pt-44"
    >
      <div className="container-page grid gap-10 pb-16 md:grid-cols-12 md:gap-12 md:pb-32">
        <div className="md:col-span-7 md:pr-6">
          <div className="text-[0.7rem] md:text-[0.72rem] uppercase tracking-[0.28em] text-walnut-400">
            {eyebrow}
          </div>
          <h1 className="h-serif mt-5 text-[clamp(2.2rem,6vw,5.6rem)] text-walnut-500">
            {title}
          </h1>
          {intro && (
            <div className="mt-6 max-w-xl text-[1rem] md:text-[1.1rem] leading-relaxed text-ink-soft">
              {intro}
            </div>
          )}
          {cta && <div className="mt-8 md:mt-10">{cta}</div>}
        </div>

        <div className="md:col-span-5 relative">
          {/* Mobile: 3 stacked images, no overlaps */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <div className="overflow-hidden rounded-2xl border border-walnut-500/10">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-walnut-500/10">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl border border-walnut-500/10">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop: overlapping collage */}
          <div className="hidden md:grid md:grid-cols-6 md:gap-6">
            <motion.div
              style={{ y: y1 }}
              className="col-span-4 col-start-3 overflow-hidden rounded-2xl border border-walnut-500/10 will-change-transform"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className={
                  images[0].className ?? "aspect-[4/5] w-full object-cover"
                }
                loading="eager"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="col-span-4 -mt-16 overflow-hidden rounded-2xl border border-walnut-500/10 will-change-transform"
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                className={
                  images[1].className ?? "aspect-[4/3] w-full object-cover"
                }
                loading="lazy"
              />
            </motion.div>
            <motion.div
              style={{ y: y3 }}
              className="col-span-3 col-start-4 -mt-10 overflow-hidden rounded-2xl border border-walnut-500/10 will-change-transform"
            >
              <img
                src={images[2].src}
                alt={images[2].alt}
                className={
                  images[2].className ?? "aspect-square w-full object-cover"
                }
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
