"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  overlay?: "warm" | "quiet" | "dark";
  align?: "left" | "center";
};

export function HeroImage({
  src,
  alt,
  children,
  overlay = "warm",
  align = "left",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const overlayClass = {
    warm: "bg-gradient-to-b from-walnut-700/40 via-walnut-500/30 to-cream-50",
    quiet: "bg-gradient-to-b from-ink/50 via-ink/25 to-cream-100",
    dark: "bg-gradient-to-b from-black/60 via-black/35 to-cream-50",
  }[overlay];

  return (
    <section
      ref={ref}
      className="relative isolate flex w-full items-end overflow-hidden -mt-24 min-h-[calc(92svh+96px)] md:min-h-[calc(100svh+96px)]"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className={[
          "container-page relative z-10 pb-16 pt-28 md:pb-24 md:pt-40",
          align === "center" ? "text-center" : "",
        ].join(" ")}
      >
        {children}
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-50/80"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scrollen</span>
        <span className="block h-8 w-px animate-pulse bg-cream-50/60" />
      </div>
    </section>
  );
}
