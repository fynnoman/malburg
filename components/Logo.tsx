import Link from "next/link";

type Props = {
  compact?: boolean;
  variant?: "dark" | "light";
};

export function Logo({ compact = false, variant = "dark" }: Props) {
  const nameColor = variant === "light" ? "text-cream-50" : "text-walnut-500";
  const subColor = variant === "light" ? "text-cream-100/80" : "text-ink-muted";

  return (
    <Link href="/" aria-label="Zur Startseite" className="group inline-flex items-center gap-3">
      <span
        aria-hidden
        className={[
          "grid h-9 w-9 place-items-center rounded-md shadow-glass",
          variant === "light"
            ? "bg-cream-50 text-walnut-500"
            : "bg-walnut-500 text-cream-50",
        ].join(" ")}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 20V8l8-4 8 4v12" />
          <path d="M4 20h16" />
          <path d="M10 20v-6h4v6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`h-serif text-[1.05rem] md:text-[1.15rem] ${nameColor}`}>
          Schreinerei Malburg
        </span>
        {!compact && (
          <span className={`mt-0.5 text-[0.66rem] md:text-[0.68rem] uppercase tracking-[0.22em] ${subColor}`}>
            Schiffweiler · seit 1930
          </span>
        )}
      </span>
    </Link>
  );
}
