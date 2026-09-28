"use client";

import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatCounter({
  value,
  suffix,
  label,
  variant = "warm",
}: {
  value: number;
  suffix?: string;
  label: string;
  variant?: "warm" | "quiet";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString("de-DE"));

  useEffect(() => {
    if (isInView) mv.set(value);
  }, [isInView, value, mv]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <motion.span
          className={[
            "h-serif text-[clamp(2.4rem,4vw,3.4rem)]",
            variant === "quiet" ? "text-ink" : "text-walnut-500",
          ].join(" ")}
        >
          {display}
        </motion.span>
        {suffix && (
          <span
            className={[
              "h-serif text-[clamp(1.5rem,2.5vw,2rem)]",
              variant === "quiet" ? "text-ink" : "text-walnut-500",
            ].join(" ")}
          >
            {suffix}
          </span>
        )}
      </div>
      <div className="mt-2 text-[0.85rem] uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </div>
    </div>
  );
}
