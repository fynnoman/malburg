import { forwardRef } from "react";

type Props = {
  label: string;
  hint?: string;
  ratio?: "wide" | "portrait" | "square" | "landscape";
  tone?: "wood" | "quiet";
  className?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export const ImagePlaceholder = forwardRef<HTMLDivElement, Props>(
  function ImagePlaceholder(
    { label, hint, ratio = "landscape", tone = "wood", className = "" },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={[
          "relative w-full overflow-hidden rounded-2xl",
          "border border-walnut-500/10",
          ratioClass[ratio],
          tone === "wood"
            ? "bg-gradient-to-br from-cream-100 via-cream-200 to-walnut-100/40"
            : "bg-gradient-to-br from-cream-50 via-stone-150 to-cream-200",
          className,
        ].join(" ")}
        role="img"
        aria-label={label}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(92deg, rgba(122,90,60,0.08) 0px, rgba(122,90,60,0.08) 1px, transparent 1px, transparent 5px)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-7">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-walnut-500">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <path d="M21 16l-5-5-6 6-4-3-3 3" />
            </svg>
            {label}
          </div>
          {hint && (
            <p className="mt-2 max-w-md text-[0.78rem] text-ink-muted">
              {hint}
            </p>
          )}
        </div>
      </div>
    );
  },
);
