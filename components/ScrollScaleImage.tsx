"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Props = {
  label: string;
  hint?: string;
  tone?: "wood" | "quiet";
  ratio?: "wide" | "landscape" | "portrait" | "square";
};

export function ScrollScaleImage({
  label,
  hint,
  tone = "wood",
  ratio = "wide",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.85, 1, 1, 0.9],
  );

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl">
      <motion.div
        style={{ scale, y, opacity }}
        className="will-change-transform"
      >
        <ImagePlaceholder
          label={label}
          hint={hint}
          tone={tone}
          ratio={ratio}
          className="rounded-3xl"
        />
      </motion.div>
    </div>
  );
}
