type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  variant?: "warm" | "quiet";
};

export function SectionLabel({
  eyebrow,
  title,
  intro,
  align = "left",
  variant = "warm",
}: Props) {
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2
        className={[
          "h-serif mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)]",
          variant === "quiet" ? "text-ink" : "text-walnut-500",
        ].join(" ")}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
          {intro}
        </p>
      )}
    </div>
  );
}
