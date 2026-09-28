"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  steps: ProcessStep[];
  variant?: "warm" | "quiet";
};

export function StickyProcess({
  eyebrow,
  title,
  intro,
  steps,
  variant = "warm",
}: Props) {
  return (
    <section
      className={
        variant === "quiet"
          ? "tone-quiet py-20 md:py-32"
          : "bg-cream-100/60 py-20 md:py-32"
      }
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow">{eyebrow}</div>
          <h2
            className={[
              "h-serif mt-4 text-[clamp(1.9rem,3.8vw,3rem)]",
              variant === "quiet" ? "text-ink" : "text-walnut-500",
            ].join(" ")}
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-[0.98rem] md:text-[1.02rem] leading-relaxed text-ink-soft">
              {intro}
            </p>
          )}
        </div>

        {/* MOBILE: step + image pairs stacked */}
        <ol className="mt-12 space-y-12 md:hidden">
          {steps.map((s) => (
            <li key={s.step}>
              <MobileStep step={s} variant={variant} />
            </li>
          ))}
        </ol>

        {/* DESKTOP: sticky left column + scrolling right column */}
        <div className="mt-16 hidden gap-16 md:grid md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24 space-y-8">
              {steps.map((s, i) => (
                <StepCard key={s.step} index={i} step={s} variant={variant} total={steps.length} />
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-8">
              {steps.map((s, i) => (
                <StepImage key={s.step} index={i} step={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStep({
  step,
  variant,
}: {
  step: ProcessStep;
  variant: "warm" | "quiet";
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span
          className={[
            "h-serif inline-flex h-10 w-10 items-center justify-center rounded-full text-[0.9rem]",
            variant === "quiet"
              ? "bg-ink/8 text-ink"
              : "bg-walnut-500/8 text-walnut-500",
          ].join(" ")}
        >
          {step.step}
        </span>
        <h3
          className={[
            "h-serif text-[1.3rem]",
            variant === "quiet" ? "text-ink" : "text-walnut-500",
          ].join(" ")}
        >
          {step.title}
        </h3>
      </div>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
        {step.body}
      </p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-walnut-500/10">
        <img
          src={step.image}
          alt={step.imageAlt}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function StepCard({
  index,
  step,
  variant,
  total,
}: {
  index: number;
  step: ProcessStep;
  variant: "warm" | "quiet";
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "start 30%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x }} className="flex gap-4">
      <div className="flex flex-col items-center">
        <span
          className={[
            "h-serif inline-flex h-11 w-11 items-center justify-center rounded-full text-sm",
            variant === "quiet"
              ? "bg-ink/8 text-ink"
              : "bg-walnut-500/8 text-walnut-500",
          ].join(" ")}
        >
          {step.step}
        </span>
        {index < total - 1 && (
          <span className="mt-1 block h-16 w-px bg-walnut-500/15" aria-hidden />
        )}
      </div>
      <div className="pt-1">
        <h3
          className={[
            "h-serif text-[1.35rem]",
            variant === "quiet" ? "text-ink" : "text-walnut-500",
          ].join(" ")}
        >
          {step.title}
        </h3>
        <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

function StepImage({ index, step }: { index: number; step: ProcessStep }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "relative overflow-hidden rounded-3xl border border-walnut-500/10",
        index % 2 === 1 ? "md:translate-x-6" : "",
      ].join(" ")}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={step.image}
          alt={step.imageAlt}
          className="h-full w-full object-cover will-change-transform"
          style={{ y, scale }}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
