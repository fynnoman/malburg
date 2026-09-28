import { LeistungGroup } from "@/lib/data";
import { Reveal } from "./Reveal";

type Props = {
  group: LeistungGroup;
  variant?: "warm" | "quiet";
};

export function LeistungList({ group, variant = "warm" }: Props) {
  return (
    <div className="grid gap-x-16 gap-y-10 md:grid-cols-12">
      <div className="md:col-span-5">
        <div className="md:sticky md:top-28">
          <div className="eyebrow">{group.eyebrow}</div>
          <h3
            className={[
              "h-serif mt-4 text-[clamp(1.7rem,3vw,2.3rem)]",
              variant === "quiet" ? "text-ink" : "text-walnut-500",
            ].join(" ")}
          >
            {group.title}
          </h3>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
            {group.intro}
          </p>
        </div>
      </div>

      <ul className="md:col-span-7">
        {group.items.map((item, i) => (
          <Reveal key={item.title} as="li" delay={i * 0.05}>
            <div className="border-b border-walnut-500/10 py-7 first:pt-0 last:border-none">
              <div className="flex items-baseline justify-between gap-6">
                <h4 className="h-serif text-[1.35rem] text-ink">{item.title}</h4>
                <span className="text-[0.75rem] tabular-nums text-ink-muted">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
