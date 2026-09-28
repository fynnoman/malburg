"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Props = {
  label: string;
  hint?: string;
  tone?: "wood" | "quiet";
  ratio?: "wide" | "landscape" | "portrait" | "square";
  strength?: number;
};

export function ParallaxImage({
  label,
  hint,
  tone = "wood",
  ratio = "landscape",
  strength = 60,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}px`, `${strength}px`],
  );

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl">
      <motion.div style={{ y }} className="will-change-transform">
        <ImagePlaceholder
          label={label}
          hint={hint}
          tone={tone}
          ratio={ratio}
          className="rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
