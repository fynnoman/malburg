"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Props = {
  imageLabel: string;
  imageHint?: string;
  tone?: "wood" | "quiet";
  children: ReactNode;
};

export function StickyBackgroundSection({
  imageLabel,
  imageHint,
  tone = "wood",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.86, 1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 0.55, 0.55, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative">
      <div className="pointer-events-none sticky top-0 -z-10 h-screen w-full overflow-hidden">
        <motion.div
          style={{ scale, opacity, y }}
          className="absolute inset-0 h-full w-full will-change-transform"
        >
          <ImagePlaceholder
            label={imageLabel}
            hint={imageHint}
            tone={tone}
            ratio="wide"
            className="h-full !aspect-auto rounded-none"
          />
        </motion.div>
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}
