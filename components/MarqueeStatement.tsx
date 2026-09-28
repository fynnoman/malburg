"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  words: string[];
  image?: string;
  imageAlt?: string;
  tone?: "warm" | "dark";
};

export function MarqueeStatement({ words, image, imageAlt, tone = "warm" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className={[
        "relative overflow-hidden py-16 md:py-32",
        tone === "dark"
          ? "bg-walnut-700 text-cream-50"
          : "bg-cream-200 text-walnut-500",
      ].join(" ")}
    >
      {image && (
        <motion.img
          src={image}
          alt={imageAlt ?? ""}
          style={{ y: imgY }}
          className="absolute inset-0 -z-10 h-[130%] w-full object-cover opacity-25 will-change-transform"
          loading="lazy"
        />
      )}
      <motion.div
        style={{ x }}
        className="flex items-center gap-6 md:gap-10 whitespace-nowrap will-change-transform"
      >
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="h-serif italic text-[clamp(2.4rem,10vw,11rem)] leading-none"
          >
            {w}
            <span className="mx-4 md:mx-6 opacity-40">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
